"use client";
import { StoriesByCustomer } from "@/utils/Data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { SectionHeading } from "../UI/SectionHeading";

const MarqueeHero = () => {
    return (
        <section className="w-full h-full relative space-y-5 md:space-y-8 padding">
            <SectionHeading text={"Our Students are working in"} />
            <p className="text-sm md:text-base font-inter font-normal text-center">
                25+ Students Placed last year alone!
            </p>
            <div className="pt-5">
                <Marquee
                    autoFill
                    direction="left"
                    pauseOnHover
                    speed={50}
                >
                    {StoriesByCustomer.map((data, idx) => (
                        <div
                            key={idx}
                            className="max-w-80 rounded-xl space-y-8 bg-secondary border border-primary/80 mx-2 my-8 relative"
                        >
                            <div className="flex flex-col items-center justify-center gap-3 text-foreground">
                                <Image
                                    priority={false}
                                    loading="lazy"
                                    quality={80}
                                    width={120}
                                    height={120}
                                    src={data.img}
                                    alt={data.alt}
                                    className="object-contain object-center shrink-0 size-40 sm:size-48 lg:size-52"
                                />
                                <div className="block space-y-1 absolute -bottom-8 z-10 py-2 px-5 border-2 border-borderColor rounded-lg bg-white text-black">
                                    <p className="text-[clamp(0.8rem,1.15vw,1.2rem)] capitalize font-bold tracking-wider">
                                        {data.customerName}
                                    </p>
                                    {/* <Image
                                        priority={false}
                                        loading="lazy"
                                        quality={80}
                                        width={80}
                                        height={80}
                                        src={"/Company/Zoho.webp"}
                                        alt={"company logo"}
                                        className="object-contain object-center shrink-0 w-14 h-10 mx-auto"
                                    /> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default MarqueeHero;
