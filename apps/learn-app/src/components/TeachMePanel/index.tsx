/**
 * TeachMePanel Component - Official OpenAI ChatKit Integration
 *
 * Uses @openai/chatkit-react for the chat UI
 * Connected to our self-hosted ChatKit server for book-grounded responses
 *
 * Reference: https://github.com/openai/openai-chatkit-starter-app
 */

import React, { useCallback, useEffect, useState } from 'react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useStudyMode } from '../../contexts/StudyModeContext';
import styles from './styles.module.css';

// ChatKit API configuration
const CHATKIT_API_URL = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? 'http://localhost:8000/chatkit'
  : '/chatkit';

// Domain key for ChatKit (localhost dev key)
const CHATKIT_DOMAIN_KEY = 'domain_pk_localhost_dev';

interface TeachMePanelProps {
  lessonPath: string;
}

/**
 * Mode Toggle Component
 */
function ModeToggle({ mode, onModeChange }: { mode: 'teach' | 'ask'; onModeChange: (mode: 'teach' | 'ask') => void }) {
  return (
    <div className={styles.modeToggle}>
      <button
        className={`${styles.modeButton} ${mode === 'teach' ? styles.active : ''}`}
        onClick={() => onModeChange('teach')}
      >
        📚 Teach
      </button>
      <button
        className={`${styles.modeButton} ${mode === 'ask' ? styles.active : ''}`}
        onClick={() => onModeChange('ask')}
      >
        ⚡ Ask
      </button>
    </div>
  );
}

export function TeachMePanel({ lessonPath }: TeachMePanelProps) {
  const { isOpen, mode, setMode, closePanel } = useStudyMode();
  const [threadId, setThreadId] = useState<string>(() => `thread_${Date.now()}_${mode}`);

  // Initialize ChatKit with our self-hosted server
  const chatkit = useChatKit({
    api: {
      url: CHATKIT_API_URL,
      domainKey: CHATKIT_DOMAIN_KEY,
    },
    // Pass lesson context to the server
    context: {
      lesson_path: lessonPath,
      mode: mode,
    },
    // Disable attachments for study mode
    composer: {
      attachments: { enabled: false },
    },
  });

  // Handle mode change - create new thread
  const handleModeChange = useCallback((newMode: 'teach' | 'ask') => {
    setMode(newMode);
    setThreadId(`thread_${Date.now()}_${newMode}`);
  }, [setMode]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closePanel();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closePanel]);

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={styles.overlay}
        onClick={closePanel}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside className={styles.panel} role="complementary" aria-label="Study Mode">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>🎓 Study Mode</h2>
            <span className={styles.badge}>Official ChatKit</span>
          </div>
          <button className={styles.closeButton} onClick={closePanel} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mode Toggle */}
        <ModeToggle mode={mode} onModeChange={handleModeChange} />

        {/* Mode Description */}
        <div className={styles.modeDescription}>
          {mode === 'teach'
            ? '📚 Socratic Teaching - AI guides you step by step'
            : '⚡ Quick Answers - Direct responses to your questions'}
        </div>

        {/* ChatKit Component */}
        <div className={styles.chatContainer}>
          <ChatKit
            control={chatkit.control}
            className={styles.chatKit}
          />
        </div>
      </aside>
    </>
  );
}

export default TeachMePanel;
