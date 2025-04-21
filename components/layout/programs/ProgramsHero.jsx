import Link from "next/link";
import React from "react";
import { ProgramsModal } from "./Modal";

const ProgramsHero = () => {
    return (
        <section className="mx-auto max-w-screen-xl">
            <div className="py-8 px-4 text-center lg:py-16">
                <h1 className="mb-4 font-extrabold tracking-tight leading-none text-gradient text-[clamp(1.8rem,3.5vw,3.8rem)] py-2">
                    Money Back Guarantee
                    Data Science Architecture Program
                </h1>
                <p className="mb-8 text-[clamp(1rem,1.15vw,1.5rem)] leading-6 md:leading-7 font-normal text-foreground sm:px-16 lg:px-48">
                    Gain a competitive edge in emerging technologies with our Data Science & Architecture Program and Master in-demand skills to build scalable solutions and land in you dream job else get the refund of the fees paid ! Through hands-on practice, gain proficiency in Python, SQL, Excel, Machine Learning, Tableau, Generative AI, prompt engineering, and ChatGPT. Interact live with industry leaders, enhancing your skills and staying ahead in the fast-evolving world of data science. Join us and empower your career today.
                </p>
                <div className="flex flex-row gap-5 justify-center items-center">
                    <div className="w-1/2 md:w-max">
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
                    </div>
                    <button role="button" aria-label="apply now button">
                        <Link
                            href="/contact"
                            className="py-2.5 md:py-3 px-5 sm:ms-4 text-[clamp(0.7rem,1.15vw,1.2rem)] font-bold text-primary/50 focus:outline-none rounded-lg border-2 hover:text-foreground transition-all duration-500 ease-in-out border-primary/50 hover:bg-primary/90 hover:opacity-80 focus:z-10 focus:ring-4 focus:ring-primary/50"
                        >
                            Apply now
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProgramsHero;
