import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/about" element ={<About />} />        
        <Route path="*" element ={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;