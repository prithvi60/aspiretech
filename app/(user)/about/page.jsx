import OurMission from "@/components/layout/about/OurMission";
import AspireTechSets from "@/components/layout/AspireTechSets";
import IndustrialCoursesCard from "@/components/layout/IndustrialCoursesCard";
import ProgramsHero from "@/components/layout/programs/ProgramsHero";
import WhatMakesUsDiff from "@/components/layout/WhatMakesUsDiff";
import { StatusCard } from "@/components/UI/Cards";
import { aboutHero, aboutStatus, powerProgress, } from "@/utils/Data";
import React from "react";

const Page = () => {
    return (
        <div>
            <ProgramsHero
                val={aboutHero}
                btn={"about"}
            />
            <WhatMakesUsDiff />
            <div className="flex flex-wrap justify-center items-center gap-5 xl:gap-y-10 max-w-7xl mx-auto px-6 pb-[40px] md:px-[64px] lg:px-[80px] md:pb-[70px]">
                {aboutStatus.map((item, index) => (
                    <StatusCard key={index} data={item} counter />
                ))}
            </div>
            <OurMission />
            <AspireTechSets title={"Programs That Power Progress"} data={powerProgress} pageSection={"progress"} />
            <IndustrialCoursesCard />
        </div>
    );
};

export default Page;
