import { Stat } from "@/components/UI/Counter";
import { SectionHeading } from "@/components/UI/SectionHeading";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const FutureChecks = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={"Future Paychecks Unlocked"} />
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 max-w-5xl mx-auto">
                {data.map((item, index) => (
                    <div key={index}
                        className={`p-3 flex flex-col gap-2 lg:gap-3 text-foreground bg-secondary rounded-xl min-w-72 `}
                    >
                        <h5 className="text-[clamp(0.8rem,1.15vw,1.5rem)] font-medium tracking-wider">
                            {item.title}
                        </h5>
                        <Stat num={item.num} suffix={item.suffix} type />
                        <hr className="w-3/4 h-0.5 bg-black" />
                        <p className={`text-[clamp(1rem,1.15vw,1.5rem)] flex items-center gap-1 bg-primary/30 w-max p-2 rounded-full my-3`}>
                            <span>
                                <MdArrowOutward className="text-[clamp(1rem,1.15vw,1.5rem)] text-black" />
                            </span>{" "}
                            {item.percentage}%
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FutureChecks;


const data = [
    {
        title: "Data Analyst",
        num: 850000,
        suffix: "₹",
        percentage: 25,
    },
    {
        title: "Digital Marketing",
        num: 500000,
        suffix: "₹",
        percentage: 25,
    },
    {
        title: "UI/UX Designer",
        num: 600000,
        suffix: "₹",
        percentage: 20,
    },
    {
        title: "Data Scientist",
        num: 1200000,
        suffix: "₹",
        percentage: 30,
    }
]