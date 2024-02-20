import { Drawer } from '@material-tailwind/react';
import React from 'react'

const Contact = ({openDrawer, setOpenDrawer}) => {

    
    return (
        <>
        <Drawer
            placement='bottom'
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            className='p-4'
            size={500}
        >
        <div className='contact flex justify-center'>
            <form className='flex flex-col' >
                <div className='flex w-[600px] justify-between'>
                    <div className='flex flex-col w-[45%]'>
                        <label className='text-gray-500'>Votre Nom</label>
                        <input className='name-container h-[50px] pl-2 bg-gray-300' />
                    </div>
                    <div className='flex flex-col w-[45%]'>
                        <label className='text-gray-500'>Votre email</label>
                        <input className='message-container h-[50px] pl-2 bg-gray-300 ' />
                    </div>
                </div>
                <div className='flex flex-col  mt-5'>
                    <label className='text-gray-500'>Votre Message</label>
                    <textarea className='mail-container w-[600px] h-[200px] p-2 bg-gray-300' />
                </div>

                <button className='h-[35px] w-[200px] border border-black mt-10 mx-auto text-[20px] text-white bg-blue-gray-900'>Envoyer</button>

            </form>
        </div >
        </Drawer>
        </>
    )
}

export default Contact
