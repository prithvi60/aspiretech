import { SectionHeading } from "@/components/UI/SectionHeading";
import Image from "next/image";
import React from "react";

const IndustryRoleTrends = () => {
    return (
        <section className="w-full h-full padding space-y-10 max-w-6xl mx-auto">
            <SectionHeading
                text={
                    "Industry & Role Trends Across Digital Marketing, Data, and Design Fields"
                }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="size-64 w-full sm:w-80 sm:h-52 lg:w-96 lg:h-60 xl:w-[560px] xl:h-96 relative">
                    <Image
                        fill
                        className="object-cover md:object-contain object-center"
                        src={"/industrypie.svg"}
                        alt={"Industry Role Trends"}
                        quality={100}
                    />
                </div>
                <div className="size-64 w-full sm:w-80 sm:h-52 lg:w-96 lg:h-60 xl:w-[560px] xl:h-96 relative">
                    <Image
                        fill
                        className="object-cover md:object-contain object-center"
                        src={"/role.svg"}
                        alt={"Industry Role Trends"}
                        quality={100}
                    />
                </div>
            </div>
        </section>
    );
};

export default IndustryRoleTrends;
