import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX, Phone } from 'lucide-react';

export default function FloatingActions({ phone = "+91 6364469555", audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const fallbackAudio = "https://cdn-user.invitationnation.in/music/Can't+Help+Falling+in+Love+(Instrumental).mp3";
  const songSource = audioUrl || fallbackAudio;

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Audio autoplay / play restricted by browser policy:", err);
      }
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="hou001-music-section">
      <audio ref={audioRef} src={songSource} loop preload="auto" />

      {/* Floating Call Button */}
      <button
        id="call-btn"
        onClick={handleCall}
        title={`Call Host (${phone})`}
        aria-label="Call Host"
      >
        <Phone size={24} color="#fff" />
      </button>

      {/* Floating Music Button */}
      <button
        id="music-btn-main"
        onClick={toggleMusic}
        title={isPlaying ? "Pause Music" : "Play Background Music"}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          <Music size={28} color="#fff" />
        ) : (
          <VolumeX size={28} color="#fff" />
        )}
      </button>
    </div>
  );
}
