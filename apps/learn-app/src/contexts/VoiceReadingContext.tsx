/**
 * VoiceReadingContext
 * 
 * Provides word-by-word reading with speech synthesis and word highlighting.
 * Tracks the currently spoken word and provides methods to control playback.
 * Supports pause/resume and real-time volume/speed changes that continue from current word.
 */

import React, { createContext, useContext, useState, useCallback, useRef, useEffect, useMemo } from "react";

interface VoiceReadingContextType {
    // Playback state
    isPlaying: boolean;
    isPaused: boolean;
    activeBlockIndex: number;
    currentWordIndex: number;

    // Voice settings
    availableVoices: SpeechSynthesisVoice[];
    selectedVoiceIndex: number;
    playbackRate: number;
    volume: number;

    // Navigation
    totalBlocks: number;

    // Locale voice availability
    hasLocaleVoices: boolean;
    noVoicesAtAll: boolean;
    showNoVoicesWarning: boolean;
    dismissNoVoicesWarning: () => void;

    // Methods
    toggleSpeech: () => void;
    pauseSpeech: () => void;
    resumeSpeech: () => void;
    setPlaybackRate: (rate: number) => void;
    setVoice: (index: number) => void;
    setVolume: (vol: number) => void;
    stopSpeech: () => void;
    skipForward: () => void;
    skipBackward: () => void;
}

const VoiceReadingContext = createContext<VoiceReadingContextType | null>(null);

export function useVoiceReading() {
    const context = useContext(VoiceReadingContext);
    if (!context) {
        throw new Error("useVoiceReading must be used within VoiceReadingProvider");
    }
    return context;
}

export function useVoiceReadingOptional() {
    return useContext(VoiceReadingContext);
}

interface WordBoundary {
    index: number;
    start: number;
    end: number;
    word: string;
}

interface TextBlock {
    element: Element;
    text: string;
    originalHtml: string;
    wordBoundaries: WordBoundary[];
}

import { LOCALE_LANG_MAP, PREFERRED_VOICES } from "@/utils/voiceLocaleConfig";

/**
 * Tokenize text into "words" for highlighting.
 * - For Latin/space-separated scripts: splits on whitespace (like before)
 * - For CJK (Chinese/Japanese/Korean): each character is a separate token
 * - Mixed text handles both (e.g., "构建 Digital FTE" → ["构", "建", "Digital", "FTE"])
 *
 * Returns array of { word, start, end } with character offsets into the source text.
 */
export function tokenizeText(text: string): { word: string; start: number; end: number }[] {
    // CJK Unified Ideographs + Extensions + CJK Compatibility + Kana + Hangul
    const CJK_REGEX = /[\u2E80-\u9FFF\uF900-\uFAFF\u3040-\u30FF\u31F0-\u31FF\uAC00-\uD7AF]/;
    const tokens: { word: string; start: number; end: number }[] = [];
    // Match: CJK individual chars OR non-space sequences (words)
    const regex = /([\u2E80-\u9FFF\uF900-\uFAFF\u3040-\u30FF\u31F0-\u31FF\uAC00-\uD7AF]|\S+)/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
        const token = match[0];
        // If a non-CJK "word" contains embedded CJK, split further
        if (token.length > 1 && CJK_REGEX.test(token)) {
            // Split mixed token char-by-char for CJK, group non-CJK
            let i = 0;
            let pos = match.index;
            while (i < token.length) {
                if (CJK_REGEX.test(token[i])) {
                    tokens.push({ word: token[i], start: pos, end: pos + 1 });
                    i++;
                    pos++;
                } else {
                    // Accumulate non-CJK chars
                    let run = "";
                    const runStart = pos;
                    while (i < token.length && !CJK_REGEX.test(token[i])) {
                        run += token[i];
                        i++;
                        pos++;
                    }
                    if (run) tokens.push({ word: run, start: runStart, end: pos });
                }
            }
        } else {
            tokens.push({ word: token, start: match.index, end: match.index + token.length });
        }
    }
    return tokens;
}

export function VoiceReadingProvider({ children, locale = "en" }: { children: React.ReactNode; locale?: string }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [activeBlockIndex, setActiveBlockIndex] = useState(-1);
    const [currentWordIndex, setCurrentWordIndex] = useState(-1);

    const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);
    const [playbackRate, setPlaybackRateState] = useState(1.0);
    const [volume, setVolumeState] = useState(1.0);
    const [totalBlocks, setTotalBlocks] = useState(0);
    const [showNoVoicesWarning, setShowNoVoicesWarning] = useState(false);

    const blocksRef = useRef<TextBlock[]>([]);

    // Use refs for current settings
    const playbackRateRef = useRef(1.0);
    const volumeRef = useRef(1.0);
    const selectedVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

    // Track current position with refs
    const activeBlockIndexRef = useRef(-1);
    const currentWordIndexRef = useRef(-1);

    // Synchronous pause guard — checked in onboundary and fallback to skip updates while paused
    const isPausedRef = useRef(false);

    // Chrome keepalive: re-calls pause() every 10s to prevent 15-second auto-resume
    const chromeKeepAliveRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Unique ID for each utterance to prevent stale callbacks
    const utteranceIdRef = useRef(0);
    const currentUtteranceIdRef = useRef(0);

    // Timer-based fallback for browsers that don't fire onboundary (Safari, iOS, etc.)
    const fallbackTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const fallbackDelayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const boundaryFiredRef = useRef(false);

    /**
     * Clear all fallback timers to prevent memory leaks and orphaned intervals.
     * Centralized cleanup function used across all handlers.
     * Empty dependency array is safe: only accesses stable refs, not state or props.
     */
    const clearFallbackTimers = useCallback(() => {
        if (fallbackTimerRef.current) {
            clearInterval(fallbackTimerRef.current);
            fallbackTimerRef.current = null;
        }
        if (fallbackDelayTimerRef.current) {
            clearTimeout(fallbackDelayTimerRef.current);
            fallbackDelayTimerRef.current = null;
        }
    }, []);

    // Load voices on mount
    useEffect(() => {
        if (typeof window === "undefined" || !window.speechSynthesis) return;

        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                setAvailableVoices(voices);

                // Pick best default voice for the current locale
                const langPrefix = LOCALE_LANG_MAP[locale] || "en";
                const preferred = PREFERRED_VOICES[locale] || PREFERRED_VOICES.en;

                // 1. Try preferred voices for this locale
                let idx = voices.findIndex(v =>
                    preferred.some(name => v.name.includes(name))
                );

                // 2. Fallback: first voice matching locale language
                if (idx < 0) {
                    idx = voices.findIndex(v => v.lang.startsWith(langPrefix));
                }

                // 3. Ultimate fallback: first voice
                if (idx < 0) idx = 0;

                setSelectedVoiceIndex(idx);
                selectedVoiceRef.current = voices[idx];
            }
        };

        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;

        return () => {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            // Clear all timers on unmount
            clearFallbackTimers();
        };
    }, [locale, clearFallbackTimers]);

    const selectedVoice = availableVoices[selectedVoiceIndex] || null;

    // Keep refs in sync
    useEffect(() => {
        playbackRateRef.current = playbackRate;
    }, [playbackRate]);

    useEffect(() => {
        volumeRef.current = volume;
    }, [volume]);

    useEffect(() => {
        selectedVoiceRef.current = selectedVoice;
    }, [selectedVoice]);

    useEffect(() => {
        activeBlockIndexRef.current = activeBlockIndex;
    }, [activeBlockIndex]);

    useEffect(() => {
        currentWordIndexRef.current = currentWordIndex;
    }, [currentWordIndex]);

    useEffect(() => {
        isPausedRef.current = isPaused;
    }, [isPaused]);

    const parseArticleContent = useCallback((): TextBlock[] => {
        const article = document.querySelector("article");
        if (!article) return [];

        // Target only the main markdown content area, skip breadcrumbs/nav/header chrome
        const contentArea = article.querySelector(".markdown, [class*='mdxPageWrapper'], [class*='docItemContent']") || article;

        const blockSelectors = "p, h1, h2, h3, h4, h5, h6, li, blockquote > p, blockquote";
        const elements = contentArea.querySelectorAll(blockSelectors);

        const blocks: TextBlock[] = [];

        elements.forEach((element) => {
            const text = element.textContent?.trim() || "";
            if (!text) return;

            // Skip elements inside nav, breadcrumbs, table of contents, or other UI chrome
            if (element.closest("nav, [class*='breadcrumb'], [class*='Breadcrumb'], [class*='tableOfContents'], [class*='tocCollapsible'], header, footer")) {
                return;
            }

            if (element.tagName === "P" && element.parentElement?.tagName === "BLOCKQUOTE") {
                return;
            }

            const wordBoundaries: WordBoundary[] = [];
            const tokens = tokenizeText(text);
            tokens.forEach((token, wordIdx) => {
                wordBoundaries.push({
                    index: wordIdx,
                    start: token.start,
                    end: token.end,
                    word: token.word
                });
            });

            if (wordBoundaries.length > 0) {
                element.setAttribute("data-voice-block", String(blocks.length));
                blocks.push({ element, text, originalHtml: element.innerHTML, wordBoundaries });
            }
        });

        return blocks;
    }, []);

    const wrapWordsInBlock = useCallback((block: TextBlock, blockIndex: number) => {
        const { element } = block;
        const tokens = block.wordBoundaries;
        const fragment = document.createDocumentFragment();

        tokens.forEach((wb, idx) => {
            const span = document.createElement("span");
            span.className = "voice-word";
            span.setAttribute("data-word-index", String(idx));
            span.setAttribute("data-block-index", String(blockIndex));
            // For CJK characters, no trailing space; for space-separated words, add space
            const nextToken = tokens[idx + 1];
            const needsSpace = nextToken ? (nextToken.start > wb.end) : false;
            span.textContent = wb.word + (needsSpace ? " " : "");
            fragment.appendChild(span);
        });

        element.innerHTML = "";
        element.appendChild(fragment);
    }, []);

    const unwrapWords = useCallback(() => {
        const wrappedBlocks = document.querySelectorAll("[data-voice-block]");
        wrappedBlocks.forEach(block => {
            const stored = blocksRef.current.find((_, idx) =>
                block.getAttribute("data-voice-block") === String(idx)
            );

            if (stored) {
                block.innerHTML = stored.originalHtml;
            }
            block.removeAttribute("data-voice-block");
            block.classList.remove("voice-block--active", "voice-block--inactive");
        });
    }, []);

    const updateWordStyles = useCallback((blockIdx: number, wordIdx: number) => {
        document.querySelectorAll("[data-voice-block]").forEach((el, idx) => {
            if (idx === blockIdx) {
                el.classList.add("voice-block--active");
                el.classList.remove("voice-block--inactive");
            } else {
                el.classList.add("voice-block--inactive");
                el.classList.remove("voice-block--active");
                // Clear word highlights in completed/inactive blocks —
                // mark all words as "read" so no word keeps the current highlight
                el.querySelectorAll(".voice-word").forEach(wordEl => {
                    wordEl.classList.remove("voice-word--current", "voice-word--pending");
                    wordEl.classList.add("voice-word--read");
                });
            }
        });

        const activeBlock = document.querySelector(`[data-voice-block="${blockIdx}"]`);
        if (!activeBlock) return;

        activeBlock.querySelectorAll(".voice-word").forEach(wordEl => {
            const wIdx = parseInt(wordEl.getAttribute("data-word-index") || "-1", 10);
            wordEl.classList.remove("voice-word--read", "voice-word--current", "voice-word--pending");

            if (wIdx < wordIdx) {
                wordEl.classList.add("voice-word--read");
            } else if (wIdx === wordIdx) {
                wordEl.classList.add("voice-word--current");
            } else {
                wordEl.classList.add("voice-word--pending");
            }
        });
    }, []);

    /**
     * Play speech for a specific block starting from a specific word
     */
    const playBlockFromWord = useCallback((blockIndex: number, startWordIndex: number) => {
        const blocks = blocksRef.current;

        // Cancel any queued/active speech to prevent Chrome from double-playing.
        // The utterance ID guard in onend prevents stale callbacks from re-entering.
        window.speechSynthesis.cancel();

        if (blockIndex >= blocks.length) {
            setIsPlaying(false);
            setIsPaused(false);
            setActiveBlockIndex(-1);
            activeBlockIndexRef.current = -1;
            setCurrentWordIndex(-1);
            currentWordIndexRef.current = -1;
            unwrapWords();
            return;
        }

        const block = blocks[blockIndex];

        const remainingBoundaries = block.wordBoundaries.filter(wb => wb.index >= startWordIndex);
        if (remainingBoundaries.length === 0) {
            playBlockFromWord(blockIndex + 1, 0);
            return;
        }

        const firstWordStart = remainingBoundaries[0].start;
        const remainingText = block.text.substring(firstWordStart);

        setActiveBlockIndex(blockIndex);
        activeBlockIndexRef.current = blockIndex;
        setCurrentWordIndex(startWordIndex);
        currentWordIndexRef.current = startWordIndex;
        updateWordStyles(blockIndex, startWordIndex);

        if (startWordIndex === 0) {
            block.element.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        // Generate unique ID for this utterance
        const thisUtteranceId = ++utteranceIdRef.current;
        currentUtteranceIdRef.current = thisUtteranceId;

        const utterance = new SpeechSynthesisUtterance(remainingText);

        if (selectedVoiceRef.current) {
            utterance.voice = selectedVoiceRef.current;
        }

        utterance.rate = playbackRateRef.current;
        utterance.pitch = 1.0;
        utterance.volume = volumeRef.current;

        const adjustedBoundaries = remainingBoundaries.map(wb => ({
            ...wb,
            start: wb.start - firstWordStart,
            end: wb.end - firstWordStart
        }));

        // Reset boundary fired flag for this utterance
        boundaryFiredRef.current = false;

        // Clear any existing fallback timer
        if (fallbackTimerRef.current) {
            clearTimeout(fallbackTimerRef.current);
            fallbackTimerRef.current = null;
        }

        // ==========================================
        // TIMER-BASED FALLBACK FOR SAFARI/iOS/MOBILE
        // ==========================================
        // Estimate ~280ms per word at rate 1.0 (adjust based on actual rate)
        // This provides visual feedback when onboundary doesn't fire
        const safePlaybackRate = playbackRateRef.current > 0 ? playbackRateRef.current : 1;
        const avgWordDuration = 280 / safePlaybackRate; // ms per word
        let fallbackWordIndex = startWordIndex;

        // Start the fallback timer using setInterval
        const startFallbackTimer = () => {
            // Clear any existing timer first
            if (fallbackTimerRef.current) {
                clearInterval(fallbackTimerRef.current);
            }

            fallbackTimerRef.current = setInterval(() => {
                // Guard: stop if utterance changed, boundary events took over, or paused
                if (currentUtteranceIdRef.current !== thisUtteranceId) {
                    if (fallbackTimerRef.current) {
                        clearInterval(fallbackTimerRef.current);
                        fallbackTimerRef.current = null;
                    }
                    return;
                }
                if (boundaryFiredRef.current) {
                    if (fallbackTimerRef.current) {
                        clearInterval(fallbackTimerRef.current);
                        fallbackTimerRef.current = null;
                    }
                    return;
                }
                if (isPausedRef.current) return;

                // Advance to next word
                fallbackWordIndex++;
                if (fallbackWordIndex < block.wordBoundaries.length) {
                    setCurrentWordIndex(fallbackWordIndex);
                    currentWordIndexRef.current = fallbackWordIndex;
                    updateWordStyles(blockIndex, fallbackWordIndex);
                } else {
                    // Self-clear when last word is reached
                    if (fallbackTimerRef.current) {
                        clearInterval(fallbackTimerRef.current);
                        fallbackTimerRef.current = null;
                    }
                }
            }, avgWordDuration);
        };

        // Give onboundary 300ms to fire before starting fallback
        // Bug 2 fix: Store timeout handle in ref to allow cleanup
        if (fallbackDelayTimerRef.current) {
            clearTimeout(fallbackDelayTimerRef.current);
        }
        fallbackDelayTimerRef.current = setTimeout(() => {
            fallbackDelayTimerRef.current = null;
            if (!boundaryFiredRef.current && currentUtteranceIdRef.current === thisUtteranceId) {
                startFallbackTimer();
            }
        }, 150);

        utterance.onboundary = (event) => {
            // Only process if this is still the current utterance
            if (currentUtteranceIdRef.current !== thisUtteranceId) return;

            // Only perform word-level handling (including disabling the fallback)
            // when we get word boundaries. Some browsers/voices fire "sentence"
            // but not "word"; in those cases we keep the fallback timer running.
            if (event.name === "word") {
                // Word boundaries are working, so we can disable the fallback timer.
                boundaryFiredRef.current = true;
                if (fallbackTimerRef.current) {
                    clearTimeout(fallbackTimerRef.current);
                    fallbackTimerRef.current = null;
                }

                const charIndex = event.charIndex;
                const foundWord = adjustedBoundaries.find(wb =>
                    charIndex >= wb.start && charIndex < wb.end
                );

                if (!foundWord && adjustedBoundaries.length > 0) {
                    const closest = adjustedBoundaries.reduce((prev, curr) =>
                        Math.abs(curr.start - charIndex) < Math.abs(prev.start - charIndex) ? curr : prev
                        , adjustedBoundaries[0]);

                    if (closest && Math.abs(closest.start - charIndex) < 10) {
                        setCurrentWordIndex(closest.index);
                        currentWordIndexRef.current = closest.index;
                        updateWordStyles(blockIndex, closest.index);
                        return;
                    }
                }

                if (foundWord) {
                    setCurrentWordIndex(foundWord.index);
                    currentWordIndexRef.current = foundWord.index;
                    updateWordStyles(blockIndex, foundWord.index);
                }
            }
        };

        utterance.onend = () => {
            // Clear fallback timers
            clearFallbackTimers();
            // CRITICAL: Only advance if this is still the current utterance
            // This prevents stale callbacks from triggering double playback
            if (currentUtteranceIdRef.current !== thisUtteranceId) {
                return;
            }
            // Move to next block starting from word 0
            playBlockFromWord(blockIndex + 1, 0);
        };

        utterance.onerror = (e) => {
            // Clear fallback timers
            clearFallbackTimers();
            if (e.error === 'interrupted' || e.error === 'canceled') {
                return;
            }
            if (currentUtteranceIdRef.current !== thisUtteranceId) {
                return;
            }
            console.error("Speech error", e);
            setIsPlaying(false);
            setIsPaused(false);
            setActiveBlockIndex(-1);
            activeBlockIndexRef.current = -1;
            setCurrentWordIndex(-1);
            currentWordIndexRef.current = -1;
            unwrapWords();
        };

        window.speechSynthesis.speak(utterance);
    }, [updateWordStyles, unwrapWords, clearFallbackTimers]);

    const playBlock = useCallback((blockIndex: number) => {
        playBlockFromWord(blockIndex, 0);
    }, [playBlockFromWord]);

    // Whether voices exist for the current locale
    const langPrefix = LOCALE_LANG_MAP[locale] || "en";
    const hasLocaleVoices = useMemo(() => {
        return availableVoices.some(v => v.lang.startsWith(langPrefix));
    }, [availableVoices, langPrefix]);

    const toggleSpeech = useCallback(() => {
        if (typeof window === "undefined" || !window.speechSynthesis) return;

        if (isPlaying) {
            // Clear fallback timers
            clearFallbackTimers();
            // Increment utterance ID to invalidate any pending callbacks
            currentUtteranceIdRef.current = ++utteranceIdRef.current;
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            setIsPaused(false);
            setActiveBlockIndex(-1);
            activeBlockIndexRef.current = -1;
            setCurrentWordIndex(-1);
            currentWordIndexRef.current = -1;
            unwrapWords();
            return;
        }

        // Block playback if no voices available for the current locale
        if (!hasLocaleVoices) {
            setShowNoVoicesWarning(true);
            return;
        }

        const blocks = parseArticleContent();
        if (blocks.length === 0) return;

        blocksRef.current = blocks;
        setTotalBlocks(blocks.length);
        blocks.forEach((block, idx) => wrapWordsInBlock(block, idx));

        setIsPlaying(true);
        setIsPaused(false);
        playBlock(0);
    }, [isPlaying, hasLocaleVoices, parseArticleContent, wrapWordsInBlock, playBlock, unwrapWords, clearFallbackTimers]);

    const pauseSpeech = useCallback(() => {
        if (typeof window === "undefined" || !window.speechSynthesis) return;
        if (!isPlaying || isPaused) return;

        // Bug 1 fix: Clear fallback timer on pause to prevent desync
        clearFallbackTimers();

        window.speechSynthesis.pause();
        setIsPaused(true);
    }, [isPlaying, isPaused, clearFallbackTimers]);

    const resumeSpeech = useCallback(() => {
        if (typeof window === "undefined" || !window.speechSynthesis) return;
        if (!isPlaying || !isPaused) return;

        // Clear Chrome keepalive before resuming
        if (chromeKeepAliveRef.current) {
            clearInterval(chromeKeepAliveRef.current);
            chromeKeepAliveRef.current = null;
        }

        // Set synchronous ref BEFORE resume() so handlers see it immediately
        isPausedRef.current = false;

        window.speechSynthesis.resume();
        setIsPaused(false);

        // Bug 1 fix: Restart fallback timer on resume if onboundary never fired
        if (!boundaryFiredRef.current && activeBlockIndexRef.current >= 0) {
            const block = blocksRef.current[activeBlockIndexRef.current];
            if (block) {
                // Clear any existing timers first to prevent orphaned intervals on double-click
                clearFallbackTimers();
                const safePlaybackRate = playbackRateRef.current > 0 ? playbackRateRef.current : 1;
                const avgWordDuration = 280 / safePlaybackRate;
                let fallbackWordIndex = currentWordIndexRef.current;
                // Capture utterance ID to detect stale intervals after speed/voice/volume changes
                const resumeUtteranceId = currentUtteranceIdRef.current;
                fallbackTimerRef.current = setInterval(() => {
                    // Self-clear if utterance has changed (e.g., restart triggered)
                    if (currentUtteranceIdRef.current !== resumeUtteranceId) {
                        if (fallbackTimerRef.current) {
                            clearInterval(fallbackTimerRef.current);
                            fallbackTimerRef.current = null;
                        }
                        return;
                    }
                    if (boundaryFiredRef.current) {
                        if (fallbackTimerRef.current) {
                            clearInterval(fallbackTimerRef.current);
                            fallbackTimerRef.current = null;
                        }
                        return;
                    }
                    fallbackWordIndex++;
                    if (fallbackWordIndex < block.wordBoundaries.length) {
                        setCurrentWordIndex(fallbackWordIndex);
                        currentWordIndexRef.current = fallbackWordIndex;
                        updateWordStyles(activeBlockIndexRef.current, fallbackWordIndex);
                    } else {
                        if (fallbackTimerRef.current) {
                            clearInterval(fallbackTimerRef.current);
                            fallbackTimerRef.current = null;
                        }
                    }
                }, avgWordDuration);
            }
        }
    }, [isPlaying, isPaused, updateWordStyles, clearFallbackTimers]);

    const stopSpeech = useCallback(() => {
        if (typeof window === "undefined" || !window.speechSynthesis) return;

        // Clear fallback timers
        clearFallbackTimers();
        // Increment utterance ID to invalidate any pending callbacks
        currentUtteranceIdRef.current = ++utteranceIdRef.current;
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
        setActiveBlockIndex(-1);
        activeBlockIndexRef.current = -1;
        setCurrentWordIndex(-1);
        currentWordIndexRef.current = -1;
        unwrapWords();
    }, [unwrapWords, clearFallbackTimers]);

    const dismissNoVoicesWarning = useCallback(() => {
        setShowNoVoicesWarning(false);
    }, []);

    /**
     * Restart from current word with new settings
     */
    const restartFromCurrentWord = useCallback(() => {
        if (!isPlaying || isPaused) return;

        const currentBlock = activeBlockIndexRef.current;
        const currentWord = currentWordIndexRef.current;

        if (currentBlock < 0) return;

        // Increment utterance ID to invalidate the current utterance's callbacks
        currentUtteranceIdRef.current = ++utteranceIdRef.current;
        window.speechSynthesis.cancel();

        // 50ms delay: Web Speech API requires a tick after cancel() before new speak()
        setTimeout(() => {
            playBlockFromWord(currentBlock, Math.max(0, currentWord));
        }, 50);
    }, [isPlaying, isPaused, playBlockFromWord]);

    const setPlaybackRate = useCallback((rate: number) => {
        setPlaybackRateState(rate);
        playbackRateRef.current = rate;

        if (isPlaying && !isPaused && activeBlockIndexRef.current >= 0) {
            restartFromCurrentWord();
        }
    }, [isPlaying, isPaused, restartFromCurrentWord]);

    const setVoice = useCallback((index: number) => {
        setSelectedVoiceIndex(index);
        selectedVoiceRef.current = availableVoices[index] || null;

        if (isPlaying && !isPaused && activeBlockIndexRef.current >= 0) {
            restartFromCurrentWord();
        }
    }, [availableVoices, isPlaying, isPaused, restartFromCurrentWord]);

    const setVolume = useCallback((vol: number) => {
        const clampedVol = Math.max(0, Math.min(1, vol));
        setVolumeState(clampedVol);
        volumeRef.current = clampedVol;

        if (isPlaying && !isPaused && activeBlockIndexRef.current >= 0) {
            restartFromCurrentWord();
        }
    }, [isPlaying, isPaused, restartFromCurrentWord]);

    /** Skip to the next block (paragraph/heading/list item) */
    const skipForward = useCallback(() => {
        if (!isPlaying) return;
        const nextBlock = activeBlockIndexRef.current + 1;
        if (nextBlock >= blocksRef.current.length) return;

        clearFallbackTimers();
        currentUtteranceIdRef.current = ++utteranceIdRef.current;
        window.speechSynthesis.cancel();

        // If paused, stay paused but move position
        if (isPaused) {
            setActiveBlockIndex(nextBlock);
            activeBlockIndexRef.current = nextBlock;
            setCurrentWordIndex(0);
            currentWordIndexRef.current = 0;
            updateWordStyles(nextBlock, 0);
            blocksRef.current[nextBlock]?.element.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            // 50ms delay: Web Speech API requires a tick after cancel() before new speak()
            setTimeout(() => playBlockFromWord(nextBlock, 0), 50);
        }
    }, [isPlaying, isPaused, playBlockFromWord, updateWordStyles, clearFallbackTimers]);

    /** Skip to the previous block (or restart current block) */
    const skipBackward = useCallback(() => {
        if (!isPlaying) return;
        const current = activeBlockIndexRef.current;
        // If we're past the first word, restart current block; otherwise go to previous
        const targetBlock = currentWordIndexRef.current > 2 ? current : Math.max(0, current - 1);

        clearFallbackTimers();
        currentUtteranceIdRef.current = ++utteranceIdRef.current;
        window.speechSynthesis.cancel();

        if (isPaused) {
            setActiveBlockIndex(targetBlock);
            activeBlockIndexRef.current = targetBlock;
            setCurrentWordIndex(0);
            currentWordIndexRef.current = 0;
            updateWordStyles(targetBlock, 0);
            blocksRef.current[targetBlock]?.element.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            // 50ms delay: Web Speech API requires a tick after cancel() before new speak()
            setTimeout(() => playBlockFromWord(targetBlock, 0), 50);
        }
    }, [isPlaying, isPaused, playBlockFromWord, updateWordStyles, clearFallbackTimers]);

    const value: VoiceReadingContextType = {
        isPlaying,
        isPaused,
        activeBlockIndex,
        currentWordIndex,
        totalBlocks,
        availableVoices,
        selectedVoiceIndex,
        playbackRate,
        volume,
        hasLocaleVoices,
        noVoicesAtAll: availableVoices.length === 0,
        showNoVoicesWarning,
        dismissNoVoicesWarning,
        toggleSpeech,
        pauseSpeech,
        resumeSpeech,
        setPlaybackRate,
        setVoice,
        setVolume,
        stopSpeech,
        skipForward,
        skipBackward,
    };

    return (
        <VoiceReadingContext.Provider value={value}>
            {children}
        </VoiceReadingContext.Provider>
    );
}

export default VoiceReadingContext;
