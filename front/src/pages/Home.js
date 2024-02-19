import React, { useEffect } from 'react'
import Principes from '../components/Principes'
import Services from '../components/Services'
import Video from '../components/Video'
import { Element, scroller } from 'react-scroll';

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
      <Services />
      <Principes />
    </>
  )
}

export default Home