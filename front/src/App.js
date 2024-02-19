import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/a-propos' Component={About} />
          <Route exact path='/contact' Component={Contact} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
