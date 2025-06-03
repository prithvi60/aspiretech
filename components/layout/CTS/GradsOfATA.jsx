import { EnquireCard } from "@/components/UI/Cards";
import { SectionHeading } from "@/components/UI/SectionHeading";
import React from "react";

const GradsOfATA = ({ title, corporateData, FSDTitle }) => {

    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            {title && <SectionHeading text={"Why Grads of Aspire tech academy?"} />}
            {FSDTitle && (
                <SectionHeading
                    text={
                        "Why choose to learn Full Stack Web Development at Aspire Tech Academy?"
                    }
                />
            )}
            <div className={`grid grid-cols-1 ${FSDTitle ? "md:grid-cols-3 max-w-6xl" : "md:grid-cols-2 max-w-3xl"} gap-5 xl:gap-10 mx-auto`}>
                {corporateData.map((data, idx) => (
                    <EnquireCard data={data} key={idx} FSDTitle />
                ))}
            </div>
        </section>
    );
};

export default GradsOfATA;
