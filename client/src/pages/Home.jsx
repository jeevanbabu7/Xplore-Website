import HeroSection from '../components/HeroSection';
import QuoteSection from '../components/QuoteSection';
import ButtonSection from '../components/CardSection';
import PreEvent from '../components/PreEventSection'
import About from '../components/AboutSection'
import Footer from '../components/Footer'
import { useEffect, useState} from 'react';
import PreLoader from '../utilities/Preloader/PreLoader';
import AnimatedSection from '../components/AnimatedSection';

import { FadeIn, LeftToRight } from '../utilities/Transitions/FadeTransitions.js';


const Home = () => {

  

  // Lazy Loading for Preloader
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const LazyLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3500);
    }

    LazyLoading();

    return () => {
      clearTimeout(LazyLoading);
    }
  }, []);



  return loading ? (<PreLoader />) : (
    <div className="main-container overflow-hidden">
      <HeroSection />
      <AnimatedSection AnimationStyle={LeftToRight}>
        <QuoteSection />
      </AnimatedSection>
      <PreEvent />
      <ButtonSection />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

