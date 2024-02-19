import React from 'react'

const Contact = () => {
    return (
        <div className='contact flex justify-center'>
            <form className='flex flex-col' >
                <input placeholder='Votre Nom' className='name-container h-[50px] m-5 bg-red-200' />
                <input placeholder='Votre Mail' className='message-container h-[50px] m-5 bg-blue-200 ' />
                <textarea placeholder='Votre Message' className='mail-container w-[400px] h-[400px] m-5 bg-green-200' />
            </form>
        </div >
    )
}

export default Contact