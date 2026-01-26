"""FastAPI entrypoint for the Study Mode ChatKit backend."""

from __future__ import annotations

import os
from pathlib import Path
from dotenv import load_dotenv

# Load .env from parent directories
env_paths = [
    Path(__file__).parent.parent.parent / ".env",  # chatkit/.env
    Path(__file__).parent.parent / ".env",  # backend/.env
]
for env_path in env_paths:
    if env_path.exists():
        load_dotenv(env_path)
        print(f"Loaded env from: {env_path}")
        break

from chatkit.server import StreamingResult
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, Response, StreamingResponse

from .server import StudyModeChatServer, load_lesson_content, generate_suggestions

app = FastAPI(title="Study Mode ChatKit API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chatkit_server = StudyModeChatServer()


async def handle_chatkit(request: Request, mode: str, lesson_path: str = "") -> Response:
    """Process ChatKit request with mode and lesson context."""
    payload = await request.body()
    context = {
        "request": request,
        "mode": mode,
        "lesson_path": lesson_path,
    }
    result = await chatkit_server.process(payload, context)

    if isinstance(result, StreamingResult):
        return StreamingResponse(result, media_type="text/event-stream")
    if hasattr(result, "json"):
        return Response(content=result.json, media_type="application/json")
    return JSONResponse(result)


@app.post("/chatkit")
async def chatkit_default(request: Request) -> Response:
    """Default endpoint - uses teach mode."""
    lesson_path = request.query_params.get("lesson_path", "")
    mode = request.query_params.get("mode", "teach")
    return await handle_chatkit(request, mode, lesson_path)


@app.post("/chatkit/teach")
async def chatkit_teach(request: Request) -> Response:
    """Teach mode - Socratic teaching with step-by-step guidance."""
    lesson_path = request.query_params.get("lesson_path", "")
    return await handle_chatkit(request, "teach", lesson_path)


@app.post("/chatkit/ask")
async def chatkit_ask(request: Request) -> Response:
    """Ask mode - Quick, direct answers to questions."""
    lesson_path = request.query_params.get("lesson_path", "")
    return await handle_chatkit(request, "ask", lesson_path)


@app.get("/chatkit/suggestions")
async def get_suggestions(request: Request) -> JSONResponse:
    """Get dynamic suggestion prompts based on lesson content."""
    lesson_path = request.query_params.get("lesson_path", "")
    mode = request.query_params.get("mode", "teach")
    content, title = load_lesson_content(lesson_path)
    suggestions = generate_suggestions(content, title, mode)
    return JSONResponse({"suggestions": suggestions})
