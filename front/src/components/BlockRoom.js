import React from 'react'

import blockroom from '../medias/blockroom.png'

const BlockRoom = () => {
  return (
    <div className='blockroom relative w-full mt-0'>
                <div className='titre  h-[100px] flex items-center justify-center'>
                    <h1 style={{ fontFamily: 'JejuHallasan' }} className='text-[22px] border-b-[1px] border-yellow-200'>BlockRoomVideo</h1>
                </div>
                <div style={{ fontFamily: 'JejuHallasan' }} className='w-full flex justify-center'>
                    <div className='comment-real h-[500px]'>
                        <img className='object-contain h-full' src={blockroom} />
                    </div>
                    <div className='documentaires w-[600px] mt-12 ml-16 text-[22px]'>
                        <p>L'objectif de BlockRoomVideo est de concevoir des documentaire au tarif le plus plus adapté. Pour cela, nous cherchons également à les distribueer.</p>
                        <p className='mt-16'>Nous pensons que le film est un outil de dénonciationm et de réappropriation de soi.</p>
                        <p>C'est dans cette démqrche aue nous proposons nos services.</p>
                    </div>
                </div>
            </div>
  )
}

export default BlockRoom