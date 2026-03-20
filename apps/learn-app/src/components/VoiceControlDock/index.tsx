/**
 * VoiceControlDock
 *
 * A floating control panel for voice reading controls.
 * Filters voices to match the current site locale (en → English voices only, etc.)
 * Includes: Voice selector, playback speed, volume, pause/resume, and stop.
 */

import React, { useState, useMemo, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useVoiceReading } from "@/contexts/VoiceReadingContext";

/** Map Docusaurus locale to BCP-47 language prefix for voice filtering */
const LOCALE_TO_LANG_PREFIX: Record<string, string> = {
    en: "en",
    ur: "ur",
    "zh-Hans": "zh",
};

export function VoiceControlDock() {
    const {
        isPlaying,
        isPaused,
        activeBlockIndex,
        totalBlocks,
        availableVoices,
        selectedVoiceIndex,
        playbackRate,
        volume,
        pauseSpeech,
        resumeSpeech,
        setPlaybackRate,
        setVoice,
        setVolume,
        stopSpeech,
        skipForward,
        skipBackward,
    } = useVoiceReading();

    const { i18n } = useDocusaurusContext();
    const currentLocale = i18n.currentLocale || "en";

    const [isVoiceMenuOpen, setIsVoiceMenuOpen] = useState(false);
    const selectedVoice = availableVoices[selectedVoiceIndex] || null;

    const [showInstallHint, setShowInstallHint] = useState(false);

    // Filter voices to match the current site locale
    const langPrefix = LOCALE_TO_LANG_PREFIX[currentLocale] || "en";
    const filteredVoices = useMemo(() => {
        const matched = availableVoices
            .map((voice, originalIndex) => ({ voice, originalIndex }))
            .filter(({ voice }) => voice.lang.startsWith(langPrefix));
        // Fallback to all voices if no match found for this locale
        if (matched.length === 0) {
            return availableVoices.map((voice, originalIndex) => ({ voice, originalIndex }));
        }
        return matched;
    }, [availableVoices, currentLocale, langPrefix]);

    // Check if native voices exist for the current locale
    const hasNativeVoices = useMemo(() => {
        return availableVoices.some(v => v.lang.startsWith(langPrefix));
    }, [availableVoices, langPrefix]);

    const noVoicesAtAll = availableVoices.length === 0;

    // Auto-show install hint when playing starts and no native voices exist
    useEffect(() => {
        if (isPlaying && !hasNativeVoices && !noVoicesAtAll) {
            setShowInstallHint(true);
        }
    }, [isPlaying, hasNativeVoices, noVoicesAtAll]);

    // Locale display names for the hint
    const localeNames: Record<string, string> = {
        en: "English",
        ur: "Urdu (اردو)",
        "zh-Hans": "Chinese (中文)",
    };

    // Don't render if not playing
    if (!isPlaying) return null;

    const handlePauseResume = () => {
        if (isPaused) {
            resumeSpeech();
        } else {
            pauseSpeech();
        }
    };

    // Speed preset buttons
    const speedPresets = [0.75, 1.0, 1.25, 1.5, 2.0];

    return (
        <>
            {/* Install hint — shown when no voices for current locale or no voices at all */}
            {(showInstallHint || noVoicesAtAll) && (
                <div className="voice-install-hint">
                    <div className="voice-install-hint-content">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <div>
                            <strong>
                                {noVoicesAtAll
                                    ? "No text-to-speech voices found"
                                    : `No ${localeNames[currentLocale] || currentLocale} voices found`}
                            </strong>
                            <p>
                                Install the <a
                                    href="https://chromewebstore.google.com/detail/voice-out-text-to-speech/jmodgcjbfcmningbahdmedofbabejbba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Voice Out</a> extension for additional language support.
                            </p>
                        </div>
                        <button
                            className="voice-install-hint-close"
                            onClick={() => setShowInstallHint(false)}
                            title="Dismiss"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <div className="voice-control-dock">
                {/* No-voice warning icon in the dock */}
                {!hasNativeVoices && !noVoicesAtAll && !showInstallHint && (
                    <button
                        className="voice-no-lang-btn"
                        onClick={() => setShowInstallHint(true)}
                        title={`No ${localeNames[currentLocale] || currentLocale} voices — click for help`}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                    </button>
                )}

                {/* Voice Selector */}
                <div className="voice-control-section">
                    <button
                        className="voice-selector-btn"
                        onClick={() => setIsVoiceMenuOpen(!isVoiceMenuOpen)}
                        title="Select Voice"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                            <line x1="12" y1="19" x2="12" y2="23" />
                            <line x1="8" y1="23" x2="16" y2="23" />
                        </svg>
                        <span className="voice-selector-label">
                            {selectedVoice?.name.split(" ").slice(0, 2).join(" ") || "Voice"}
                        </span>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={`voice-selector-chevron ${isVoiceMenuOpen ? "voice-selector-chevron--open" : ""}`}
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </button>

                    {/* Voice Dropdown — filtered by locale */}
                    {isVoiceMenuOpen && (
                        <div className="voice-dropdown">
                            <div className="voice-dropdown-header">
                                {hasNativeVoices
                                    ? (currentLocale === "en" ? "English Voices" :
                                        currentLocale === "ur" ? "اردو آوازیں" :
                                            currentLocale === "zh-Hans" ? "中文语音" : "Voices")
                                    : "Available Voices"
                                }
                            </div>
                            {filteredVoices.map(({ voice, originalIndex }) => (
                                <button
                                    key={originalIndex}
                                    onClick={() => {
                                        setVoice(originalIndex);
                                        setIsVoiceMenuOpen(false);
                                    }}
                                    className={`voice-option ${originalIndex === selectedVoiceIndex ? "voice-option--active" : ""}`}
                                >
                                    <div className="voice-option-name">{voice.name}</div>
                                    <div className="voice-option-lang">{voice.lang}</div>
                                    {originalIndex === selectedVoiceIndex && (
                                        <svg className="voice-option-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="voice-control-divider" />

                {/* Speed Control — preset chips */}
                <div className="voice-control-section">
                    <div className="voice-speed-chips">
                        {speedPresets.map((speed) => (
                            <button
                                key={speed}
                                className={`voice-speed-chip ${Math.abs(playbackRate - speed) < 0.05 ? "voice-speed-chip--active" : ""}`}
                                onClick={() => setPlaybackRate(speed)}
                                title={`${speed}x speed`}
                            >
                                {speed === 1.0 ? "1x" : `${speed}x`}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="voice-control-divider" />

                {/* Volume Control */}
                <div className="voice-control-section">
                    <div className="voice-volume-group">
                        <button
                            className="voice-volume-icon"
                            onClick={() => setVolume(volume > 0 ? 0 : 1)}
                            title={volume > 0 ? "Mute" : "Unmute"}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                {volume === 0 ? (
                                    <>
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                        <line x1="23" y1="9" x2="17" y2="15" />
                                        <line x1="17" y1="9" x2="23" y2="15" />
                                    </>
                                ) : volume < 0.5 ? (
                                    <>
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                    </>
                                ) : (
                                    <>
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                    </>
                                )}
                            </svg>
                        </button>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="voice-slider voice-volume-slider"
                        />
                    </div>
                </div>

                <div className="voice-control-divider" />

                {/* Playback Controls */}
                <div className="voice-playback-controls">
                    {/* Skip Backward */}
                    <button
                        className="voice-skip-btn"
                        onClick={skipBackward}
                        disabled={activeBlockIndex <= 0}
                        title="Previous paragraph"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="11 19 2 12 11 5 11 19" />
                            <polygon points="22 19 13 12 22 5 22 19" />
                        </svg>
                    </button>

                    {/* Pause / Resume */}
                    <button
                        className="voice-pause-btn"
                        onClick={handlePauseResume}
                        title={isPaused ? "Resume Reading" : "Pause Reading"}
                    >
                        {isPaused ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                            </svg>
                        )}
                    </button>

                    {/* Skip Forward */}
                    <button
                        className="voice-skip-btn"
                        onClick={skipForward}
                        disabled={activeBlockIndex >= totalBlocks - 1}
                        title="Next paragraph"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="13 19 22 12 13 5 13 19" />
                            <polygon points="2 19 11 12 2 5 2 19" />
                        </svg>
                    </button>

                    {/* Stop */}
                    <button
                        className="voice-stop-btn"
                        onClick={stopSpeech}
                        title="Stop Reading"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                        </svg>
                    </button>
                </div>

                {/* Block position indicator */}
                {totalBlocks > 0 && (
                    <span className="voice-position">
                        {activeBlockIndex + 1}/{totalBlocks}
                    </span>
                )}
            </div>

            {/* Backdrop to close voice menu */}
            {isVoiceMenuOpen && (
                <div
                    className="voice-menu-backdrop"
                    onClick={() => setIsVoiceMenuOpen(false)}
                />
            )}
        </>
    );
}

export default VoiceControlDock;
