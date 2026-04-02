"""
Study Mode API - Simple ChatKit server following carfixer pattern.

Features:
- Single /chatkit POST endpoint (ChatKit handles internal routing)
- Redis caching for lesson content
- PostgreSQL persistence for chat threads
- JWT/JWKS authentication with dev mode bypass
"""

import json
import logging
import os

# Load .env into os.environ BEFORE importing settings or any SDK
# This is required because OpenAI Agents SDK reads from os.environ directly
from dotenv import load_dotenv

load_dotenv()

import time  # noqa: E402
import uuid  # noqa: E402
from datetime import datetime  # noqa: E402
from typing import Any  # noqa: E402

from chatkit.server import StreamingResult  # noqa: E402
from chatkit.types import ThreadMetadata  # noqa: E402
from fastapi import FastAPI, HTTPException, Request  # noqa: E402
from fastapi.middleware.cors import CORSMiddleware  # noqa: E402
from fastapi.responses import Response, StreamingResponse  # noqa: E402
from pydantic import BaseModel  # noqa: E402

from api_infra.auth import CurrentUser, verify_jwt  # noqa: E402
from api_infra.core.rate_limit import RateLimitConfig, RateLimiter  # noqa: E402

from .chatkit_store import RequestContext  # noqa: E402
from .config import settings  # noqa: E402
from .core.lifespan import lifespan  # noqa: E402

# Default organization ID for Panaversity
DEFAULT_ORGANIZATION_ID = "panaversity-default-org-id"

# Rate limiter: 20 messages per day per user
_chat_rate_limiter = RateLimiter(
    redis_key="chat",
    config=RateLimitConfig(times=20, hours=24),  # 20 per 24 hours
)

# Configure logging
logging.basicConfig(
    level=getattr(logging, settings.log_level.upper(), logging.INFO),
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

# Check critical env vars at startup
if not os.getenv("OPENAI_API_KEY"):
    logger.warning("[STARTUP] OPENAI_API_KEY not set - chat features will fail!")

# Create FastAPI app with lifespan
app = FastAPI(
    title="Study Mode API",
    description="AI-powered tutoring with ChatKit integration",
    version="5.1.0",
    lifespan=lifespan,
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    max_age=86400,
)


# =============================================================================
# Simple REST API endpoint for frontend compatibility
# =============================================================================


class SimpleChatMessage(BaseModel):
    """Message in conversation history."""

    role: str  # "user" or "assistant"
    content: str
    timestamp: str | None = None


class SimpleChatRequest(BaseModel):
    """Simple chat request matching frontend expectations."""

    lessonPath: str
    userMessage: str
    conversationHistory: list[SimpleChatMessage] = []
    mode: str = "teach"  # "teach" or "ask"
    learnerProfile: dict[str, Any] | None = None


class SimpleChatResponse(BaseModel):
    """Simple chat response matching frontend expectations."""

    assistantMessage: str
    metadata: dict[str, Any]


@app.post("/api/chat")
async def simple_chat_endpoint(request: Request, body: SimpleChatRequest):
    """
    Simple REST chat endpoint for frontend compatibility.

    This endpoint wraps the ChatKit protocol to provide a simple
    request/response pattern that the frontend expects.

    Input:
        - lessonPath: Path to the lesson
        - userMessage: User's message
        - conversationHistory: Previous messages
        - mode: "teach" or "ask"
        - learnerProfile: Optional learner profile

    Output:
        - assistantMessage: AI response
        - metadata: Response metadata
    """
    start_time = time.time()
    logger.info(f"[SimpleChatAPI] Request: lesson={body.lessonPath}, mode={body.mode}")

    # Get server from app state
    chatkit_server = getattr(request.app.state, "chatkit_server", None)
    if not chatkit_server:
        raise HTTPException(
            status_code=503,
            detail="ChatKit server not initialized. Check DATABASE_URL.",
        )

    # Use dev mode authentication
    user_id = request.headers.get("X-User-ID") or settings.dev_user_id
    user_name = request.headers.get("X-User-Name") or "Learner"

    # Create a virtual thread for this conversation
    thread_id = f"simple-{uuid.uuid4().hex[:16]}"
    thread = ThreadMetadata(
        id=thread_id,
        created_at=datetime.now(),
        metadata={},
    )

    # Build request context
    context = RequestContext(
        user_id=user_id,
        organization_id=DEFAULT_ORGANIZATION_ID,
        request_id=request.headers.get("X-Request-ID"),
        metadata={
            "lesson_path": body.lessonPath,
            "user_name": user_name,
        },
    )

    # Determine if this is the first message
    is_first = len(body.conversationHistory) == 0

    try:
        # Import here to avoid circular imports
        from .services.content_loader import load_lesson_content

        # Load lesson content
        content_data = await load_lesson_content(body.lessonPath)
        content = content_data.get("content", "")
        title = content_data.get("title", "Unknown")

        logger.info(f"[SimpleChatAPI] Content loaded: title='{title}', len={len(content)}")
        if not content:
            logger.warning(f"[SimpleChatAPI] No content for: {body.lessonPath}")

        # Collect streamed response
        full_response = ""

        if body.mode == "teach":
            # Use teach skill handler
            async for event in chatkit_server.handle_teach_skill(
                thread=thread,
                user_text=body.userMessage,
                lesson_path=body.lessonPath,
                user_name=user_name,
                context=context,
                content=content,
                title=title,
                items=None,  # No ChatKit items, using simple format
                is_first_message=is_first,
            ):
                # Extract text from stream events
                if hasattr(event, "item") and hasattr(event.item, "content"):
                    for part in event.item.content:
                        if hasattr(part, "text"):
                            full_response = part.text
                elif hasattr(event, "update") and hasattr(event.update, "delta"):
                    full_response += event.update.delta
        else:
            # For ask mode, use a simpler approach
            # Import and use ask_agent directly
            from agents import Runner

            from .fte.ask_agent import ask_agent

            context.metadata["lesson_title"] = title
            context.metadata["lesson_content"] = content
            context.metadata["is_first_message"] = is_first
            context.metadata["user_name"] = user_name

            result = await Runner.run(ask_agent, body.userMessage)
            full_response = result.final_output or "I'm sorry, I couldn't generate a response."

        processing_time = int((time.time() - start_time) * 1000)

        logger.info(
            f"[SimpleChatAPI] Response: {len(full_response)} chars, {processing_time}ms"
        )

        return SimpleChatResponse(
            assistantMessage=full_response,
            metadata={
                "model": "gemini-2.5-flash" if body.mode == "teach" else "deepseek",
                "tokensUsed": 0,  # Not tracked in simple mode
                "processingTimeMs": processing_time,
            },
        )

    except Exception as e:
        logger.exception(f"[SimpleChatAPI] Error: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Error processing request: {str(e)}",
        )


@app.post("/chatkit")
async def chatkit_endpoint(request: Request):
    """
    Main ChatKit endpoint for conversational interaction.

    ChatKit handles all internal routing:
    - threads.create, threads.run, threads.list
    - items.list, items.create
    - etc.

    Requires Authorization header with Bearer token (JWT verified via JWKS).
    In dev mode, falls back to X-User-ID header.
    """
    logger.debug("[CHATKIT ENDPOINT] Request received")

    # Get server from app state
    chatkit_server = getattr(request.app.state, "chatkit_server", None)
    if not chatkit_server:
        raise HTTPException(
            status_code=503,
            detail="ChatKit server not initialized. Check DATABASE_URL.",
        )

    # Authentication: Verify JWT token
    user: CurrentUser | None = None
    user_name: str | None = None

    if settings.dev_mode:
        # Dev mode: use X-User-ID header or fallback to dev user
        user_id = request.headers.get("X-User-ID") or request.query_params.get("user_id")
        if not user_id:
            user_id = settings.dev_user_id
        user_name = request.headers.get("X-User-Name") or request.query_params.get("user_name")
        logger.debug(f"[DEV] Using dev mode: user_id={user_id}")
    else:
        # Production: Require and verify JWT token (no fallbacks)
        auth_header = request.headers.get("Authorization")
        if not auth_header or not auth_header.startswith("Bearer "):
            raise HTTPException(
                status_code=401,
                detail="Missing Authorization header with Bearer token",
                headers={"WWW-Authenticate": "Bearer"},
            )

        token = auth_header[7:]  # Remove "Bearer " prefix

        # Validate JWT format (must have 3 parts: header.payload.signature)
        if token.count(".") != 2:
            raise HTTPException(
                status_code=401,
                detail="Invalid token format - JWT required",
                headers={"WWW-Authenticate": "Bearer"},
            )

        # Verify JWT signature using JWKS
        payload = await verify_jwt(token)
        user = CurrentUser(payload)
        user_id = user.id
        user_name = user.name or user.email
        logger.info(f"[AUTH] JWT verified: user_id={user_id}")

    # Extract organization ID from header (optional - for multi-tenant)
    # Default to panaversity-default-org-id if not provided
    organization_id = (
        request.headers.get("X-Organization-ID")
        or request.query_params.get("organization_id")
        or DEFAULT_ORGANIZATION_ID
    )

    try:
        # Get request body
        payload = await request.body()

        # Extract metadata from ChatKit request payload
        metadata = {}
        operation = None
        try:
            payload_dict = json.loads(payload)
            operation = payload_dict.get("type", "")  # ChatKit uses "type", not "method"
            logger.info(f"[ChatKit] Operation: {operation}")
            if "params" in payload_dict and "input" in payload_dict["params"]:
                metadata = payload_dict["params"]["input"].get("metadata", {})
        except (json.JSONDecodeError, KeyError) as e:
            logger.warning(f"[ChatKit] Failed to parse payload: {e}")

        # Rate limit check for message-sending operations (20/day)
        # Only rate limit actual chat messages, not list/get operations
        rate_limited_ops = ["threads.run", "threads.add_user_message", "threads.create"]
        if operation in rate_limited_ops:
            logger.info(f"[RateLimit] Checking: user={user_id}, op={operation}")
            rate_info = await _chat_rate_limiter._check_rate_limit(request)
            logger.info(
                f"[RateLimit] user={user_id}, current={rate_info.get('current')}, "
                f"limit={rate_info.get('limit')}, remaining={rate_info.get('remaining')}"
            )
            if rate_info["remaining"] < 0:
                raise HTTPException(
                    status_code=429,
                    detail={
                        "error": "Daily message limit reached",
                        "limit": rate_info["limit"],
                        "reset_after_ms": rate_info["reset_after"],
                        "message": "You've reached your daily limit of 20 messages. "
                        "Try again tomorrow!",
                    },
                )

        # Add query params to metadata (for lesson_path, user_name, etc.)
        # Mode is handled per-message via ChatKit's inference_options.model
        metadata.update({
            "lesson_path": request.query_params.get("lesson_path", ""),
            "user_name": user_name
            or request.headers.get("X-User-Name")
            or request.query_params.get("user_name"),
            "selected_text": request.query_params.get("selected_text"),
        })

        # Store auth header for downstream services (metering API)
        auth_header = request.headers.get("Authorization")
        if auth_header:
            metadata["auth_token"] = auth_header

        logger.info(
            f"[ChatKit] user={user_id}, lesson={metadata.get('lesson_path')}"
        )

        # Create request context
        context = RequestContext(
            user_id=user_id,
            organization_id=organization_id,
            request_id=request.headers.get("X-Request-ID"),
            metadata=metadata,
        )

        # Process through ChatKit server
        result = await chatkit_server.process(payload, context)

        # Return appropriate response type
        if isinstance(result, StreamingResult):
            return StreamingResponse(
                result,
                media_type="text/event-stream",
                headers={
                    "Cache-Control": "no-cache",
                    "Connection": "keep-alive",
                    "X-Accel-Buffering": "no",
                },
            )
        else:
            return Response(
                content=result.json,
                media_type="application/json",
            )

    except HTTPException:
        raise
    except Exception as e:
        logger.exception(f"[ChatKit] Error: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Error processing request: {str(e)}",
        )


@app.get("/health")
async def health_check():
    """Lightweight health check — no DB or Redis hits.

    Cloud Run uses TCP probes for liveness. This endpoint exists
    for manual checks and uptime monitors only.
    """
    return {"status": "healthy", "version": "5.1.0"}


@app.post("/admin/invalidate-cache")
async def invalidate_cache(
    request: Request,
    paths: list[str] | None = None,
):
    """
    Invalidate content cache for specific paths or all content.

    Called by GitHub Action on push to main branch.
    Requires ADMIN_SECRET header for authentication.

    Args:
        paths: Optional list of lesson paths to invalidate.
               If None, invalidates all content cache.
    """
    from api_infra.core.redis_cache import get_redis

    # Verify admin secret
    admin_secret = os.getenv("ADMIN_SECRET", "")
    provided_secret = request.headers.get("X-Admin-Secret", "")

    if not admin_secret or provided_secret != admin_secret:
        raise HTTPException(status_code=403, detail="Invalid admin secret")

    redis_client = get_redis()
    if not redis_client:
        return {"status": "skipped", "reason": "Redis not available"}

    try:
        invalidated = []
        if paths:
            # Invalidate specific paths
            for path in paths:
                key = f"content_loader.load_lesson_content:{path}:"
                await redis_client.delete(key)
                invalidated.append(path)
                logger.info(f"[Cache] Invalidated: {path}")
        else:
            # Invalidate all content cache (pattern scan)
            cursor = 0
            while True:
                cursor, keys = await redis_client.scan(
                    cursor, match="content_loader.load_lesson_content:*", count=100
                )
                if keys:
                    await redis_client.delete(*keys)
                    # Keys are already strings when decode_responses=True
                    invalidated.extend([k if isinstance(k, str) else k.decode() for k in keys])
                if cursor == 0:
                    break
            logger.info(f"[Cache] Invalidated {len(invalidated)} keys")

        return {
            "status": "ok",
            "invalidated_count": len(invalidated),
            "paths": invalidated[:20],  # Return first 20 for logging
        }
    except Exception as e:
        logger.error(f"[Cache] Invalidation failed: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/")
async def root():
    """Root endpoint with API information."""
    return {
        "name": "Study Mode API",
        "version": "5.1.0",
        "endpoints": {
            "chatkit": "POST /chatkit (requires X-User-ID header)",
            "health": "GET /health",
            "admin": "POST /admin/invalidate-cache (requires X-Admin-Secret)",
        },
    }


if __name__ == "__main__":
    import uvicorn

    port = settings.port
    logger.info("\n=== Study Mode API v5.1 ===")
    logger.info(f"Dev Mode: {settings.dev_mode}")
    logger.info(f"ChatKit: http://localhost:{port}/chatkit")
    logger.info(f"Health:  http://localhost:{port}/health\n")

    uvicorn.run(app, host="0.0.0.0", port=port)
