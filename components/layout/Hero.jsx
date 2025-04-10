import Image from 'next/image'
import React from 'react'
import { AnimateButton } from '../UI/Button'

const Hero = () => {
    return (
        <section className='w-full h-[50vh] md:min-h-screen relative'>
            <div className='w-full h-screen overflow-hidden relative hidden md:block'>
                <Image fill src={"/hero-bg.png"} priority quality={100} alt='hero background image' className='object-cover object-center' />
            </div>
            <div className='w-full h-[50vh] overflow-hidden relative block md:hidden'>
                <Image fill src={"/hero-bg-mobile.svg"} priority quality={100} alt='hero background image' className='object-contain object-center' />
            </div>
            <div className='absolute -top-5 md:top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
                <h1 className='text-center py-2 md:py-12 font-extrabold text-3xl md:text-6xl xl:text-[92px] leading-6 text-gradient '>Stay ahead with</h1>
                <h1 className='text-center pb-4 md:pb-12 font-bold text-3xl md:text-6xl xl:text-[92px] text-gradient w-1/2'>Skills that matter</h1>
                <AnimateButton text={"Get Started"} />
            </div>
        </section>
    )
}

export default Hero
