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
        // <section className='w-full min-h-screen relative overflow-hidden'>
        //     <div className='w-full h-screen overflow-hidden relative hidden md:block'>
        //         <Image fill src={"/hero-bg1.svg"} priority quality={100} alt='hero background image' className='object-cover object-center' />
        //     </div>
        //     <div className='w-full h-[50vh] overflow-hidden relative block md:hidden'>
        //         <Image fill src={"/hero-bg1.svg"} priority quality={100} alt='hero background image' className='object-contain object-center' />
        //     </div>
        //     <div className='absolute -top-5 md:top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
        //         <h1 className='text-center py-2 md:py-12 font-extrabold text-3xl md:text-6xl xl:text-[92px] leading-6 text-gradient '>Stay ahead with</h1>
        //         <h1 className='text-center pb-4 md:pb-12 font-bold text-3xl md:text-6xl xl:text-[92px] text-gradient w-1/2'>Skills that matter</h1>
        //         <AnimateButton text={"Get Started"} />
        //         {/* <div className='mt-10'>
        //             <Marquee autoFill direction='left' pauseOnHover speed={30}>
        //                 {DSSoftwareLogo.map((list, id) => (
        //                     <div className="max-w-xs rounded-xl space-y-8 bg-zinc-300/90 p-5 mx-4" key={id}>
        //                         <div className="size-14 md:size-20 relative overflow-hidden">
        //                             <Image
        //                                 fill
        //                                 className="object-contain object-center"
        //                                 src={list.img}
        //                                 alt={list.alt}
        //                             />
        //                         </div>
        //                     </div>
        //                 ))}
        //             </Marquee>
        //         </div> */}
        //     </div>
        // </section>
    )
}

export default Hero
