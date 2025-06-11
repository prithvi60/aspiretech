import { SectionHeading } from "@/components/UI/SectionHeading";
import { careerSupport } from "@/utils/Data";
import React from "react";

const CareerSupport = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={"Seamless Career Support, Powered by AI"} />

            <div className="w-full h-full">
                {careerSupport.map((list, idx) => (
                    <div key={idx} className={`py-2`}>
                        <h2
                            className={`border-4 border-borderColor rounded-lg transition-colors transform px-5 md:px-10 py-5 text-[clamp(0.8rem,2vw,1.3rem)] text-black font-medium max-w-full sm:max-w-xl lg:max-w-4xl mx-auto text-center duration-700 ease-in-out  slick-center:scale-110 bg-background`}
                        >
                            {list}
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareerSupport;
