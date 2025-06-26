import { SectionHeading } from "@/components/UI/SectionHeading";
import { careerSupport } from "@/utils/Data";
import Image from "next/image";
import React from "react";

const CareerSupport = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={"Seamless Career Support, Powered by AI"} />

            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
                {careerSupport.map((list, idx) => (
                    // <div key={idx} className="min-w-[200px]">
                    <div key={idx} className={`px-5 md:px-10 py-5 space-y-1.5 rounded-xl border border-btn/20 shadow-md shadow-btn/45 flex flex-col gap-5`}>
                        <Image
                            width={60}
                            height={60}
                            src={"/resume.svg"}
                            alt={"icon"}
                            className="object-contain object-center shrink-0 size-10 sm:size-14 lg:size-16"
                        />
                        <p
                            className={`text-[clamp(0.8rem,1.5vw,1.25rem)] text-black font-medium`}
                        >
                            {list}
                        </p>
                    </div>
                    // </div>
                ))}
            </div>
        </section>
    );
};

export default CareerSupport;
