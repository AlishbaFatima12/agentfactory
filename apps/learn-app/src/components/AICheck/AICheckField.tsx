import React, { useCallback } from "react";
import styles from "./AICheck.module.css";

interface AICheckFieldProps {
  name: string;
  placeholder: string;
  label?: string;
  rows?: number;
  // Injected by AICheck parent
  value?: string;
  onChange?: (name: string, value: string) => void;
  disabled?: boolean;
}

function AICheckField({
  name,
  placeholder,
  label,
  rows = 3,
  value = "",
  onChange,
  disabled = false,
}: AICheckFieldProps) {
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
        disabled={disabled}
        aria-label={label || placeholder}
      />
    </div>
  );
}

AICheckField.displayName = "AICheckField";

export default AICheckField;
