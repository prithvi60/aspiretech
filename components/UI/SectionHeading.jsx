import React from 'react'

export const SectionHeading = ({ text }) => {
    return (
        <h1 className="font-extrabold leading-6 tracking-wide text-[clamp(1.2rem,3vw,3rem)] text-center text-foreground">
            {text}
        </h1>
    )
}
