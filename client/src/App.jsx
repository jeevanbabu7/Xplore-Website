import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Assuming Home is your landing page component
import Registration from './pages/Registration'; // New registration page component
import FAQs from './pages/FAQ';
import Contact from './pages/Contact';
import Location from './pages/Location';

const App = () => {
  return (
    <Router>
        <div className='flex flex-col min-h-screen'>
          <div className='flex-grow'>
            {/* Define the routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/location" element={<Location />} />
              <Route path="/faqs" element={<FAQs />} />
            </Routes>
          </div>
        </div>
        
    </Router>
  );
};

export default App;


