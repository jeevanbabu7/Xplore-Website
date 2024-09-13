import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Registration from './pages/Registration'; 
import FAQs from './pages/FAQ';
import Contact from './pages/Contact';
import Location from './pages/Location';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
};

export default App;


