/**
 * CSS Custom Highlight API type declarations.
 * https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API
 *
 * Browser support: Chrome 105+, Edge 105+, Safari 17.2+, Firefox 119+
 */

interface HighlightRegistry {
  set(name: string, highlight: Highlight): void;
  get(name: string): Highlight | undefined;
  has(name: string): boolean;
  delete(name: string): boolean;
  clear(): void;
  forEach(
    callbackfn: (value: Highlight, key: string, map: HighlightRegistry) => void,
  ): void;
  readonly size: number;
}

declare class Highlight {
  constructor(...ranges: AbstractRange[]);
  add(range: AbstractRange): void;
  delete(range: AbstractRange): boolean;
  has(range: AbstractRange): boolean;
  clear(): void;
  priority: number;
  readonly size: number;
}

interface CSS {
  highlights: HighlightRegistry;
}
