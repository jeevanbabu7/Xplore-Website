// import ParticleRing from "./ParticleRing";

// const HeroSection = () => {
//   return (
//     <section className="hero relative h-screen w-full flex flex-col justify-center items-center text-center">
//       <ParticleRing />
//       <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
//       <h1 className="text-8xl font-semibold text-white font-handjet">
//         Xplore 24
//       </h1>
//       <p className="text-xl text-white mt-4 font-Silkscreen">National Level Tech Fest</p>
//       </div> 
//     </section>
//   );
// };

// export default HeroSection;

import { useRef, useEffect } from 'react';
import ParticleRing from "./ParticleRing"


const HeroSection = () => {
  const ref = useRef(null);
  const observer = useRef(null);

  

  useEffect(() => {
    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate on intersection (hero section or other sections are visible)
          ref.current.rotation.z = 0.05; // Constant rotation
          // Add zoom-in effect
          ref.current.scale.set(1.2, 1.2, 1.2);
        } else {
          // Stop animation on non-intersection
          ref.current.rotation.z = 0;
          // Add zoom-out effect
          ref.current.scale.set(1, 1, 1);
        }
      });
    });
  
    if (ref.current) {
      observer.current.observe(ref.current);
    }
  
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="hero relative h-screen w-full flex flex-col justify-center items-center text-center">
      <div className="absolute top-0 left-0 w-full h-full">
        <ParticleRing ref={ref} />
      </div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-8xl font-semibold text-white font-handjet">
          Xplore 24
        </h1>
        <p className="text-xl text-white mt-4 font-Silkscreen">National Level Tech Fest</p>
      </div>
    </section>
  );
};

export default HeroSection;

