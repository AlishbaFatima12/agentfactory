import { useCallback } from "react";
import React from "react";

/**
 * Walk the React children tree and compose a prompt string.
 * - Text nodes: emit their text content
 * - PromptField elements: substitute field value or [placeholder]
 * - Other elements: recurse into their children
 */
export function composePrompt(
  children: React.ReactNode,
  fieldValues: Map<string, string>,
): string {
  const segments: string[] = [];

  function walk(node: React.ReactNode): void {
    if (node == null || typeof node === "boolean") return;
    if (typeof node === "string" || typeof node === "number") {
      segments.push(String(node));
      return;
    }
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<{
        name?: string;
        placeholder?: string;
        children?: React.ReactNode;
      }>;
      // Check if this is a PromptField by looking for name + placeholder props
      // and the displayName on the type
      const type = element.type;
      const displayName =
        typeof type === "function"
          ? (type as { displayName?: string }).displayName
          : undefined;

      if (displayName === "PromptField" && element.props.name) {
        const value = fieldValues.get(element.props.name);
        if (value && value.trim()) {
          segments.push(value);
        } else {
          segments.push(`[${element.props.placeholder || element.props.name}]`);
        }
        return;
      }
      // Recurse into children of other elements
      if (element.props.children) {
        walk(element.props.children);
      }
    }
  }

  walk(children);
  return segments.join("");
}

const PROVIDER_URLS: Record<string, { base: string; query: string }> = {
  chatgpt: { base: "https://chatgpt.com/", query: "q" },
  claude: { base: "https://claude.ai/new", query: "q" },
  gemini: { base: "https://gemini.google.com/app", query: "q" },
};

const URL_CHAR_LIMIT = 6000;

interface ProviderAction {
  openUrl: string;
  copied: boolean;
}

/**
 * Get the action for a given provider and prompt.
 * Returns the URL to open and whether the prompt was copied to clipboard.
 */
export function getProviderAction(
  provider: string,
  prompt: string,
): ProviderAction {
  const config = PROVIDER_URLS[provider];
  if (!config) {
    return { openUrl: "", copied: false };
  }

  const encoded = encodeURIComponent(prompt);
  if (encoded.length <= URL_CHAR_LIMIT) {
    return {
      openUrl: `${config.base}?${config.query}=${encoded}`,
      copied: false,
    };
  }

  // Fallback: copy to clipboard and open base URL
  return {
    openUrl: config.base,
    copied: true,
  };
}

/**
 * Hook that returns a handler for provider button clicks.
 */
export function useProviderClick(
  children: React.ReactNode,
  fieldValues: Map<string, string>,
  onToast: (message: string) => void,
) {
  return useCallback(
    (provider: string) => {
      const prompt = composePrompt(children, fieldValues);
      const action = getProviderAction(provider, prompt);

      if (action.copied) {
        navigator.clipboard.writeText(prompt).then(() => {
          const label =
            provider === "chatgpt"
              ? "ChatGPT"
              : provider === "claude"
                ? "Claude"
                : "Gemini";
          onToast(`Prompt copied to clipboard -- paste into ${label}`);
        });
      }

      if (action.openUrl) {
        window.open(action.openUrl, "_blank", "noopener,noreferrer");
      }
    },
    [children, fieldValues, onToast],
  );
}
