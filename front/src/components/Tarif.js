import React from 'react'

import GrilleTarif from '../medias/tarif.png'
import Photo from '../medias/photo.png'

const Tarif = () => {
  return (
    // <div id='Tarif' className='relative Tarif flex flex-col items-center'>
    //   {/* <h1 className='mt-32'>NOS TARIFS</h1> */}
    //   <h1 style={{ fontFamily: 'test' }} className='text-[22px] border-b-[1px] mt-16 border-yellow-200'>NOS TARIFS</h1>
    //   <div className='h-[600px] mt-12'>
    //     <img className='object-contain h-full' src={GrilleTarif} />
    //   </div>

    // </div>
    <div className='w-[80%] flex justify-center items-center'>
      <img className='h-full object-contain' src={Photo} />
    </div>
  )
}

export default Tarif