import { describe, it, expect } from "vitest";
import { tokenizeText } from "@/contexts/VoiceReadingContext";

describe("tokenizeText", () => {
    it("returns empty array for empty string", () => {
        expect(tokenizeText("")).toEqual([]);
    });

    it("returns empty array for whitespace-only string", () => {
        expect(tokenizeText("   ")).toEqual([]);
    });

    it("tokenizes pure Latin text by whitespace", () => {
        const result = tokenizeText("Hello world");
        expect(result).toEqual([
            { word: "Hello", start: 0, end: 5 },
            { word: "world", start: 6, end: 11 },
        ]);
    });

    it("tokenizes single word", () => {
        const result = tokenizeText("Hello");
        expect(result).toEqual([{ word: "Hello", start: 0, end: 5 }]);
    });

    it("tokenizes pure CJK text character by character", () => {
        const result = tokenizeText("你好世界");
        expect(result).toEqual([
            { word: "你", start: 0, end: 1 },
            { word: "好", start: 1, end: 2 },
            { word: "世", start: 2, end: 3 },
            { word: "界", start: 3, end: 4 },
        ]);
    });

    it("tokenizes mixed CJK and Latin text", () => {
        const result = tokenizeText("构建 Digital FTE");
        expect(result).toEqual([
            { word: "构", start: 0, end: 1 },
            { word: "建", start: 1, end: 2 },
            { word: "Digital", start: 3, end: 10 },
            { word: "FTE", start: 11, end: 14 },
        ]);
    });

    it("handles CJK embedded in Latin token", () => {
        // e.g. "hello你好world" — no spaces
        const result = tokenizeText("hello你好world");
        expect(result).toEqual([
            { word: "hello", start: 0, end: 5 },
            { word: "你", start: 5, end: 6 },
            { word: "好", start: 6, end: 7 },
            { word: "world", start: 7, end: 12 },
        ]);
    });

    it("handles punctuation attached to words", () => {
        const result = tokenizeText("Hello, world!");
        expect(result).toEqual([
            { word: "Hello,", start: 0, end: 6 },
            { word: "world!", start: 7, end: 13 },
        ]);
    });

    it("handles multiple spaces between words", () => {
        const result = tokenizeText("Hello   world");
        expect(result).toEqual([
            { word: "Hello", start: 0, end: 5 },
            { word: "world", start: 8, end: 13 },
        ]);
    });

    it("handles Urdu/Arabic script text", () => {
        const result = tokenizeText("اردو متن");
        expect(result).toEqual([
            { word: "اردو", start: 0, end: 4 },
            { word: "متن", start: 5, end: 8 },
        ]);
    });

    it("handles Japanese Hiragana", () => {
        // Hiragana is in CJK range — each char is a token
        const result = tokenizeText("こんにちは");
        expect(result).toEqual([
            { word: "こ", start: 0, end: 1 },
            { word: "ん", start: 1, end: 2 },
            { word: "に", start: 2, end: 3 },
            { word: "ち", start: 3, end: 4 },
            { word: "は", start: 4, end: 5 },
        ]);
    });

    it("handles Korean Hangul", () => {
        const result = tokenizeText("안녕하세요");
        expect(result).toEqual([
            { word: "안", start: 0, end: 1 },
            { word: "녕", start: 1, end: 2 },
            { word: "하", start: 2, end: 3 },
            { word: "세", start: 3, end: 4 },
            { word: "요", start: 4, end: 5 },
        ]);
    });

    it("preserves correct offsets for substring reconstruction", () => {
        const text = "Hello 世界 test";
        const tokens = tokenizeText(text);
        // Each token's word should match the substring at its offsets
        for (const token of tokens) {
            expect(text.substring(token.start, token.end)).toBe(token.word);
        }
    });

    it("handles numbers and special characters", () => {
        const result = tokenizeText("v2.0 $100");
        expect(result).toEqual([
            { word: "v2.0", start: 0, end: 4 },
            { word: "$100", start: 5, end: 9 },
        ]);
    });

    it("handles long real-world mixed content", () => {
        const text = "Agent Factory 是一个 AI 平台";
        const tokens = tokenizeText(text);
        // Verify no gaps or overlaps — all words reconstructable
        for (const token of tokens) {
            expect(text.substring(token.start, token.end)).toBe(token.word);
        }
        // Should have: Agent, Factory, 是, 一, 个, AI, 平, 台
        expect(tokens.length).toBe(8);
    });
});
