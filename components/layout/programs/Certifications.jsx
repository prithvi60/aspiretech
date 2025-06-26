import { SectionHeading } from "@/components/UI/SectionHeading";
import Image from "next/image";
import React from "react";

const Certifications = ({ data }) => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20 max-w-7xl mx-auto relative">
            <SectionHeading text={"Certifications"} />
            {data.map((list, idx) => (
                <div
                    className="flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-4 font-inter h-full"
                    key={idx}
                >
                    <div className="w-full md:w-2/5 space-y-6 md:space-y-10">
                        <>
                            <Image
                                width={60}
                                height={60}
                                src={list.icon}
                                alt={"icon"}
                                className="object-contain object-center shrink-0 size-10 sm:size-14 lg:size-16"
                            />
                            <div className="space-y-2.5 md:space-y-5">
                                <p
                                    className={`bg-white text-black text-[clamp(1.5rem,1.15vw,2rem)] leading-8 font-bold tracking-wide`}
                                >
                                    {list.note1}
                                </p>
                                <p className="text-[clamp(1rem,1.15vw,1.25rem)] leading-5 md:leading-7 text-foreground bg-white">
                                    {list.note2}
                                </p>
                            </div>
                        </>
                    </div>
                    <div className="w-full md:w-3/5 space-y-6 md:space-y-10">
                        <Image
                            width={850}
                            height={650}
                            src={list.img}
                            alt={list.alt}
                            priority={false}
                            loading="lazy"
                            quality={100}
                            className="w-3/4 h-auto mx-auto"
                            sizes="(min-width: 1260px) 512px, (min-width: 780px) 42.61vw, (min-width: 600px) 512px, calc(92.86vw - 27px)"
                        />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Certifications;
