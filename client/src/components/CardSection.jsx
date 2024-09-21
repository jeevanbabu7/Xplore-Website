import Card from "./Card";
import workshopImage from "../assets/workshop.png";
import competitionImage from "../assets/competition.png";
import talksImage from "../assets/talks.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CardSection = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="md:h-screen lg:h-screen w-full flex justify-center items-center pt-5 pb-10 overflow-hidden">
      <div className="container mx-auto px-4">
        {isDesktop && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="z-10"
            initial={isDesktop ? { x: -100, scale: 0.8 } : {y: 100, scale: 0.8}}
            whileInView={{ x: 0, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Card
              title="Workshops"
              imageSrc={workshopImage}
              link="/workshops"
            />
            
          </motion.div>
          <motion.div
            className="z-5"
            initial={isDesktop ? { x: -500, scale: 0.8 } : {y: 100, scale: 0.8}}
            whileInView={{ x: 0, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              title="Competitions"
              imageSrc={competitionImage}
              link="/competitions"
            />
          </motion.div>
          <motion.div
            initial={isDesktop ? { x: -1000, scale: 0.8 } : {y: 100, scale: 0.8}}
            whileInView={{ x: 0, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              title="Talk Sessions"
              imageSrc={talksImage}
              link="/lectures"
            />
          </motion.div>
        </div> }
        {!isDesktop && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="z-10"
            initial={{y: 100, scale: 0.8}}
            whileInView={{ x: 0, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Card
              title="Workshops"
              imageSrc={workshopImage}
              link="/workshops"
            />
            
          </motion.div>
          <motion.div
            className="z-5"
            initial={{y: 100, scale: 0.8}}
            whileInView={{ x: 0, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              title="Competitions"
              imageSrc={competitionImage}
              link="/competitions"
            />
          </motion.div>
          <motion.div
            initial={{y: 100, scale: 0.8}}
            whileInView={{ x: 0, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              title="Talk Sessions"
              imageSrc={talksImage}
              link="/lectures"
            />
          </motion.div>
        </div>}
      </div>
    </section>
  );
};

export default CardSection;
