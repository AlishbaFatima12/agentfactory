import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import { render, screen, act } from "@testing-library/react";
import { VoiceReadingProvider, useVoiceReading } from "@/contexts/VoiceReadingContext";

// Mock SpeechSynthesis API
const mockCancel = vi.fn();
const mockSpeak = vi.fn();

const mockSynthesis = {
    getVoices: vi.fn(() => [] as SpeechSynthesisVoice[]),
    cancel: mockCancel,
    speak: mockSpeak,
    pause: vi.fn(),
    resume: vi.fn(),
    onvoiceschanged: null as ((ev: Event) => void) | null,
};

Object.defineProperty(window, "speechSynthesis", {
    value: mockSynthesis,
    writable: true,
    configurable: true,
});

/** Exposes context values for assertions */
function TestConsumer() {
    const ctx = useVoiceReading();
    return (
        <div>
            <span data-testid="isPlaying">{String(ctx.isPlaying)}</span>
            <span data-testid="isPaused">{String(ctx.isPaused)}</span>
            <span data-testid="hasLocaleVoices">{String(ctx.hasLocaleVoices)}</span>
            <span data-testid="noVoicesAtAll">{String(ctx.noVoicesAtAll)}</span>
            <span data-testid="showNoVoicesWarning">{String(ctx.showNoVoicesWarning)}</span>
            <button data-testid="toggle" onClick={ctx.toggleSpeech}>Toggle</button>
            <button data-testid="dismiss" onClick={ctx.dismissNoVoicesWarning}>Dismiss</button>
        </div>
    );
}

function renderWithProvider(locale = "ur") {
    return render(
        <VoiceReadingProvider locale={locale}>
            <TestConsumer />
        </VoiceReadingProvider>
    );
}

describe("No-voices warning flow", () => {
    beforeEach(() => {
        mockSynthesis.getVoices.mockReturnValue([]);
        mockCancel.mockClear();
        mockSpeak.mockClear();
        sessionStorage.clear();
    });

    it("shows warning when toggling speech with no locale voices", () => {
        renderWithProvider("ur");

        expect(screen.getByTestId("showNoVoicesWarning").textContent).toBe("false");
        expect(screen.getByTestId("isPlaying").textContent).toBe("false");

        act(() => { screen.getByTestId("toggle").click(); });

        // Warning shown, but NOT playing (no abuse of isPlaying/isPaused)
        expect(screen.getByTestId("showNoVoicesWarning").textContent).toBe("true");
        expect(screen.getByTestId("isPlaying").textContent).toBe("false");
        expect(screen.getByTestId("isPaused").textContent).toBe("false");
        expect(mockSpeak).not.toHaveBeenCalled();
    });

    it("dismisses warning correctly", () => {
        renderWithProvider("ur");

        act(() => { screen.getByTestId("toggle").click(); });
        expect(screen.getByTestId("showNoVoicesWarning").textContent).toBe("true");

        act(() => { screen.getByTestId("dismiss").click(); });
        expect(screen.getByTestId("showNoVoicesWarning").textContent).toBe("false");
    });

    it("reports noVoicesAtAll when no voices loaded", () => {
        renderWithProvider("en");
        expect(screen.getByTestId("noVoicesAtAll").textContent).toBe("true");
        expect(screen.getByTestId("hasLocaleVoices").textContent).toBe("false");
    });

    it("detects locale voices after voiceschanged event", () => {
        const enVoice = { name: "Google US English", lang: "en-US" } as SpeechSynthesisVoice;
        mockSynthesis.getVoices.mockReturnValue([enVoice]);

        renderWithProvider("en");
        act(() => { mockSynthesis.onvoiceschanged?.({} as Event); });

        expect(screen.getByTestId("hasLocaleVoices").textContent).toBe("true");
        expect(screen.getByTestId("noVoicesAtAll").textContent).toBe("false");
    });

    it("does not show warning when locale voices exist", () => {
        const enVoice = { name: "Google US English", lang: "en-US" } as SpeechSynthesisVoice;
        mockSynthesis.getVoices.mockReturnValue([enVoice]);

        renderWithProvider("en");
        act(() => { mockSynthesis.onvoiceschanged?.({} as Event); });
        act(() => { screen.getByTestId("toggle").click(); });

        expect(screen.getByTestId("showNoVoicesWarning").textContent).toBe("false");
    });
});
