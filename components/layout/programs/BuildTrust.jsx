import Image from "next/image";
import React from "react";

const BuildTrust = () => {
    return (
        <section className="w-full h-full padding block space-y-4 md:space-y-8">    
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-6 w-full h-auto">
                <Image
                    priority={false}
                    loading="lazy"
                    quality={100}
                    width={150}
                    height={100}
                    src={"/certified.png"}
                    alt={"icon"}
                    className="object-contain object-center shrink-0 w-48 h-14 sm:w-40 sm:h-16 md:w-48 lg:h-20"
                />
                <Image
                    priority={false}
                    loading="lazy"
                    quality={100}
                    width={150}
                    height={100}
                    src={"/iso.png"}
                    alt={"icon"}
                    className="object-contain object-center shrink-0 w-56 h-16 sm:w-40 sm:h-16 md:w-48 md:h-16 lg:h-20"
                />
                <Image
                    priority={false}
                    loading="lazy"
                    quality={100}
                    width={150}
                    height={100}
                    src={"/iaf.png"}
                    alt={"icon"}
                    className="object-contain object-center shrink-0 w-60 h-20 sm:w-40 md:w-48 sm:h-24 lg:h-28"
                />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 md:gap-10 w-full border-4 border-borderColor rounded-lg max-w-6xl mx-auto p-3 md:p-6">
                {data.map((item, idx) => (
                    <div className="flex items-center gap-3" key={idx}>
                        <Image
                            priority={false}
                            loading="lazy"
                            quality={100}
                            width={150}
                            height={150}
                            src={item.img}
                            alt={"icon"}
                            className="object-contain object-center shrink-0 size-16 lg:size-20"
                        />
                        <div className="block space-y-1">
                            <small className="font-inter text-sm tracking-wide">
                                {item.subHeading}
                            </small>
                            <p className="text-lg md:text-lg xl:text-2xl font-extrabold">
                                {item.heading}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BuildTrust;

const data = [
    {
        img: "/placement.svg",
        subHeading: "Placement Support",
        heading: "100% Placement",
    },
    {
        img: "/emi.svg",
        subHeading: "EMI Options Available",
        heading: "EMI at 0% interest",
    },
    {
        img: "/expertise.svg",
        subHeading: "Expertise",
        heading: "Expertise Coaching",
    },
];
