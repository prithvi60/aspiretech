import React from "react";
import { SectionHeading } from "../UI/SectionHeading";
import { aspireSets } from "@/utils/Data";
import Image from "next/image";

const WhatMakesUsDiff = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <div className="w-full max-w-5xl mx-auto text-center">
                <SectionHeading
                    text={
                        "We don’t just train you. We place you. Here’s what makes us different"
                    }
                />
            </div>

            <div className="w-full h-full space-y-6 max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto">
                {aspireSets.map((list, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center gap-4 md:gap-10 border-4 border-borderColor rounded-lg px-10 lg:px-32 py-5 text-[clamp(0.8rem,2vw,1.3rem)] text-black font-medium bg-background xl:px-40`}
                    >
                        <Image
                            priority={false}
                            loading="lazy"
                            quality={80}
                            width={60}
                            height={60}
                            src={list.img}
                            alt={"icon"}
                            className="object-contain object-center shrink-0 size-9 sm:size-12 lg:size-14"
                        />
                        <h1>{list.title}</h1>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatMakesUsDiff;
