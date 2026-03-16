import React, { useState, useCallback } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useProgress } from "@/contexts/ProgressContext";
import { submitExercise, ExerciseSubmitError } from "@/lib/progress-api";
import type { ExerciseSubmitResponse, ScoreCard } from "@/lib/progress-types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "./SubmissionDialog.module.css";

// Provider display names
const PROVIDER_LABELS: Record<string, string> = {
  chatgpt: "ChatGPT",
  claude: "Claude",
  gemini: "Gemini",
  grok: "Grok",
  "claude-code": "Claude Code",
  cowork: "Cowork",
};

interface SubmissionConfig {
  type: string;
  accept: string[];
  providers: string[];
  default_provider: string;
  xp_bonus: number;
}

interface SubmissionDialogProps {
  chapterSlug: string;
  lessonSlug: string;
  submission: SubmissionConfig;
}

type DialogState = "idle" | "open" | "submitting" | "submitted" | "error";

export default function SubmissionDialog({
  chapterSlug,
  lessonSlug,
  submission,
}: SubmissionDialogProps) {
  const { siteConfig } = useDocusaurusContext();
  const progressApiUrl =
    (siteConfig.customFields?.progressApiUrl as string) ||
    "http://localhost:8002";

  const { isLessonCompleted, refreshProgress } = useProgress();
  const alreadyCompleted = isLessonCompleted(chapterSlug, lessonSlug);

  const [state, setState] = useState<DialogState>("idle");
  const [provider, setProvider] = useState(
    submission.default_provider || "chatgpt",
  );
  const [studentInput, setStudentInput] = useState("");
  const [aiOutput, setAiOutput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [response, setResponse] = useState<ExerciseSubmitResponse | null>(null);

  const xp = submission.xp_bonus || 50;

  // If already completed on a return visit, show done state
  const effectiveState =
    alreadyCompleted && state === "idle" ? "submitted" : state;

  const canSubmit =
    studentInput.trim().length > 0 &&
    aiOutput.trim().length > 0 &&
    studentInput.length <= 25000 &&
    aiOutput.length <= 25000 &&
    (!feedback || feedback.length <= 500);

  const handleOpen = useCallback(() => {
    setState("open");
    setErrorMessage("");
  }, []);

  const handleClose = useCallback(() => {
    if (state === "submitting") return; // Don't close while submitting
    setState("idle");
  }, [state]);

  const handleSubmit = useCallback(async () => {
    if (!canSubmit) return;
    setState("submitting");
    setErrorMessage("");
    try {
      const result = await submitExercise(progressApiUrl, {
        chapter_slug: chapterSlug,
        lesson_slug: lessonSlug,
        evidence: {
          type: "text",
          provider,
          student_input: studentInput,
          ai_output: aiOutput,
        },
        feedback: feedback || null,
      });
      setResponse(result);
      setState("submitted");
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
    progressApiUrl,
    chapterSlug,
    lessonSlug,
    provider,
    studentInput,
    aiOutput,
    feedback,
    refreshProgress,
  ]);

  const handleRetry = useCallback(() => {
    setState("open");
    setErrorMessage("");
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.divider} />

      {effectiveState === "submitted" ? (
        <div>
          <div className={styles.doneRow}>
            <svg
              className={styles.checkIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span className={styles.doneText}>
              Submitted
              {response?.xp_earned ? (
                <span className={styles.xpBadge}>+{response.xp_earned} XP</span>
              ) : null}
            </span>
          </div>
          {response?.scores && <ScoreCardDisplay scores={response.scores} />}
        </div>
      ) : effectiveState === "error" ? (
        <div className={styles.errorRow}>
          <span className={styles.errorText}>{errorMessage}</span>
          <button className={styles.retryButton} onClick={handleRetry}>
            Try again
          </button>
        </div>
      ) : (
        <>
          <button
            className={styles.triggerButton}
            onClick={handleOpen}
            disabled={effectiveState === "submitting"}
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            Submit Your AI Check
            <span className={styles.xpBadge}>{xp} XP</span>
          </button>

          <Dialog
            open={effectiveState === "open" || effectiveState === "submitting"}
            onOpenChange={(open) => {
              if (!open) handleClose();
            }}
          >
            <DialogContent className="sm:max-w-[540px] max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Submit Your AI Check</DialogTitle>
                <DialogDescription>
                  Paste your prompt/answers and the AI&apos;s evaluation below.
                </DialogDescription>
              </DialogHeader>

              <div className={styles.formGrid}>
                {/* Provider select */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>AI Provider</label>
                  <Select
                    value={provider}
                    onValueChange={setProvider}
                    disabled={effectiveState === "submitting"}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {submission.providers.map((p) => (
                        <SelectItem key={p} value={p}>
                          {PROVIDER_LABELS[p] || p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Student input */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Your Submission</label>
                  <span className={styles.fieldHint}>
                    Paste the prompt you sent and your answers
                  </span>
                  <textarea
                    className={styles.textarea}
                    value={studentInput}
                    onChange={(e) => setStudentInput(e.target.value)}
                    placeholder="Paste your prompt + answers here..."
                    disabled={effectiveState === "submitting"}
                    maxLength={25000}
                  />
                  <CharCount current={studentInput.length} max={25000} />
                </div>

                {/* AI output */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    AI&apos;s Evaluation
                  </label>
                  <span className={styles.fieldHint}>
                    Paste the AI&apos;s complete response including the Score
                    Card
                  </span>
                  <textarea
                    className={styles.textarea}
                    value={aiOutput}
                    onChange={(e) => setAiOutput(e.target.value)}
                    placeholder="Paste the AI's evaluation here..."
                    disabled={effectiveState === "submitting"}
                    maxLength={25000}
                  />
                  <CharCount current={aiOutput.length} max={25000} />
                </div>

                {/* Feedback */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Feedback{" "}
                    <span className={styles.fieldHint}>(optional)</span>
                  </label>
                  <textarea
                    className={`${styles.textarea} ${styles.textareaSmall}`}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Any thoughts on this exercise?"
                    disabled={effectiveState === "submitting"}
                    maxLength={500}
                  />
                  <CharCount current={feedback.length} max={500} />
                </div>

                {/* Dialog-level error */}
                {errorMessage && effectiveState === "open" && (
                  <div className={styles.dialogError}>{errorMessage}</div>
                )}

                {/* Submit */}
                <button
                  className={styles.submitButton}
                  onClick={handleSubmit}
                  disabled={!canSubmit || effectiveState === "submitting"}
                >
                  {effectiveState === "submitting" ? (
                    <>
                      <span className={styles.spinner} />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit <span className={styles.xpBadge}>{xp} XP</span>
                    </>
                  )}
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}

function CharCount({ current, max }: { current: number; max: number }) {
  if (current === 0) return null;
  const pct = current / max;
  const cls =
    pct >= 1 ? styles.charCountError : pct >= 0.9 ? styles.charCountWarn : "";
  return (
    <span className={`${styles.charCount} ${cls}`}>
      {current.toLocaleString()}/{max.toLocaleString()}
    </span>
  );
}

function ScoreCardDisplay({ scores }: { scores: ScoreCard }) {
  const dimensions = [
    { key: "independent_thinking", label: "Independent Thinking" },
    { key: "critical_evaluation", label: "Critical Evaluation" },
    { key: "reasoning_depth", label: "Reasoning Depth" },
    { key: "originality", label: "Originality" },
    { key: "self_awareness", label: "Self-Awareness" },
  ] as const;

  return (
    <div className={styles.scoreCard}>
      <div className={styles.scoreTitle}>Thinking Score Card</div>
      <div className={styles.scoreGrid}>
        {dimensions.map(({ key, label }) => (
          <div key={key} className={styles.scoreRow}>
            <span className={styles.scoreDimension}>{label}</span>
            <span className={styles.scoreValue}>{scores[key]}/10</span>
          </div>
        ))}
        <div className={styles.scoreAverage}>
          <span>Average</span>
          <span>{scores.average}/10</span>
        </div>
      </div>
    </div>
  );
}
