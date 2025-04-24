import { SectionHeading } from "@/components/UI/SectionHeading";
import Image from "next/image";
import React from "react";

const MapSection = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20 max-w-7xl mx-auto">
            <SectionHeading text={"Shaping Futures, Across Borders"} />
            <div className="w-full">
                <div className="w-full h-96 md:min-h-[100vh] relative ">
                    <Image
                        fill
                        className="object-contain object-center"
                        src={"/map.svg"}
                        alt={"Map of India"}
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </section>
    );
};

export default MapSection;
