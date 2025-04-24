"use client";
import { jobBoard } from "@/utils/Data";
import Image from "next/image";
import React, { useState } from "react";
import { SpringModal } from "./programs/Modal";

const JobBoard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [thank, setThank] = useState(false);
    const [course, setCourse] = useState("");

    return (
        <section className="w-full h-full padding max-w-6xl mx-auto space-y-10 md:space-y-20">
            <h1 className="text-center font-extrabold tracking-tight leading-none text-black text-[clamp(1.8rem,3.5vw,3.8rem)] py-2">
                Job Board
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-inter">
                {jobBoard.map((list, idx) => (
                    <div
                        key={idx}
                        onClick={() => {
                            setIsOpen(true);
                            setThank(false);
                            setCourse(list.RID);
                        }}
                        className="bg-secondary p-[1.5px] rounded-xl min-h-[350px] xl:min-h-[250px] shrink-0 relative z-40 cursor-pointer"
                    >
                        <div className="relative h-full space-y-8 md:space-y-14 overflow-hidden p-8 shadow-lg bg-secondary gap-6 rounded-xl">
                            <div className="relative">
                                {/* first layer */}
                                <div className="w-full h-32 lg:h-48 xl:h-56 bg-background rounded-xl relative z-30 overflow-hidden ">
                                    <Image
                                        fill
                                        src={list.img}
                                        alt={list.alt}
                                        className="object-contain object-center p-2"
                                    />
                                </div>
                                {/* second layer */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4/5 bg-black/20 backdrop-blur-lg rounded-xl h-40 lg:h-56 xl:h-64 z-20" />
                                {/* third layer */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-11/12 bg-primary/80 backdrop-blur-xl rounded-xl h-36 lg:h-52 xl:h-60 z-10" />
                            </div>
                            <div className="flex flex-col justify-between text-foreground">
                                <div className="space-y-4 flex flex-col justify-between">
                                    <div className="space-y-2">
                                        <h5 className="text-[clamp(1rem,3vw,1.6rem)] font-bold tracking-wide">
                                            {list.title}
                                        </h5>
                                        <p className="text-[clamp(0.7rem,1.5vw,1rem)] font-normal text-foreground tracking-wider">
                                            {list.desc}
                                        </p>
                                    </div>
                                    <ul className="">
                                        <li className="flex md:gap-1 font-semibold text-[clamp(0.65rem,1.5vw,0.85rem)] ">
                                            <h5 className="shrink-0">Job Position :</h5>
                                            <p>{list.JP}</p>
                                        </li>
                                        <li className="flex md:gap-1 font-semibold text-[clamp(0.65rem,1.5vw,0.85rem)] ">
                                            <h5 className="shrink-0">Job Location :</h5>
                                            {list.JL}
                                        </li>
                                        <li className="flex md:gap-1 font-semibold text-[clamp(0.65rem,1.5vw,0.85rem)] ">
                                            <h5 className="shrink-0">Salary Package :</h5>
                                            {list.SP}
                                        </li>
                                        <li className="flex md:gap-1 font-semibold text-[clamp(0.65rem,1.5vw,0.85rem)] ">
                                            <h5 className="shrink-0">Full/Part Time :</h5>
                                            {list.FPTime}
                                        </li>
                                        <li className="flex md:gap-1 font-semibold text-[clamp(0.65rem,1.5vw,0.85rem)] ">
                                            <h5 className="shrink-0">Req ID :</h5>
                                            {list.RID}
                                        </li>
                                        <li className="flex md:gap-1 font-semibold text-[clamp(0.65rem,1.5vw,0.85rem)] ">
                                            <h5 className="shrink-0">Education Level :</h5>
                                            {list.EL}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <SpringModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                thank={thank}
                setThank={setThank}
                title={course || ""}
                defaultVal
            />
        </section>
    );
};

export default JobBoard;
