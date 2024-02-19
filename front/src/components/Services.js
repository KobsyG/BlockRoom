import React from 'react'

import commentReal from '../medias/comment-real.png'
import atelier from '../medias/atelier.png'

const Services = () => {
    return (
        <div id='3' className='relative services flex flex-col'>
            <div className='docu w-full'>
                <div className='titre h-[100px] flex items-center justify-center'>
                    <h1 style={{ fontFamily: 'test' }} className='text-[22px] border-b-[1px] border-yellow-200'>REALISER UN DOCUMENTAIRE</h1>
                </div>
                <div style={{ fontFamily: 'JejuHallasan' }} className='w-full flex justify-center'>
                    <div className='documentaires w-[600px] mt-12 '>
                        <h1 className='mb-16 text-center'>Vous souhaitez réalisr un documentaire ?</h1>
                        <p>blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab</p>
                    </div>
                    <div className='comment-real h-[500px] bg-red-600'>
                        <img className='object-contain h-full' src={commentReal} />
                    </div>
                </div>
            </div>

            <div className='atelier w-full mt-10'>
                <div className='titre  h-[100px] flex items-center justify-center'>
                    <h1 style={{ fontFamily: 'test' }} className='text-[22px] border-b-[1px] border-yellow-200'>ATELIER BLOCKROOM</h1>
                </div>
                <div style={{ fontFamily: 'JejuHallasan' }} className='w-full flex justify-center'>
                    <div className='comment-real h-[500px]'>
                        <img className='object-contain h-full' src={atelier} />
                    </div>
                    <div className='documentaires w-[600px] mt-12 ml-16'>
                        <h1 className='mb-16 text-center'>Vous souhaitez dévoloper vos compétances dans la conception de documentaire. Nous proposons un Atelier BlockRoom</h1>
                        <p>blablablablablalballbal  blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab blablablablablalballbal balbal blalalvblaab</p>
                    </div>
                </div>
            </div>
            <button className='h-[50px] w-[200px] mx-auto border-2 mt-20 hover:bg-[#FFFFFF] hover:scale-105 transition-transform duration-200 bg-[#d9d9d9]'>NOUS CONTACTER</button>
        </div>

    )
}

export default Services