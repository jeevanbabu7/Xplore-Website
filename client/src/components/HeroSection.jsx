import ParticleRing from "./ParticleRing";

const HeroSection = () => {
  return (
    <section className="hero relative h-screen w-full flex flex-col justify-center items-center text-center">
      {/* <ParticleRing /> */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
      <h1 className="text-8xl font-semibold text-white font-handjet">
        Xplore 24
      </h1>
      <p className="text-xl text-white mt-4 font-Silkscreen">National Level Tech Fest</p>
      </div> 
    </section>
  );
};

export default HeroSection;
