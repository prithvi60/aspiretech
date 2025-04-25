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
                            <div className="space-y-1.5 md:space-y-3">
                                <p
                                    className={`p-4 md:p-6 bg-white text-black text-[clamp(1rem,1.15vw,1.45rem)] leading-5 md:leading-7 font-bold tracking-tight rounded-xl border-4 border-primary`}
                                >
                                    {list.note1}
                                </p>
                                <p className="p-4 md:p-6 border-1 border-foreground/80 text-[clamp(1rem,1.15vw,1.45rem)] leading-5 md:leading-7 text-foreground font-bold tracking-tight rounded-xl bg-white">
                                    {list.note2}
                                </p>
                            </div>
                            {list.note3 && list.note4 && (
                                <div key={idx} className="space-y-1.5 md:space-y-3">
                                    <p
                                        className={`p-4 md:p-6 border-1 border-foreground/80 text-foreground text-[clamp(1rem,1.15vw,1.45rem)] leading-5 md:leading-7 font-bold tracking-tight rounded-xl bg-white`}
                                    >
                                        {list.note3}
                                    </p>
                                    <p className="p-4 md:p-6 border-1 border-foreground/80 text-[clamp(1rem,1.15vw,1.45rem)] leading-5 md:leading-7 text-foreground font-bold tracking-tight rounded-xl bg-white">
                                        {list.note4}
                                    </p>
                                </div>
                            )}
                        </>
                    </div>
                    {/* border border-zinc-600 bg-[#D9D9D9] */}
                    <div className="w-full md:w-3/5 space-y-6 md:space-y-10">
                        <div className="relative overflow-hidden rounded-xl size-72 md:size-[450px] mx-auto">
                            <Image
                                src={list.img}
                                fill
                                alt={list.alt}
                                className="object-contain object-center"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Certifications;
