import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar.js';
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import Information from './pages/information.js';
import Guide from './pages/guide.js';

const App = () => {
  return (<div>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information" element={<Information />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
        
      </Sidebar>
    </BrowserRouter>
    </div>
  );
};

export default App;