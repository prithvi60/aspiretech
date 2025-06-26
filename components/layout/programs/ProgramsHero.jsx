import Link from "next/link";
import React from "react";
import { ProgramsModal } from "./Modal";
import { AnimateButton } from "@/components/UI/Button";

const ProgramsHero = ({ val, btn, pdf, title }) => {

    return (
        <section className="mx-auto max-w-screen-xl">
            <div className="py-8 px-4 text-center lg:py-16">
                <h1 className="mb-4 font-extrabold leading-none text-[clamp(1.8rem,3.5vw,3.8rem)] py-2 md:w-3/4 tracking-wider mx-auto" dangerouslySetInnerHTML={{ __html: val.title }} />
                <p className="mb-8 text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground sm:px-16 lg:px-48">
                    {val.desc}
                </p>
                <div className="flex flex-row gap-5 justify-center items-center">
                    {btn !== "about" ? (
                        <>
                            <button role="button" aria-label="apply now button">
                                <Link
                                    href="/contact"
                                    className="bg-btn flex justify-center items-center gap-2 md:gap-4 hover:shadow-[4px_4px_0px_var(--primary)] text-center text-background font-bold w-full cursor-pointer px-4 py-2 md:py-3 md:px-8 capitalize text-[clamp(0.7rem,1.15vw,1.1rem)] rounded-lg"
                                >
                                    Apply now
                                </Link>
                            </button>
                            <div className="w-1/2 md:w-max">
                                <ProgramsModal
                                    pdf={pdf}
                                    title={title}
                                    program
                                />
                            </div>
                        </>
                    ) : (
                        <AnimateButton href={"/contact"} text={"Get Started!"} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProgramsHero;
