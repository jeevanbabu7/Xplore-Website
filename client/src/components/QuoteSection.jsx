import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const QuoteSection = () => {
  const { scrollY } = useScroll();
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const scale = useTransform(scrollY, [400, 1300], [1, isDesktop ? 1.8 : 1]);
  const opacity = useTransform(scrollY, [400, 1300], [0.8, 1]);
  return (
    <section className="quote-section h-screen flex justify-center items-center font-Silkscreen px-4">
      <motion.blockquote style={{scale, opacity}} className='text-xl sm:text-2xl font-semibold text-center text-slate-100 max-w-4xl border-b-rose-50'>
        Unleash your potential and redefine technology at Xplore 24.
      </motion.blockquote>
    </section>
  );
};

export default QuoteSection;

