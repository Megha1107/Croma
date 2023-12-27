import React, { useState, useEffect } from 'react';

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-12-01`) - +new Date();
  let timeLeft = {
    days: String(Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0')),
    hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0')),
    minutes: String(Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, '0')),
    seconds: String(Math.floor((difference / 1000) % 60).toString().padStart(2, '0')),
  };

  return timeLeft;
}

export default function TimeClock() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null; 
    }

    return (
      <div className='d-flex flex-column' key={interval}>
        <span className='count'>{timeLeft[interval]}</span>
        <span className='dhm'>{interval}</span>
      </div>
    );
  });

  return (
    <div className='timer-cl'>
      {timerComponents}
    </div>
  );
}
