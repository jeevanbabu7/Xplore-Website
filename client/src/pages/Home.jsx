import HeroSection from '../components/HeroSection';
import QuoteSection from '../components/QuoteSection';
import ButtonSection from '../components/ButtonSection';
import PreEvent from '../components/PreEventSection'

const Home = () => {
  return (
    <div className="main-container">
      <HeroSection />
      <QuoteSection />
      <PreEvent />
      <ButtonSection />
    </div>
  );
};

export default Home;