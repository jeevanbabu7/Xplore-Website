import Card from './Card';
import workshopImage from '../assets/workshop.png'
import competitionImage from '../assets/competition.png'
import talksImage from '../assets/talks.png'

const CardSection = () => {
  return (
    <section className='w-full flex justify-center items-center pt-5 pb-10 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '>
          <Card
            title='Workshops'
            imageSrc={workshopImage}
            link='/workshops'
          />
          <Card
            title='Competitions'
            imageSrc={competitionImage}
            link='/competitions'
          />
          <Card
            title='Talk Sessions'
            imageSrc={talksImage}
            link='/lectures'
          />
        </div>
      </div>
    </section>

  );
};

export default CardSection;
