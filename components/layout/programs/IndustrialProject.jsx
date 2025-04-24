import { DSSoftwareLogo } from '@/utils/Data'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const IndustrialProject = ({ data }) => {
    return (
        <div className="padding max-w-7xl mx-auto w-full font-inter text-foreground ">
            <div
                className="bg-white p-[1px] rounded-lg"
            >
                <div className='rounded-2xl px-8 py-10 md:px-14 md:py-20 bg-white border-[5px] md:border-6 border-borderColor'>
                    <div className="w-full space-y-3 lg:space-y-5">
                        <h4 className="text-[clamp(1.3rem,2.5vw,2.35rem)] leading-6 md:leading-10 tracking-wide font-bold w-full text-center">
                            {data.title}
                        </h4>
                        <p
                            className={`mb-3 font-semibold text-foreground text-[clamp(0.7rem,1.15vw,1.15rem)]  leading-6 w-full md:w-4/5 mx-auto font-inter text-justify md:text-left`}
                        >
                            {data.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndustrialProject
