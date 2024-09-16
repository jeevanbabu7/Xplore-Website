import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  
  const navigate = useNavigate();
  const handleLocation = () => {
    navigate('/location');
  }

  const handleContact = () => {
    navigate('/contact')
  }
  
  return (
    <section className="flex-grow h-screen w-full flex flex-col justify-center items-center bg-blue-600 text-white py-16">
    <div className="container border-2 rounded-md p-20">
    <div className="container mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-6">About Xplore 24</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Xplore 24 is a national-level tech fest organized by the Government College of Engineering, Kannur.
          This grand event brings together the brightest minds across the country, fostering innovation and
          technical prowess. From exhilarating competitions to insightful talks and hands-on workshops,
          Xplore 24 is set to redefine the limits of technology. Join us and experience an immersive journey
          into the future of tech!
        </p>
      </div>
      <div className="container flex justify-center gap-20 mt-10">
        <button className='px-10 bg-gray-200 text-black text-xl rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105' onClick={handleContact}>Contact Us</button>
        <button className='px-10 py-5 bg-gray-200 text-black text-xl rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105' onClick={handleLocation}>Location</button>
      </div>
    </div>
      
      </section>
  );
};

export default AboutSection;
