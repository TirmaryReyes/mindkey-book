'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [calculateTimeLeft, timeLeft]);

  return (
    <div className="flex justify-center items-center space-x-2 text-main-title font-light text-2xl md:text-2xl">
      {timeLeft.hours !== undefined && (
        <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
      )}
      <span>:</span>
      {timeLeft.minutes !== undefined && (
        <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
      )}
      <span>:</span>
      {timeLeft.seconds !== undefined && (
        <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
      )}
    </div>
  );
};

export default CountdownTimer;
