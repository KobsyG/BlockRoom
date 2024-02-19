import React from 'react'

import soutenez from '../medias/soutenez.png'
import Facebook from '../medias/facebook.png'
import Instagram from '../medias/instagram.png'

const Footer = () => {
  return (
    <div className='all-footer relative w-full'>
      <img className='h-[400px] relative mx-auto -bottom-24 z-10' src={soutenez} />
      <div className='footer-container relative w-full flex flex-col items-center'>
        <div className='absolute w-full h-full z-20'>
          <img className='object-contain w-full' src={require('../medias/papier-arrache-footer.png')} />
        </div>
        <h1 className='relative mt-20 mb-5 z-30'>BlockRoomVideo</h1>
        <div className='relative logo-container flex mb-5 items-center z-30'>
          <img className='h-[40px] mr-2' src={Facebook} />
          <img className='h-[35px]' src={Instagram} />
        </div>
        <div className='relative contact-mentions mb-2 flex z-30'>
          <h2 >Contact</h2>
          <pre><span> | </span> </pre>
          <h2>Mentions Légales</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer