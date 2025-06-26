"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimateButton, Button1, CTAButton } from "./Button";
import { Stat } from "./Counter";

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
        <div className="p-[2.5px] rounded-xl overflow-hidden bg-secondary max-w-lg mx-auto">
            <div className="max-w-sm rounded-xl shadow-sm flex flex-col justify-between min-h-[340px] lg:min-h-[320px]">
                <div className="space-y-8">
                    <div className="flex items-center px-5 pt-5 gap-5 text-foreground">
                        <div className="shrink-0">
                            <Image
                                priority={false}
                                loading="lazy"
                                quality={100}
                                width={60}
                                height={60}
                                className="w-10 h-12 rounded-full p-0.5 bg-white"
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
                                role="button"
                                type="button"
                                aria-label="read more button"
                                className="absolute right-5 -bottom-5 font-semibold text-black tracking-wider hover:underline focus:outline-none text-xs md:text-sm cursor-pointer"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                {isExpanded ? "Show Less" : "Read More"}
                            </button>
                        )}
                    </div>
                </div>
                <div className="font-inter p-6  block space-y-4 text-foreground bg-secondaryDark">
                    <h1 className="mb-2 font-bold tracking-tight text-[clamp(1rem,2.5vw,1.25rem)] leading-6">
                        {data.offers}
                    </h1>
                    <p className="text-[clamp(0.7rem,1.15vw,0.85rem)] font-semibold leading-6">
                        {data.position}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const StatusCard = ({ data, icon, type, counter }) => {
    return (
        <div
            className={`${type ? "w-full mx-auto" : "min-w-[200px]"} rounded-xl space-y-8 box-shadow-gradient2 border-4 border-borderColor bg-background first:col-span-2`}
        >
            <div
                className={`${type ? "px-4 py-6 gap-2 lg:gap-3" : "px-8 py-6"} flex flex-col items-center justify-center text-foreground`}
            >
                <Image
                    priority={false}
                    loading="lazy"
                    quality={80}
                    width={60}
                    height={60}
                    src={data.img}
                    alt={"icon"}
                    className="object-contain object-center shrink-0 size-8 sm:size-10 lg:size-12 mb-2"
                />
                {counter && data.count !== "" ? (
                    <Stat num={Number(data.count)} suffix={data.suffix} />
                ) : (
                    <h1 className="text-[clamp(1.8rem,2.5vw,3.15rem)] tracking-wide font-extrabold text-black">
                        {data.suffix}
                    </h1>
                )}

                {!counter && (
                    <h2 className="text-[clamp(1.8rem,2.5vw,3.15rem)] tracking-wide font-extrabold">
                        {data.count}
                    </h2>
                )}

                <div className="flex gap-2">
                    {icon && (
                        <Image
                            width={20}
                            height={20}
                            src={data.img}
                            alt={"icon"}
                            className="object-contain object-center shrink-0"
                        />
                    )}
                    <p
                        className={`${type ? "text-[clamp(0.7rem,1.15vw,1rem)]" : "text-[clamp(0.9rem,1.5vw,1.5rem)]"}`}
                    >
                        {data.statusName}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const MainCoursesCard = ({ data }) => {
    return (
        <div className="max-w-lg mx-auto rounded-xl overflow-hidden custom-shadow text-background hover:scale-110 transition-all duration-300 ease-in-out">
            <Image
                width={800}
                height={650}
                src={data.img}
                alt={data.alt}
                priority={false}
                loading="lazy"
                quality={100}
                className="w-full h-auto"
                sizes="(min-width: 1260px) 512px, (min-width: 780px) 42.61vw, (min-width: 600px) 512px, calc(92.86vw - 27px)"
            />
            <div
                className={`pb-5 flex flex-col md:min-h-[480px] lg:min-h-[380px] justify-between ${data.refer === "DS" ? "bg-linear-120 from-[#516A9B] via-[#516A9B] to-[#99A3BF]" : data.refer === "DA" ? "bg-linear-120 from-[#7B3B29] via-[#7B3B29] to-[#C68C73]" : data.refer === "DM" ? "bg-linear-120 from-[#1C4B53] via-[#1C4B53] to-[#6F9D9D]" : data.refer === "FS" ? "bg-linear-120 from-[#531C4F] via-[#642c46] to-[#9D6F84]" : data.refer === "DO" ? "bg-linear-120 from-[#385e25] via-[#42712c] to-[#6aa26e]" : "bg-linear-120 from-[#D5A411] via-[#D5A411] to-[#F1E3A7]"}`}
            >
                <div className="space-y-4 ">
                    <h2
                        className={`${data.refer === "DS" ? "bg-linear-to-r from-[#516A9B] via-[#516A9B] to-[#99A3BF]" : data.refer === "DA" ? "bg-linear-to-r from-[#7B3B29] via-[#7B3B29] to-[#C68C73]" : data.refer === "DM" ? "bg-linear-to-r from-[#1C4B53] via-[#1C4B53] to-[#6F9D9D]" : data.refer === "FS" ? "bg-linear-to-r from-[#501B4F] via-[#642c46] to-[#9F718E]" : data.refer === "DO" ? "bg-linear-to-r from-[#385e25] via-[#42712c] to-[#6aa26e]" : "bg-linear-to-r from-[#D5A411] via-[#D5A411] to-[#F1E3A7]"} text-background px-5 py-4 !drop-shadow-xl text-[clamp(0.8rem,2.5vw,1.1rem)] font-extrabold tracking-wide`}
                    >
                        {data.enrol}
                    </h2>
                    <h3 className="text-[clamp(1rem,3vw,1.6rem)] px-5 font-extrabold tracking-wide">
                        {data.title}
                    </h3>
                    <p className="font-normal px-5 text-[clamp(0.8rem,3vw,1rem)] leading-6 font-inter">
                        {data.desc}
                    </p>
                </div>
                <div className="px-5 mt-5 md:mt-2 relative z-10">
                    <AnimateButton href={data.href} text={"Know More"} clip />
                    {/* <CTAButton text={"Download Brochure"} href={"#"} /> */}
                </div>
            </div>
        </div>
    );
};

export const TechCompaniesCard = ({ data }) => {
    return (
        <div className="max-w-xs rounded-xl space-y-8 bg-secondary border border-primary/80 px-8 mx-4">
            <div className="flex flex-col items-center justify-center gap-3 px-8 py-6 text-foreground ">
                <div className="size-24 md:size-32 relative overflow-hidden ring-4 ring-primary ring-offset-4 rounded-full bg-white">
                    <Image
                        priority={false}
                        loading="lazy"
                        quality={80}
                        fill
                        className="object-contain object-center p-2"
                        src={data.logo}
                        alt={data.alt}
                    />
                </div>
                <div className="flex items-center gap-2">
                    {/* <RiMiniProgramFill className="text-primary text-lg md:text-xl " /> */}
                    <p className="text-[clamp(0.8rem,1.15vw,1.8rem)] capitalize">
                        {data.company}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const EnquireCard = ({ data, FSDTitle }) => {
    return (
        <div className="min-w-60 rounded-xl space-y-8 bg-secondary border border-primary/80 mx-4 font-inter">
            <div className="flex flex-col items-center justify-center gap-3 px-5 py-7 text-foreground">
                <div
                    className={`size-20 md:size-28 shadow-xl relative overflow-hidden rounded-xl bg-white`}
                >
                    <Image
                        fill
                        className="object-contain object-center p-2"
                        src={data.img}
                        alt={data.alt}
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    {!FSDTitle && (
                        <h1 className="text-[clamp(1.1rem,1.5vw,1.5rem)] capitalize font-bold tracking-wide">
                            {data.title}
                        </h1>
                    )}
                    {data.desc ? (
                        <p className="font-medium text-[clamp(0.9rem,1.15vw,1rem)] leading-5 md:leading-7 text-center">
                            {data.desc}
                        </p>
                    ) : (
                        <ul className="text-[clamp(0.9rem,1.15vw,1rem)] leading-5 md:leading-7 list-disc pl-2.5 font-medium space-y-1">
                            {data?.lists.map((item, index) => (
                                <li key={index} className="">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export const RoleBasedTrainingCard = ({ data }) => {
    return (
        <div className="min-w-60 rounded-xl space-y-8 bg-secondary border border-primary/80 mx-4 font-inter">
            <div className="flex flex-col items-center justify-center gap-8 px-5 py-7 text-foreground">
                <div className="size-24 md:size-32 relative overflow-hidden rounded-xl bg-white">
                    <Image
                        fill
                        className="object-contain object-center p-2"
                        src={data.img}
                        alt={data.alt}
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="text-[clamp(1.1rem,1.3vw,1.5rem)] capitalize font-bold tracking-wide">
                        {data.title}
                    </h1>
                </div>
            </div>
        </div>
    );
};
