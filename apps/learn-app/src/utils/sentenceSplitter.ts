/**
 * Sentence splitting utilities for voice reading.
 *
 * Splits text into sentences for sentence-level TTS utterances and highlighting.
 * Handles English, CJK (Chinese/Japanese/Korean), Urdu/Arabic punctuation,
 * and common abbreviations.
 */

export interface Sentence {
  text: string;
  startOffset: number;
  endOffset: number;
}

/**
 * Common abbreviations that should NOT trigger a sentence split.
 * Matched case-insensitively against the word before the period.
 */
const ABBREVIATIONS = new Set([
  "mr",
  "mrs",
  "ms",
  "dr",
  "prof",
  "sr",
  "jr",
  "st",
  "vs",
  "etc",
  "approx",
  "dept",
  "est",
  "govt",
  "inc",
  "corp",
  "ltd",
  "co",
  "jan",
  "feb",
  "mar",
  "apr",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
  "fig",
  "eq",
  "no",
  "vol",
  "ch",
  "sec",
  "pt",
]);

/** Patterns like U.S., A.I., e.g., i.e. — letters with dots between them */
const ACRONYM_PATTERN = /^[a-zA-Z]\.([a-zA-Z]\.)+$/;

/**
 * Split text into sentences.
 *
 * Rules:
 * - English: split on . ! ? followed by whitespace or end-of-string
 * - CJK: split on 。！？ (no whitespace required after)
 * - Urdu/Arabic: split on ۔ (Urdu full stop) and ؟ (Arabic question mark)
 * - Abbreviations (Mr., Dr., U.S., etc.) do NOT trigger splits
 * - If no sentence boundaries found, returns the full text as one sentence
 */
export function splitIntoSentences(text: string): Sentence[] {
  if (!text || !text.trim()) return [];

  const sentences: Sentence[] = [];
  let sentenceStart = 0;

  // Regex for sentence-ending punctuation:
  // Group 1: CJK/Urdu terminators (no whitespace required)
  // Group 2: Western terminators (. ! ?) followed by whitespace or end
  const SENTENCE_END = /([。！？۔؟])|([.!?]+)(?:\s+|$)/g;

  let match;
  while ((match = SENTENCE_END.exec(text)) !== null) {
    const matchEnd = match.index + match[0].length;

    // For western periods, check if it's an abbreviation
    if (match[2] && match[2] === ".") {
      const beforePeriod = text.slice(sentenceStart, match.index);
      const lastWord = beforePeriod.split(/\s+/).pop() || "";

      // Skip abbreviations: "Dr.", "Mr.", etc.
      if (ABBREVIATIONS.has(lastWord.toLowerCase())) continue;

      // Skip acronyms: "U.S.", "A.I.", "e.g.", "i.e."
      if (ACRONYM_PATTERN.test(lastWord + ".")) continue;

      // Skip single uppercase letter + period (likely initial): "J. K. Rowling"
      if (/^[A-Z]$/.test(lastWord)) continue;
    }

    const sentenceText = text.slice(sentenceStart, matchEnd).trim();
    if (sentenceText) {
      sentences.push({
        text: sentenceText,
        startOffset: sentenceStart,
        endOffset: matchEnd,
      });
    }
    sentenceStart = matchEnd;
  }

  // Handle any remaining text after the last sentence boundary
  const remaining = text.slice(sentenceStart).trim();
  if (remaining) {
    sentences.push({
      text: remaining,
      startOffset: sentenceStart,
      endOffset: text.length,
    });
  }

  // If no splits happened, return the whole text as one sentence
  if (sentences.length === 0) {
    sentences.push({
      text: text.trim(),
      startOffset: 0,
      endOffset: text.length,
    });
  }

  return sentences;
}

/**
 * Create a DOM Range spanning from startOffset to endOffset within an element's text content.
 *
 * Uses TreeWalker to traverse text nodes, handling inline elements like
 * <strong>, <em>, <a>, <code> correctly. The offsets are character positions
 * in the element's textContent.
 *
 * Returns null if the range cannot be created (empty element, offsets out of bounds).
 */
export function createSentenceRange(
  element: Element,
  startOffset: number,
  endOffset: number,
): Range | null {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const range = document.createRange();

  let currentOffset = 0;
  let startSet = false;
  let node: Text | null;

  while ((node = walker.nextNode() as Text | null)) {
    const nodeLength = node.length;
    const nodeEnd = currentOffset + nodeLength;

    // Set range start
    if (!startSet && nodeEnd > startOffset) {
      range.setStart(node, startOffset - currentOffset);
      startSet = true;
    }

    // Set range end
    if (startSet && nodeEnd >= endOffset) {
      range.setEnd(node, Math.min(endOffset - currentOffset, nodeLength));
      return range;
    }

    currentOffset = nodeEnd;
  }

  // If we set start but ran out of nodes before end, extend to last node
  if (startSet) {
    const lastNode = walker.currentNode || element.lastChild;
    if (lastNode && lastNode.nodeType === Node.TEXT_NODE) {
      range.setEnd(lastNode, (lastNode as Text).length);
    }
    return range;
  }

  return null;
}
