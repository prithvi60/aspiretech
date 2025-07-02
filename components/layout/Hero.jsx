import Image from "next/image";
import React from "react";
import { AnimateButton } from "../UI/Button";
import Link from "next/link";
import { Stat } from "../UI/Counter";
import { ContactForm } from "../features/ContactForm";

const Hero = () => {
    return (
        <section className="w-full h-fit padding flex justify-between gap-16 lg:gap-2 flex-col lg:flex-row relative overflow-hidden">
            <div className="w-full lg:w-3/5 space-y-7 lg:space-y-12 2xl:space-y-16">
                <h1 className="text-[clamp(2rem,5.5vw,4rem)] leading-10 md:leading-16 font-bold text-foreground w-full lg:w-11/12">
                    Get Job-Ready with <span className="text-primary">In-Demand</span> Tech
                    Skills
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium w-full lg:w-3/4">
                    Master Tech Skills Easily - Kickstart Your Journey with Aspire Tech
                    Academy!
                </h2>
                <button role="button" aria-label="apply now button">
                    <Link
                        role="link"
                        title="Get Started with Aspire Tech Academy"
                        aria-label="Get Started with Aspire Tech Academy"
                        href="/contact"
                        className="py-2.5 md:py-3 px-5 sm:ms-4 text-[clamp(0.7rem,1.15vw,1.2rem)] font-bold text-black focus:outline-none rounded-lg border-2 hover:text-background transition-all duration-500 ease-in-out border-foreground/50 hover:bg-btn/90 hover:opacity-80 focus:z-10 focus:ring-4 focus:ring-btn/50 bg-background"
                    >
                        Get Started
                    </Link>
                </button>
                <div className={`gap-5 flex items-center text-foreground`}>
                    <Image
                        priority
                        loading="eager"
                        quality={100}
                        width={80}
                        height={80}
                        src={"/target.svg"}
                        alt={"icon"}
                        className="object-contain object-center shrink-0 size-12 sm:size-14 lg:size-16"
                    />
                    <div className="block">
                        <p className={`text-[clamp(1rem,1.5vw,1.35rem)] w-4/5`}>
                            2K+ Students Already Enrolled!
                        </p>
                    </div>
                </div>
                <div className={`gap-5 flex items-center text-foreground`}>
                    <Image
                        priority
                        loading="eager"
                        quality={100}
                        width={80}
                        height={80}
                        src={"/award.svg"}
                        alt={"icon"}
                        className="object-contain object-center shrink-0 size-12 sm:size-14 lg:size-16 "
                    />
                    <div className="flex items-center gap-2.5 md:gap-5">
                        <Stat num={Number("4")} suffix={"/5"} />
                        <p className={`text-[clamp(1rem,1.5vw,1.35rem)]`}>
                            Land dream job
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-2/5">
                <div className="w-full max-w-md mx-auto">
                    <ContactForm title={"contact"} hero />
                </div>
            </div>
        </section>
    );
};

export default Hero;
