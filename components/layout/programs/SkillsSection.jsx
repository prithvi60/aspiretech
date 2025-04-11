import { StatusCard } from "@/components/UI/Cards";
import { dataScienceSkillSets, dataScienceStatus } from "@/utils/Data";
import React from "react";
import { RiMiniProgramFill } from "react-icons/ri";

const SkillsSection = () => {
    return (
        <div className="w-full relative padding text-foreground">
            <div className="rounded-lg w-full h-full flex flex-col gap-10 md:gap-0 md:flex-row justify-between text-foreground">
                <div className="w-full md:w-1/2 space-y-3 md:space-y-6">
                    <h3 className="text-[clamp(1rem,1.15vw,1.5rem)] text-primary">
                        Skills
                    </h3>
                    <h4 className="text-[clamp(1.3rem,2.5vw,3.05rem)] leading-6 md:leading-10 tracking-wide font-bold w-full md:w-4/5">
                        Master Industry-Relevant Skills
                    </h4>
                    <p
                        className={`mb-3 font-semibold text-foreground text-[clamp(0.7rem,1.15vw,1.15rem)] leading-6 w-full md:w-4/5`}
                    >
                        Every module is designed to equip you with the tools, techniques,
                        and thinking needed to thrive in today’s tech-driven roles.
                    </p>
                </div>
                <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-3 py-4">
                    {dataScienceSkillSets.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-linear-to-b from-[var(--text-gradient-left)]/50 via-[var(--primary)]/60 to-[#FFFEFE] p-0.5 rounded-md min-h-24 max-w-xs md:w-auto last:col-span-2 md:last:col-span-1"
                        >
                            <div className="block space-y-3 min-h-24 px-2.5 py-4 bg-linear-333 from-[#141414] via-[#181818] to-[#2f2f2f] custom-shadow rounded-md">
                                <RiMiniProgramFill className="shrink-0 text-primary text-base lg:text-xl" />
                                <p className={`text-[clamp(0.7rem,1.15vw,1rem)]`}>{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
