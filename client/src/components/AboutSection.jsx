import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-between items-center bg-blue-600 text-white py-16">
      <div className="container mx-auto text-center border-2 p">
        <h2 className="text-4xl font-bold mb-6">About Xplore 24</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Xplore 24 is a national-level tech fest organized by the Government College of Engineering, Kannur.
          This grand event brings together the brightest minds across the country, fostering innovation and
          technical prowess. From exhilarating competitions to insightful talks and hands-on workshops,
          Xplore 24 is set to redefine the limits of technology. Join us and experience an immersive journey
          into the future of tech!
        </p>
      </div>
      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-6 mt-10 w-full mb-0">
        <div className="container mx-auto text-center">
          <ul className="flex justify-center space-x-8 text-lg">
            <li>
              <Link to="/competitions" className="hover:underline">
                Competitions
              </Link>
            </li>
            <li>
              <Link to="/workshops" className="hover:underline">
                Workshops
              </Link>
            </li>
            <li>
              <Link to="/talk-sessions" className="hover:underline">
                Talk Sessions
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/location" className="hover:underline">
                Location
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      </section>
  );
};

export default AboutSection;
