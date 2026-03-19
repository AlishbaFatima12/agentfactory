# ---
# output-directory: "/tmp/chatterbox-tts"
# ---

# Chatterbox TTS on Modal
# Deploy: uv run modal deploy chatterbox_tts.py
# Run:    uv run modal run chatterbox_tts.py --prompt "Hello world"

import modal

image = modal.Image.debian_slim(python_version="3.10").uv_pip_install(
    "chatterbox-tts==0.1.6",
    "fastapi[standard]==0.124.4",
    "peft==0.18.0",
)

voice_vol = modal.Volume.from_name("chatterbox-tts-voices", create_if_missing=True)
VOICE_DIR = "/chatterbox-tts/voices"

app = modal.App("chatterbox-tts", image=image)

with image.imports():
    import io
    import torchaudio as ta
    from chatterbox.tts_turbo import ChatterboxTurboTTS
    from fastapi.responses import StreamingResponse


@app.cls(
    gpu="a10g",
    scaledown_window=60 * 5,
    secrets=[modal.Secret.from_name("hf-token")],
    volumes={VOICE_DIR: voice_vol},
)
@modal.concurrent(max_inputs=10)
class Chatterbox:
    @modal.enter()
    def load(self):
        self.model = ChatterboxTurboTTS.from_pretrained(device="cuda")

    @modal.fastapi_endpoint(docs=True, method="POST")
    def speak(self, prompt: str, voice: str = "voice_prompt"):
        audio_bytes = self.generate.local(prompt, voice)
        return StreamingResponse(
            io.BytesIO(audio_bytes),
            media_type="audio/wav",
        )

    @modal.method()
    def generate(self, prompt: str, voice: str = "voice_prompt") -> bytes:
        voice_path = f"{VOICE_DIR}/{voice}.wav"
        wav = self.model.generate(prompt, audio_prompt_path=voice_path)
        buffer = io.BytesIO()
        ta.save(buffer, wav, self.model.sr, format="wav")
        buffer.seek(0)
        return buffer.read()


@app.local_entrypoint()
def main(
    prompt: str = "Hello, this is a test of voice cloning with Chatterbox on Modal.",
    voice: str = "voice_prompt",
    output_path: str = "/tmp/chatterbox-tts/output.wav",
):
    chatterbox = Chatterbox()
    audio_bytes = chatterbox.generate.remote(prompt=prompt, voice=voice)

    import pathlib
    output_path = pathlib.Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_bytes(audio_bytes)
    print(f"Audio saved to {output_path}")
