import React from 'react'

import commentRealOnly from '../medias/comment-real-only.png'
import atelier from '../medias/atelier.png'
import { Link } from 'react-router-dom'

const Services = ({setOpenDrawer}) => {
    return (
        <div id='Services' className='relative services w-[90%] mx-auto flex flex-col pt-52 '>
            <div className='docu w-full bg-camera bg-cover text-white text-[20px] f'>
                <div className='titre h-[100px] flex items-center justify-center'>
                    <h1 style={{ fontFamily: 'JejuHallasan' }} className='text-[22px] border-b-[1px] border-yellow-200'>Comment réaliser son projet documentaire chez BlockRoomVideo ?</h1>
                </div>
                <div style={{ fontFamily: 'JejuHallasan' }} className=' flex items-enter justify-center'>
                    <div className='comment-real h-[400px]'>
                        <img className='object-contain h-full w-full' src={commentRealOnly} />
                    </div>
                    <div className='documentaires w-[600px] pl-12 mb-12 flex flex-col'>
                        {/* <h1 className='mb-16 text-center'>Comment réaliser son projet documentaire chez BlockRoomVideo ?</h1> */}
                        <ul>
                            <li>- Introduire une demande de projet</li>
                            <li>- Definir un budget en fonction de la demande et des moyens</li>
                            <li>- calendrier de tournage et date de rendu</li>
                            <li>- écriture d'une v1 d'un scénario avec notre scénariste</li>
                            <li>- création d'une équipe de tournage en fonciton du film demandé et du budjet fixé</li>
                            <li>- Mise en commun, proposition, explication et accord du ou de la cliente</li>
                        </ul>
                        <button onClick={() => {
                            setOpenDrawer(true)
                            console.log("oui",)
                            }} className='h-[50px] w-[200px] self-center border-2 mt-12 hover:bg-[#FFFFFF] hover:scale-105 transition-transform duration-200 bg-[#d9d9d9]'>NOUS CONTACTER</button>
                    </div>
                </div>
            </div>

            <div className='atelier w-full mt-10 bg-atelier bg-cover text-red-500'>
                <div className='titre  h-[100px] flex items-center justify-center'>
                    <h1 style={{ fontFamily: 'JejuHallasan' }} className='text-[22px] border-b-[1px] border-yellow-200'>ATELIER BLOCKROOM</h1>
                </div>
                <div style={{ fontFamily: 'JejuHallasan' }} className='w-full flex justify-center'>
                    <div className='documentaires w-[600px] mt-12 ml-16'>
                        <h1 className='mb-16 text-center'>Vous souhaitez dévoloper vos compétances dans la conception de documentaire. Nous proposons un Atelier BlockRoom</h1>
                        <ul>
                            <h2>ECRITURE DOCUENTAIRE</h2>
                            <ul>
                                <li>- Appréhender une intervention vidéo, comment la préparer ?</li>
                                <li>- Concevoir un scénario seul ou à plusieurs</li>
                            </ul>
                            <h2>FILMER ET ETRE FILME</h2>
                            <ul>
                                <li>- S'exprimer devant la caméra</li>
                                <li>- Prise de parole filmés</li>
                                <li>- Prendre confiance en l'objet caméra (portable, comescope, etc...)</li>
                            </ul>
                            <h2>INITIATION AU MONTAGE</h2>
                            <ul>
                                <li>- Montage basic sur un logiciel à portée de main</li>
                            </ul>
                        </ul>
                    </div>
                    <div className='comment-real h-[500px] mb-16'>
                        <img className='object-contain h-full' src={atelier} />
                    </div>
                </div>
            </div>
            {/* <button className='h-[50px] w-[200px] mx-auto border-2 mt-20 hover:bg-[#FFFFFF] hover:scale-105 transition-transform duration-200 bg-[#d9d9d9]'>NOUS CONTACTER</button> */}
        </div>

    )
}

export default Services