import React from 'react'

import transparence from '../medias/transparence.png'

const About = () => {
  return (
    <div className='w-full relative flex flex-col pt-44'>
      <div className='about w-full flex items-center justify-center mt-16'>
        <div className='w-[600px] mr-20'>
          <h1 className='text-[30px] text-center mb-10'>A propos de nous</h1>
          <p className=''>L’objectif de Blockroom vidéo est de concevoir des documentaires au tarif le plus adapté aux demandes que nous recevons. Puis, de chercher à les distribuer pour pouvoir par la suite, rémunérer au prix le plus juste ceux et celles qui l’ont réalisées.

            <br />
            <br />

            Ainsi toutes et tous, en acceptant que la matière filmé soit par la suite redistribuée, peuvent prétendre à la conception d’un documentaire. Nous pensons que le film est un outil de dénonciation, et de réappropriation de soi, c’est dans cette démarche que nous proposons nos services.

            <br />
            <br />

            Dans le cas ou le ou les participants, participantes ne souhaiteraient pas distribuer la matière par la suite, le tarif sera plus élevé, mais restera discuté ensemble au préalable. Le but étant de concevoir un documentaire en fonction de vos moyens, d’apprendre à en concevoir un, tout en adaptant nos moyens techniques et humains pour parvenir à nous remunérer.
          </p>

        </div>
        <div className='h-[400px]'>
          <img className='object-contain h-full' src={transparence} />
        </div>
      </div>
      <button className='h-[50px] w-[200px] mx-auto border-2 mt-20 hover:scale-105 transition-transform duration-200 bg-[#d9d9d9]'>NOUS CONTACTER</button>
    </div>
  )
}

export default About