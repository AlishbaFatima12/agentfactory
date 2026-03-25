import React, { useState } from "react";
import type { GalleryConversation } from "./types";
import ScoreVisualization from "./ScoreVisualization";
import styles from "./Gallery.module.css";

function providerBadge(provider: string) {
  const normalized = provider.toLowerCase();
  const labels: Record<string, string> = {
    claude: "Claude",
    chatgpt: "ChatGPT",
    gemini: "Gemini",
    copilot: "Copilot",
  };
  return labels[normalized] ?? provider;
}

function qualityBadge(label: string) {
  const lower = label.toLowerCase();
  if (lower.startsWith("strong")) return "strong";
  if (lower.startsWith("weak")) return "weak";
  return "neutral";
}

interface ConversationCardProps {
  conversation: GalleryConversation;
  defaultExpanded?: boolean;
}

export default function ConversationCard({
  conversation,
  defaultExpanded = false,
}: ConversationCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const quality = qualityBadge(conversation.label);

  return (
    <div className={`${styles.convCard} ${styles[`convCard_${quality}`]}`}>
      <button
        className={styles.convCardHeader}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        type="button"
      >
        <div className={styles.convCardBadges}>
          <span className={`${styles.qualityBadge} ${styles[`badge_${quality}`]}`}>
            {conversation.label}
          </span>
          <span className={styles.providerBadge}>
            {providerBadge(conversation.provider)}
          </span>
        </div>
        <span className={styles.convCardChevron} aria-hidden>
          {expanded ? "\u25B2" : "\u25BC"}
        </span>
      </button>

      {expanded && (
        <div className={styles.convCardBody}>
          <div className={styles.convSection}>
            <div className={styles.convSectionLabel}>Student Prompt</div>
            <div className={styles.convSectionContent}>
              {conversation.student_input}
            </div>
          </div>

          <div className={styles.convSection}>
            <div className={styles.convSectionLabel}>AI Response</div>
            <div className={styles.convSectionContent}>
              {conversation.ai_output}
            </div>
          </div>

          <ScoreVisualization scores={conversation.scores} />

          {conversation.commentary && (
            <div className={styles.commentary}>
              <div className={styles.commentaryLabel}>What to notice</div>
              <p className={styles.commentaryText}>{conversation.commentary}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
