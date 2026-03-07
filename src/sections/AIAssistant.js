import React, { useState, useRef, useEffect } from 'react';
import { HiChat, HiPaperAirplane } from 'react-icons/hi';
import { getReply } from '../utils/aiKnowledge';
import './AIAssistant.css';

const SAMPLE_QUESTIONS = [
  'Tell me about Quiz Companion',
  'What is your tech stack?',
  'Show system design for Variant',
];

export default function AIAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed) return;

    const userMsg = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    if (inputRef.current) inputRef.current.value = '';

    // Simulate slight delay for bot reply
    setTimeout(() => {
      const reply = getReply(trimmed);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <section id="ai-assistant" className="section ai-section">
      <div className="section-title">
        <h2>AI Assistant</h2>
        <p>Ask about projects, skills, system design, or resume</p>
      </div>

      <div className="ai-container">
        <div className={`ai-chat-box card ${isOpen ? 'ai-open' : ''}`}>
          <button
            type="button"
            className="ai-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close chat' : 'Open chat'}
          >
            <HiChat size={24} />
            <span>{isOpen ? 'Close' : 'Open'} chat</span>
          </button>

          <div className="ai-chat-content">
            <div className="ai-messages">
              {messages.length === 0 && (
                <div className="ai-placeholder">
                  <p>Try a sample question:</p>
                  <ul>
                    {SAMPLE_QUESTIONS.map((q, i) => (
                      <li key={i}>
                        <button
                          type="button"
                          className="sample-q"
                          onClick={() => sendMessage(q)}
                        >
                          {q}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`ai-msg ai-msg-${msg.role}`}>
                  <span className="ai-msg-label">
                    {msg.role === 'user' ? 'You' : 'Assistant'}
                  </span>
                  <div className="ai-msg-content">{msg.content}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form className="ai-form" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills, or resume..."
                aria-label="Message"
              />
              <button type="submit" className="btn btn-primary" aria-label="Send">
                <HiPaperAirplane size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
