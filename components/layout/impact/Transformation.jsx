import { Stat } from "@/components/UI/Counter";
import { SectionHeading } from "@/components/UI/SectionHeading";
import Image from "next/image";
import React from "react";

const Transformation = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={"Transformation of our Alumni"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 max-w-7xl mx-auto">
                <div
                    className={`px-8 py-6 flex flex-col gap-2 lg:gap-3 text-foreground font-inter bg-secondary rounded-xl`}
                >
                    <Stat num={80} suffix={"%"} space />
                    <p className={`text-[clamp(0.8rem,1.15vw,1.5rem)]`}>
                        Learners got a hike in their salary compared to their previous
                        salary
                    </p>
                </div>
                <div
                    className={`px-8 py-6 flex flex-col gap-2 lg:gap-3 text-foreground font-inter bg-secondary rounded-xl`}
                >
                    <Stat num={40} suffix={"%"} space />
                    <p className={`text-[clamp(0.8rem,1.15vw,1.5rem)]`}>
                        is the avg hike that students get over their previous CTC
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                <div className="block space-y-5 max-w-6xl mx-auto">
                    <div
                        className={`px-8 py-6 flex flex-col gap-2 lg:gap-3 text-foreground font-inter w-full md:w-3/4`}
                    >
                        <Stat num={80} suffix={"%"} />
                        <p className={`text-[clamp(0.8rem,1.15vw,1.5rem)]`}>
                            Learners got a hike in their salary compared to their previous
                            salary
                        </p>
                    </div>
                    <div
                        className={`px-8 py-6 flex flex-col gap-2 lg:gap-3 text-foreground font-inter w-full md:w-3/4`}
                    >
                        <Stat num={40} suffix={"%"} />
                        <p className={`text-[clamp(0.8rem,1.15vw,1.5rem)]`}>
                            is the avg hike that students get over their previous CTC
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full h-52 md:h-96 relative ">
                        <Image
                            fill
                            className="object-contain object-center"
                            src={"/graph.svg"}
                            alt={"graph"}
                            priority
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transformation;
