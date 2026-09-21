import React, { useState, useEffect } from 'react';

export default function Countdown({ date }) {
  const calculateTime = () => {
    if (!date) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const target = new Date(date).getTime();
    if (isNaN(target)) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    const diff = target - Date.now();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  const isZero = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <section id="hou001-countDown">
      <h2 className="hou001-countDown-title">
        {isZero ? "Welcome to our home" : "Celebration Starts In"}
      </h2>
      <div className="shared-countdown hou001-countdown-wrapper">
        <div className="time-box">
          <span className="num">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="hou001-separator" />
        <div className="time-box">
          <span className="num">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="hou001-separator" />
        <div className="time-box">
          <span className="num">{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="hou001-separator" />
        <div className="time-box">
          <span className="num">{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </section>
  );
}
