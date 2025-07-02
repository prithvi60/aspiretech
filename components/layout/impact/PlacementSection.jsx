import React from 'react'
import { ProgramsModal } from '../programs/Modal'
import Link from 'next/link'
import Image from 'next/image'

const PlacementSection = ({ title, desc, img, alt }) => {
    return (
        <section className='w-full h-full padding'>
            <div className="flex flex-col lg:flex-row lg:justify-between w-full">
                <div className={`w-full lg:w-3/5 space-y-3 ${title === "Setting new Reach and achievements" && "lg:py-16"} `}>
                    <h3 className="mb-4 font-extrabold leading-8 md:leading-4 text-[clamp(1.85rem,2vw,2.75rem)] py-2 tracking-wider" >
                        {title}
                    </h3>
                    <p className="mb-8 text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground w-full lg:w-4/5">
                        {desc}
                    </p>
                    <div className="flex flex-row gap-5 items-center">
                        <div className="w-1/2 md:w-max">
                            <ProgramsModal />
                        </div>
                        <button role="button" aria-label="apply now button">
                            <Link
                                href="/contact"
                                className="py-2.5 md:py-3 px-5 sm:ms-4 text-[clamp(0.7rem,1.15vw,1.2rem)] font-bold text-black focus:outline-none rounded-lg border-2 hover:text-background transition-all duration-500 ease-in-out border-foreground/50 hover:bg-btn/90 hover:opacity-80 focus:z-10 focus:ring-4 focus:ring-btn/50"
                            >
                                Apply now
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-2/5">
                    <div className="w-full h-80 md:h-96 relative overflow-hidden">
                        <Image
                            fill
                            className="object-contain object-center"
                            src={img}
                            alt={alt}
                            priority
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlacementSection
