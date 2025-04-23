import { DSSoftwareLogo, DSTechSoftwares } from '@/utils/Data'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const TechSoftware = ({ data, data2 }) => {
    return (
        <div className="padding max-w-7xl mx-auto w-full font-inter text-foreground">
            <div className='rounded-3xl px-7 md:px-14 py-8 md:py-20 border-6 border-borderColor bg-white box-shadow-gradient'>
                <div className="w-full space-y-3 lg:space-y-5">
                    <h4 className="text-[clamp(1.3rem,2.5vw,2.35rem)] leading-6 md:leading-10 tracking-wide font-bold w-full text-center">
                        Software That Shapes the Industry
                    </h4>
                    <p
                        className={`mb-3 font-semibold text-foreground text-[clamp(0.7rem,1.15vw,1.15rem)] text-center leading-6 w-full md:w-3/5 mx-auto font-inter`}
                    >
                        We train you on the exact tools used across today’s leading tech and creative teams.
                    </p>
                </div>
                <div className="w-full py-4 space-y-6 md:space-y-10">
                    <Marquee autoFill direction='left' pauseOnHover speed={50}>
                        {data.map((list, id) => (
                            <div className="max-w-sm rounded-full space-y-8 ring-4 ring-offset-4 md:ring-offset-8 ring-borderColor p-2.5 mx-6 my-4" key={id}>
                                <div className="size-16 md:size-28 relative overflow-hidden">
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
                    {data2 && (
                        <Marquee autoFill direction='right' pauseOnHover speed={50}>
                            {data2.map((list, id) => (
                                <div className="max-w-sm rounded-full space-y-8 ring-4 ring-offset-4 md:ring-offset-8 ring-borderColor p-2.5 mx-6 my-4" key={id}>
                                    <div className="size-16 md:size-28 relative overflow-hidden">
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
                    )}
                </div>
            </div>
        </div>
    )
}

export default TechSoftware
