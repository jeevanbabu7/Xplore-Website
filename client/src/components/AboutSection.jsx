import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="flex-grow h-screen w-full flex flex-col justify-center items-center text-white">
      <div className="container border-2 rounded-md p-10">
        <div className="container mx-auto text-center ">
            <h2 className="text-5xl font-bold mb-6 font-handjet">About Xplore 24</h2>
            <p className="text-2xl max-w-3xl mx-auto mb-8 font-Silkscreen">
              Xplore 24 is a national-level tech fest organized by the Government College of Engineering, Kannur.
              This grand event brings together the brightest minds across the country, fostering innovation and
              technical prowess. From exhilarating competitions to insightful talks and hands-on workshops,
              Xplore 24 is set to redefine the limits of technology. Join us and experience an immersive journey
              into the future of tech!
            </p>
          </div>
          <div className="container flex justify-center gap-20 mt-10">
            <Link to='/contact'>
            <button className='px-10 py-8 text-white text-xl font-bold rounded-xl hover:transition-all duration-300 ease-in-out shadow-lg border-0 outline-none cursor-pointer uppercase bg-[#0e0e1a] text-[#eaeaea] bg-gradient-to-r active:scale-90 shadow-[0px_0px_150px_#1f4c65]'>Contact Us</button>
            </Link>
            <Link to='location'>
            <button className='px-10 py-8 text-white text-xl font-bold rounded-xl hover:transition-all duration-300 ease-in-out shadow-lg border-0 outline-none cursor-pointer uppercase bg-slate-200 text-gray-900
    '>Location</button>
            </Link>
          </div>
      </div>
    </section>
  );
};

export default AboutSection;
