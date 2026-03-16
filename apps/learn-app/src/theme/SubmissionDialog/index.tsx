import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  FileUp,
  Loader2,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  Send,
} from "lucide-react";
import { useExercisePrompt } from "@/contexts/ExercisePromptContext";
import styles from "./SubmissionDialog.module.css";

const PROVIDERS: { value: string; label: string }[] = [
  { value: "chatgpt", label: "ChatGPT" },
  { value: "claude", label: "Claude" },
  { value: "gemini", label: "Gemini" },
  { value: "grok", label: "Grok" },
  { value: "claude-code", label: "Claude Code" },
  { value: "cowork", label: "Cowork" },
];

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

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };
const stagger = {
  animate: { transition: { staggerChildren: 0.07 } },
};
const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: spring },
};

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

  const exercisePrompt = useExercisePrompt();

  const [state, setState] = useState<DialogState>("idle");
  const [provider, setProvider] = useState(
    submission.default_provider || "chatgpt",
  );
  const [studentInput, setStudentInput] = useState("");
  const [aiOutput, setAiOutput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [response, setResponse] = useState<ExerciseSubmitResponse | null>(null);
  const [preFilled, setPreFilled] = useState(false);
  const aiOutputRef = React.useRef<HTMLTextAreaElement>(null);

  const xp = submission.xp_bonus || 50;
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
    // Auto-fill from ExercisePrompt if available and student hasn't typed yet
    if (exercisePrompt?.composedPrompt && studentInput.trim() === "") {
      setStudentInput(exercisePrompt.composedPrompt);
      setPreFilled(true);
      // Focus AI output field after dialog opens
      setTimeout(() => aiOutputRef.current?.focus(), 100);
    }
  }, [exercisePrompt, studentInput]);

  const handleClose = useCallback(() => {
    if (state === "submitting") return;
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

  const availableProviders = PROVIDERS.filter((p) =>
    submission.providers.includes(p.value),
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.divider} />

      <AnimatePresence mode="wait">
        {effectiveState === "submitted" ? (
          <motion.div
            key="submitted"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={spring}
            className={styles.submittedCard}
          >
            <div className={styles.submittedHeader}>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ ...spring, stiffness: 300 }}
              >
                <CheckCircle2 className={styles.checkIcon} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, ...spring }}
                className={styles.submittedMeta}
              >
                <span className={styles.submittedTitle}>
                  Exercise Submitted
                </span>
                {response?.xp_earned ? (
                  <span className={styles.xpEarned}>
                    +{response.xp_earned} XP
                  </span>
                ) : null}
              </motion.div>
            </div>
            {response?.scores && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, ...spring }}
              >
                <ScoreCardDisplay scores={response.scores} />
              </motion.div>
            )}
          </motion.div>
        ) : effectiveState === "error" ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.errorCard}
          >
            <AlertCircle size={18} />
            <span>{errorMessage}</span>
            <Button variant="outline" size="sm" onClick={handleRetry}>
              Try again
            </Button>
          </motion.div>
        ) : (
          <motion.div key="trigger" {...fadeUp}>
            <button
              onClick={handleOpen}
              disabled={effectiveState === "submitting"}
              className={styles.triggerBtn}
            >
              <FileUp size={18} />
              <span>Submit Your AI Check</span>
              <span className={styles.xpPill}>{xp} XP</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog
        open={effectiveState === "open" || effectiveState === "submitting"}
        onOpenChange={(open) => {
          if (!open) handleClose();
        }}
      >
        <DialogContent className={styles.dialogContent}>
          <DialogHeader className={styles.dialogHeader}>
            <DialogTitle className={styles.dialogTitle}>
              <Sparkles size={18} className={styles.sparkle} />
              Submit Your AI Check
            </DialogTitle>
            <DialogDescription className={styles.dialogDesc}>
              Paste your work and the AI&apos;s evaluation to earn{" "}
              <strong className={styles.xpInline}>{xp} XP</strong>
            </DialogDescription>
          </DialogHeader>

          <motion.div
            className={styles.formBody}
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {/* Provider */}
            <motion.div variants={fadeUp} className={styles.providerRow}>
              <Label className={styles.labelSm}>AI Provider</Label>
              <Select
                value={provider}
                onValueChange={setProvider}
                disabled={effectiveState === "submitting"}
              >
                <SelectTrigger className={styles.providerTrigger}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {availableProviders.map((p) => (
                    <SelectItem key={p.value} value={p.value}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Step 1 */}
            <motion.div variants={fadeUp} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>1</span>
                <span className={styles.stepTitle}>Your Submission</span>
              </div>
              <p className={styles.stepHint}>
                {preFilled
                  ? "Pre-filled from the exercise above. Review and edit if needed."
                  : "Paste the prompt you sent and your answers"}
              </p>
              {preFilled && (
                <span className={styles.preFillBadge}>
                  Auto-filled from exercise
                </span>
              )}
              <Textarea
                className={styles.textarea}
                value={studentInput}
                onChange={(e) => {
                  setStudentInput(e.target.value);
                  if (preFilled) setPreFilled(false);
                }}
                placeholder="Paste your prompt + answers here..."
                disabled={effectiveState === "submitting"}
                maxLength={25000}
              />
              <CharCount current={studentInput.length} max={25000} />
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeUp} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>2</span>
                <span className={styles.stepTitle}>AI&apos;s Evaluation</span>
              </div>
              <p className={styles.stepHint}>
                Paste the AI&apos;s complete response including the Score Card
              </p>
              <Textarea
                ref={aiOutputRef}
                className={styles.textarea}
                value={aiOutput}
                onChange={(e) => setAiOutput(e.target.value)}
                placeholder="Paste the AI's evaluation here..."
                disabled={effectiveState === "submitting"}
                maxLength={25000}
              />
              <CharCount current={aiOutput.length} max={25000} />
            </motion.div>

            {/* Feedback */}
            <motion.div variants={fadeUp} className={styles.feedbackWrap}>
              <Label className={styles.labelSm}>
                Feedback <span className={styles.optional}>optional</span>
              </Label>
              <Textarea
                className={styles.textareaSm}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Any thoughts on this exercise?"
                disabled={effectiveState === "submitting"}
                maxLength={500}
              />
              <CharCount current={feedback.length} max={500} />
            </motion.div>

            {errorMessage && effectiveState === "open" && (
              <motion.div variants={fadeUp} className={styles.dialogError}>
                <AlertCircle size={14} />
                {errorMessage}
              </motion.div>
            )}
          </motion.div>

          <DialogFooter className={styles.dialogFooter}>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit || effectiveState === "submitting"}
              className={styles.submitBtn}
            >
              {effectiveState === "submitting" ? (
                <>
                  <Loader2 size={16} className={styles.spinning} />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Submit
                  <span className={styles.xpPillBtn}>{xp} XP</span>
                </>
              )}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function CharCount({ current, max }: { current: number; max: number }) {
  if (current === 0) return null;
  const pct = current / max;
  return (
    <span
      className={`${styles.charCount} ${pct >= 1 ? styles.charCountError : pct >= 0.9 ? styles.charCountWarn : ""}`}
    >
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
      <div className={styles.scoreList}>
        {dimensions.map(({ key, label }, i) => {
          const val = scores[key] as number;
          return (
            <motion.div
              key={key}
              className={styles.scoreRow}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.06, ...spring }}
            >
              <span className={styles.scoreDim}>{label}</span>
              <div className={styles.scoreBar}>
                <motion.div
                  className={styles.scoreBarFill}
                  initial={{ width: 0 }}
                  animate={{ width: `${val * 10}%` }}
                  transition={{
                    delay: 0.4 + i * 0.08,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                />
              </div>
              <span className={styles.scoreVal}>{val}/10</span>
            </motion.div>
          );
        })}
      </div>
      <div className={styles.scoreAvg}>
        <span>Average</span>
        <motion.span
          className={styles.scoreAvgVal}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, ...spring }}
        >
          {scores.average}/10
        </motion.span>
      </div>
    </div>
  );
}
