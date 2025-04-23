import React from 'react'
import { AnimateButton } from '../UI/Button'
import Image from 'next/image'
import { StatusCard } from '../UI/Cards'
import { expertProgramStatus } from '@/utils/Data'

const EnquireTechExpert = () => {
    return (
        <section className='max-w-7xl mx-auto padding relative overflow-hidden space-y-10 md:space-y-16'>
            <div className='w-full h-[35vh] md:h-[50vh] overflow-hidden relative bg-secondary'>
                {/* <Image fill src={"/card-bg.png"} priority quality={100} alt='background image' className='object-cover object-center rounded-lg shadow-lg' /> */}
                <div className='absolute top-0 left-0 py-5 md:py-10 px-6 md:px-20 w-full h-full flex flex-col md:flex-row md:items-center justify-between font-inter'>
                    <div className='w-full md:w-3/5 space-y-2.5 md:space-y-5 text-foreground'>
                        <h1 className='py-1 text-center md:text-start font-extrabold text-[clamp(1.1rem,2.5vw,2rem)] leading-6 md:leading-8'>Future-Proof Your Career with Aspire Tech's Expert Programs!</h1>
                        <h2 className='h-auto text-center md:text-start font-medium text-[clamp(0.8rem,2.5vw,1.2rem)] leading-6 md:leading-8'>Master Tech Skills Easily - Kickstart Your Journey with Aspire Tech!
                        </h2>
                    </div>
                    <div className='w-full md:w-1/5 text-center'>
                        <AnimateButton href={"/contact"} text={"Enquire now"} icon />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 xl:gap-y-10 max-w-7xl mx-auto">
                {expertProgramStatus.map((item, index) => (
                    <StatusCard key={index} data={item} />
                ))}
            </div>
        </section>
    )
}

export default EnquireTechExpert
