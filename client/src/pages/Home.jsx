import HeroSection from '../components/HeroSection';
import QuoteSection from '../components/QuoteSection';
import ButtonSection from '../components/CardSection';
import PreEvent from '../components/PreEventSection'
import About from '../components/AboutSection'
import Footer from '../components/Footer'
import { useEffect, useState} from 'react';
import PreLoader from '../utilities/Preloader/PreLoader';



const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const LazyLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    LazyLoading();

    return () => {
      clearTimeout(LazyLoading);
    }
  }, []);

  return loading ? (<PreLoader />) : (
    <div className="main-container">
      <HeroSection />
      <QuoteSection />
      <PreEvent />
      <ButtonSection />
      <About />
      <Footer />
    </div>
  );
};

export default Home;