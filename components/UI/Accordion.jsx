"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            {items.map((item, index) => (
                <div key={index} className="mb-2">
                    <button role="button" aria-label="accordion"
                        className={`w-full border-4 border-borderColor flex justify-between gap-x-4 lg:gap-0 items-center px-4 md:px-6 py-4 md:py-9 bg-white text-foreground focus:outline-none cursor-pointer transition-colors ${activeIndex === index ? "rounded-t-lg" : "rounded-lg"}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="font-medium text-start">
                            {item.ques}
                        </span>
                        <span className="text-gray-600">
                            {activeIndex === index ? (
                                <IoIosArrowDown
                                    className={`mt-[0.6px] rotate-180 duration-500`}
                                />
                            ) : (
                                <IoIosArrowDown
                                    className={`mt-[0.6px] duration-500`}
                                />
                            )}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out bg-white text-foreground ${activeIndex === index ? "max-h-96 rounded-b-lg p-4 md:p-6 border-x-4 border-b-4 border-borderColor" : "max-h-0 px-4 md:px-6"
                            }`}
                    >
                        {item.ans}
                    </div>
                </div>
            ))}
        </div>
    );
};
