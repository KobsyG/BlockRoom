import React, { useEffect } from 'react'
import Tarif from '../components/Tarif'
import Production from '../components/Production'
import Video from '../components/Video'
import { Element, scroller } from 'react-scroll';
import Navbar from '../components/Navbar';
import About from './About';
import BlockRoom from '../components/BlockRoom';

const Home = () => {

  useEffect(() => {
    const fragment = window.location.hash.substring(1);

    if (fragment) {
      scroller.scrollTo(fragment);
    }
  }, []);
  
  return (
    <>
      <Video />
      <BlockRoom />
      <Production />
    </>
  )
}

export default Home