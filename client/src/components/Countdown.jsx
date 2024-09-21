import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const text = "Pre-Event Registration ends in".split(" ");
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [800, 1300], [2.3, 1]); 
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
    <section className="h-64 flex flex-col gap-4 justify-center items-center text-center">
      <motion.p style={{scale: isDesktop ? scale : 1}} className="font-Silkscreen text-3xl font-semibold sm:text-2xl ">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </motion.p>
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
          <span className="countdown font-mono text-5xl">
            {timeLeft.minutes}
          </span>
          min
        </div>
        <div className="flex flex-col items-center p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {timeLeft.seconds}
          </span>
          sec
        </div>
      </div>
      {/* <p className="font-Pixelify font-light text-2xl font-semibold" >Hurry up and secure your spot!</p> */}
    </section>
  );
};

export default Countdown;
