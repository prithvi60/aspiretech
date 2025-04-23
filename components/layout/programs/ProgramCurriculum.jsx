"use client";
import { SectionHeading } from "@/components/UI/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbHexagonPlusFilled } from "react-icons/tb";
import { ProgramsModal } from "./Modal";

const ProgramCurriculum = ({ data, pdf, title }) => {
    const [isActive, setIsActive] = useState(0);
    const modules = data.map((val) => val.module);
    const filteredContent = data.filter(
        (val, index) => index === isActive
    );

    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20 relative">
            <SectionHeading text={"Program Curriculum"} />
            <div className="flex flex-col md:flex-row justify-between gap-4 h-full">
                <div className="w-full md:w-2/5 lg:w-1/5 space-y-3 md:space-y-5 flex flex-col md:flex-row">
                    <ul className="md:px-5 xl:px-8 py-2 flex flex-row md:flex-col w-full overflow-x-scroll no_scrollbar">
                        {modules.map((list, idx) => (
                            <li
                                key={idx}
                                className={`text-[clamp(1rem,1.20vw,1.75rem)] font-semibold tracking-wide min-w-fit p-3 md:p-2 cursor-pointer ${isActive === idx ? "text-black font-bold" : "text-foreground/70"}`}
                                onClick={() => setIsActive(idx)}
                            >
                                {list}
                            </li>
                        ))}
                    </ul>
                    <hr className="w-full h-0.5 md:w-0.5 md:h-full rounded-2xl bg-linear-to-r md:bg-linear-to-t from-secondary via-primary to-secondary" />
                </div>
                <div className="w-full md:3/5 lg:w-4/5 gap-10 flex flex-col lg:flex-row justify-between">
                    <ul className="w-full lg:w-1/2 space-y-5">
                        {filteredContent[0].content.map((item, id) => (
                            <li
                                key={id}
                                className="font-semibold flex gap-2 text-foreground text-[clamp(1.1rem,1.15vw,1.5rem)] w-4/5"
                            >
                                <span className="shrink-0">
                                    <TbHexagonPlusFilled className="text-lg md:text-xl text-primary" />
                                </span>{" "}
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="w-full lg:w-1/2">
                        <div className="max-w-sm rounded-xl flex flex-col justify-between min-h-[340px] lg:min-h-[320px] p-5 bg-white shadow-xl border-4 border-borderColor mx-auto">
                            <div className="space-y-5">
                                <div className="space-y-5 text-foreground">
                                    <div className="shrink-0">
                                        <Image
                                            width={30}
                                            height={30}
                                            className="w-8 h-8 md:w-12 md:h-12"
                                            src={"/roadmap.svg"}
                                            alt={"avatar"}
                                        />
                                    </div>
                                    <p className="text-[clamp(1rem,2.5vw,1.25rem)] font-extrabold ">
                                        The Roadmap to Your Success
                                    </p>
                                </div>
                                <div className="relative font-inter">
                                    <p
                                        className={`mb-3 font-medium text-foreground font-inter text-[clamp(0.7rem,1.15vw,1.1rem)] leading-6`}
                                    >
                                        Gain a deep understanding of the concepts and tools covered
                                        in the program.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full">
                                <ProgramsModal
                                    pdf={pdf}
                                    title={title}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramCurriculum;
