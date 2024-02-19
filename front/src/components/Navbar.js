import React from 'react'

import Facebook from '../medias/facebook.png'
import Instagram from '../medias/instagram.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar absolute w-full h-[100px] flex flex-row-reverse items-center mb-10 z-10'>
            <div className='absolute w-full'>
                <img className='object-contain w-full' src={require('../medias/papier-arrache.png')} />
            </div>
            <div className='logoBlaze absolute w-[400px] h-[100px] flex items-center left-5'>
                <img className='logo h-[100px] w-[100px]' />
                <span style={{ fontFamily: 'Italiana' }} className='blaze text-[22px]'><Link to={'/'}>BlockRoomVideo</Link></span>
            </div>

            <div className='reseaux relative w-[150px] ml-2 mr-10 flex items-center justify-center'>
                <button className='facebook h-[50px] w-[50px] mr-2'>
                    <img src={Facebook} />
                </button>

                <button className='instagram h-[40px] w-[40px]'>
                    <img src={Instagram} />
                </button>
            </div>

            <div className='contact relative ml-5 px-2 border border-black rounded-full hover:bg-[#d4cbcb] hover:scale-105 transition-transform duration-200'>
                <span style={{ fontFamily: '' }}>Contact</span>
            </div>

            <div className='quiSommesNous relative ml-5 px-2 border border-black rounded-full hover:bg-[#d4cbcb] hover:scale-105 transition-transform duration-200'>
                <span style={{ fontFamily: '' }}><Link to={"/a-propos"}>Qui sommes-nous</Link></span>
            </div>

            <div className='principesTarif-navbar relative ml-5 px-2 border border-black rounded-full hover:bg-[#d4cbcb] hover:scale-105 transition-transform duration-200'>
                <span style={{ fontFamily: '' }}>Principes et Tarif</span>
            </div>

            <div className='services-navbar relative px-2 border border-black rounded-full hover:bg-[#d4cbcb] hover:scale-105 transition-transform duration-200'>
                <span style={{ fontFamily: '' }}><a href='/#3'>Services</a></span>
            </div>

        </div>
    )
}

export default Navbar