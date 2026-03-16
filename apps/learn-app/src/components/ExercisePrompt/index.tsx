import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExercisePromptSetter } from "@/contexts/ExercisePromptContext";
import {
  hydrateFromStorage,
  clearStorage,
  useFieldPersistence,
} from "./useFieldPersistence";
import { composePrompt, useProviderClick } from "./usePromptComposer";
import PromptField from "./PromptField";
import styles from "./ExercisePrompt.module.css";

interface ExercisePromptProps {
  id: string;
  provider: ("chatgpt" | "claude" | "gemini")[];
  children: React.ReactNode;
}

const PROVIDER_LABELS: Record<string, string> = {
  chatgpt: "Ask ChatGPT",
  claude: "Ask Claude",
  gemini: "Ask Gemini",
};

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

export default function ExercisePrompt({
  id,
  provider,
  children,
}: ExercisePromptProps) {
  const [fieldValues, setFieldValues] = useState<Map<string, string>>(() =>
    hydrateFromStorage(id),
  );
  const [toast, setToast] = useState<string | null>(null);

  const setter = useExercisePromptSetter();

  const hasContent = Array.from(fieldValues.values()).some(
    (v) => v.trim().length > 0,
  );

  // Persist to localStorage with debounce
  useFieldPersistence(id, fieldValues);

  // Push state up to DocItem via setter context
  useEffect(() => {
    if (setter) {
      setter({
        composedPrompt: composePrompt(children, fieldValues),
        fieldValues,
        hasContent,
      });
    }
  }, [fieldValues, setter, children, hasContent]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (setter) setter(null);
    };
  }, [setter]);

  const updateField = useCallback((name: string, value: string) => {
    setFieldValues((prev) => {
      const next = new Map(prev);
      next.set(name, value);
      return next;
    });
  }, []);

  const handleClear = useCallback(() => {
    clearStorage(id);
    setFieldValues(new Map());
  }, [id]);

  const handleToast = useCallback((message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  }, []);

  const handleProviderClick = useProviderClick(
    children,
    fieldValues,
    handleToast,
  );

  // Clone children and inject value + onChange into PromptField components
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

    if (displayName === "PromptField" && element.props.name) {
      return React.cloneElement(
        element as React.ReactElement<{
          value: string;
          onChange: (name: string, value: string) => void;
        }>,
        {
          value: fieldValues.get(element.props.name) || "",
          onChange: updateField,
        },
      );
    }
    return child;
  });

  return (
    <div className={styles.promptCard}>
      <div className={styles.promptBody}>{enhancedChildren}</div>

      <div className={styles.promptFooter}>
        <div className={styles.providerButtons}>
          {provider.map((p) => (
            <motion.button
              key={p}
              className={styles.providerBtn}
              disabled={!hasContent}
              onClick={() => handleProviderClick(p)}
              whileTap={{ scale: 0.97 }}
              transition={spring}
              title={
                hasContent
                  ? `Open ${PROVIDER_LABELS[p]?.replace("Ask ", "") || p}`
                  : "Fill in at least one field"
              }
            >
              <ProviderIcon provider={p} />
              {PROVIDER_LABELS[p] || p}
            </motion.button>
          ))}
        </div>

        {hasContent && (
          <button className={styles.clearLink} onClick={handleClear}>
            Clear all
          </button>
        )}
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            className={styles.toast}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={spring}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
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
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.709 15.955l4.71-2.724-1.89-3.276L2.82 12.68zm8.38-12.089L8.38 1.142 6.489 4.418l4.71 2.724zM20.07 8.592l-4.71 2.725 1.89 3.275 4.71-2.724zm-7.27 9.365l4.71 2.724 1.89-3.275-4.71-2.725zM12 7.318L7.29 10.042v5.45L12 18.215l4.71-2.724v-5.45z" />
        </svg>
      );
    case "gemini":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.824a9.176 9.176 0 1 1 0 18.352 9.176 9.176 0 0 1 0-18.352zM8.294 8.294h7.412v7.412H8.294z" />
        </svg>
      );
    default:
      return null;
  }
}

// Re-export PromptField for MDX registration
export { default as PromptField } from "./PromptField";
