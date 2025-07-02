import { DSSoftwareLogo } from '@/utils/Data'
import Image from 'next/image'
import Link from 'next/link'
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
                        <h2 className="text-[clamp(1.3rem,2.5vw,2.35rem)] leading-6 md:leading-10 tracking-wide font-bold w-full text-center">
                            {data.title}
                        </h2>
                        <p
                            className={`mb-3 font-semibold text-foreground text-[clamp(0.7rem,1.15vw,1.15rem)]  leading-6 w-full md:w-4/5 mx-auto font-inter text-justify md:text-left`}
                        >
                            {data.desc}
                        </p>
                    </div>
                    <div className='w-full flex justify-center items-center mt-10'>
                        <Link
                            href={data.title === "Industry Projects" ? "/files/Aspire-Project-Brochure.pdf" : "/files/Aspire-Placement-Report.pdf"}
                            title={`Download Brochure`}
                            className="w-max transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                            download={"Aspire Project Brochure.pdf"}
                            aria-label="Download Brochure"
                            rel="noopener noreferrer"
                        >
                            <div
                                className={`bg-btn flex justify-center items-center gap-2 md:gap-4 hover:shadow-[4px_4px_0px_var(--primary)] text-center text-background font-bold w-full cursor-pointer px-4 py-2 md:py-3 md:px-8 capitalize text-[clamp(0.7rem,1.15vw,1.1rem)] rounded-lg`}
                            >
                                Download Brochure
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndustrialProject
