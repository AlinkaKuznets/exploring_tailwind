import React from 'react'
import MenImage from '../../images/image-hero-desktop.png'
import MobileImage from '../../images/image-hero-mobile.png'
import { ReactComponent as Databiz } from '../../images/client-databiz.svg'
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg'
import { ReactComponent as Meet } from '../../images/client-meet.svg'
import { ReactComponent as Maker } from '../../images/client-maker.svg'
import Button from '../Buttom'

export default function MainSection() {
  return (
    <section className='flex flex-col xl:flex-row w-full mt-6 xl:h-screen justify-between'>
      <div className='relative text-center order-1 xl:order-0 xl:text-left mt-12 xl:mt-20'>
        <h1 className='text-3xl xl:text-8xl font-black xl: whitespace-pre-line mt-6'>{'Make\n remote work'}</h1>
        <p className='text-medium-gray text-lg my-12 whitespace-pre-line'>{`It is a long established fact that a reader will be\n distracted by the readable content of a page\n when looking at its layout.`}</p>
        <Button isFilled={true}>Lern More</Button>
        <div className='flex justify-around xl:absolute bottom-2 w-full mt-20'>
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className='hidden xl:flex w-2/4 mt-20 order-1'>
        <img src={MenImage} alt='men' />
      </div>
      <div className='flex xl:hidden w-full mt-20 justify-center mb-8 order-0'>
        <img src={MobileImage} alt='men' />
      </div>
    </section>
  )
}
