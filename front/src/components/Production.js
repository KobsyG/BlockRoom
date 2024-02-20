import React from 'react'
import ProdTeaser from './ProdTeaser'

const Production = () => {
  return (
    <div className='production relative flex flex-col items-center pt-16'>
        {/* <h1 style={{ fontFamily: 'JejuHallasan' }} className='mb-16 text-[22px] border-b-[1px] border-yellow-200'>NOS DERNIERES PRODUCTIONS</h1> */}
        <h1 style={{ fontFamily: 'JejuHallasan' }} className='mb-16 text-[22px] border-b-[1px] border-yellow-200'>Nos Dernieres Productions</h1>
        <div className='flex w-[70%] justify-between'>
          <ProdTeaser />
          <ProdTeaser />
          <ProdTeaser />
        </div>
    </div>
  )
}

export default Production