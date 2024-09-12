import HeroSection from '../components/HeroSection';
import QuoteSection from '../components/QuoteSection';
import ButtonSection from '../components/CardSection';
import PreEvent from '../components/PreEventSection'
import About from '../components/AboutSection'

const Home = () => {
  return (
    <div className="main-container">
      <HeroSection />
      <QuoteSection />
      <PreEvent />
      <ButtonSection />
      <About />
    </div>
  );
};

export default Home;