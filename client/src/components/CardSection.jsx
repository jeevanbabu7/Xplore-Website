import Card from './Card';
import workshopImage from '../assets/workshop.png'
import competitionImage from '../assets/competition.png'
import talksImage from '../assets/talks.png'

const CardSection = () => {
  return (
    <section className='h-screen w-full flex justify-center items-center py-10 bg-gray-100'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <Card
          title='Workshops'
          imageSrc= {workshopImage}
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
    </section>
  );
};

export default CardSection;
