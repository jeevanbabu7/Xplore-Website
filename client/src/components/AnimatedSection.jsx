import React, { useEffect, useRef, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

const AnimatedSection = ({ children, AnimationStyle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const AnimationRef = useRef(null);

  const transitions = useTransition(isVisible, {
    
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },  
    leave: { opacity: 0, transform: 'translateY(20px)' }, 
    ...AnimationStyle
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // for animating all the time
        // setIsVisible(entry.isIntersecting);

        // For animating only once
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(AnimationRef.current); 
        }
      },
      { threshold: 0.1 }
    );

    if (AnimationRef.current) {
      observer.observe(AnimationRef.current);
    }

    return () => {
      if (AnimationRef.current) {
        observer.unobserve(AnimationRef.current);
      }
    };
  }, [isVisible]); 

  return (
    <div ref={AnimationRef}>
      {transitions(
        (style, item) =>
          item && (
            <animated.div style={style}>
              {children}
            </animated.div>
          )
      )}
    </div>
  );
};

export default AnimatedSection;
