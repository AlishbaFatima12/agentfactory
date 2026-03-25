import React from "react";
import type { GalleryConversation } from "./types";
import ScoreVisualization from "./ScoreVisualization";
import styles from "./Gallery.module.css";

interface ComparisonViewProps {
  strong: GalleryConversation;
  weak: GalleryConversation;
}

export default function ComparisonView({ strong, weak }: ComparisonViewProps) {
  return (
    <div className={styles.comparison}>
      <div className={styles.comparisonHeader}>Side-by-Side Comparison</div>
      <div className={styles.comparisonGrid}>
        {/* Strong prompt */}
        <div className={styles.comparisonCol}>
          <div className={`${styles.comparisonColLabel} ${styles.badge_strong}`}>
            Strong Prompt
          </div>
          <div className={styles.comparisonPrompt}>{strong.student_input}</div>
          <ScoreVisualization scores={strong.scores} compact />
          {strong.commentary && (
            <div className={styles.comparisonNote}>{strong.commentary}</div>
          )}
        </div>

        {/* Weak prompt */}
        <div className={styles.comparisonCol}>
          <div className={`${styles.comparisonColLabel} ${styles.badge_weak}`}>
            Weak Prompt
          </div>
          <div className={styles.comparisonPrompt}>{weak.student_input}</div>
          <ScoreVisualization scores={weak.scores} compact />
          {weak.commentary && (
            <div className={styles.comparisonNote}>{weak.commentary}</div>
          )}
        </div>
      </div>
    </div>
  );
}
