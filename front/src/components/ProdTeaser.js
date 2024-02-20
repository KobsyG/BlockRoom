import React from 'react'

const ProdTeaser = () => {
    return (
        <div className='h-[300px] w-[300px] bg-red-300'>
            <video className='w-full h-full object-cover' id='videotest' autoPlay loop muted>
                <source src={require('../medias/videotest.mp4')} />
            </video>
        </div>
    )
}

export default ProdTeaser