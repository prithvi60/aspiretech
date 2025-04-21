import { SectionHeading } from "@/components/UI/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <h1 className="font-extrabold tracking-tight leading-none text-gradient text-[clamp(1.8rem,3.5vw,3.8rem)] py-2 text-center">
                Press
            </h1>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Featured Articles"} space />
                <p className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground">
                    At Aspire Tech Academy, we've been empowering learners to fast-track
                    their career paths and uncover a brighter future. The recognition
                    we've garnered in the media speaks volumes about our commitment.
                    Explore Aspire Tech Academy's presence in the news and gain insights
                    from our expert perspectives in the Press section.
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading
                    text={
                        "Aspire Tech Academy: Revolutionizing IT Education with Pay-after-Placement Model"
                    }
                    space
                />

                <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
                    <Link
                        href={
                            "https://trendinsider.in/2024/05/10/aspire-tech-academy-revolutionizing-it-education-with-pay-after-placement-model/"
                        }
                        target="_blank"
                        className="bg-linear-to-b from-[var(--text-gradient-left)]/30 to-[#fffefe9e] p-[1.5px] rounded-xl w-full max-w-96 min-h-[250px] xl:min-h-[200px] shrink-0 relative z-40 hover:scale-105 transition duration-500"
                    >
                        <div className="relative flex h-full flex-col justify-between overflow-hidden p-8 shadow-lg bg-radial from-black to-[#222222] font-inter gap-6 rounded-xl">
                            <div className="relative">
                                {/* first layer */}
                                <div className="w-full h-56 bg-zinc-400 rounded-xl relative z-30 overflow-hidden">
                                    <Image
                                        fill
                                        src={"/press-1.png"}
                                        alt={"article"}
                                        className="object-cover object-top"
                                    />
                                </div>
                                {/* second layer */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4/5 bg-primary/30 backdrop-blur-lg rounded-xl h-64 z-20" />
                                {/* third layer */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-11/12 bg-primary/40 backdrop-blur-xl rounded-xl h-60 z-10" />
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={
                            "https://rcedutalent.com/aspire-tech-academy-it-education-with-pay-after-placement-model/?fbclid=IwY2xjawJXcDpleHRuA2FlbQIxMAABHV_CPAa71s7-QucYK1whFEDAbTOaDyw5f1_hbgcLDwnMGJDaxnLcD0NP3Q_aem_Hj9LaPwA1oFZLsLdmSDNeA"
                        }
                        target="_blank"
                        className="bg-linear-to-b from-[var(--text-gradient-left)]/30 to-[#fffefe9e] p-[1.5px] rounded-xl min-h-[250px] w-full max-w-96 xl:min-h-[200px] shrink-0 relative z-40 hover:scale-105 transition duration-500"
                    >
                        <div className="relative flex h-full flex-col justify-between overflow-hidden p-8 shadow-lg bg-radial from-black to-[#222222] font-inter gap-6 rounded-xl">
                            <div className="relative">
                                {/* first layer */}
                                <div className="w-full h-56 bg-zinc-400 rounded-xl relative z-30 overflow-hidden">
                                    <Image
                                        fill
                                        src={"/press-2.png"}
                                        alt={"article"}
                                        className="object-cover object-top"
                                    />
                                </div>
                                {/* second layer */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4/5 bg-primary/30 backdrop-blur-lg rounded-xl h-64 z-20" />
                                {/* third layer */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-11/12 bg-primary/40 backdrop-blur-xl rounded-xl h-60 z-10" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Page;
