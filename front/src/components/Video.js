import { Carousel } from '@material-tailwind/react'
import React from 'react'


import atelier from '../medias/atelier.png'

const Video = () => {
    return (
        <div className='sticky top-0'>
            <div className='video-container h-[90vh] w-full'> {/* aspect ratio for h later */}
                <Carousel
                    navigation={() => { }}
                >
                    <video className='w-full h-full object-cover' id='videotest' autoPlay loop muted>
                        <source src={require('../medias/videotest.mp4')} />
                    </video>

                    <video className='w-full h-full object-cover' id='videotest' autoPlay loop muted>
                        <source src={require('../medias/videotest.mp4')} />
                    </video>

                </Carousel>
            </div>
        </div>
    )
}

export default Video