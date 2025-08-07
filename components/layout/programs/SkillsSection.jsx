import Image from "next/image";
import React from "react";

const SkillsSection = ({ data }) => {
    return (
        <div className="w-full relative padding text-foreground">
            <div className="rounded-lg w-full h-full flex flex-col gap-0 md:gap-5 md:flex-row justify-between text-foreground">
                <div className="w-full md:w-1/2 space-y-5">
                    <h2 className="text-[clamp(1rem,1.5vw,1.5rem)] text-primary">
                        Skills
                    </h2>
                    <h3 className="text-[clamp(1.3rem,3.5vw,3.2rem)] leading-6 md:leading-10 tracking-wide font-bold w-full md:w-4/5">
                        Build Job-Ready Skills
                    </h3>
                    <p
                        className={`mb-3 font-semibold text-foreground text-[clamp(0.85rem,1.15vw,1.15rem)] leading-6 w-full md:w-4/5 pt-4`}
                    >
                        Master practical tools, frameworks, and industry techniques that go beyond the classroom. Each module is carefully curated to help you think like a tech professional and solve real-world challenges with confidence.Stay career-ready in a fast-evolving digital world.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        width={850}
                        height={650}
                        src={"/toolWeCovered.png"}
                        alt={"skills"}
                        priority={false}
                        loading="lazy"
                        quality={100}
                        className="w-full h-auto"
                        sizes="(min-width: 1260px) 512px, (min-width: 780px) 42.61vw, (min-width: 600px) 512px, calc(92.86vw - 27px)"
                    />
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
