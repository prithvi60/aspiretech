import { StatusCard } from "@/components/UI/Cards";
import { dataScienceStatus } from "@/utils/Data";
import React from "react";

const SummaryAboutCourse = () => {
    return (
        <div className="w-full relative padding text-foreground">
            <div className="rounded-lg w-full h-full flex flex-col gap-10 md:gap-0 md:flex-row justify-between text-foreground">
                <div className="w-full md:w-[65%] space-y-3 md:space-y-6">
                    <h3 className="text-[clamp(1rem,1.15vw,1.5rem)] text-primary font-inter">
                        IN 8 Months
                    </h3>
                    <h4 className="text-[clamp(1.3rem,2.5vw,3.05rem)] leading-6 md:leading-10 tracking-wide font-bold w-full md:w-4/5">
                        Fee is refunded if not placed
                    </h4>
                    <p
                        className={`mb-3 font-semibold text-foreground font-inter text-[clamp(0.7rem,1.15vw,1.15rem)] leading-6 w-full md:w-4/5`}
                    >
                        Gain a competitive edge in emerging technologies with our Data
                        Science & Architecture Program. Master in-demand skills to build
                        scalable solutions and lead in a tech-driven world.
                    </p>
                </div>
                <div className="w-full md:w-[35%] grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-y-5 lg:gap-x-6 py-4">
                    {dataScienceStatus.map((list, idx) => (
                        <StatusCard data={list} key={idx} type icon />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SummaryAboutCourse;
