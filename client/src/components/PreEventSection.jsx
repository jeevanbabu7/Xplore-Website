import { useNavigate } from 'react-router-dom';
// import FloatingBlob from '../utilities/FloatingBlob';
import Countdown from '../components/Countdown';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PreEventRegistration = () => {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleRegistrationClick = () => {
    navigate('/registration');
  };

  return (
    <section className='flex flex-col justify-center items-center sm:h-screen md:h-screen lg:h-screen py-16 sm:py-4'>
      {/* <FloatingBlob /> */}
      <div className='mb-10'>
        <Countdown targetDate={new Date("2024-10-03") }/>
      </div>
      <div className='text-center'>
        <motion.h2 animate={{scale: 1.1}} transition={{duration: 1.2, repeat: Infinity, repeatType: "reverse"}} className='font-Silkscreen text-3xl font-bold mb-7'>Register Now!</motion.h2>
        <button
          onClick={handleRegistrationClick}
          className='px-8 sm:px-24 py-8 text-white text-xl font-semibold rounded-xl hover: transition-all duration-300 ease-in-out shadow-lg text-xl border-0 outline-none rounded-md cursor-pointer uppercase bg-[#0e0e1a] text-[#eaeaea] font-bold transition-all duration-600 shadow-[0px_0px_60px_#1f4c65] hover:bg-gradient-to-r active:scale-90 hover:shadow-[0px_0px_150px_#1f4c65] active:scale-90 mx-auto sm:max-w-md sm:mx-auto'
        >
          Pre-Event Registration
        </button>
      </div>
    </section>
  );
};

export default PreEventRegistration;
