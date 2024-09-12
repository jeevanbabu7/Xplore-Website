import HeroSection from './HeroSection';
import QuoteSection from './QuoteSection';
import ButtonSection from './CardSection';
import PreEvent from './PreEventSection'

const Main = () => {
  return (
    <div className="main-container">
      <HeroSection />
      <QuoteSection />
      <PreEvent />
      <ButtonSection />
    </div>
  );
};

export default Main;