import { SectionHeading } from "@/components/UI/SectionHeading";
import { courseHighlightsList } from "@/utils/Data";
import React from "react";

const CourseHighlights = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <div className="w-full max-w-5xl mx-auto text-center">
                <SectionHeading text={"Course Highlights"} />
            </div>

            <div className="w-full h-fit max-w-full sm:max-w-2xl lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                {courseHighlightsList.map((list, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center gap-4 md:gap-10 border-4 border-borderColor rounded-lg px-10 py-5 text-[clamp(0.8rem,2vw,1.3rem)] text-black font-medium bg-background h-28`}
                    >
                        <span>{list.icon}</span>
                        <h3>{list.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseHighlights;
