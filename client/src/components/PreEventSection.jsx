import { useNavigate } from 'react-router-dom';
import FloatingBlob from '../utilities/FloatingBlob';

const PreEventRegistration = () => {
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate('/registration');
  };

  return (
    <section className='flex justify-center items-center pt-20 mb-32 py-3'>
      {/* <FloatingBlob /> */}
      <div className='text-center'>
        <h2 className='font-Silkscreen text-4xl font-bold mb-10'>Register !</h2>
        <button
          onClick={handleRegistrationClick}
          className='px-40 py-8 text-white text-xl font-semibold rounded-xl hover: transition-all duration-300 ease-in-out shadow-lg text-xl border-0 outline-none rounded-md cursor-pointer uppercase bg-[#0e0e1a] text-[#eaeaea] font-bold transition-all duration-600 shadow-[0px_0px_60px_#1f4c65] hover:bg-gradient-to-r active:scale-90 hover:shadow-[0px_0px_150px_#1f4c65] active:scale-90'
        >
          Pre-Event Registration
        </button>
      </div>
    </section>
  );
};

export default PreEventRegistration;
