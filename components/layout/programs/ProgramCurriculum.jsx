"use client";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { DSProgramCurriculum } from "@/utils/Data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbHexagonPlusFilled } from "react-icons/tb";
import { ProgramsModal } from "./Modal";

const ProgramCurriculum = () => {
    const [isActive, setIsActive] = useState(0);
    const modules = DSProgramCurriculum.map((val) => val.module);
    const filteredContent = DSProgramCurriculum.filter(
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
                                className={`text-[clamp(1rem,1.20vw,1.75rem)] font-semibold tracking-wide min-w-fit p-3 md:p-2 cursor-pointer ${isActive === idx ? "text-foreground" : "text-[#9E9E9E]"}`}
                                onClick={() => setIsActive(idx)}
                            >
                                {list}
                            </li>
                        ))}
                    </ul>
                    <hr className="w-full h-0.5 md:w-0.5 md:h-full rounded-2xl bg-linear-to-r md:bg-linear-to-t from-[#3F3403] via-primary to-[#3F3403]" />
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
                        <div className="max-w-sm rounded-xl flex flex-col justify-between min-h-[340px] lg:min-h-[320px] p-5 bg-linear-180 from-black via-black/90 to-foreground/10 custom-shadow mx-auto">
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
                                    <p className="text-[clamp(1rem,2.5vw,1.25rem)] font-extrabold text-primary">
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
                                    pdf={[
                                        "/files/Pay-After-Placement-IBM-Certified-Data-Science-Course-Brochure.pdf",
                                        "/files/IBM-Certified-Data-Analytics-Course-Brochure.pdf",
                                    ]}
                                    title={[
                                        "Pay After Placement IBM Certified Data Science Course Brochure",
                                        "IBM Certified Course Data Science Architecture Program",
                                    ]}
                                />
                                {/* <button
                                    title={`download brochure`}
                                    role="button"
                                    className="transition-all w-full duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                                >
                                    <Link
                                        title={`download brochure`}
                                        href={"#"}
                                        download={""}
                                        className={`bg-white flex justify-center items-center gap-2 md:gap-4 hover:shadow-[4px_4px_0px_var(--primary)] text-center text-black font-bold w-full cursor-pointer px-4 py-2 md:py-3 md:px-8 capitalize text-[clamp(0.7rem,1.15vw,1.1rem)] rounded-lg`}
                                    >
                                        download brochure
                                    </Link>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramCurriculum;
