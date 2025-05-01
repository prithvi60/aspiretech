import React from "react";
import { SectionHeading } from "../UI/SectionHeading";
import { trustedCompany } from "@/utils/Data";
import { TechCompaniesCard } from "../UI/Cards";
import Marquee from "react-fast-marquee";

const TrustByCompanies = () => {
    return (
        <section className="w-full h-full space-y-10 md:space-y-20 relative py-[40px] md:py-[70px] overflow-hidden">
            <SectionHeading text={"Trusted by Leading Tech Companies"} />
            {/* <div className="size-[750px] bg-primary/90 opacity-20 blur-3xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div> */}
            <div className="w-full h-full space-y-7 md:space-y-14">
                <Marquee autoFill direction="left" pauseOnHover speed={50}>
                    {trustedCompany.slice(0, 15).map((list, idx) => (
                        <TechCompaniesCard key={idx} data={list} />
                    ))}
                </Marquee>
                <Marquee autoFill direction="right" pauseOnHover speed={50}>
                    {trustedCompany.slice(15, trustedCompany.length).map((list, idx) => (
                        <TechCompaniesCard key={idx} data={list} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default TrustByCompanies;
