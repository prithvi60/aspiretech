import { Stat } from "@/components/UI/Counter";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { trustedReview } from "@/utils/Data";
import React from "react";

const WhyAspireTechTrusted = () => {
    return (
        <section className="padding max-w-7xl mx-auto w-full font-inter text-foreground space-y-7 lg:space-y-14">
            <div className="w-full space-y-6 lg:space-y-8">
                <SectionHeading
                    text={"Why Aspire Tech Academy is Trusted in Bangalore ?"}
                />
                <p className="font-inter font-medium italic text-[#454444] text-sm md:text-lg text-center">
                    “The best decision I made for my career! Got placed in a top analytics
                    firm in Bangalore.”
                    <br />
                    <span className="font-semibold"> - Ananya R</span>
                </p>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 xl:gap-y-10 xl:gap-x-10 max-w-[1560px] mx-auto">
                {trustedReview.map((item, index) => (
                    <div
                        key={index}
                        className={`min-w-[200px] rounded-xl space-y-8 bg-secondary`}
                    >
                        <div
                            className={`px-8 py-6 flex flex-col items-center justify-center text-foreground`}
                        >
                            <Stat num={Number(item.count)} suffix={item.suffix} />

                            <div className="flex gap-2">
                                <p
                                    className={`text-[clamp(0.9rem,1.5vw,1.25rem)] font-bold text-center font-inter`}
                                >
                                    {item.statusName}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyAspireTechTrusted;
