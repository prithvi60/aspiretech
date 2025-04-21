import React from 'react'

export const SectionHeading = ({ text, space }) => {
    return (
        <h1 className={`font-extrabold leading-8 md:leading-10 tracking-wide text-[clamp(1.2rem,3vw,3rem)] ${space ? "text-start" : "text-center"} text-foreground`}>
            {text}
        </h1>
    )
}
