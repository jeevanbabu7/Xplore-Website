import { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="h-64 flex flex-col gap-4 justify-center items-center ">
      <p className="font-Silkscreen font-light text-3xl font-semibold">Pre-Event Registration ends in</p>
      <div className="flex gap-5 text-center">
          <div className="flex flex-col items-center p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">{timeLeft.days}</span>
            days
          </div>
          <div className="flex flex-col items-center p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">{timeLeft.hours}</span>
            hours
          </div>
          <div className="flex flex-col items-center p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">{timeLeft.minutes}</span>
            min
          </div>
          <div className="flex flex-col items-center p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">{timeLeft.seconds}</span>
            sec
          </div>
      </div>
      {/* <p className="font-Pixelify font-light text-2xl font-semibold" >Hurry up and secure your spot!</p> */}
    </section>
  );
};

export default Countdown;
