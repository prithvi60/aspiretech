import React from "react";
import { MainCoursesCard } from "../UI/Cards";
import { IndustrialCoursesCardData } from "@/utils/Data";
import { SectionHeading } from "../UI/SectionHeading";

const IndustrialCoursesCard = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={"Programs That Launch Careers - Not Just Teach Skills"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-y-10 max-w-7xl mx-auto">
                {IndustrialCoursesCardData.map((item, index) => (
                    <MainCoursesCard key={index} data={item} />
                ))}
            </div>
        </section>
    );
};

export default IndustrialCoursesCard;
