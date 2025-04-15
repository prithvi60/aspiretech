import { SectionHeading } from "@/components/UI/SectionHeading";
import { dSAddonSyllabus } from "@/utils/Data";
import React from "react";

const Addons = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={"Addon Syllabus : Skyrocketing Skills"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {dSAddonSyllabus.map((list, idx) => (
                    <div
                        key={idx}
                        className="bg-linear-to-b from-[var(--text-gradient-left)]/20 to-[#fffefe9e] p-[1px] rounded-md min-h-16 sm:min-h-[110px]"
                    >
                        <div
                            className={`rounded-lg transition-colors transform px-10 py-5 min-h-16 sm:min-h-[110px] text-[clamp(0.8rem,2vw,1.3rem)] w-full sm:max-w-lg lg:max-w-4xl mx-auto text-center duration-700 ease-in-out shadow-[0px_0px_50px_-22px_var(--primary)] slick-center:scale-110 bg-radial-[at_50%_55%] from-[#1a1918] via-[#1a1918] to-[#94949243] text-foreground flex justify-center items-center`}
                        >
                            <span>{list}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Addons;
