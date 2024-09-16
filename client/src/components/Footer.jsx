import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section>
        <footer className="font-handjet text-white  mb-0 pt-10 pb-8">
          <div className="container mx-auto text-center sm:p-1">
            <ul className="flex flex-wrap justify-center items-start space-x-8">
              <li className='text-3xl'>
                <Link to="/competitions" className="hover:underline">
                  Competitions
                </Link>
              </li>
              <li className='text-3xl'>
                <Link to="/workshops" className="hover:underline">
                  Workshops
                </Link>
              </li>
              <li className='text-3xl'>
                <Link to="/talk-sessions" className="hover:underline">
                  Talk Sessions
                </Link>
              </li>
              <li className='text-3xl'>
                <Link to="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li className='text-3xl'>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li className='text-3xl'>
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
