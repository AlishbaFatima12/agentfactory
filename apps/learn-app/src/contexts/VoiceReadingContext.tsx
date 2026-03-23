/**
 * VoiceReadingContext
 *
 * Provides sentence-level reading with speech synthesis and CSS Highlight API highlighting.
 * Each sentence is spoken as a separate utterance, eliminating word-level sync drift.
 * Supports pause/resume and real-time volume/speed changes that continue from current sentence.
 */

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from "react";

interface VoiceReadingContextType {
  // Playback state
  isPlaying: boolean;
  isPaused: boolean;
  activeBlockIndex: number;
  currentSentenceIndex: number;

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

interface TextBlock {
  element: Element;
  text: string;
  sentences: import("@/utils/sentenceSplitter").Sentence[];
}

import { LOCALE_LANG_MAP, PREFERRED_VOICES } from "@/utils/voiceLocaleConfig";
import {
  splitIntoSentences,
  createSentenceRange,
} from "@/utils/sentenceSplitter";

/**
 * Tokenize text into "words" for highlighting.
 * - For Latin/space-separated scripts: splits on whitespace (like before)
 * - For CJK (Chinese/Japanese/Korean): each character is a separate token
 * - Mixed text handles both (e.g., "构建 Digital FTE" → ["构", "建", "Digital", "FTE"])
 *
 * Returns array of { word, start, end } with character offsets into the source text.
 */
export function tokenizeText(
  text: string,
): { word: string; start: number; end: number }[] {
  const CJK_REGEX =
    /[\u2E80-\u9FFF\uF900-\uFAFF\u3040-\u30FF\u31F0-\u31FF\uAC00-\uD7AF]/;
  const tokens: { word: string; start: number; end: number }[] = [];
  // Match: CJK individual chars OR non-space sequences (words)
  const regex =
    /([\u2E80-\u9FFF\uF900-\uFAFF\u3040-\u30FF\u31F0-\u31FF\uAC00-\uD7AF]|\S+)/g;
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
      tokens.push({
        word: token,
        start: match.index,
        end: match.index + token.length,
      });
    }
  }
  return tokens;
}

export function VoiceReadingProvider({
  children,
  locale = "en",
}: {
  children: React.ReactNode;
  locale?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeBlockIndex, setActiveBlockIndex] = useState(-1);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(-1);

  const [availableVoices, setAvailableVoices] = useState<
    SpeechSynthesisVoice[]
  >([]);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);
  const [playbackRate, setPlaybackRateState] = useState(1.0);
  const [volume, setVolumeState] = useState(1.0);
  const [totalBlocks, setTotalBlocks] = useState(0);
  const [showNoVoicesWarning, setShowNoVoicesWarning] = useState(false);

  const blocksRef = useRef<TextBlock[]>([]);
  // Cache key: article textContent hash to skip re-parsing when content hasn't changed
  const cachedContentHashRef = useRef<string>("");

  // Use refs for current settings
  const playbackRateRef = useRef(1.0);
  const volumeRef = useRef(1.0);
  const selectedVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Track current position with refs
  const activeBlockIndexRef = useRef(-1);
  const currentSentenceIndexRef = useRef(-1);

  // Synchronous pause guard — checked in callbacks to skip updates while paused
  const isPausedRef = useRef(false);

  // Chrome keepalive: re-calls pause() every 10s to prevent 15-second auto-resume
  const chromeKeepAliveRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );

  // Unique ID for each utterance to prevent stale callbacks
  const utteranceIdRef = useRef(0);
  const currentUtteranceIdRef = useRef(0);

  // Guard against rapid skip clicks queuing multiple utterances
  const skipInProgressRef = useRef(false);

  // Polling interval for extension-injected voices
  const voicePollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // CSS Custom Highlight API support detection
  const supportsHighlightAPI = useRef(
    typeof window !== "undefined" &&
      typeof CSS !== "undefined" &&
      "highlights" in CSS,
  );

  /** Clear CSS Highlight API highlights */
  const clearHighlights = useCallback(() => {
    if (typeof CSS !== "undefined" && "highlights" in CSS) {
      CSS.highlights.delete("voice-sentence");
    }
  }, []);

  /** Full playback reset — cancels speech, clears all state and styling */
  const resetPlayback = useCallback(() => {
    if (chromeKeepAliveRef.current) {
      clearInterval(chromeKeepAliveRef.current);
      chromeKeepAliveRef.current = null;
    }
    currentUtteranceIdRef.current = ++utteranceIdRef.current;
    window.speechSynthesis.cancel();
    window.speechSynthesis.cancel();
    clearHighlights();
    setIsPlaying(false);
    setIsPaused(false);
    isPausedRef.current = false;
    setActiveBlockIndex(-1);
    activeBlockIndexRef.current = -1;
    setCurrentSentenceIndex(-1);
    currentSentenceIndexRef.current = -1;
    document.querySelectorAll("[data-voice-block]").forEach((el) => {
      el.classList.remove("voice-block--active", "voice-block--inactive");
    });
  }, [clearHighlights]);

  /** Highlight a sentence within a block element using CSS Custom Highlight API */
  const updateSentenceHighlight = useCallback(
    (
      element: Element,
      sentence: { startOffset: number; endOffset: number },
    ) => {
      if (!supportsHighlightAPI.current) return;
      const range = createSentenceRange(
        element,
        sentence.startOffset,
        sentence.endOffset,
      );
      if (!range) return;
      const highlight = new Highlight(range);
      CSS.highlights.set("voice-sentence", highlight);
    },
    [],
  );

  /** Update block-level active/inactive styling */
  const updateBlockStyles = useCallback((blockIdx: number) => {
    document.querySelectorAll("[data-voice-block]").forEach((el) => {
      const idx = parseInt(el.getAttribute("data-voice-block") || "-1", 10);
      if (idx === blockIdx) {
        el.classList.add("voice-block--active");
        el.classList.remove("voice-block--inactive");
      } else {
        el.classList.remove("voice-block--active");
        el.classList.add("voice-block--inactive");
      }
    });
  }, []);

  // Load voices on mount, with polling fallback for extension-injected voices
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const langPrefix = LOCALE_LANG_MAP[locale] || "en";

    const selectBestVoice = (voices: SpeechSynthesisVoice[]) => {
      const preferred = PREFERRED_VOICES[locale] || PREFERRED_VOICES.en;

      // 1. Try preferred voices for this locale
      let idx = voices.findIndex((v) =>
        preferred.some((name) => v.name.includes(name)),
      );

      // 2. Fallback: first voice matching locale language
      if (idx < 0) {
        idx = voices.findIndex((v) => v.lang.startsWith(langPrefix));
      }

      // 3. Ultimate fallback: first voice
      if (idx < 0) idx = 0;

      setSelectedVoiceIndex(idx);
      selectedVoiceRef.current = voices[idx];
    };

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        setAvailableVoices(voices);
        selectBestVoice(voices);

        // If locale voices now available, stop polling
        if (
          voices.some((v) => v.lang.startsWith(langPrefix)) &&
          voicePollRef.current
        ) {
          clearInterval(voicePollRef.current);
          voicePollRef.current = null;
        }
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    // Polling fallback: extensions (e.g., Read Aloud) inject voices asynchronously
    // and onvoiceschanged doesn't always fire. Poll every 1s for up to 15s.
    let pollCount = 0;
    const MAX_POLLS = 15;
    voicePollRef.current = setInterval(() => {
      pollCount++;
      const voices = window.speechSynthesis.getVoices();
      const hasLocale = voices.some((v) => v.lang.startsWith(langPrefix));

      if (voices.length > 0) {
        setAvailableVoices((prev) => {
          if (prev.length !== voices.length) {
            selectBestVoice(voices);
            return voices;
          }
          return prev;
        });
      }

      // Stop polling when locale voices found or max time reached
      if (hasLocale || pollCount >= MAX_POLLS) {
        if (voicePollRef.current) {
          clearInterval(voicePollRef.current);
          voicePollRef.current = null;
        }
      }
    }, 1000);

    return () => {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      clearHighlights();
      if (chromeKeepAliveRef.current) {
        clearInterval(chromeKeepAliveRef.current);
        chromeKeepAliveRef.current = null;
      }
      if (voicePollRef.current) {
        clearInterval(voicePollRef.current);
        voicePollRef.current = null;
      }
    };
  }, [locale, clearHighlights]);

  const selectedVoice = availableVoices[selectedVoiceIndex] || null;

  // Sync selectedVoiceRef when derived value changes (no inline setter available)
  useEffect(() => {
    selectedVoiceRef.current = selectedVoice;
  }, [selectedVoice]);

  const parseArticleContent = useCallback((): TextBlock[] => {
    const article = document.querySelector("article");
    if (!article) return [];

    // Target only the main markdown content area, skip breadcrumbs/nav/header chrome
    const contentArea =
      article.querySelector(
        ".markdown, [class*='mdxPageWrapper'], [class*='docItemContent']",
      ) || article;

    const blockSelectors =
      "p, h1, h2, h3, h4, h5, h6, li, blockquote > p, blockquote";
    const elements = contentArea.querySelectorAll(blockSelectors);

    const blocks: TextBlock[] = [];

    elements.forEach((element) => {
      const text = element.textContent?.trim() || "";
      if (!text) return;

      // Skip elements inside nav, breadcrumbs, table of contents, or other UI chrome
      if (
        element.closest(
          "nav, [class*='breadcrumb'], [class*='Breadcrumb'], [class*='tableOfContents'], [class*='tocCollapsible'], header, footer",
        )
      ) {
        return;
      }

      if (
        element.tagName === "P" &&
        element.parentElement?.tagName === "BLOCKQUOTE"
      ) {
        return;
      }

      // Skip <p> nested inside <p> (MDX hydration bug) to prevent double-read.
      // Only targets the specific <p>-in-<p> case — <p> inside <li> is valid HTML.
      if (element.tagName === "P" && element.parentElement?.tagName === "P") {
        return;
      }

      const sentences = splitIntoSentences(text);
      if (sentences.length > 0) {
        element.setAttribute("data-voice-block", String(blocks.length));
        blocks.push({
          element,
          text,
          sentences,
        });
      }
    });

    return blocks;
  }, []);

  /**
   * Play one sentence at a time. When a sentence finishes, advance to the next.
   * When all sentences in a block are done, advance to the next block.
   */
  const playSentence = useCallback(
    (blockIndex: number, sentenceIndex: number) => {
      const blocks = blocksRef.current;

      if (blockIndex >= blocks.length) {
        resetPlayback();
        return;
      }

      const block = blocks[blockIndex];

      if (sentenceIndex >= block.sentences.length) {
        // All sentences in this block done — advance to next block
        playSentence(blockIndex + 1, 0);
        return;
      }

      const sentence = block.sentences[sentenceIndex];

      // Update state
      setActiveBlockIndex(blockIndex);
      activeBlockIndexRef.current = blockIndex;
      setCurrentSentenceIndex(sentenceIndex);
      currentSentenceIndexRef.current = sentenceIndex;
      updateBlockStyles(blockIndex);
      updateSentenceHighlight(block.element, sentence);

      // Scroll first sentence of each block into view
      if (sentenceIndex === 0) {
        block.element.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      // Generate unique ID for this utterance
      const thisUtteranceId = ++utteranceIdRef.current;
      currentUtteranceIdRef.current = thisUtteranceId;

      const utterance = new SpeechSynthesisUtterance(sentence.text);

      if (selectedVoiceRef.current) {
        utterance.voice = selectedVoiceRef.current;
      }
      utterance.rate = playbackRateRef.current;
      utterance.pitch = 1.0;
      utterance.volume = volumeRef.current;

      utterance.onend = () => {
        if (currentUtteranceIdRef.current !== thisUtteranceId) return;
        playSentence(blockIndex, sentenceIndex + 1);
      };

      utterance.onerror = (e) => {
        if (currentUtteranceIdRef.current !== thisUtteranceId) return;
        if (e.error === "interrupted" || e.error === "canceled") return;
        console.error("Speech error:", e.error);
        // Try to continue with next sentence
        playSentence(blockIndex, sentenceIndex + 1);
      };

      // Chrome keepalive: pause/resume every 10s to prevent stall
      // See: https://bugs.chromium.org/p/chromium/issues/detail?id=335907
      if (chromeKeepAliveRef.current) {
        clearInterval(chromeKeepAliveRef.current);
      }
      chromeKeepAliveRef.current = setInterval(() => {
        if (currentUtteranceIdRef.current !== thisUtteranceId) {
          if (chromeKeepAliveRef.current) {
            clearInterval(chromeKeepAliveRef.current);
            chromeKeepAliveRef.current = null;
          }
          return;
        }
        if (!isPausedRef.current && window.speechSynthesis.speaking) {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }
      }, 10000);

      window.speechSynthesis.speak(utterance);
    },
    [clearHighlights, updateBlockStyles, updateSentenceHighlight],
  );

  const playBlock = useCallback(
    (blockIndex: number) => {
      playSentence(blockIndex, 0);
    },
    [playSentence],
  );

  // Whether voices exist for the current locale
  const langPrefix = LOCALE_LANG_MAP[locale] || "en";
  const hasLocaleVoices = useMemo(() => {
    return availableVoices.some((v) => v.lang.startsWith(langPrefix));
  }, [availableVoices, langPrefix]);

  const toggleSpeech = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    if (isPlaying) {
      resetPlayback();
      return;
    }

    // Block playback if no voices available for the current locale
    if (!hasLocaleVoices) {
      setShowNoVoicesWarning(true);
      return;
    }

    // Cache: skip re-parsing if article content hasn't changed since last play.
    // Use prefix + length as fingerprint to avoid false-matches on SPA navigation.
    const article = document.querySelector("article");
    const text = article?.textContent || "";
    const contentHash =
      window.location.pathname + "|" + text.slice(0, 200) + "|" + text.length;
    let blocks: TextBlock[];
    if (
      contentHash === cachedContentHashRef.current &&
      blocksRef.current.length > 0
    ) {
      blocks = blocksRef.current;
    } else {
      blocks = parseArticleContent();
      if (blocks.length === 0) return;
      blocksRef.current = blocks;
      cachedContentHashRef.current = contentHash;
      setTotalBlocks(blocks.length);
    }
    // Mark blocks for styling
    blocks.forEach((block, idx) => {
      block.element.setAttribute("data-voice-block", String(idx));
    });

    setIsPlaying(true);
    setIsPaused(false);
    playBlock(0);
  }, [
    isPlaying,
    hasLocaleVoices,
    parseArticleContent,
    playBlock,
    resetPlayback,
  ]);

  const pauseSpeech = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    if (!isPlaying || isPaused) return;

    window.speechSynthesis.pause();
    setIsPaused(true);
  }, [isPlaying, isPaused]);

  const resumeSpeech = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    if (!isPlaying || !isPaused) return;

    // Clear Chrome keepalive before resuming — it will be re-created by the active sentence
    if (chromeKeepAliveRef.current) {
      clearInterval(chromeKeepAliveRef.current);
      chromeKeepAliveRef.current = null;
    }

    // Set synchronous ref BEFORE resume() so handlers see it immediately
    isPausedRef.current = false;
    setIsPaused(false);
    window.speechSynthesis.resume();
  }, [isPlaying, isPaused]);

  const stopSpeech = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    resetPlayback();
  }, [resetPlayback]);

  const dismissNoVoicesWarning = useCallback(() => {
    setShowNoVoicesWarning(false);
  }, []);

  /**
   * Restart from current sentence with new settings (voice/rate/volume change)
   */
  const restartFromCurrentSentence = useCallback(() => {
    if (!isPlaying || isPaused) return;

    const currentBlock = activeBlockIndexRef.current;
    const currentSentence = currentSentenceIndexRef.current;

    if (currentBlock < 0) return;

    // Increment utterance ID FIRST to invalidate all pending callbacks
    currentUtteranceIdRef.current = ++utteranceIdRef.current;

    if (chromeKeepAliveRef.current) {
      clearInterval(chromeKeepAliveRef.current);
      chromeKeepAliveRef.current = null;
    }

    // Double cancel: Chrome sometimes needs two cancel() calls to fully
    // stop speech when changing voice. First cancel triggers onend/onerror
    // (which are guarded by utteranceId), second ensures queue is empty.
    window.speechSynthesis.cancel();
    window.speechSynthesis.cancel();

    // 250ms delay: Chrome/Firefox can wipe out speak() calls that follow
    // directly after cancel().
    setTimeout(() => {
      // Re-check utterance ID — if another restart happened during the delay,
      // this one is stale and should not proceed
      if (currentUtteranceIdRef.current !== utteranceIdRef.current) return;
      playSentence(currentBlock, Math.max(0, currentSentence));
    }, 250);
  }, [isPlaying, isPaused, playSentence]);

  const setPlaybackRate = useCallback(
    (rate: number) => {
      setPlaybackRateState(rate);
      playbackRateRef.current = rate;

      if (isPlaying && !isPaused && activeBlockIndexRef.current >= 0) {
        restartFromCurrentSentence();
      }
    },
    [isPlaying, isPaused, restartFromCurrentSentence],
  );

  const setVoice = useCallback(
    (index: number) => {
      setSelectedVoiceIndex(index);
      selectedVoiceRef.current = availableVoices[index] || null;

      if (isPlaying && !isPaused && activeBlockIndexRef.current >= 0) {
        restartFromCurrentSentence();
      }
    },
    [availableVoices, isPlaying, isPaused, restartFromCurrentSentence],
  );

  const setVolume = useCallback(
    (vol: number) => {
      const clampedVol = Math.max(0, Math.min(1, vol));
      setVolumeState(clampedVol);
      volumeRef.current = clampedVol;

      if (isPlaying && !isPaused && activeBlockIndexRef.current >= 0) {
        restartFromCurrentSentence();
      }
    },
    [isPlaying, isPaused, restartFromCurrentSentence],
  );

  /** Navigate to a specific block during playback */
  const skipToBlock = useCallback(
    (targetBlock: number) => {
      if (!isPlaying || skipInProgressRef.current) return;

      skipInProgressRef.current = true;
      currentUtteranceIdRef.current = ++utteranceIdRef.current;
      window.speechSynthesis.cancel();

      if (isPaused) {
        setActiveBlockIndex(targetBlock);
        activeBlockIndexRef.current = targetBlock;
        setCurrentSentenceIndex(0);
        currentSentenceIndexRef.current = 0;
        updateBlockStyles(targetBlock);
        clearHighlights();
        blocksRef.current[targetBlock]?.element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        skipInProgressRef.current = false;
      } else {
        setTimeout(() => {
          playSentence(targetBlock, 0);
          skipInProgressRef.current = false;
        }, 50);
      }
    },
    [isPlaying, isPaused, playSentence, updateBlockStyles, clearHighlights],
  );

  const skipForward = useCallback(() => {
    const nextBlock = activeBlockIndexRef.current + 1;
    if (nextBlock < blocksRef.current.length) skipToBlock(nextBlock);
  }, [skipToBlock]);

  const skipBackward = useCallback(() => {
    // Mid-block: restart at sentence 0. At sentence 0: go to previous block.
    const targetBlock =
      currentSentenceIndexRef.current > 0
        ? activeBlockIndexRef.current
        : Math.max(0, activeBlockIndexRef.current - 1);
    skipToBlock(targetBlock);
  }, [skipToBlock]);

  const noVoicesAtAll = availableVoices.length === 0;

  const value: VoiceReadingContextType = useMemo(
    () => ({
      isPlaying,
      isPaused,
      activeBlockIndex,
      currentSentenceIndex,
      totalBlocks,
      availableVoices,
      selectedVoiceIndex,
      playbackRate,
      volume,
      hasLocaleVoices,
      noVoicesAtAll,
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
    }),
    [
      isPlaying,
      isPaused,
      activeBlockIndex,
      currentSentenceIndex,
      totalBlocks,
      availableVoices,
      selectedVoiceIndex,
      playbackRate,
      volume,
      hasLocaleVoices,
      noVoicesAtAll,
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
    ],
  );

  return (
    <VoiceReadingContext.Provider value={value}>
      {children}
    </VoiceReadingContext.Provider>
  );
}

export default VoiceReadingContext;
