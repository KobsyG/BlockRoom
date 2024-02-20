import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ServicesPage from './pages/ServicesPage';
import { useState } from 'react';

function App() {

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar setOpenDrawer={setOpenDrawer} />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/services' element={<ServicesPage setOpenDrawer={setOpenDrawer} />} />
          <Route exact path='/a-propos' Component={About} />
          {/* <Route exact path='/contact' Component={Contact} /> */}
        </Routes>
        <Contact openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
