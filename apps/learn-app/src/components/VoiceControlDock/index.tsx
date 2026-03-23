/**
 * VoiceControlDock
 *
 * A floating control panel for voice reading controls.
 * Filters voices to match the current site locale (en → English voices only, etc.)
 * Includes: Voice selector, playback speed, volume, pause/resume, and stop.
 */

import React, { useState, useMemo, useEffect, useRef } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useVoiceReading } from "@/contexts/VoiceReadingContext";
import {
  LOCALE_LANG_MAP,
  LOCALE_DISPLAY_NAMES,
  DROPDOWN_HEADERS,
  BLOCKED_VOICES,
  PREFERRED_VOICES,
} from "@/utils/voiceLocaleConfig";
import {
  Info,
  X,
  Mic,
  ChevronDown,
  Volume2,
  VolumeX,
  Volume1,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  AlertTriangle,
  Check,
} from "lucide-react";

/** Session key to remember if user dismissed the install hint */
const HINT_DISMISSED_KEY = "voice-install-hint-dismissed";

/** Speed presets for playback rate chips */
const SPEED_PRESETS = [0.75, 1.0, 1.25, 1.5, 2.0];

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
    hasLocaleVoices,
    noVoicesAtAll,
    showNoVoicesWarning,
    dismissNoVoicesWarning,
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

  // Persist dismissal in sessionStorage so hint doesn't re-show on every play press
  const hintDismissedRef = useRef(false);
  const [showInstallHint, setShowInstallHint] = useState(false);

  // Filter voices to match the current site locale, remove junk, sort preferred to top
  const langPrefix = LOCALE_LANG_MAP[currentLocale] || "en";
  const preferred = PREFERRED_VOICES[currentLocale] || PREFERRED_VOICES.en;
  const filteredVoices = useMemo(() => {
    return availableVoices
      .map((voice, originalIndex) => ({ voice, originalIndex }))
      .filter(
        ({ voice }) =>
          voice.lang.startsWith(langPrefix) &&
          !BLOCKED_VOICES.some((blocked) => voice.name.includes(blocked)),
      )
      .sort((a, b) => {
        const aIdx = preferred.findIndex((p) => a.voice.name.includes(p));
        const bIdx = preferred.findIndex((p) => b.voice.name.includes(p));
        const aPref = aIdx !== -1 ? aIdx : Infinity;
        const bPref = bIdx !== -1 ? bIdx : Infinity;
        return aPref - bPref;
      });
  }, [availableVoices, langPrefix, preferred]);

  // Restore dismissal state from sessionStorage on mount
  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(HINT_DISMISSED_KEY);
      if (dismissed === currentLocale) {
        hintDismissedRef.current = true;
      }
    } catch {
      /* sessionStorage unavailable (SSR, private browsing) */
    }
  }, [currentLocale]);

  // Auto-show install hint when playing or no-voices warning is active
  useEffect(() => {
    if (
      (isPlaying || showNoVoicesWarning) &&
      !hasLocaleVoices &&
      !hintDismissedRef.current
    ) {
      setShowInstallHint(true);
    }
  }, [isPlaying, showNoVoicesWarning, hasLocaleVoices]);

  const dismissHint = () => {
    setShowInstallHint(false);
    dismissNoVoicesWarning();
    hintDismissedRef.current = true;
    try {
      sessionStorage.setItem(HINT_DISMISSED_KEY, currentLocale);
    } catch {
      /* sessionStorage unavailable */
    }
  };

  // Don't render if not playing and no warning active
  if (!isPlaying && !showNoVoicesWarning) return null;

  const handlePauseResume = () => {
    if (isPaused) {
      resumeSpeech();
    } else {
      pauseSpeech();
    }
  };

  return (
    <>
      {/* Install hint — shown when no voices for current locale or no voices at all */}
      {(showInstallHint || noVoicesAtAll) && (
        <div className="voice-install-hint">
          <div className="voice-install-hint-content">
            <Info size={18} />
            <div>
              <strong>
                Listen in {LOCALE_DISPLAY_NAMES[currentLocale] || currentLocale}
              </strong>
              <p>
                Use the free{" "}
                <a
                  href="https://chromewebstore.google.com/detail/voice-out-text-to-speech/jmodgcjbfcmningbahdmedofbabejbba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voice Out
                </a>{" "}
                extension to read this page aloud. Already installed? Click the{" "}
                <strong>Voice Out icon</strong> near the address bar or press{" "}
                <kbd>Option+P</kbd>.
              </p>
            </div>
            <button
              className="voice-install-hint-close"
              onClick={dismissHint}
              title="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      <div className="voice-control-dock">
        {/* No-voice warning icon in the dock */}
        {!hasLocaleVoices && !noVoicesAtAll && !showInstallHint && (
          <button
            className="voice-no-lang-btn"
            onClick={() => setShowInstallHint(true)}
            title={`No ${LOCALE_DISPLAY_NAMES[currentLocale] || currentLocale} voices — click for help`}
          >
            <AlertTriangle size={14} />
          </button>
        )}

        {/* Voice Selector — hidden when no locale voices (empty dropdown is dead UI) */}
        {filteredVoices.length > 0 && (
          <div className="voice-control-section">
            <button
              className="voice-selector-btn"
              onClick={() => setIsVoiceMenuOpen(!isVoiceMenuOpen)}
              title="Select Voice"
            >
              <Mic size={16} />
              <span className="voice-selector-label">
                {selectedVoice?.name.split(" ").slice(0, 2).join(" ") ||
                  "Voice"}
              </span>
              <ChevronDown
                size={12}
                className={`voice-selector-chevron ${isVoiceMenuOpen ? "voice-selector-chevron--open" : ""}`}
              />
            </button>

            {/* Voice Dropdown — filtered by locale */}
            {isVoiceMenuOpen && (
              <div className="voice-dropdown">
                <div className="voice-dropdown-header">
                  {DROPDOWN_HEADERS[currentLocale] || "Voices"}
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
                      <Check
                        size={14}
                        className="voice-option-check"
                        strokeWidth={3}
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="voice-control-divider" />

        {/* Speed Control — preset chips */}
        <div className="voice-control-section">
          <div className="voice-speed-chips">
            {SPEED_PRESETS.map((speed) => (
              <button
                key={speed}
                className={`voice-speed-chip ${playbackRate === speed ? "voice-speed-chip--active" : ""}`}
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
              {volume === 0 ? (
                <VolumeX size={16} />
              ) : volume < 0.5 ? (
                <Volume1 size={16} />
              ) : (
                <Volume2 size={16} />
              )}
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
            <SkipBack size={16} fill="currentColor" />
          </button>

          {/* Pause / Resume */}
          <button
            className="voice-pause-btn"
            onClick={handlePauseResume}
            title={isPaused ? "Resume Reading" : "Pause Reading"}
          >
            {isPaused ? (
              <Play size={18} fill="currentColor" />
            ) : (
              <Pause size={18} fill="currentColor" />
            )}
          </button>

          {/* Skip Forward */}
          <button
            className="voice-skip-btn"
            onClick={skipForward}
            disabled={activeBlockIndex >= totalBlocks - 1}
            title="Next paragraph"
          >
            <SkipForward size={16} fill="currentColor" />
          </button>

          {/* Stop */}
          <button
            className="voice-stop-btn"
            onClick={() => {
              stopSpeech();
              dismissNoVoicesWarning();
            }}
            title="Stop Reading"
          >
            <Square size={14} fill="currentColor" />
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
