import React, { useState, useEffect } from 'react';
import styles from './CountDownTimer.module.css';

const CountDownTimer = ({ type, className, customTime, customLabel }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-01') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className={styles.countdownTimer}>
      {type === "Today" ? (
        <>
          <div className={styles.timeBlock}>
            <p className={styles.label}>Days</p>
            <p className={styles.timeLeft}>{timeLeft.days}</p>
          </div>
          <div className={styles.separator}>:</div>
          <div className={styles.timeBlock}>
            <p className={styles.label}>Hours</p>
            <p className={styles.timeLeft}>{addLeadingZero(timeLeft.hours)}</p>
          </div>
          <div className={styles.separator}>:</div>
          <div className={styles.timeBlock}>
            <p className={styles.label}>Minutes</p>
            <p className={styles.timeLeft}>{addLeadingZero(timeLeft.minutes)}</p>
          </div>
          <div className={styles.separator}>:</div>
          <div className={styles.timeBlock}>
            <p className={styles.label}>Seconds</p>
            <p className={styles.timeLeft}>{addLeadingZero(timeLeft.seconds)}</p>
          </div>
        </>
      ) : (
        <>
          <div className={className}>
            <p className={customLabel}>Days</p>
            <p className={customTime}>{timeLeft.days}</p>
          </div>
          <div className={className}>
            <p className={customLabel}>Hours</p>
            <p className={customTime}>{addLeadingZero(timeLeft.hours)}</p>
          </div>
          <div className={className}>
            <p className={customLabel}>Minutes</p>
            <p className={customTime}>{addLeadingZero(timeLeft.minutes)}</p>
          </div>
          <div className={className}>
            <p className={customLabel}>Seconds</p>
            <p className={customTime}>{addLeadingZero(timeLeft.seconds)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CountDownTimer;