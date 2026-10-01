'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSendToWhatsApp = (text: string) => {
    if (!text.trim()) return;
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text.trim())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendToWhatsApp(message);
    setMessage('');
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-panel" role="dialog" aria-label="Customer service chat">
          <div className="chat-head">
            <div className="chat-head-info">
              <span className="chat-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/favicon.jpg" alt={siteConfig.shortName} className="chat-avatar-img" />
              </span>
              <div>
                <strong>{siteConfig.shortName} Host</strong>
                <span className="chat-status">
                  <span className="chat-dot" /> Usually replies within minutes
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat window"
            >
              <X size={18} />
            </button>
          </div>

          <div className="chat-body">
            <div className="chat-bubble">
              👋 Hello! Welcome to {siteConfig.shortName}. How can we help you today?
            </div>
            <div className="chat-quick">
              <button
                type="button"
                onClick={() =>
                  handleSendToWhatsApp(
                    `Hello! I'm interested in booking a stay at ${siteConfig.shortName}. Could you share more information?`
                  )
                }
              >
                I&apos;d like to book a stay. Please send details
              </button>
              <button
                type="button"
                onClick={() =>
                  handleSendToWhatsApp('What are your current rates and availability for this month?')
                }
              >
                What are your rates this month?
              </button>
              <button
                type="button"
                onClick={() =>
                  handleSendToWhatsApp('Hello, do you offer airport pickup service?')
                }
              >
                Airport shuttle pickup info
              </button>
            </div>
          </div>

          <form className="chat-form" onSubmit={handleSubmit}>
            <div className="chat-input-row">
              <input
                type="text"
                placeholder="Type your message…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="Your WhatsApp message"
              />
              <button type="submit" className="chat-send" aria-label="Send via WhatsApp">
                <Send size={16} />
              </button>
            </div>
            <a href={`tel:${siteConfig.phone}`} className="chat-call">
              <Phone size={12} /> Or call us directly: {siteConfig.phoneDisplay}
            </a>
          </form>
        </div>
      )}

      <button
        type="button"
        className={`chat-fab ${isOpen ? 'is-open' : ''}`}
        onClick={toggleOpen}
        aria-label={isOpen ? 'Close chat' : 'Open WhatsApp chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="chat-badge" aria-label="1 unread message">1</span>}
      </button>
    </div>
  );
}
