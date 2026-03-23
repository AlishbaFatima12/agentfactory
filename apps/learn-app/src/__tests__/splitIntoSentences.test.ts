import { describe, it, expect } from "vitest";
import { splitIntoSentences } from "../utils/sentenceSplitter";

describe("splitIntoSentences", () => {
  it("splits on periods followed by space", () => {
    const result = splitIntoSentences("First sentence. Second sentence.");
    expect(result).toHaveLength(2);
    expect(result[0].text).toBe("First sentence.");
    expect(result[1].text).toBe("Second sentence.");
  });

  it("splits on question marks and exclamation marks", () => {
    const result = splitIntoSentences("What is this? It is great! Indeed.");
    expect(result).toHaveLength(3);
    expect(result[0].text).toBe("What is this?");
    expect(result[1].text).toBe("It is great!");
    expect(result[2].text).toBe("Indeed.");
  });

  it("preserves abbreviations (Dr., Mr., etc.)", () => {
    const result = splitIntoSentences("Dr. Smith went home. He was tired.");
    expect(result).toHaveLength(2);
    expect(result[0].text).toContain("Dr. Smith");
  });

  it("preserves acronyms (U.S., A.I.)", () => {
    const result = splitIntoSentences(
      "The U.S. policy is clear. It was decided.",
    );
    expect(result).toHaveLength(2);
    expect(result[0].text).toContain("U.S.");
  });

  it("handles CJK sentence terminators", () => {
    const result = splitIntoSentences("第一句话。第二句话！第三句话？");
    expect(result).toHaveLength(3);
    expect(result[0].text).toBe("第一句话。");
    expect(result[1].text).toBe("第二句话！");
    expect(result[2].text).toBe("第三句话？");
  });

  it("handles Urdu full stop and question mark", () => {
    const result = splitIntoSentences("پہلا جملہ۔ دوسرا جملہ؟");
    expect(result).toHaveLength(2);
  });

  it("returns full text as one sentence when no punctuation", () => {
    const result = splitIntoSentences("A heading without punctuation");
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe("A heading without punctuation");
  });

  it("returns empty array for empty/whitespace input", () => {
    expect(splitIntoSentences("")).toHaveLength(0);
    expect(splitIntoSentences("   ")).toHaveLength(0);
  });

  it("handles trailing text without punctuation", () => {
    const result = splitIntoSentences("First sentence. And then some more");
    expect(result).toHaveLength(2);
    expect(result[1].text).toBe("And then some more");
  });

  it("provides correct offsets", () => {
    const text = "Hello world. Goodbye world.";
    const result = splitIntoSentences(text);
    expect(result[0].startOffset).toBe(0);
    expect(result[1].startOffset).toBeGreaterThan(0);
    // Text at offsets should match
    expect(text.slice(result[0].startOffset, result[0].endOffset).trim()).toBe(
      result[0].text,
    );
  });

  it("does not split on common words ending sentences (no, co, etc.)", () => {
    const result = splitIntoSentences("The answer is no. Next topic.");
    expect(result).toHaveLength(2);
    expect(result[0].text).toBe("The answer is no.");
  });

  it("handles single sentence with period at end", () => {
    const result = splitIntoSentences("Just one sentence.");
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe("Just one sentence.");
  });
});
