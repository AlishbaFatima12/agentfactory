"""ChatKit server for Study Mode - simple pattern from carfixer reference."""

from __future__ import annotations

import asyncio
import logging
from collections.abc import AsyncIterator
from datetime import datetime
from typing import Any

from agents import Runner, RunResultStreaming
from chatkit.agents import (
    AgentContext,
    simple_to_agent_input,
    stream_agent_response,
)
from chatkit.server import ChatKitServer
from chatkit.types import (
    AssistantMessageContent,
    AssistantMessageContentPartTextDelta,
    AssistantMessageItem,
    InferenceOptions,
    ThreadItemAddedEvent,
    ThreadItemDoneEvent,
    ThreadItemUpdatedEvent,
    ThreadMetadata,
    ThreadStreamEvent,
    UserMessageItem,
    UserMessageTextContent,
)
from fastapi import HTTPException

from .chatkit_store import (
    CachedPostgresStore,
    PostgresStore,
    RequestContext,
)
from .metering import create_metering_hooks
from .services.content_loader import load_lesson_content

logger = logging.getLogger(__name__)

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


def _format_402_error_text(detail: dict) -> str:
    """Format user-friendly error message for 402 metering errors.

    Handles: is_expired, ACCOUNT_SUSPENDED, and insufficient balance cases.

    Args:
        detail: Error detail dict from HTTPException

    Returns:
        User-friendly error message
    """
    error_code = detail.get("error_code", "INSUFFICIENT_BALANCE")
    available_balance = detail.get("available_balance", 0)
    required = detail.get("required", 0)
    is_expired = detail.get("is_expired", False)

    if is_expired:
        return (
            "Your account has been inactive for over a year and your credits "
            "have expired. Please contact support to reactivate."
        )
    elif error_code == "ACCOUNT_SUSPENDED":
        return (
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
        return (
            f"You've used your free credits. "
            f"Your balance is {avail} but this request needs {needed}. "
            f"Please top up to continue learning."
        )


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


def _get_last_item_text(items: list[Any]) -> str:
    """Extract text from the last item in a conversation history.

    Used to check if current user message is already in the history
    (race condition where message may not be persisted yet).

    Args:
        items: List of conversation items (UserMessageItem, AssistantMessageItem)

    Returns:
        Text content of last item, or empty string if none/invalid
    """
    if not items:
        return ""

    last_item = items[-1]
    if not hasattr(last_item, "content"):
        return ""

    content = last_item.content
    if not content:
        return ""

    first_part = content[0]
    if hasattr(first_part, "text"):
        return first_part.text

    return ""


async def _stream_with_real_ids(
    context: AgentContext,
    result: RunResultStreaming,
    thread_id: str,
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

    # Log if stream ended without any chunks (empty response)
    if chunk_count == 0:
        logger.warning(f"[ChatKit] Stream ended with 0 chunks for thread {thread_id}")


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

    async def handle_teach_skill(
        self,
        thread: ThreadMetadata,
        user_text: str,
        lesson_path: str,
        user_name: str | None,
        context: RequestContext,
        content: str = "",
        title: str = "",
        items: list[Any] | None = None,
        is_first_message: bool = True,
    ) -> AsyncIterator[ThreadStreamEvent]:
        """
        Simplified skill-based teaching (v4).

        Per reviewer: Agent as a tool with three inputs:
        1. Learner profile (from API)
        2. Skill prompt (teaching instructions)
        3. Lesson content

        Now also receives conversation history (items) to maintain context.
        """
        from .fte.teach_skill import (
            TeachingContext,
            create_teaching_agent,
            get_learner_profile,
        )

        logger.info(f"[ChatKit] SKILL-BASED MODE (v4) for thread {thread.id}")

        # 1. Load content if not provided
        if not content or not title:
            content_data = await load_lesson_content(lesson_path)
            content = content or content_data.get("content", "")
            title = title or content_data.get("title", "Unknown")

        logger.info(f"[ChatKit] v4: title='{title}', content_len={len(content)}")

        # 2. Get learner profile from API (falls back to mock if not found)
        # Uses JWT token to identify user via /api/v1/profiles/me endpoint
        auth_token = context.metadata.get("auth_token")
        profile = await get_learner_profile(
            user_name=user_name,
            auth_token=auth_token,
        )
        logger.info(f"[ChatKit] v4: Profile for {profile.name}, AI: {profile.ai_fluency_level}")

        # 3. Build teaching context (simple!)
        teaching_ctx = TeachingContext(
            profile=profile,
            lesson_title=title,
            lesson_content=content,
            thread_id=thread.id,
            is_first_message=is_first_message,
        )

        # 4. Create agent and run - that's it!
        agent = create_teaching_agent(profile)

        # Create agent context for streaming
        agent_context = AgentContext(
            thread=thread,
            store=self.store,
            request_context=context,
        )

        # Create metering hooks
        metering_hooks = create_metering_hooks()

        logger.info(f"[ChatKit] v4: Running skill for thread {thread.id}, first={is_first_message}")

        # Use conversation history if available, otherwise fall back to current message
        if items:
            input_items = await simple_to_agent_input(items)
            logger.debug(f"[ChatKit] v4: Using conversation history ({len(items)} items)")
        else:
            input_items = user_text
            logger.debug("[ChatKit] v4: No history, using current message only")

        try:
            result = Runner.run_streamed(  # type: ignore[misc]
                agent,
                input_items,  # Pass full conversation history, not just current message
                context=teaching_ctx,
                hooks=metering_hooks,
            )

            async for event in _stream_with_real_ids(agent_context, result, thread.id):
                yield event

        except HTTPException as http_err:
            if http_err.status_code == 402:
                detail: dict[str, Any] = (
                    http_err.detail if isinstance(http_err.detail, dict) else {}
                )
                error_text = _format_402_error_text(detail)
                error_code = detail.get("error_code", "INSUFFICIENT_BALANCE")
                logger.warning(f"[ChatKit] v4 Metering blocked: {error_code}")
                error_message = AssistantMessageItem(
                    id=self.store.generate_item_id("message", thread, context),
                    thread_id=thread.id,
                    created_at=datetime.now(),
                    content=[AssistantMessageContent(text=error_text, annotations=[])],
                )
                yield ThreadItemDoneEvent(item=error_message)
                return
            raise
        except Exception as e:
            if metering_hooks:
                await metering_hooks.release_on_error(agent_context)
            # Log the error for debugging (logger.exception includes traceback)
            error_str = str(e)
            logger.exception(f"[ChatKit] v4 Stream error: {type(e).__name__}: {error_str}")

            # Create error message to maintain conversation history consistency
            # This prevents consecutive UserMessages which breaks Gemini
            error_text = "I encountered a temporary issue. Please try again."
            if "INVALID_ARGUMENT" in error_str or "single turn" in error_str.lower():
                error_text = (
                    "I had trouble processing the conversation. "
                    "Please try sending your message again."
                )

            error_message = AssistantMessageItem(
                id=self.store.generate_item_id("message", thread, context),
                thread_id=thread.id,
                created_at=datetime.now(),
                content=[AssistantMessageContent(text=error_text, annotations=[])],
            )
            yield ThreadItemDoneEvent(item=error_message)
            # Don't re-raise: user already got error message, logger.exception
            # captured traceback for monitoring. Re-raising risks double error
            # handling if caller wraps in try/except. Consistent with ask mode.

        logger.info(f"[ChatKit] v4: Done for thread {thread.id}")

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

            # Load lesson content and thread items in parallel (independent I/O)
            content_task = load_lesson_content(lesson_path)
            items_task = self.store.load_thread_items(
                thread.id,
                after=None,
                limit=MAX_RECENT_ITEMS,
                order="desc",
                context=context,
            )
            content_data, previous_items = await asyncio.gather(
                content_task, items_task
            )

            content = content_data.get("content", "")
            title = content_data.get("title", "Unknown")
            cached = content_data.get("cached", False)
            items = list(reversed(previous_items.data))

            logger.info(
                f"[ChatKit] Content: title='{title}', "
                f"len={len(content)}, cached={cached}"
            )

            if not content:
                logger.warning(f"[ChatKit] No content for: {lesson_path}")

            # FIX: Ensure current user message is included in items
            # Race condition: add_user_message may not have saved to store yet
            # Note: temp_ prefixed IDs are used only for in-memory context building
            # and don't persist to storage (Gemini needs contiguous conversation)
            last_item_text = _get_last_item_text(items)
            if user_text and user_text.strip() and user_text != last_item_text:
                current_msg = UserMessageItem(
                    id=f"temp_{thread.id}_{len(items)}",
                    thread_id=thread.id,
                    created_at=datetime.now(),
                    content=[UserMessageTextContent(text=user_text)],
                    inference_options=InferenceOptions(model="teach"),
                )
                items.append(current_msg)
                logger.info(f"[ChatKit] Added current user_text to items: '{user_text[:50]}...'")

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

            # ROUTING: Choose handler based on mode

            # Set thread title for new threads (common to all modes)
            if is_first_message and mode == "teach":
                if _is_trigger_message(user_text):
                    context.metadata["title"] = f"📚 {title}"
                else:
                    context.metadata["title"] = _generate_thread_title(user_text)
                await self.store.save_thread(thread, context)

            # TEACH MODE: Skill-based teaching - agent as a tool
            # Three inputs: learner profile + skill prompt + lesson content
            if mode == "teach":
                logger.info("[ChatKit] >>> ROUTING TO SKILL-BASED MODE (v4) <<<")

                async for event in self.handle_teach_skill(
                    thread=thread,
                    user_text=user_text,
                    lesson_path=lesson_path,
                    user_name=user_name,
                    context=context,
                    content=content,
                    title=title,
                    items=items,
                    is_first_message=is_first_message,
                ):
                    yield event

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
                            f"from teach thread {thread.id}"
                        )
                    except Exception as del_err:
                        logger.warning(f"[ChatKit] Failed to delete trigger: {del_err}")
                return

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
                    agent_context, result, thread.id
                ):
                    yield event
            except HTTPException as http_err:
                # Handle metering 402 specially - show user-friendly message
                if http_err.status_code == 402:
                    detail: dict[str, Any] = (
                        http_err.detail if isinstance(http_err.detail, dict) else {}
                    )
                    error_text = _format_402_error_text(detail)
                    error_code = detail.get("error_code", "INSUFFICIENT_BALANCE")
                    logger.warning(f"[ChatKit] Metering blocked: {error_code}")
                    error_message = AssistantMessageItem(
                        id=self.store.generate_item_id("message", thread, context),
                        thread_id=thread.id,
                        created_at=datetime.now(),
                        content=[AssistantMessageContent(text=error_text, annotations=[])],
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
