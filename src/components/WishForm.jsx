import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const AI_SUGGESTIONS = [
  "Congratulations on your new beginning! May Aaradhya Nilayam be blessed with endless happiness, health, and prosperity.",
  "May your new home open doors to wonderful memories, joy, and peace. Warmest housewarming congratulations to the entire family!",
  "Wishing you and your family abundant blessings, laughter, and lifelong love in your beautiful new residence. Happy Griha Pravesh!",
  "May every corner of Aaradhya Nilayam shine with light, harmony, and prosperity. Congratulations on this milestone!"
];

export default function WishForm({ onWishSubmitted }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiIndex, setAiIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const handleGenerateAI = () => {
    setMessage(AI_SUGGESTIONS[aiIndex % AI_SUGGESTIONS.length]);
    setAiIndex(prev => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setFeedback('Please fill all fields');
      setTimeout(() => setFeedback(''), 4000);
      return;
    }

    setIsSubmitting(true);
    setFeedback('');

    setTimeout(() => {
      onWishSubmitted({
        id: `wish-${Date.now()}`,
        authorName: name.trim(),
        message: message.trim()
      });
      setName('');
      setMessage('');
      setIsSubmitting(false);
      setFeedback('Your wishes have been submitted successfully!');
      setTimeout(() => setFeedback(''), 4000);
    }, 400);
  };

  return (
    <div id="wisher-section" className="Wisher-Section hou001-shared-wishes">
      <div id="wisher-container" className="wisher-container">
        <form id="wisher-form" className="wisher-form" onSubmit={handleSubmit}>
          <input
            id="wisher-name-input"
            type="text"
            className="wisher-input"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <div className="wisher-textarea-wrapper">
            <textarea
              id="wisher-message-input"
              className="wisher-textarea"
              placeholder="Your Wishes"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={200}
              disabled={isSubmitting}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />

            <button
              type="button"
              className={`wisher-ai-btn ${isFocused ? 'expanded' : ''}`}
              onClick={handleGenerateAI}
              title="Generate AI wishes"
            >
              <span className="wisher-ai-sparkle">
                <Sparkles size={16} />
              </span>
              <span className="ai-text">Generate AI wishes</span>
            </button>
          </div>

          {feedback && (
            <p id="wisher-feedback" className="wisher-feedback">
              {feedback}
            </p>
          )}

          <div className="wisher-btn-container">
            <button
              id="wisher-submit-btn"
              type="submit"
              className="wisher-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
