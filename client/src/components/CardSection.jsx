import Card from './Card';
import workshopImage from '../assets/workshop.png'
import competitionImage from '../assets/competition.png'
import talksImage from '../assets/talks.png'
import AnimatedSection from './AnimatedSection.jsx';
import { RotateIn, SlideIn, SlideOut } from '../utilities/Transitions/FadeTransitions.js';

const CardSection = () => {
  return (
    <section className='md:h-screen lg:h-screen w-full flex justify-center items-center pt-5 pb-10 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '>
          <AnimatedSection AnimationStyle={SlideIn}>
            <Card
              title='Workshops'
              imageSrc={workshopImage}
              link='/workshops'
            />
          </AnimatedSection>
          <AnimatedSection AnimationStyle={SlideIn}>
            <Card
              title='Competitions'
              imageSrc={competitionImage}
              link='/competitions'
            />
          </AnimatedSection>
          <AnimatedSection AnimationStyle={SlideIn}>
            <Card
              title='Talk Sessions'
              imageSrc={talksImage}
              link='/lectures'
            />
          </AnimatedSection>
          
          
        </div>
      </div>
    </section>

  );
};

export default CardSection;
