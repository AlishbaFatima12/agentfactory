import React, { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ConversationGalleryProps, GalleryConversation } from "./types";
import ConversationCard from "./ConversationCard";
import ComparisonView from "./ComparisonView";
import styles from "./Gallery.module.css";

type ViewMode = "gallery" | "compare";

function findByQuality(
  conversations: GalleryConversation[],
  quality: "strong" | "weak",
): GalleryConversation | undefined {
  return conversations.find((c) =>
    c.label.toLowerCase().startsWith(quality),
  );
}

export default function ConversationGallery({
  gallery,
}: ConversationGalleryProps) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<ViewMode>("gallery");

  if (!gallery?.gallery?.conversations?.length) {
    return null;
  }

  const { conversations } = gallery.gallery;

  const strong = useMemo(() => findByQuality(conversations, "strong"), [conversations]);
  const weak = useMemo(() => findByQuality(conversations, "weak"), [conversations]);
  const canCompare = Boolean(strong && weak);

  return (
    <div className={styles.galleryRoot}>
      <button
        className={styles.galleryTrigger}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        type="button"
      >
        <span className={styles.galleryTriggerIcon} aria-hidden>
          {open ? "\u25B2" : "\u25BC"}
        </span>
        <span className={styles.galleryTriggerText}>
          See how others approached this exercise
        </span>
        <span className={styles.galleryCount}>
          {conversations.length} example{conversations.length !== 1 ? "s" : ""}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.galleryContent}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {canCompare && (
              <div className={styles.viewTabs}>
                <button
                  className={`${styles.viewTab} ${view === "gallery" ? styles.viewTabActive : ""}`}
                  onClick={() => setView("gallery")}
                  type="button"
                >
                  All Examples
                </button>
                <button
                  className={`${styles.viewTab} ${view === "compare" ? styles.viewTabActive : ""}`}
                  onClick={() => setView("compare")}
                  type="button"
                >
                  Compare Strong vs Weak
                </button>
              </div>
            )}

            {view === "gallery" && (
              <div className={styles.cardList}>
                {conversations.map((conv) => (
                  <ConversationCard key={conv.id} conversation={conv} />
                ))}
              </div>
            )}

            {view === "compare" && strong && weak && (
              <ComparisonView strong={strong} weak={weak} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
