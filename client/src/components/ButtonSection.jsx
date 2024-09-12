
import Card from './Button';

const CardsSection = () => {
  return (
    <section className='h-screen w-full flex justify-center items-center py-10 bg-gray-100'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <Card
          title='Workshops'
          imageSrc='https://via.placeholder.com/300'
          link='/workshops'
        />
        <Card
          title='Competitions'
          imageSrc='https://via.placeholder.com/300'
          link='/competitions'
        />
        <Card
          title='Lectures'
          imageSrc='https://via.placeholder.com/300'
          link='/lectures'
        />
      </div>
    </section>
  );
};

export default CardsSection;
