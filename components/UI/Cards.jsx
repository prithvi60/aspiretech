"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CTAButton } from "./Button";
import { RiMiniProgramFill } from "react-icons/ri";

export const StoriesCard = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasOverflow, setHasOverflow] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const isTextOverflowing =
                textRef.current.scrollHeight > textRef.current.clientHeight;
            setHasOverflow(isTextOverflowing);
        }
    }, [data.about]);
    return (
        <div className="p-[2.5px] rounded-xl border-linear-gradient overflow-hidden custom-shadow max-w-lg mx-auto">
            <div className="max-w-sm rounded-xl shadow-sm bg-gradient flex flex-col justify-between min-h-[340px] lg:min-h-[320px]">
                <div className="space-y-8">
                    <div className="flex items-center px-5 pt-5 gap-5 text-foreground">
                        <div className="shrink-0">
                            <Image
                                width={20}
                                height={20}
                                className="w-8 h-8 rounded-full"
                                src={data.img}
                                alt={data.alt}
                            />
                        </div>
                        <p className="text-[clamp(1rem,2.5vw,1.25rem)] font-extrabold">
                            {data.customerName}
                        </p>
                    </div>
                    <div className="relative font-inter">
                        <p
                            ref={textRef}
                            className={`mb-3 px-5 font-semibold text-foreground font-inter text-[clamp(0.7rem,1.15vw,1.15rem)] leading-6 ${!isExpanded ? "line-clamp-4" : "overflow-y-auto"
                                }`}
                            style={{ height: isExpanded ? "6rem" : "auto" }}
                        >
                            {data.about}
                        </p>
                        {hasOverflow && (
                            <button
                                className="absolute right-5 -bottom-5 font-semibold text-primary hover:underline focus:outline-none text-xs md:text-sm cursor-pointer"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                {isExpanded ? "Show Less" : "Read More"}
                            </button>
                        )}
                    </div>
                </div>
                <div className="font-inter p-6  block space-y-4 bg-gradient2 text-background">
                    <h5 className="mb-2 font-bold tracking-tight text-[clamp(1rem,2.5vw,1.25rem)] leading-6">
                        {data.offers}
                    </h5>
                    <p className="text-[clamp(0.7rem,1.15vw,0.85rem)] font-semibold leading-6">
                        {data.position}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const StatusCard = ({ data, icon }) => {
    return (
        <div className="min-w-[220px] rounded-xl space-y-8 box-shadow-gradient2 border border-primary/80 px-8">
            <div className="flex flex-col items-center justify-center gap-3 px-8 py-6 text-foreground">
                <h4 className="text-[clamp(1.8rem,2.5vw,3.15rem)] tracking-wide font-extrabold">
                    {data.count}
                </h4>
                <div className="flex items-center gap-2">
                    {icon && (
                        <RiMiniProgramFill className="text-background text-lg md:text-xl" />
                    )}
                    <p className="text-[clamp(0.8rem,1.15vw,1.5rem)]">
                        {data.statusName}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const MainCoursesCard = ({ data }) => {
    return (
        <div className="max-w-lg mx-auto rounded-xl overflow-hidden custom-shadow text-foreground hover:scale-110 transition-all duration-300 ease-in-out">
            <div className="w-full h-52 relative overflow-hidden">
                <Image
                    fill
                    src={data.img}
                    alt={data.alt}
                    className="object-cover object-center"
                />
            </div>
            <div className="pb-5 bg-gradientCard flex flex-col md:min-h-[480px] lg:min-h-[380px] justify-between shadow-[inset_0px_-80px_50px_-80px_#FBCC04] relative before:content-[''] before:absolute before:-bottom-8 before:-left-24 before:blur-md before:size-36 before:rotate-45 before:bg-secondary/50  before:shadow-[inset_0px_-80px_50px_-80px_#FBCC04]">
                <div className="space-y-4 ">
                    <h5 className="bg-linear-to-l from-[#060606] px-5 via-[#0a0a0a] py-4 to-[#424242] !drop-shadow-xl text-[clamp(0.8rem,2.5vw,1.1rem)] font-extrabold tracking-wide">
                        {data.enrol}
                    </h5>
                    <h5 className="text-[clamp(1rem,3vw,1.6rem)] px-5 font-extrabold tracking-wide">
                        {data.title}
                    </h5>
                    <p className="font-normal px-5 text-[clamp(0.8rem,3vw,1rem)] leading-6 font-inter">
                        {data.desc}
                    </p>
                </div>
                <div className="px-5 mt-5 md:mt-2">
                    <CTAButton text={"Download Brochure"} href={"#"} />
                </div>
            </div>
        </div>
    );
};


export const TechCompaniesCard = ({ data }) => {
    return (
        <div className="max-w-xs rounded-xl space-y-8 bg-[#D9D9D9]/40 border border-primary/80 px-8 mx-4">
            <div className="flex flex-col items-center justify-center gap-3 px-8 py-6 text-foreground bg-[D9D9D9]">
                <div className="size-24 md:size-32 relative overflow-hidden border-4 border-primary p-2 rounded-full">
                    <Image
                        fill
                        className="object-contain object-center"
                        src={data.logo}
                        alt={data.alt}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <RiMiniProgramFill className="text-primary text-lg md:text-xl " />
                    <p className="text-[clamp(0.8rem,1.15vw,1.8rem)] capitalize">
                        {data.company}
                    </p>
                </div>
            </div>
        </div>
    )
}