import { SectionHeading } from "@/components/UI/SectionHeading";
import React from "react";

const Addons = ({ title, data }) => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={title} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {data.map((list, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-[1px] rounded-md min-h-16 sm:min-h-[110px]"
                    >
                        <div
                            className={`rounded-2xl transition-colors transform px-10 py-5 min-h-16 sm:min-h-[110px] text-[clamp(0.8rem,2vw,1.3rem)] w-full sm:max-w-lg lg:max-w-4xl mx-auto text-center duration-700 ease-in-out slick-center:scale-110 bg-white text-foreground flex justify-center items-center border-2 md:border-4 border-borderColor`}
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
