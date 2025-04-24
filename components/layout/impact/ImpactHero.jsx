"use client";
import { placementRecords, trustedCompany } from "@/utils/Data";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ImpactHero = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <h1
                className="font-extrabold tracking-tight leading-none text-gradient text-[clamp(1.8rem,3.5vw,3.8rem)] py-2 md:w-3/4 mx-auto text-center text-black"
            >
                The Aspire Impact
            </h1>
            <div className="flex flex-col lg:flex-row lg:justify-between w-full">
                <div className="w-full lg:w-3/5 space-y-3">
                    <div className="rounded-3xl p-3 md:p-5 border-6 border-borderColor bg-white space-y-3 md:space-y-5">
                        <h4 className="text-[clamp(1rem,1.5vw,1.4rem)] leading-6 md:leading-10 tracking-wide font-bold w-full font-inter">
                            200+ Hiring partners
                        </h4>
                        <div className="w-full py-4 space-y-6 md:space-y-10">
                            <ImpactMarquee data={trustedCompany} />
                        </div>
                    </div>
                    <div className="rounded-3xl p-3 md:p-5 border-6 border-borderColor bg-white space-y-3 md:space-y-5">
                        <h4 className="text-[clamp(1rem,1.5vw,1.4rem)] leading-6 md:leading-10 tracking-wide font-bold w-full font-inter">
                            95% Placement Records
                        </h4>
                        <div className="w-full py-4 space-y-6 md:space-y-10">
                            <ImpactMarquee data={placementRecords} right />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5">
                    <div className="w-full h-80 md:h-96 lg:w-96 lg:h-80 xl:w-[530px] xl:h-96 relative overflow-hidden">
                        <Image
                            fill
                            className="object-contain object-center"
                            src={"/student-placed-chart.svg"}
                            alt={"Student Placed Chart"}
                            priority
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactHero;



const ImpactMarquee = ({ data, right }) => {
    return (
        <Marquee autoFill direction={right ? "right" : "left"} pauseOnHover speed={50}>
            {data.map((list, id) => (
                <div
                    className="max-w-sm rounded-full space-y-8 ring-4 ring-offset-4 md:ring-offset-8 ring-borderColor mx-6 my-4"
                    key={id}
                >
                    <div className="size-9 md:size-14 relative overflow-hidden">
                        <Image
                            fill
                            className="object-contain object-center"
                            src={list.logo}
                            alt={list.alt}
                        />
                    </div>
                </div>
            ))}
        </Marquee>
    );
}