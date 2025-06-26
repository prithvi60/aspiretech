import React from "react";

export const SectionHeading = ({ text, space, gapAdd }) => {
    return (
        <h1
            className={`font-extrabold leading-8 font-plus md:leading-10 xl:leading-12 2xl:leading-16 tracking-wide ${space ? "text-start text-foreground" : "text-center text-black"} text-black ${gapAdd ? "text-[clamp(1.1rem,2vw,2rem)]" : "text-[clamp(1.2rem,3vw,3rem)]"}`}
        >
            {text}
        </h1>
    );
};
