// import Main from './components/Main'

// const App = () => {
//   return (
//     <div className='App'>
//       <Main/>
//     </div>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Assuming Home is your landing page component
import Registration from './pages/Registration'; // New registration page component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default App;


