"use client"
import { heroMarqueeData, StoriesByCustomer } from "@/utils/Data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeHero = () => {
    return (
        <section className="w-full h-full relative">
            <Marquee autoFill direction="left" pauseOnHover speed={50}>
                {StoriesByCustomer.map((data, idx) => (
                    <div
                        key={idx}
                        className="max-w-80 rounded-xl space-y-8 bg-secondary border border-primary/80 px-3 mx-2"
                    >
                        <div className="flex flex-col items-center justify-center gap-3 px-8 py-6 text-foreground ">
                            <div className="size-24 md:size-40 relative overflow-hidden ring-4 ring-primary ring-offset-4 rounded-full bg-white">
                                <Image
                                    fill
                                    className="object-contain object-center"
                                    src={data.img}
                                    alt={data.alt}
                                    quality={90}
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-[clamp(0.8rem,1.15vw,1.2rem)] capitalize font-bold tracking-wider">
                                    {data.customerName}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default MarqueeHero;
