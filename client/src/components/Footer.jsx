import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section>
        <footer className="font-handjet  text-white py-20 w-full mb-0">
          <div className="container mx-auto text-center">
            <ul className="flex flex-wrap justify-center space-x-8 text-2xl">
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
  )
}

export default Footer
