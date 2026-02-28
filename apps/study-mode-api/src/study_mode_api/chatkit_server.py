"""ChatKit server for Study Mode - simple pattern from carfixer reference."""

from __future__ import annotations

# Load environment variables first, before any imports that need them
from pathlib import Path

from dotenv import load_dotenv

# Load from study-mode-api/.env (parent of src/)
_env_path = Path(__file__).parent.parent.parent / ".env"
load_dotenv(_env_path)

import logging  # noqa: E402
from collections.abc import AsyncIterator  # noqa: E402
from datetime import datetime  # noqa: E402

from agents import Runner, RunResultStreaming  # noqa: E402
from chatkit.agents import (  # noqa: E402
    AgentContext,
    simple_to_agent_input,
    stream_agent_response,
)
from chatkit.server import ChatKitServer  # noqa: E402
from chatkit.types import (  # noqa: E402
    AssistantMessageContent,
    AssistantMessageContentPartTextDelta,
    AssistantMessageItem,
    ThreadItemAddedEvent,
    ThreadItemDoneEvent,
    ThreadItemUpdatedEvent,
    ThreadMetadata,
    ThreadStreamEvent,
    UserMessageItem,
    UserMessageTextContent,
)
from fastapi import HTTPException  # noqa: E402

from .chatkit_store import (  # noqa: E402
    CachedPostgresStore,
    PostgresStore,
    RequestContext,
)
from .fte.answer_verification import detect_special_request  # noqa: E402
from .metering import create_metering_hooks  # noqa: E402
from .services.content_loader import load_lesson_content  # noqa: E402
from .services.lesson_chunker import get_lesson_chunks  # noqa: E402

# Constants for legacy code (kept for backwards compatibility, not used in agent-native mode)
MAX_ATTEMPTS = 3

# Enable chunked mode for faster responses
USE_CHUNKED_MODE = True

# Enable agent-native mode (v3) - reviewer's architecture
# When True: uses dynamic instructions + function tools + zero branching
# When False: uses v2 chunked mode with server-side state machine
USE_AGENT_NATIVE_TEACH = True

logger = logging.getLogger(__name__)
logger.info(f"[ChatKit] USE_AGENT_NATIVE_TEACH = {USE_AGENT_NATIVE_TEACH}")

# Fake ID constant from agents SDK (used by OpenAIChatCompletionsModel)
# When using Chat Completions API, the SDK returns this placeholder ID
# which causes duplicate key errors if not replaced with real IDs
FAKE_RESPONSES_ID = "__fake_id__"

# Agent configuration
MAX_RECENT_ITEMS = 30
TITLE_MAX_WORDS = 6
TITLE_MAX_CHARS = 50

# Trigger patterns that indicate auto-start (AI should speak first)
TRIGGER_PATTERNS = {
    "",  # Empty
    "\u200B",  # Zero-width space (uppercase)
    "\u200b",  # Zero-width space (lowercase - just in case)
    "👋",  # Wave emoji
    "Teach me!",
    "Teach me",
    "__START_TEACHING__",
}

# Characters to strip (including zero-width chars)
INVISIBLE_CHARS = "\u200B\u200b\uFEFF\u00A0\t\n\r "


def _is_trigger_message(text: str) -> bool:
    """Check if message is an auto-start trigger (should be hidden)."""
    # Strip all whitespace including invisible Unicode chars
    clean_text = text.strip(INVISIBLE_CHARS)

    logger.debug(f"[Trigger] raw='{text!r}', clean='{clean_text!r}', len={len(clean_text)}")

    # Empty after stripping = trigger
    if not clean_text:
        return True

    # Check exact matches
    if clean_text in TRIGGER_PATTERNS:
        return True

    # Check if contains trigger pattern (handles "__START_TEACHING__|title|name")
    if "__START_TEACHING__" in clean_text:
        return True

    return False


def _generate_thread_title(user_text: str) -> str:
    """Generate thread title from first few words of user message."""
    # Take first few words
    words = user_text.split()[:TITLE_MAX_WORDS]
    title = " ".join(words)

    # Truncate if too long
    if len(title) > TITLE_MAX_CHARS:
        title = title[:TITLE_MAX_CHARS - 3] + "..."

    # Add ellipsis if we truncated words
    if len(words) < len(user_text.split()):
        if not title.endswith("..."):
            title += "..."

    return title or "New Chat"


def _user_message_text(item: UserMessageItem) -> str:
    """Extract text from user message item."""
    parts: list[str] = []
    for part in item.content:
        if isinstance(part, UserMessageTextContent):
            parts.append(part.text)
    return " ".join(parts).strip()


async def _stream_with_real_ids(
    context: AgentContext,
    result: RunResultStreaming,
    thread_id: str,
    verification_result: str | None = None,
) -> AsyncIterator[ThreadStreamEvent]:
    """
    Simplified wrapper around stream_agent_response that:
    1. Replaces fake IDs with real ones
    2. Logs full response for debugging

    Removed complex marker buffering that may have caused truncation.
    """
    # Track ID mapping for this stream: fake_id -> real_id
    id_map: dict[str, str] = {}
    # Collect full response text for logging
    full_response_text = ""
    chunk_count = 0

    async for event in stream_agent_response(context, result):
        # Handle ThreadItemAddedEvent - replace fake ID
        if isinstance(event, ThreadItemAddedEvent):
            item = event.item
            if hasattr(item, "id") and item.id == FAKE_RESPONSES_ID:
                # Generate a real ID
                real_id = context.store.generate_item_id(
                    "message", context.thread, context.request_context
                )
                id_map[FAKE_RESPONSES_ID] = real_id
                logger.debug(f"[ChatKit] Replacing fake ID with: {real_id}")

                # Create new item with real ID
                if isinstance(item, AssistantMessageItem):
                    item = AssistantMessageItem(
                        id=real_id,
                        thread_id=item.thread_id,
                        created_at=item.created_at,
                        content=item.content,
                    )
                    event = ThreadItemAddedEvent(item=item)

        # Handle ThreadItemUpdatedEvent - pass through directly (no buffering)
        elif isinstance(event, ThreadItemUpdatedEvent):
            update = event.update
            if isinstance(update, AssistantMessageContentPartTextDelta):
                chunk_count += 1
                full_response_text += update.delta
                # Log every 10 chunks to track progress
                if chunk_count % 10 == 0:
                    total_chars = len(full_response_text)
                    logger.debug(f"[ChatKit] Chunk {chunk_count}, total: {total_chars}")

        # Handle ThreadItemDoneEvent - use mapped ID
        elif isinstance(event, ThreadItemDoneEvent):
            item = event.item
            if isinstance(item, AssistantMessageItem):
                # Get the real ID
                real_id = item.id
                if item.id == FAKE_RESPONSES_ID:
                    real_id = id_map.get(FAKE_RESPONSES_ID) or context.store.generate_item_id(
                        "message", context.thread, context.request_context
                    )
                    logger.debug(f"[ChatKit] Using real ID for done event: {real_id}")

                # Create new item with real ID (no other modifications)
                item = AssistantMessageItem(
                    id=real_id,
                    thread_id=item.thread_id,
                    created_at=item.created_at,
                    content=item.content,
                )
                event = ThreadItemDoneEvent(item=item)

            # Log final response stats
            resp_len = len(full_response_text)
            end_snippet = full_response_text[-50:] if resp_len > 50 else full_response_text
            logger.info(
                f"[ChatKit] Stream complete: {chunk_count} chunks, "
                f"{resp_len} chars, ends with: '...{end_snippet}'"
            )

        yield event


class StudyModeChatKitServer(ChatKitServer[RequestContext]):
    """
    ChatKit server for Study Mode.

    This server handles read-only operations (items.list, threads.list, etc.)
    automatically via the base ChatKit server, and only uses custom logic
    for agent-triggering operations (threads.create, threads.run).
    """

    def __init__(self, store: CachedPostgresStore | PostgresStore):
        """Initialize the ChatKit server with PostgreSQL store."""
        super().__init__(store)
        logger.info("[ChatKit] StudyModeChatKitServer initialized")

    async def handle_teach_mode_v3(
        self,
        thread: ThreadMetadata,
        user_text: str,
        lesson_path: str,
        user_name: str | None,
        context: RequestContext,
        is_first_message: bool,
    ) -> AsyncIterator[ThreadStreamEvent]:
        """
        Handle Teach Me mode with agent-native architecture (v3).

        Per reviewer: Zero branching - just: load → build context → run → save

        Args:
            thread: Thread metadata
            user_text: User's message text
            lesson_path: Path to lesson content
            user_name: User's display name
            context: Request context
            is_first_message: Whether this is the first message in thread
        """
        from agents import Runner

        from .fte.teach_agent import create_teach_agent
        from .fte.teach_context import TeachContext
        from .services.session_state import get_session_state, save_session_state

        logger.info(f"[ChatKit] AGENT-NATIVE MODE (v3) for thread {thread.id}")

        # 1. Load content and state
        content_data = await load_lesson_content(lesson_path)
        content = content_data.get("content", "")
        title = content_data.get("title", "Unknown")

        chunks = await get_lesson_chunks(lesson_path, content, title)
        state = await get_session_state(thread.id) or {}

        logger.info(
            f"[ChatKit] v3: title='{title}', chunks={len(chunks)}, "
            f"state={state}"
        )

        # 1.5a QUICK_START: Parse personalization from UI picker
        # Format: QUICK_START:path:level:profession (profession optional)
        if user_text.startswith("QUICK_START:"):
            parts = user_text.split(":")
            if len(parts) >= 3:
                qs_path = parts[1]  # work, passion, everyday, direct
                qs_level = parts[2]  # beginner, intermediate, advanced
                # Get profession from parts[3], or use sensible defaults
                qs_world = parts[3] if len(parts) > 3 and parts[3].strip() else (
                    "everyday life" if qs_path == "everyday" else
                    "technical concepts" if qs_path == "direct" else
                    "professional work"  # Better default for work/passion paths
                )

                # Pre-populate state - skip onboarding entirely
                state["current_phase"] = "phase_2"
                state["personalization_path"] = qs_path
                state["learner_type"] = qs_level
                state["student_world"] = qs_world
                state["student_role"] = qs_world
                state["ai_experience_asked"] = True
                state["ai_experience_answered"] = True
                # Mark that profile is already complete - DO NOT ask again
                state["profile_complete"] = True

                logger.info(
                    f"[ChatKit] v3: QUICK_START: path={qs_path}, "
                    f"level={qs_level}, world={qs_world}"
                )

                # Replace with start prompt - profile already complete
                user_text = (
                    "Start teaching directly. My profile is already set. "
                    "Do not ask about my profession or field."
                )

        # 1.5b Blended Teaching v7.1 - Image Strategy
        # - Phase 0: No image (warm greeting, ask about role/expertise)
        # - Phase 1: DALL-E personalized to their world (after we know who they are)
        # - Phase 2+: Unsplash concept images via tool calls
        open_image_url = ""
        current_phase = state.get("current_phase", "phase_0")

        # Generate DALL-E image only in Phase 1 (after we learned their world in Phase 0)
        if current_phase == "phase_1":
            try:
                import os

                from openai import AsyncOpenAI

                openai_client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

                # Personalize based on student profile from Phase 0
                student_world = state.get("student_world", "technology")
                student_role = state.get("student_role", "professional")

                dalle_prompt = (
                    f"Educational illustration for '{title}'. "
                    f"Scene in {student_world} industry, relevant to a {student_role}. "
                    f"Modern, clean, professional style showing AI/automation. "
                    f"Blue and purple color scheme. No text on image."
                )

                logger.info(
                    f"[ChatKit] v3: Phase 1 DALL-E: {title} for {student_role} in {student_world}"
                )

                response = await openai_client.images.generate(
                    model="dall-e-3",
                    prompt=dalle_prompt,
                    size="1792x1024",
                    quality="standard",
                    n=1,
                )

                open_image_url = response.data[0].url
                logger.info(f"[ChatKit] v3: DALL-E generated: {open_image_url[:60]}...")

            except Exception as e:
                logger.warning(f"[ChatKit] v3: DALL-E failed: {e}")

        # 2. Build context for Guided Learning v9 (simplified)
        from .fte.teach_agent import extract_key_concepts

        # Pre-extract key concepts from first chunk
        first_chunk = chunks[0] if chunks else None
        if isinstance(first_chunk, dict):
            chunk_content = first_chunk.get("content", "")
            chunk_title = first_chunk.get("title", "")
        elif first_chunk:
            chunk_content = first_chunk.content
            chunk_title = first_chunk.title
        else:
            chunk_content = ""
            chunk_title = ""
        key_concepts = state.get("key_concepts") or extract_key_concepts(chunk_content, chunk_title)

        teach_ctx = TeachContext(
            # Core lesson data
            lesson_title=title,
            chunks=[
                {"index": c["index"] if isinstance(c, dict) else c.index,
                 "title": c["title"] if isinstance(c, dict) else c.title,
                 "content": c["content"] if isinstance(c, dict) else c.content}
                for c in chunks
            ],
            current_chunk_index=state.get("concept_index", 0),
            total_chunks=len(chunks),
            is_first_message=is_first_message,
            thread_id=thread.id,
            user_name=user_name or "",

            # Student Profile
            current_phase=state.get("current_phase", "phase_0"),
            student_role=state.get("student_role", ""),
            student_world=state.get("student_world", ""),
            learner_type=state.get("learner_type", "intermediate"),

            # Personalization
            personalization_path=state.get("personalization_path", ""),
            ai_experience_asked=state.get("ai_experience_asked", False),
            ai_experience_answered=state.get("ai_experience_answered", False),

            # Teaching state (minimal)
            key_concepts=key_concepts,
            discovered_concepts=state.get("discovered_concepts", []),
            conversation_turns=state.get("conversation_turns", 0),
        )

        # 3. Create and run agent — no branching, no script selection
        agent = create_teach_agent()

        # Create agent context for streaming
        agent_context = AgentContext(
            thread=thread,
            store=self.store,
            request_context=context,
        )

        # Create metering hooks
        metering_hooks = create_metering_hooks()

        logger.info(f"[ChatKit] v3: Running agent for thread {thread.id}")

        try:
            result = Runner.run_streamed(
                agent,
                user_text,
                context=teach_ctx,
                hooks=metering_hooks,
            )

            # Stream response with image injection if available
            image_injected = False
            full_response_text = ""  # Collect for guardrail validation

            try:
                async for event in _stream_with_real_ids(agent_context, result, thread.id):
                    # Collect text for guardrail validation
                    if isinstance(event, ThreadItemUpdatedEvent):
                        update = event.update
                        if isinstance(update, AssistantMessageContentPartTextDelta):
                            full_response_text += update.delta

                    # Inject pending image at the start of first text content
                    if not image_injected and teach_ctx.open_image_url:
                        if isinstance(event, ThreadItemUpdatedEvent):
                            update = event.update
                            if hasattr(update, 'content') and update.content:
                                # Prepend image markdown to first text delta
                                img_url = teach_ctx.open_image_url
                                img_title = teach_ctx.lesson_title
                                image_md = f"![{img_title}]({img_url})\n\n"
                                for content_item in update.content:
                                    if hasattr(content_item, 'text') and content_item.text:
                                        content_item.text = image_md + content_item.text
                                        image_injected = True
                                        teach_ctx.open_image_url = ""  # Clear
                                        break
                    yield event

            except Exception as stream_err:
                # Log the actual error from Gemini for debugging
                error_str = str(stream_err)
                logger.error(f"[ChatKit] Stream error: {type(stream_err).__name__}: {error_str}")

                # Check for specific Gemini API errors
                if "400" in error_str or "INVALID_ARGUMENT" in error_str:
                    logger.error("[ChatKit] Gemini 400 error - possibly tool call format issue")

                # Re-raise to be handled by outer exception handler
                raise

            # Guardrails removed - simplified Guided Learning agent

            # Save updated teaching state after response (simplified v9)
            from .services.session_state import TeachSessionState
            new_state: TeachSessionState = {
                "concept_index": teach_ctx.current_chunk_index,
                "current_phase": teach_ctx.current_phase,
                "lesson_path": lesson_path,
                "status": "complete" if teach_ctx.is_complete else "teaching",
                # Student profile
                "student_role": teach_ctx.student_role,
                "student_world": teach_ctx.student_world,
                "learner_type": teach_ctx.learner_type,
                # Personalization
                "personalization_path": teach_ctx.personalization_path,
                "ai_experience_asked": teach_ctx.ai_experience_asked,
                "ai_experience_answered": teach_ctx.ai_experience_answered,
                # Teaching state
                "key_concepts": teach_ctx.key_concepts,
                "discovered_concepts": teach_ctx.discovered_concepts,
                "conversation_turns": teach_ctx.conversation_turns + 1,  # Increment!
            }
            await save_session_state(thread.id, new_state)

        except HTTPException as http_err:
            if http_err.status_code == 402:
                # Handle metering error gracefully
                detail: dict[str, int] = (
                    http_err.detail if isinstance(http_err.detail, dict) else {}
                )
                available_usd = detail.get("available_balance", 0) / 10000
                required_usd = detail.get("required", 0) / 10000
                error_text = (
                    f"You've used your free credits. "
                    f"Balance: ${available_usd:.4f}, needed: ${required_usd:.4f}. "
                    f"Please top up to continue."
                )
                error_message = AssistantMessageItem(
                    id=self.store.generate_item_id("message", thread, context),
                    thread_id=thread.id,
                    created_at=datetime.now(),
                    content=[AssistantMessageContent(text=error_text, annotations=[])],
                )
                yield ThreadItemDoneEvent(item=error_message)
                return
            raise
        except Exception:
            if metering_hooks:
                await metering_hooks.release_on_error(agent_context)
            raise

        # 4. Final state already saved in try block with incremented turns
        # No duplicate save needed - removed to prevent overwriting increment

        logger.info(
            f"[ChatKit] v3: Done. chunk={teach_ctx.current_chunk_index}, "
            f"phase={teach_ctx.current_phase}, turns={teach_ctx.conversation_turns}"
        )

    async def respond(
        self,
        thread: ThreadMetadata,
        input_user_message: UserMessageItem | None,
        context: RequestContext,
    ) -> AsyncIterator[ThreadStreamEvent]:
        """
        Generate response for user message using Study Mode agent.

        Args:
            thread: Thread metadata
            input_user_message: User's message (None for retry scenarios)
            context: Request context with user_id

        Yields:
            ThreadStreamEvent: Stream of chat events
        """
        # For read-only operations, base ChatKit server handles them
        if not input_user_message:
            logger.info(
                "[ChatKit] No user message - this is likely a read-only operation"
            )
            return

        try:
            # Extract user message
            user_text = _user_message_text(input_user_message)
            if not user_text:
                logger.warning("[ChatKit] Empty user message")
                return

            # ANSWER VERIFICATION (Script v2): Handle A/B answers and special requests
            # The verification result is passed to create_agent() to select the right prompt
            verification_result = None
            special_request = None

            # First check for special requests (hint, skip, option_confusion)
            special_request = detect_special_request(user_text)
            if special_request:
                logger.info(f"[ChatKit] Special request detected: {special_request}")

            # Get metadata from context
            lesson_path = context.metadata.get("lesson_path", "")
            user_name = context.metadata.get("user_name")
            selected_text = context.metadata.get("selected_text")

            # Get mode from ChatKit's composer.models picker (inference_options.model)
            # Default to "teach" if not set
            mode = "teach"
            if (
                input_user_message.inference_options
                and input_user_message.inference_options.model
                and input_user_message.inference_options.model in ("teach", "ask")
            ):
                mode = input_user_message.inference_options.model
            logger.info(f"[ChatKit] Mode: {mode}")

            logger.info(
                f"[ChatKit] Processing: user={context.user_id}, "
                f"lesson={lesson_path}, mode={mode}"
            )

            # Load lesson content
            content_data = await load_lesson_content(lesson_path)
            content = content_data.get("content", "")
            title = content_data.get("title", "Unknown")
            cached = content_data.get("cached", False)

            logger.info(
                f"[ChatKit] Content: title='{title}', "
                f"len={len(content)}, cached={cached}"
            )

            if not content:
                logger.warning(f"[ChatKit] No content for: {lesson_path}")

            # Get previous messages from thread for context
            previous_items = await self.store.load_thread_items(
                thread.id,
                after=None,
                limit=MAX_RECENT_ITEMS,
                order="desc",
                context=context,
            )
            items = list(reversed(previous_items.data))

            # Detect if this is the first message (new thread)
            # Check if there's already an AI response in the thread
            # Note: We can't just count items because trigger messages get deleted
            item_types = [type(item).__name__ for item in items]
            has_assistant_response = any(
                isinstance(item, AssistantMessageItem)
                or getattr(item, "type", "") == "assistant_message"
                for item in items
            )
            is_first_message = not has_assistant_response
            logger.info(
                f"[ChatKit] items={len(items)}, types={item_types}, "
                f"has_assistant={has_assistant_response}, is_first={is_first_message}"
            )

            # AGENT-NATIVE MODE (v3): Use new architecture for teach mode
            # Per reviewer: zero branching, agent has full autonomy
            logger.info(
                f"[ChatKit] MODE CHECK: USE_AGENT_NATIVE_TEACH="
                f"{USE_AGENT_NATIVE_TEACH}, mode='{mode}'"
            )
            if USE_AGENT_NATIVE_TEACH and mode == "teach":
                logger.info("[ChatKit] >>> ROUTING TO AGENT-NATIVE MODE (v3) <<<")

                # Set thread title for new threads
                if is_first_message:
                    if _is_trigger_message(user_text):
                        context.metadata["title"] = f"📚 {title}"
                    else:
                        context.metadata["title"] = _generate_thread_title(user_text)
                    await self.store.save_thread(thread, context)

                async for event in self.handle_teach_mode_v3(
                    thread=thread,
                    user_text=user_text,
                    lesson_path=lesson_path,
                    user_name=user_name,
                    context=context,
                    is_first_message=is_first_message,
                ):
                    yield event

                # Handle trigger message deletion for v3
                if _is_trigger_message(user_text) and input_user_message:
                    try:
                        await self.store.delete_thread_item(
                            thread.id, input_user_message.id, context
                        )
                        logger.info("[ChatKit] v3: Deleted trigger message")
                    except Exception as del_err:
                        logger.warning(f"[ChatKit] v3: Failed to delete trigger: {del_err}")
                return  # Exit early, v3 handles everything

            # ASK MODE: Use ask_agent with DeepSeek for direct answers
            # Store lesson data in metadata for ask_agent's dynamic instructions
            from .fte.ask_agent import ask_agent

            logger.info("[ChatKit] >>> ROUTING TO ASK MODE (DeepSeek) <<<")
            context.metadata["lesson_title"] = title
            context.metadata["lesson_content"] = content
            context.metadata["is_first_message"] = is_first_message
            context.metadata["selected_text"] = selected_text
            context.metadata["user_name"] = user_name

            agent = ask_agent

            # Set thread title from first user message (if new thread)
            if is_first_message and "title" not in context.metadata:
                # If message is a trigger (empty/short), use lesson title instead
                if _is_trigger_message(user_text):
                    context.metadata["title"] = f"📚 {title}"  # Use lesson title
                else:
                    context.metadata["title"] = _generate_thread_title(user_text)
                logger.info(f"[ChatKit] Generated title: {context.metadata['title']}")
                # Save thread again with the generated title (base class saved with default)
                await self.store.save_thread(thread, context)

            # Convert to agent input format
            input_items = await simple_to_agent_input(items)

            # INJECT VERIFICATION: Add explicit verification to last message
            # This ensures LLM sees "[CORRECT]" or "[INCORRECT]" and can't ignore it
            if verification_result and input_items and isinstance(input_items, list):
                logger.info(f"[ChatKit] Injecting verification '{verification_result}' into input")
                # Find the last user message and annotate it
                injected = False
                for i in range(len(input_items) - 1, -1, -1):
                    item = input_items[i]
                    item_type = type(item).__name__
                    has_role = hasattr(item, "role")
                    logger.debug(f"[ChatKit] Item {i}: type={item_type}, has_role={has_role}")
                    if hasattr(item, "role") and item.role == "user":
                        if verification_result == "correct":
                            # Prepend strong verification message
                            original = item.content if hasattr(item, "content") else str(item)
                            item.content = (
                                f"[SERVER VERIFIED: CORRECT ✓]\n"
                                f"Student answer: {original}\n"
                                f"[YOU MUST SAY 'Correct!' - DO NOT SAY 'Not quite']"
                            )
                            logger.info("[ChatKit] Injected CORRECT verification")
                            injected = True
                        elif verification_result == "incorrect":
                            original = item.content if hasattr(item, "content") else str(item)
                            item.content = (
                                f"[SERVER VERIFIED: WRONG ✗]\n"
                                f"Student answer: {original}\n"
                                f"[YOU MUST SAY 'Not quite.' - DO NOT SAY 'Correct']"
                            )
                            logger.info("[ChatKit] Injected INCORRECT verification")
                            injected = True
                        break
                if not injected:
                    logger.warning("[ChatKit] Failed to inject - no user message found")

            # Fallback: if input_items is empty (race condition), use current user message
            if not input_items:
                logger.warning(
                    f"[ChatKit] Empty input_items for thread {thread.id}, "
                    f"using current user message as fallback"
                )
                input_items = user_text  # Agent SDK accepts string input

            # Create agent context
            agent_context = AgentContext(
                thread=thread,
                store=self.store,
                request_context=context,
            )

            # Create metering hooks if metering is enabled
            metering_hooks = create_metering_hooks()

            # Run agent with streaming
            logger.info(f"[ChatKit] Running agent for thread {thread.id}")
            result = Runner.run_streamed(
                agent,
                input_items,
                context=agent_context,
                hooks=metering_hooks,
            )

            # Use wrapper that fixes fake IDs and handles answer verification
            # Wrap in try/except to release metering reservation on error
            try:
                async for event in _stream_with_real_ids(
                    agent_context, result, thread.id, verification_result
                ):
                    yield event
            except HTTPException as http_err:
                # Handle metering 402 specially - show user-friendly message
                if http_err.status_code == 402:
                    from typing import Any
                    detail: dict[str, Any] = (
                        http_err.detail if isinstance(http_err.detail, dict) else {}
                    )
                    # v5 format: error_code, balance, available_balance, required, is_expired
                    error_code = detail.get("error_code", "INSUFFICIENT_BALANCE")
                    balance = detail.get("balance", 0)
                    available_balance = detail.get("available_balance", 0)
                    required = detail.get("required", 0)
                    is_expired = detail.get("is_expired", False)

                    if is_expired:
                        error_text = (
                            "Your account has been inactive for over"
                            " a year and your credits have expired."
                            " Please contact support to reactivate."
                        )
                    elif error_code == "ACCOUNT_SUSPENDED":
                        error_text = (
                            "Your account has been suspended. "
                            "Please contact support for assistance."
                        )
                    else:
                        # Default: insufficient balance — show USD, not raw credits
                        available_usd = available_balance / 10000
                        required_usd = required / 10000
                        fmt = ".4f" if required_usd < 0.1 else ".2f"
                        avail = f"${available_usd:{fmt}}"
                        needed = f"${required_usd:{fmt}}"
                        error_text = (
                            f"You've used your free credits. "
                            f"Your balance is {avail} but this "
                            f"request needs {needed}. "
                            f"Please top up to continue learning."
                        )

                    logger.warning(
                        f"[ChatKit] Metering blocked: error_code={error_code}, "
                        f"balance={balance}, required={required}, is_expired={is_expired}"
                    )

                    error_message = AssistantMessageItem(
                        id=self.store.generate_item_id("message", thread, context),
                        thread_id=thread.id,
                        created_at=datetime.now(),
                        content=[
                            AssistantMessageContent(text=error_text, annotations=[])
                        ],
                    )
                    yield ThreadItemDoneEvent(item=error_message)
                    return  # Don't re-raise, we handled it gracefully
                else:
                    # Release reservation and re-raise other HTTP errors
                    if metering_hooks:
                        await metering_hooks.release_on_error(agent_context)
                    raise
            except Exception:
                # Release metering reservation on streaming error
                if metering_hooks:
                    await metering_hooks.release_on_error(agent_context)
                raise

            logger.info(f"[ChatKit] Response completed for thread {thread.id}")

            # DELETE TRIGGER MESSAGE: If this was an auto-start trigger,
            # remove it so only the AI greeting shows
            if _is_trigger_message(user_text) and input_user_message:
                try:
                    await self.store.delete_thread_item(
                        thread.id,
                        input_user_message.id,
                        context,
                    )
                    logger.info(
                        f"[ChatKit] Deleted trigger message {input_user_message.id} "
                        f"from thread {thread.id}"
                    )
                except Exception as del_err:
                    logger.warning(f"[ChatKit] Failed to delete trigger: {del_err}")

        except HTTPException:
            # Re-raise HTTP exceptions (e.g., 402 from metering) for proper response
            raise
        except Exception as e:
            logger.exception(f"[ChatKit] Error in respond(): {e}")

            # Send error message to client
            error_message = AssistantMessageItem(
                id=self.store.generate_item_id("message", thread, context),
                thread_id=thread.id,
                created_at=datetime.now(),
                content=[
                    AssistantMessageContent(
                        text=(
                            "I apologize, but I encountered an error. "
                            "Please try again."
                        ),
                        annotations=[],
                    )
                ],
            )
            yield ThreadItemDoneEvent(item=error_message)


def create_chatkit_server(
    store: CachedPostgresStore | PostgresStore,
) -> StudyModeChatKitServer:
    """Create a configured Study Mode ChatKit server instance."""
    return StudyModeChatKitServer(store)
