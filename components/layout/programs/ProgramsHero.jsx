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
                            <div className="w-1/2 md:w-max">
                                <ProgramsModal
                                    pdf={pdf}
                                    title={title}
                                />
                            </div>
                            <button role="button" aria-label="apply now button">
                                <Link
                                    href="/contact"
                                    className="py-2.5 md:py-3 px-5 sm:ms-4 text-[clamp(0.7rem,1.15vw,1.2rem)] font-bold text-black focus:outline-none rounded-lg border-2 hover:text-background transition-all duration-500 ease-in-out border-foreground/50 hover:bg-btn/90 hover:opacity-80 focus:z-10 focus:ring-4 focus:ring-btn/50"
                                >
                                    Apply now
                                </Link>
                            </button>
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
