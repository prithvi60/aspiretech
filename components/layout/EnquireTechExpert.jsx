import React from "react";
import { AnimateButton } from "../UI/Button";
import Image from "next/image";
import { StatusCard } from "../UI/Cards";
import { expertProgramStatus } from "@/utils/Data";

const EnquireTechExpert = ({ home, city }) => {
    return (
        <section className="max-w-7xl mx-auto padding relative overflow-hidden space-y-10 md:space-y-16">
            <div className="w-full h-fit rounded-lg overflow-hidden relative bg-secondary">
                <div className="py-5 md:py-5 px-6 md:px-14 w-full h-fit flex flex-col-reverse md:flex-row md:items-center justify-between font-inter gap-8">
                    <div className="w-full md:w-3/5 space-y-2.5 md:space-y-5 text-foreground">
                        <h3 className="py-1 font-extrabold text-[clamp(1.1rem,2.5vw,2rem)] leading-6 md:leading-8">
                            {city
                                ? "Book a FREE Counseling Call Now Still unsure? Let our experts guide you."
                                : "Future-Proof Your Career with Aspire Tech's Expert Programs!"}
                        </h3>
                        <h4 className="h-auto font-medium text-[clamp(0.8rem,2.5vw,1.2rem)] leading-6 md:leading-8">
                            {city
                                ? "Limited Seats | Enrollment Closes This Week"
                                : "Master Tech Skills Easily - Kickstart Your Journey with Aspire Tech!"}
                        </h4>
                        <AnimateButton
                            href={"/contact"}
                            text={city ? "Book Free Counseling Call" : "Enquire now"}
                            icon
                        />
                    </div>
                    <div className="w-full md:w-2/5 xl:w-1/5 text-center">
                        <Image
                            priority={false}
                            loading="lazy"
                            quality={80}
                            width={100}
                            height={100}
                            src={"/expertise/expertise-img.png"}
                            alt={"icon"}
                            className="object-contain object-center w-full shrink-0 h-44 md:h-52 xl:h-60"
                        />
                    </div>
                </div>
            </div>
            {home && (
                <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 xl:gap-y-10 xl:gap-x-10 max-w-[1560px] mx-auto">
                    {expertProgramStatus.map((item, index) => (
                        <StatusCard key={index} data={item} counter />
                    ))}
                </div>
            )}
        </section>
    );
};

export default EnquireTechExpert;
