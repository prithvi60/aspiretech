import { SectionHeading } from "@/components/UI/SectionHeading";
import { DSAchievements } from "@/utils/Data";
import React from "react";
import Marquee from "react-fast-marquee";

const CTSMarquee = () => {
    return (
        <section className="w-full h-full py-[40px] md:py-[70px] space-y-10 md:space-y-20 relative">
            <SectionHeading text={"Areas of Expertise"} />
            <div className="block space-y-4 ">
                <MarqueeCTSCard data={DSAchievements} direction={"left"} speed={"40"} />
                <MarqueeCTSCard
                    data={DSAchievements}
                    direction={"right"}
                    speed={"30"}
                />
                <MarqueeCTSCard data={DSAchievements} direction={"left"} speed={"30"} />
            </div>
        </section>
    );
};

export default CTSMarquee;

const MarqueeCTSCard = ({ data, speed, direction }) => {
    return (
        <Marquee autoFill direction={direction} pauseOnHover speed={speed}>
            {data.map((list, idx) => (
                <div key={idx} className="py-2 mx-4">
                    <h1
                        className={`px-5 py-4 text-[clamp(0.55rem,1.15vw,1rem)] w-36 md:w-48 xl:w-60 text-center ease-in-out slick-center:scale-110 rounded-full bg-background text-foreground border-2 border-[#BAB9BD]/30 hover:scale-110 hover:border-[3px] md:border-4 hover:text-foreground hover:font-extrabold hover:border-primary hover:bg-white transition-all duration-300`}
                    >
                        {list}
                    </h1>
                </div>
            ))}
        </Marquee>
    );
};
