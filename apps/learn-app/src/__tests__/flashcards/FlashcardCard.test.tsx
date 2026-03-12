import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FlashcardCard from "@/components/flashcards/FlashcardCard";
import type { FlashcardCard as FlashcardCardType } from "@/components/flashcards/types";

vi.mock("react-markdown", () => ({
  default: ({ children }: { children: string }) =>
    React.createElement("div", { "data-testid": "markdown" }, children),
}));

const baseCard: FlashcardCardType = {
  id: "test-card-1",
  front: "What is React?",
  back: "A JavaScript library for building user interfaces",
};

const cardWithWhy: FlashcardCardType = {
  ...baseCard,
  id: "test-card-why",
  why: "Understanding React is foundational for modern web development",
};

describe("FlashcardCard", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
      })),
    });
  });

  it("triggers flip on click", async () => {
    const onFlip = vi.fn();
    render(
      <FlashcardCard
        card={baseCard}
        isFlipped={false}
        onFlip={onFlip}
        cardNumber={1}
        totalCards={5}
      />,
    );

    const region = screen.getByRole("region");
    await userEvent.click(region);
    expect(onFlip).toHaveBeenCalledTimes(1);
  });

  it('renders "why" field when present', () => {
    render(
      <FlashcardCard
        card={cardWithWhy}
        isFlipped={true}
        onFlip={vi.fn()}
        cardNumber={1}
        totalCards={5}
      />,
    );

    expect(screen.getByText("Why?")).toBeInTheDocument();
    expect(screen.getByText(cardWithWhy.why!)).toBeInTheDocument();
  });

  it('"why" field absent when not in data', () => {
    render(
      <FlashcardCard
        card={baseCard}
        isFlipped={true}
        onFlip={vi.fn()}
        cardNumber={1}
        totalCards={5}
      />,
    );

    expect(screen.queryByText("Why?")).not.toBeInTheDocument();
  });

  it("renders only the active side of the card", () => {
    render(
      <FlashcardCard
        card={baseCard}
        isFlipped={false}
        onFlip={vi.fn()}
        cardNumber={1}
        totalCards={5}
      />,
    );

    expect(screen.getByText(baseCard.front)).toBeInTheDocument();
    expect(screen.queryByText(baseCard.back)).not.toBeInTheDocument();
  });

  it("shows the answer without leaving the question rendered underneath", () => {
    render(
      <FlashcardCard
        card={baseCard}
        isFlipped={true}
        onFlip={vi.fn()}
        cardNumber={1}
        totalCards={5}
      />,
    );

    expect(screen.getByText(baseCard.back)).toBeInTheDocument();
    expect(screen.queryByText(baseCard.front)).not.toBeInTheDocument();
  });
});
