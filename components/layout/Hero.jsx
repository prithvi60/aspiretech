import Image from 'next/image'
import React from 'react'
import { AnimateButton } from '../UI/Button'

const Hero = () => {
    return (
        <section className='w-full min-h-[30vh] sm:min-h-[90vh] lg:min-h-[115vh] relative pb-[40px] md:pb-[70px]'>
            <div className='w-full min-h-[30vh] sm:min-h-[90vh] lg:min-h-[115vh] relative hidden sm:block'>
                <Image fill src={"/hero-bg.png"} priority quality={100} alt='hero background image' className='object-cover object-center' />
            </div>
            <div className='w-full min-h-[30vh] relative block sm:hidden'>
                <Image fill src={"/hero-bg-mobile.svg"} priority quality={100} alt='hero background image' className='object-cover object-center' />
            </div>
            <div className='absolute -top-5 sm:-top-10 lg:-top-24 xl:-top-28 left-0 w-full h-full flex flex-col items-center justify-center text-foreground'>
                <h1 className='text-center py-2 sm:py-7 xl:py-14 font-extrabold text-2xl sm:text-6xl xl:text-[97px] leading-6 text-gradient '>Stay ahead with</h1>
                <h1 className='text-center pb-2 md:pb-14 font-bold text-2xl sm:text-6xl xl:text-[97px] text-gradient w-1/2'><span className='text-primary'>Skills</span> that matter</h1>
                <AnimateButton text={"Get Started"} href={"/contact"} />
            </div>
        </section>
    )
}

export default Hero
