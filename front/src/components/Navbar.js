import React from 'react'

import Facebook from '../medias/facebook.png'
import Instagram from '../medias/instagram.png'
import Logo from '../medias/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = ({setOpenDrawer}) => {
    
    return (
        <div className='navbar absolute w-full h-[100px] flex flex-row-reverse items-center mb-10 z-10'>
            {/* <div className='navbar sticky top-0 w-full h-[100px] flex flex-row-reverse items-center mb-10 z-10'> */}
            <div className='absolute w-full'>
                <img className='object-contain w-full' src={require('../medias/papier-arrache.png')} />
            </div>
            <div className='logoBlaze absolute w-[400px] h-[100px] flex items-center left-5'>
                <img className='logo h-[100px] w-[100px] object-contain' src={Logo} />
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

            <div onClick={() => {setOpenDrawer(true)}} className='contact relative ml-5 px-2 border border-black rounded-full hover:bg-[#d4cbcb] hover:scale-105 transition-transform duration-200'>
                <span style={{ fontFamily: '' }}>Contact</span>
            </div>

            <div className='quiSommesNous relative ml-5 px-2 border border-black rounded-full hover:bg-[#d4cbcb] hover:scale-105 transition-transform duration-200'>
                <span style={{ fontFamily: '' }}><Link to={"/a-propos"}>Qui sommes-nous</Link></span>
            </div>

            <div className='services-navbar relative px-2 border border-black rounded-full hover:bg-[#d4cbcb] hover:scale-105 transition-transform duration-200'>
                <span style={{ fontFamily: '' }}><a href='/services'>Services</a></span>
            </div>

            <a href='/' className='home-navbar relative px-6 hover:scale-105 transition-transform duration-200'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </a>



        </div>
    )
}

export default Navbar


