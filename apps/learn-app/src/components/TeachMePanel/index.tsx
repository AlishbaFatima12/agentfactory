/**
 * TeachMePanel Component - Official OpenAI ChatKit Integration
 *
 * Uses @openai/chatkit-react for the chat UI
 * Connected to our self-hosted ChatKit server for book-grounded responses
 *
 * Socratic Teaching Mode - explains concepts step-by-step, asks checking questions
 *
 * Reference: https://github.com/openai/openai-chatkit-starter-app
 */

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useStudyMode } from '../../contexts/StudyModeContext';
import styles from './styles.module.css';

// ChatKit API configuration for self-hosted backend
const CHATKIT_API_BASE = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? 'http://localhost:8000/chatkit'
  : '/chatkit';

// Domain key for local development (register production key in OpenAI dashboard)
const CHATKIT_API_DOMAIN_KEY = 'domain_pk_localhost_dev';

// Build URL with lesson path
function getChatKitUrl(lessonPath: string): string {
  const params = new URLSearchParams();
  params.set('mode', 'teach');
  if (lessonPath) {
    params.set('lesson_path', lessonPath);
  }
  return `${CHATKIT_API_BASE}?${params.toString()}`;
}

// Fetch suggestions from backend
async function fetchSuggestions(lessonPath: string): Promise<string[]> {
  try {
    const params = new URLSearchParams();
    params.set('mode', 'teach');
    if (lessonPath) {
      params.set('lesson_path', lessonPath);
    }
    const response = await fetch(`${CHATKIT_API_BASE}/suggestions?${params.toString()}`);
    if (response.ok) {
      const data = await response.json();
      return data.suggestions || [];
    }
  } catch (error) {
    console.error('Failed to fetch suggestions:', error);
  }
  return [];
}

interface TeachMePanelProps {
  lessonPath: string;
}

/**
 * Suggestion Text Component - Socratic style suggestions
 */
function SuggestionText({ suggestions, visible }: { suggestions: string[]; visible: boolean }) {
  if (!visible || suggestions.length === 0) return null;

  return (
    <div className={styles.suggestionText}>
      <span className={styles.suggestionLabel}>Do you want to know about:</span>
      {suggestions.map((suggestion, index) => (
        <span key={index} className={styles.suggestionItem}>
          {suggestion}{index < suggestions.length - 1 ? ', ' : '?'}
        </span>
      ))}
    </div>
  );
}

/**
 * Inner ChatKit wrapper
 */
function ChatKitWrapper({ lessonPath, chatKey }: { lessonPath: string; chatKey: number }) {
  const apiUrl = useMemo(() => getChatKitUrl(lessonPath), [lessonPath]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const chatkit = useChatKit({
    api: {
      url: apiUrl,
      domainKey: CHATKIT_API_DOMAIN_KEY,
    },
    composer: {
      attachments: { enabled: false },
    },
  });

  // Fetch suggestions on mount and when chat resets
  useEffect(() => {
    fetchSuggestions(lessonPath).then(setSuggestions);
  }, [lessonPath, chatKey]);

  return (
    <div className={styles.chatWrapper}>
      <ChatKit control={chatkit.control} className={styles.chatKit} />
      <SuggestionText suggestions={suggestions} visible={true} />
    </div>
  );
}

export function TeachMePanel({ lessonPath }: TeachMePanelProps) {
  const { isOpen, closePanel } = useStudyMode();
  const [chatKey, setChatKey] = useState(0);

  // Start new chat
  const handleNewChat = useCallback(() => {
    setChatKey(prev => prev + 1);
  }, []);

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

  // Keep component mounted but hidden to preserve chat history
  const panelStyle = isOpen ? {} : { display: 'none' as const };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={closePanel}
          aria-hidden="true"
        />
      )}

      {/* Panel - stays mounted to preserve chat history */}
      <aside className={styles.panel} role="complementary" aria-label="Study Mode" style={panelStyle}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Study Mode</h2>
          <div className={styles.headerActions}>
            <button className={styles.newChatButton} onClick={handleNewChat} aria-label="New Chat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New
            </button>
            <button className={styles.closeButton} onClick={closePanel} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* ChatKit Component */}
        <div className={styles.chatContainer}>
          <ChatKitWrapper
            key={`${lessonPath}-${chatKey}`}
            lessonPath={lessonPath}
            chatKey={chatKey}
          />
        </div>
      </aside>
    </>
  );
}

export default TeachMePanel;
