import { useEffect, useRef, useCallback } from "react";

const STORAGE_PREFIX = "exercise_prompt";
const MANIFEST_KEY = "__fields";
const DEBOUNCE_MS = 500;

function storageKey(id: string, fieldName: string): string {
  return `${STORAGE_PREFIX}:${id}:${fieldName}`;
}

function manifestKey(id: string): string {
  return storageKey(id, MANIFEST_KEY);
}

/**
 * Hydrate field values from localStorage for a given exercise ID.
 * Returns a Map of fieldName -> value.
 */
export function hydrateFromStorage(id: string): Map<string, string> {
  if (typeof window === "undefined") return new Map();
  try {
    const raw = localStorage.getItem(manifestKey(id));
    if (!raw) return new Map();
    const fieldNames: string[] = JSON.parse(raw);
    const result = new Map<string, string>();
    for (const name of fieldNames) {
      const val = localStorage.getItem(storageKey(id, name));
      if (val) result.set(name, val);
    }
    return result;
  } catch {
    return new Map();
  }
}

/**
 * Clear all persisted field values for a given exercise ID.
 */
export function clearStorage(id: string): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(manifestKey(id));
    if (raw) {
      const fieldNames: string[] = JSON.parse(raw);
      for (const name of fieldNames) {
        localStorage.removeItem(storageKey(id, name));
      }
    }
    localStorage.removeItem(manifestKey(id));
  } catch {
    // Ignore storage errors
  }
}

/**
 * Hook that persists field values to localStorage with debounce.
 */
export function useFieldPersistence(
  id: string,
  fieldValues: Map<string, string>,
): void {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const persist = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      const fieldNames = Array.from(fieldValues.keys());
      localStorage.setItem(manifestKey(id), JSON.stringify(fieldNames));
      for (const [name, value] of fieldValues) {
        localStorage.setItem(storageKey(id, name), value);
      }
    } catch {
      // Ignore storage errors (quota exceeded, etc.)
    }
  }, [id, fieldValues]);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(persist, DEBOUNCE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [persist]);
}
