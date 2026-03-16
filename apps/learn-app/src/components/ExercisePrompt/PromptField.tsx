import React, { useCallback } from "react";
import styles from "./ExercisePrompt.module.css";

interface PromptFieldProps {
  name: string;
  placeholder: string;
  label?: string;
  rows?: number;
  // Injected by ExercisePrompt parent
  value?: string;
  onChange?: (name: string, value: string) => void;
}

function PromptField({
  name,
  placeholder,
  label,
  rows = 3,
  value = "",
  onChange,
}: PromptFieldProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(name, e.target.value);
    },
    [name, onChange],
  );

  return (
    <div className={styles.promptField}>
      <label className={styles.fieldLabel}>{label || placeholder}</label>
      <textarea
        className={styles.fieldTextarea}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={Math.max(1, Math.min(10, rows))}
      />
    </div>
  );
}

PromptField.displayName = "PromptField";

export default PromptField;
