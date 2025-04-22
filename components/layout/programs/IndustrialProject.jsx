import { DSSoftwareLogo } from '@/utils/Data'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const IndustrialProject = ({ data }) => {
    return (
        <div className="padding max-w-7xl mx-auto w-full font-inter text-foreground ">
            <div
                className="bg-linear-to-b from-[var(--text-gradient-left)]/50 via-[var(--primary)]/60 to-[#FFFEFE] p-[1px] rounded-lg"
            >
                <div className='rounded-lg px-8 py-10 md:px-14 md:py-20 bg-linear-333 from-[#141414] via-[#181818] to-[#2f2f2f]'>
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
                    {/* <div className="w-full md:w-4/5 mx-auto py-4 space-y-6 md:space-y-10">
                        <Marquee autoFill direction='left' pauseOnHover speed={30}>
                            {DSSoftwareLogo.map((list, id) => (
                                <div className="max-w-sm space-y-8 rounded-xl bg-zinc-300/90 p-2.5 mx-4" key={id}>
                                    <div className="size-20 md:size-28 relative overflow-hidden">
                                        <Image
                                            fill
                                            className="object-contain object-center"
                                            src={list.img}
                                            alt={list.alt}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default IndustrialProject
