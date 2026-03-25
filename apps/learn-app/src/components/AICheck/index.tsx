import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useProgress } from "@/contexts/ProgressContext";
import { useAuth } from "@/contexts/AuthContext";
import { submitExercise, ExerciseSubmitError } from "@/lib/progress-api";
import { getAuthHeaders } from "@/lib/api-utils";
import type { ExerciseSubmitResponse, ScoreCard } from "@/lib/progress-types";
import {
  CheckCircle2,
  ExternalLink,
  Loader2,
  AlertCircle,
  Copy,
} from "lucide-react";
import styles from "./AICheck.module.css";

// ── Types ──

type AICheckState =
  | "idle"
  | "filling"
  | "ready-to-ask"
  | "asked"
  | "pasting"
  | "submitting"
  | "submitted"
  | "error";

interface AICheckProps {
  id: string;
  xp?: number;
  children: React.ReactNode;
}

// ── Constants ──

const STORAGE_PREFIX = "aicheck";
const DEBOUNCE_MS = 500;
const MIN_AI_OUTPUT_LENGTH = 50;
const MAX_AI_OUTPUT_LENGTH = 25000;

const PROVIDER_LABELS: Record<string, string> = {
  chatgpt: "ChatGPT",
  claude: "Claude",
};

const PROVIDER_URLS: Record<string, { base: string; query: string }> = {
  chatgpt: { base: "https://chatgpt.com/", query: "q" },
  claude: { base: "https://claude.ai/new", query: "q" },
};

const PROVIDERS = ["chatgpt", "claude"] as const;
const URL_CHAR_LIMIT = 14000;

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

// ── localStorage Helpers (SSR-safe) ──

function storageKey(id: string, key: string): string {
  return `${STORAGE_PREFIX}:${id}:${key}`;
}

function safeGet(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, value);
  } catch {
    // Ignore quota exceeded
  }
}

function safeRemove(key: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore
  }
}

function hydrateFields(id: string): Map<string, string> {
  const raw = safeGet(storageKey(id, "__fields"));
  if (!raw) {
    // Try migrating from old ExercisePrompt format
    return migrateFromExercisePrompt(id);
  }
  try {
    const fieldNames: string[] = JSON.parse(raw);
    const result = new Map<string, string>();
    for (const name of fieldNames) {
      const val = safeGet(storageKey(id, name));
      if (val) result.set(name, val);
    }
    return result;
  } catch {
    return new Map();
  }
}

function migrateFromExercisePrompt(id: string): Map<string, string> {
  const oldManifest = safeGet(`exercise_prompt:${id}:__fields`);
  if (!oldManifest) return new Map();
  try {
    const fieldNames: string[] = JSON.parse(oldManifest);
    const result = new Map<string, string>();
    for (const name of fieldNames) {
      const val = safeGet(`exercise_prompt:${id}:${name}`);
      if (val) result.set(name, val);
    }
    // Write to new format
    persistFields(id, result);
    // Clean up old keys
    for (const name of fieldNames) {
      safeRemove(`exercise_prompt:${id}:${name}`);
    }
    safeRemove(`exercise_prompt:${id}:__fields`);
    return result;
  } catch {
    return new Map();
  }
}

function persistFields(id: string, fields: Map<string, string>): void {
  const names = Array.from(fields.keys());
  safeSet(storageKey(id, "__fields"), JSON.stringify(names));
  for (const [name, value] of fields) {
    safeSet(storageKey(id, name), value);
  }
}

function persistMeta(
  id: string,
  provider: string | null,
  aiOutput: string,
  state: AICheckState,
): void {
  if (provider) safeSet(storageKey(id, "__provider"), provider);
  if (aiOutput) safeSet(storageKey(id, "__aiOutput"), aiOutput);
  if (state === "filling" || state === "asked" || state === "pasting") {
    safeSet(storageKey(id, "__state"), state);
  }
}

function clearAllStorage(id: string): void {
  const raw = safeGet(storageKey(id, "__fields"));
  if (raw) {
    try {
      const names: string[] = JSON.parse(raw);
      for (const name of names) safeRemove(storageKey(id, name));
    } catch {
      // Ignore
    }
  }
  safeRemove(storageKey(id, "__fields"));
  safeRemove(storageKey(id, "__provider"));
  safeRemove(storageKey(id, "__aiOutput"));
  safeRemove(storageKey(id, "__state"));
}

function saveResult(id: string, result: ExerciseSubmitResponse): void {
  try {
    safeSet(storageKey(id, "__result"), JSON.stringify(result));
  } catch {
    // Ignore
  }
}

function loadCachedResult(id: string): ExerciseSubmitResponse | null {
  const raw = safeGet(storageKey(id, "__result"));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ExerciseSubmitResponse;
  } catch {
    return null;
  }
}

// ── Prompt Composition ──

function composePrompt(
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
      const type = element.type;
      const displayName =
        typeof type === "function"
          ? (type as { displayName?: string }).displayName
          : undefined;

      if (displayName === "AICheckField" && element.props.name) {
        const value = fieldValues.get(element.props.name);
        if (value && value.trim()) {
          segments.push(value);
        } else {
          segments.push(`[${element.props.placeholder || element.props.name}]`);
        }
        return;
      }
      if (element.props.children) {
        walk(element.props.children);
      }
    }
  }

  walk(children);
  return segments.join("");
}

function getProviderAction(
  provider: string,
  prompt: string,
): { openUrl: string; copied: boolean } {
  const config = PROVIDER_URLS[provider];
  if (!config) return { openUrl: "", copied: false };

  const encoded = encodeURIComponent(prompt);
  if (encoded.length <= URL_CHAR_LIMIT) {
    return {
      openUrl: `${config.base}?${config.query}=${encoded}`,
      copied: false,
    };
  }
  return { openUrl: config.base, copied: true };
}

// ── useDocSlug Hook ──

function useDocSlug(): { chapterSlug: string; lessonSlug: string } {
  const { metadata } = useDoc();
  const slugPath = (metadata.slug || metadata.id).replace(/^\//, "");
  const segments = slugPath.split("/");
  return {
    lessonSlug: segments[segments.length - 1] || "",
    chapterSlug: segments.slice(0, -1).join("/"),
  };
}

// ── Reduced Motion Hook ──

function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersReduced;
}

// ── Main Component ──

export default function AICheck({ id, xp = 50, children }: AICheckProps) {
  const { siteConfig } = useDocusaurusContext();
  const progressApiUrl =
    (siteConfig.customFields?.progressApiUrl as string) ||
    "http://localhost:8002";

  const { chapterSlug, lessonSlug } = useDocSlug();
  const { isLessonCompleted, refreshProgress } = useProgress();
  const { session } = useAuth();
  const isLoggedIn = !!session?.user;
  const prefersReducedMotion = usePrefersReducedMotion();

  const alreadyCompleted = isLessonCompleted(chapterSlug, lessonSlug);

  // Hydrate fields once — avoids double localStorage read on mount
  const hydratedRef = useRef<Map<string, string> | null>(null);
  if (hydratedRef.current === null) {
    hydratedRef.current = hydrateFields(id);
  }

  // ── State ──
  const [fieldValues, setFieldValues] = useState<Map<string, string>>(
    () => hydratedRef.current!,
  );
  const [selectedProvider, setSelectedProvider] = useState<string | null>(() =>
    safeGet(storageKey(id, "__provider")),
  );
  const [aiOutput, setAiOutput] = useState(
    () => safeGet(storageKey(id, "__aiOutput")) || "",
  );
  const [state, setState] = useState<AICheckState>(() => {
    if (alreadyCompleted) return "submitted";
    const saved = safeGet(storageKey(id, "__state"));
    if (saved === "asked" || saved === "pasting") return saved;
    // Derive from cached hydrated fields
    const hasAnyContent = Array.from(hydratedRef.current!.values()).some(
      (v) => v.trim().length > 0,
    );
    return hasAnyContent ? "filling" : "idle";
  });
  const [response, setResponse] = useState<ExerciseSubmitResponse | null>(() =>
    alreadyCompleted ? loadCachedResult(id) : null,
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [step1Expanded, setStep1Expanded] = useState(true);

  const aiOutputRef = useRef<HTMLTextAreaElement>(null);
  const scoreCardRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Derived State ──
  const allFieldsFilled = useMemo(() => {
    if (fieldValues.size === 0) return false;
    return Array.from(fieldValues.values()).every((v) => v.trim().length > 0);
  }, [fieldValues]);

  const canSubmit =
    aiOutput.trim().length >= MIN_AI_OUTPUT_LENGTH &&
    aiOutput.length <= MAX_AI_OUTPUT_LENGTH;

  // ── Persistence (debounced) ──
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      persistFields(id, fieldValues);
      persistMeta(id, selectedProvider, aiOutput, state);
    }, DEBOUNCE_MS);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [id, fieldValues, selectedProvider, aiOutput, state]);

  // ── State Transitions ──
  useEffect(() => {
    if (state === "submitted" || state === "submitting" || state === "error")
      return;

    const hasContent = Array.from(fieldValues.values()).some(
      (v) => v.trim().length > 0,
    );

    if (!hasContent && state !== "idle") {
      setState("idle");
    } else if (hasContent && !allFieldsFilled && state === "idle") {
      setState("filling");
    } else if (allFieldsFilled && state === "filling") {
      setState("ready-to-ask");
    } else if (hasContent && !allFieldsFilled && state === "ready-to-ask") {
      setState("filling");
    }
  }, [fieldValues, allFieldsFilled, state]);

  // ── Focus Management ──
  useEffect(() => {
    if (state === "asked") {
      setTimeout(() => aiOutputRef.current?.focus(), 100);
    } else if (state === "submitted") {
      setTimeout(() => scoreCardRef.current?.focus(), 100);
    } else if (state === "error") {
      setTimeout(() => errorRef.current?.focus(), 100);
    }
  }, [state]);

  // If already completed on mount, stay in submitted
  useEffect(() => {
    if (alreadyCompleted && state !== "submitted") {
      setState("submitted");
    }
  }, [alreadyCompleted, state]);

  // ── Handlers ──
  const updateField = useCallback((name: string, value: string) => {
    setFieldValues((prev) => {
      const next = new Map(prev);
      next.set(name, value);
      return next;
    });
  }, []);

  const handleClear = useCallback(() => {
    clearAllStorage(id);
    setFieldValues(new Map());
    setSelectedProvider(null);
    setAiOutput("");
    setState("idle");
    setStep1Expanded(true);
  }, [id]);

  const handleProviderClick = useCallback(
    (provider: string) => {
      setSelectedProvider(provider);

      const prompt = composePrompt(children, fieldValues);
      const action = getProviderAction(provider, prompt);

      if (action.copied) {
        navigator.clipboard
          .writeText(prompt)
          .then(() => {
            setToast(
              `Prompt copied to clipboard -- paste into ${PROVIDER_LABELS[provider] || provider}`,
            );
            setTimeout(() => setToast(null), 3000);
          })
          .catch(() => {
            // Clipboard API unavailable (non-HTTPS or unsupported browser)
            setToast(
              "Prompt is too long for URL -- copy it manually from above",
            );
            setTimeout(() => setToast(null), 5000);
          });
      }

      if (action.openUrl) {
        window.open(action.openUrl, "_blank", "noopener,noreferrer");
      }

      setState("asked");
      setStep1Expanded(false);

      // Fire intent tracking (fire-and-forget, non-blocking)
      // Captures student field data + provider + device for funnel analytics.
      // Cleared on successful submit. 60-day TTL for non-submitters.
      // Works for both logged-in (user_id) and anonymous (browser session ID).
      {
        const fieldsObj = Object.fromEntries(fieldValues);
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
        };
        if (isLoggedIn) {
          Object.assign(headers, getAuthHeaders());
        } else {
          // Anonymous: generate a persistent browser session ID
          let anonId = safeGet("aicheck:__anon_id");
          if (!anonId) {
            const uuid =
              typeof crypto?.randomUUID === "function"
                ? crypto.randomUUID()
                : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
            anonId = `anon-${uuid}`;
            safeSet("aicheck:__anon_id", anonId);
          }
          headers["X-Anon-ID"] = anonId;
        }
        fetch(`${progressApiUrl}/api/v1/exercise/intent`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            chapter_slug: chapterSlug,
            lesson_slug: lessonSlug,
            exercise_id: id,
            provider,
            step: "provider_clicked",
            fields: fieldsObj,
          }),
        }).catch(() => {
          // Silent — intent tracking is best-effort
        });
      }
    },
    [
      children,
      fieldValues,
      isLoggedIn,
      progressApiUrl,
      chapterSlug,
      lessonSlug,
      id,
    ],
  );

  const handleCopyPrompt = useCallback(() => {
    const prompt = composePrompt(children, fieldValues);
    navigator.clipboard
      .writeText(prompt)
      .then(() => {
        setToast("Prompt copied to clipboard");
        setTimeout(() => setToast(null), 3000);
      })
      .catch(() => {
        setToast("Could not copy to clipboard");
        setTimeout(() => setToast(null), 5000);
      });
  }, [children, fieldValues]);

  const handleAiOutputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAiOutput(e.target.value);
      if (state === "asked" && e.target.value.length > 0) {
        setState("pasting");
      }
    },
    [state],
  );

  const handleSubmit = useCallback(async () => {
    if (!canSubmit || !isLoggedIn) return;
    setState("submitting");
    setErrorMessage("");

    const studentInput = composePrompt(children, fieldValues);

    try {
      const result = await submitExercise(progressApiUrl, {
        chapter_slug: chapterSlug,
        lesson_slug: lessonSlug,
        evidence: {
          type: "text",
          provider: selectedProvider || "chatgpt",
          student_input: studentInput,
          ai_output: aiOutput,
        },
      });
      setResponse(result);
      setState("submitted");
      clearAllStorage(id);
      saveResult(id, result);
      refreshProgress();
    } catch (err) {
      if (err instanceof ExerciseSubmitError) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
      setState("error");
    }
  }, [
    canSubmit,
    isLoggedIn,
    children,
    fieldValues,
    progressApiUrl,
    chapterSlug,
    lessonSlug,
    selectedProvider,
    aiOutput,
    id,
    refreshProgress,
  ]);

  const handleRetry = useCallback(() => {
    setState("asked");
    setErrorMessage("");
  }, []);

  // ── Clone children: inject value/onChange into AICheckField ──
  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const element = child as React.ReactElement<{
      name?: string;
      children?: React.ReactNode;
    }>;
    const type = element.type;
    const displayName =
      typeof type === "function"
        ? (type as { displayName?: string }).displayName
        : undefined;

    if (displayName === "AICheckField" && element.props.name) {
      return React.cloneElement(
        element as React.ReactElement<{
          value: string;
          onChange: (name: string, value: string) => void;
          disabled: boolean;
        }>,
        {
          value: fieldValues.get(element.props.name) || "",
          onChange: updateField,
          disabled: state === "submitting",
        },
      );
    }
    return child;
  });

  // ── Animation Config ──
  const motionDuration = prefersReducedMotion ? 0 : undefined;
  const motionSpring = prefersReducedMotion ? { duration: 0 } : spring;

  // ── Render Helpers ──
  const isFieldsDisabled = state === "submitting" || state === "submitted";

  const showStep2 = state !== "submitted";

  const showStep3 =
    state === "asked" ||
    state === "pasting" ||
    state === "submitting" ||
    state === "error";

  // ── Submitted State (fresh or returning visit) ──
  if (state === "submitted") {
    const isReturning = !response?.xp_earned;
    return (
      <div
        className={styles.aicheckCard}
        role="region"
        aria-label={`AI Check Exercise: ${id}`}
      >
        <motion.div
          className={styles.submittedCard}
          initial={isReturning ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={motionSpring}
          ref={scoreCardRef}
          tabIndex={-1}
        >
          <div className={styles.submittedHeader}>
            {isReturning ? (
              <CheckCircle2 className={styles.checkIcon} />
            ) : (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { ...spring, stiffness: 300 }
                }
              >
                <CheckCircle2 className={styles.checkIcon} />
              </motion.div>
            )}
            <div className={styles.submittedMeta}>
              <span className={styles.submittedTitle}>Exercise Submitted</span>
              {response?.xp_earned ? (
                <motion.span
                  className={styles.xpEarned}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { delay: 0.3, ...spring }
                  }
                >
                  +{response.xp_earned} XP
                </motion.span>
              ) : null}
            </div>
          </div>
          {response?.scores && (
            <ScoreCardDisplay
              scores={response.scores}
              prefersReducedMotion={isReturning || prefersReducedMotion}
            />
          )}
        </motion.div>
        <details className={styles.submittedDetails}>
          <summary className={styles.submittedDetailsSummary}>
            View exercise prompt
          </summary>
          <div className={styles.promptBody}>{children}</div>
        </details>
      </div>
    );
  }

  // ── Main Interactive State ──
  return (
    <div
      className={styles.aicheckCard}
      role="region"
      aria-label={`AI Check Exercise: ${id}`}
    >
      {/* Step 1: Your Work */}
      <div className={styles.stepSection}>
        <div className={styles.stepHeader}>
          <span className={styles.stepNum}>1</span>
          <span className={styles.stepTitle}>Your Work</span>
        </div>

        {step1Expanded ? (
          <div className={styles.promptBody}>{enhancedChildren}</div>
        ) : (
          <div className={styles.collapsedSummary}>
            {Array.from(fieldValues.entries()).map(([name, value]) => (
              <span key={name} className={styles.collapsedField}>
                <span className={styles.collapsedFieldName}>{name}:</span>
                <span className={styles.collapsedFieldValue}>
                  {value.slice(0, 30)}
                  {value.length > 30 ? "..." : ""} ({value.length} chars)
                </span>
              </span>
            ))}
            <button
              className={styles.editLink}
              onClick={() => {
                setStep1Expanded(true);
                if (state === "asked") setState("ready-to-ask");
              }}
            >
              [Edit]
            </button>
          </div>
        )}

        {step1Expanded &&
          fieldValues.size > 0 &&
          Array.from(fieldValues.values()).some((v) => v.trim().length > 0) &&
          state !== "submitting" && (
            <button className={styles.clearLink} onClick={handleClear}>
              Clear all
            </button>
          )}
      </div>

      {/* Step 2: Get Your Score */}
      {showStep2 && (
        <>
          <div className={styles.stepSeparator} />
          <div className={styles.stepSection}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNum}>2</span>
              <span className={styles.stepTitle}>
                {selectedProvider
                  ? `Evaluated via ${PROVIDER_LABELS[selectedProvider] || selectedProvider}`
                  : "Get Your Score"}
              </span>
              {selectedProvider && (
                <CheckCircle2
                  size={16}
                  className={styles.providerConfirmationCheck}
                />
              )}
            </div>

            {!selectedProvider && (
              <div className={styles.providerSection}>
                <p className={styles.providerHint}>
                  Discuss with an AI. Question your scores.
                  <br />
                  Come back when you have your BEST evaluation.
                </p>
                {allFieldsFilled && (
                  <button
                    className={styles.copyPromptBtn}
                    onClick={handleCopyPrompt}
                    type="button"
                    aria-label="Copy assembled prompt to clipboard"
                  >
                    <Copy size={14} />
                    Copy prompt
                  </button>
                )}
                <div className={styles.providerButtons}>
                  {PROVIDERS.map((p) => (
                    <motion.button
                      key={p}
                      className={`${styles.providerBtn} ${
                        selectedProvider === p
                          ? styles.providerBtnSelected
                          : selectedProvider && selectedProvider !== p
                            ? styles.providerBtnOther
                            : ""
                      }`}
                      disabled={!allFieldsFilled}
                      onClick={() => handleProviderClick(p)}
                      whileTap={{ scale: 0.97 }}
                      transition={motionSpring}
                      aria-label={
                        allFieldsFilled
                          ? `Evaluate with ${PROVIDER_LABELS[p]} (opens new tab)`
                          : "Fill in all fields first"
                      }
                      aria-disabled={!allFieldsFilled}
                    >
                      <ProviderIcon provider={p} />
                      {PROVIDER_LABELS[p]}
                      <ExternalLink className={styles.externalIcon} />
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {selectedProvider &&
              (state === "asked" ||
                state === "pasting" ||
                state === "submitting" ||
                state === "error") && (
                <div className={styles.providerButtons}>
                  {PROVIDERS.map((p) => (
                    <motion.button
                      key={p}
                      className={`${styles.providerBtn} ${
                        selectedProvider === p
                          ? styles.providerBtnSelected
                          : styles.providerBtnOther
                      }`}
                      onClick={() => handleProviderClick(p)}
                      whileTap={{ scale: 0.97 }}
                      transition={motionSpring}
                      aria-label={
                        selectedProvider === p
                          ? `${PROVIDER_LABELS[p]} selected`
                          : `Evaluate with ${PROVIDER_LABELS[p]} (opens new tab)`
                      }
                      aria-pressed={selectedProvider === p}
                    >
                      <ProviderIcon provider={p} />
                      {PROVIDER_LABELS[p]}
                      {selectedProvider === p ? (
                        <CheckCircle2 size={12} />
                      ) : (
                        <ExternalLink className={styles.externalIcon} />
                      )}
                    </motion.button>
                  ))}
                </div>
              )}
          </div>
        </>
      )}

      {/* Step 3: Paste AI's Evaluation */}
      {showStep3 && (
        <>
          <div className={styles.stepSeparator} />
          <div className={styles.stepSection}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNum}>3</span>
              <span className={styles.stepTitle}>
                Paste AI&apos;s Evaluation
              </span>
            </div>

            <div className={styles.aiOutputSection}>
              <textarea
                ref={aiOutputRef}
                className={styles.aiOutputTextarea}
                value={aiOutput}
                onChange={handleAiOutputChange}
                placeholder="Paste the AI's complete response here..."
                disabled={state === "submitting"}
                aria-label="Paste the AI's complete evaluation response"
                maxLength={MAX_AI_OUTPUT_LENGTH}
              />
              <CharCount current={aiOutput.length} max={MAX_AI_OUTPUT_LENGTH} />
              {aiOutput.length > 0 &&
                aiOutput.trim().length < MIN_AI_OUTPUT_LENGTH && (
                  <span className={styles.charHint}>
                    Paste at least {MIN_AI_OUTPUT_LENGTH} characters to submit
                  </span>
                )}
            </div>

            {isLoggedIn ? (
              <button
                className={styles.submitBtn}
                onClick={handleSubmit}
                disabled={!canSubmit || state === "submitting"}
                aria-label={
                  state === "submitting"
                    ? "Submitting..."
                    : `Submit exercise for ${xp} XP`
                }
                aria-busy={state === "submitting"}
              >
                {state === "submitting" ? (
                  <>
                    <Loader2 size={16} className={styles.spinning} />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <span className={styles.xpPillBtn}>{xp} XP</span>
                  </>
                )}
              </button>
            ) : (
              <button
                className={styles.submitBtn}
                disabled
                aria-label="Sign in to submit"
              >
                Sign in to submit
                <span className={styles.xpPillBtn}>{xp} XP</span>
              </button>
            )}

            {state === "error" && (
              <div
                className={styles.errorCard}
                ref={errorRef}
                tabIndex={-1}
                role="alert"
              >
                <AlertCircle size={18} />
                <span>{errorMessage}</span>
                <button className={styles.errorRetryBtn} onClick={handleRetry}>
                  Try again
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className={styles.toast}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={motionSpring}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Sub-Components ──

function CharCount({ current, max }: { current: number; max: number }) {
  if (current === 0) return null;
  const pct = current / max;
  return (
    <span
      className={`${styles.charCount} ${pct >= 1 ? styles.charCountError : pct >= 0.9 ? styles.charCountWarn : ""}`}
      aria-live="polite"
    >
      {current.toLocaleString()}/{max.toLocaleString()}
    </span>
  );
}

function ScoreCardDisplay({
  scores,
  prefersReducedMotion,
}: {
  scores: ScoreCard;
  prefersReducedMotion: boolean;
}) {
  const dimensions = [
    { key: "independent_thinking", label: "Independent Thinking" },
    { key: "critical_evaluation", label: "Critical Evaluation" },
    { key: "reasoning_depth", label: "Reasoning Depth" },
    { key: "originality", label: "Originality" },
    { key: "self_awareness", label: "Self-Awareness" },
  ] as const;

  return (
    <div
      className={styles.scoreCard}
      role="region"
      aria-label="Thinking Score Card"
    >
      <div className={styles.scoreTitle}>Thinking Score Card</div>
      <div className={styles.scoreList}>
        {dimensions.map(({ key, label }, i) => {
          const val = scores[key] as number;
          return (
            <motion.div
              key={key}
              className={styles.scoreRow}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { delay: 0.3 + i * 0.06, ...spring }
              }
            >
              <span className={styles.scoreDim}>{label}</span>
              <div
                className={styles.scoreBar}
                role="meter"
                aria-valuenow={val}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label={`${label}: ${val} out of 10`}
              >
                <motion.div
                  className={styles.scoreBarFill}
                  initial={prefersReducedMotion ? false : { width: 0 }}
                  animate={{ width: `${val * 10}%` }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : {
                          delay: 0.4 + i * 0.08,
                          duration: 0.6,
                          ease: "easeOut",
                        }
                  }
                />
              </div>
              <motion.span
                className={styles.scoreVal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { delay: 0.7 + i * 0.08 }
                }
              >
                {val}/10
              </motion.span>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        className={styles.scoreAvg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          prefersReducedMotion ? { duration: 0 } : { delay: 0.8, ...spring }
        }
      >
        <span>Average</span>
        <motion.span
          className={styles.scoreAvgVal}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { delay: 0.9, ...spring, stiffness: 300 }
          }
        >
          {scores.average}/10
        </motion.span>
      </motion.div>
    </div>
  );
}

function ProviderIcon({ provider }: { provider: string }) {
  const className = styles.providerIcon;
  switch (provider) {
    case "chatgpt":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
        </svg>
      );
    case "claude":
      return (
        <svg className={className} viewBox="0 0 46 32" fill="currentColor">
          <path d="M33.12 0 18.456 28.8h7.992L41.112 0h-7.992ZM12.888 0 .384 24.768h7.992L20.88 0h-7.992Z" />
        </svg>
      );
    default:
      return null;
  }
}

// Re-export AICheckField for MDX registration
export { default as AICheckField } from "./AICheckField";
