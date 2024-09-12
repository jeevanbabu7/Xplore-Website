import { useNavigate } from 'react-router-dom';

const PreEventRegistration = () => {
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate('/registration');
  };

  return (
    <section className='flex justify-center items-center min-h-screen bg-gray-300 py-10'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold mb-6'>Register Now!</h2>
        <button
          onClick={handleRegistrationClick}
          className='px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105'
        >
          Pre-Event Registration
        </button>
      </div>
    </section>
  );
};

export default PreEventRegistration;
