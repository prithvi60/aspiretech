import React from "react";

const Bonuses = ({ data }) => {
    return (
        <div className="padding max-w-7xl mx-auto w-full font-inter text-foreground">
            <div className="bg-white p-[1px] rounded-lg">
                <div className="rounded-2xl px-8 py-10 md:px-14 md:py-20 bg-white border-[5px] md:border-6 border-borderColor">
                    <div className="w-full space-y-6 lg:space-y-10">
                        <h2 className="text-[clamp(1.3rem,2.5vw,2.35rem)] leading-6 md:leading-10 tracking-wide font-bold w-full text-center">
                            {data.title}
                        </h2>
                        <ul className="list-disc">
                            {data.lists.map((list, idx) => (
                                <li
                                    key={idx}
                                    className={`mb-2 font-semibold text-foreground text-[clamp(0.7rem,1.15vw,1.15rem)] leading-6 w-full flex justify-center items-center font-inter `}
                                >
                                    {list}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bonuses;
