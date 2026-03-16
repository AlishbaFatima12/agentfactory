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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileUp, Loader2, CheckCircle2 } from "lucide-react";
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
        <div className={styles.submittedSection}>
          <div className={styles.doneRow}>
            <CheckCircle2 className={styles.checkIcon} />
            <span className={styles.doneText}>
              Submitted
              {response?.xp_earned ? (
                <Badge variant="secondary" className={styles.xpBadgeGreen}>
                  +{response.xp_earned} XP
                </Badge>
              ) : null}
            </span>
          </div>
          {response?.scores && <ScoreCardDisplay scores={response.scores} />}
        </div>
      ) : effectiveState === "error" ? (
        <div className={styles.errorRow}>
          <span className={styles.errorText}>{errorMessage}</span>
          <Button variant="destructive" size="sm" onClick={handleRetry}>
            Try again
          </Button>
        </div>
      ) : (
        <>
          <Button
            variant="outline"
            onClick={handleOpen}
            disabled={effectiveState === "submitting"}
          >
            <FileUp />
            Submit Your AI Check
            <Badge variant="secondary" className={styles.xpBadgeGreen}>
              {xp} XP
            </Badge>
          </Button>

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
                  <Label>AI Provider</Label>
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
                  <Label>Your Submission</Label>
                  <p className={styles.fieldHint}>
                    Paste the prompt you sent and your answers
                  </p>
                  <Textarea
                    className="min-h-[120px] resize-y"
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
                  <Label>AI&apos;s Evaluation</Label>
                  <p className={styles.fieldHint}>
                    Paste the AI&apos;s complete response including the Score
                    Card
                  </p>
                  <Textarea
                    className="min-h-[120px] resize-y"
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
                  <Label>
                    Feedback{" "}
                    <span className={styles.fieldHint}>(optional)</span>
                  </Label>
                  <Textarea
                    className="min-h-[60px] resize-y"
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
                <Button
                  className="w-full"
                  onClick={handleSubmit}
                  disabled={!canSubmit || effectiveState === "submitting"}
                >
                  {effectiveState === "submitting" ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit{" "}
                      <Badge
                        variant="secondary"
                        className={styles.xpBadgeGreen}
                      >
                        {xp} XP
                      </Badge>
                    </>
                  )}
                </Button>
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
    <Card className={styles.scoreCardEnter}>
      <CardHeader className="pb-2 pt-4 px-4">
        <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Thinking Score Card
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
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
      </CardContent>
    </Card>
  );
}
