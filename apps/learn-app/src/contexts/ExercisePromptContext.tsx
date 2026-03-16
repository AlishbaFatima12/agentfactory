import { createContext, useContext } from "react";

export interface ExercisePromptContextType {
  composedPrompt: string | null;
  fieldValues: Map<string, string>;
  hasContent: boolean;
}

// Read context — consumed by SubmissionDialog
export const ExercisePromptContext =
  createContext<ExercisePromptContextType | null>(null);

export function useExercisePrompt(): ExercisePromptContextType | null {
  return useContext(ExercisePromptContext);
}

// Write context — consumed by ExercisePrompt to push state up
export const ExercisePromptSetterContext = createContext<
  ((value: ExercisePromptContextType | null) => void) | null
>(null);

export function useExercisePromptSetter() {
  return useContext(ExercisePromptSetterContext);
}
