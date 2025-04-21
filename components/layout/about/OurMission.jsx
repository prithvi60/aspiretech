import { SectionHeading } from '@/components/UI/SectionHeading'
import React from 'react'

const OurMission = () => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={"Our Mission in Motion"} />
            <p className="mb-8 text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground sm:px-16 lg:px-48">
                In tomorrow's learning technologies, a robust, seamless, and cutting-edge facilitator is indispensable. This is precisely where Aspire Tech Academy steps in. Addressing the complexities of staying abreast of emerging technologies, we provide efficient learning solutions focused on top-tier content, faculty expertise, and effective teaching methods. We aim to provide aspirants with unparalleled educational experiences, ensuring affordability without compromising on industry relevance.
            </p>
            <p className="mb-8 text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground sm:px-16 lg:px-48">
                We encompass the entire learning spectrum, from educational content and assessments to facilitating enterprise transformation. Alongside, we offer engagement tools and solutions to keep learners actively involved. Our strategic partnerships with leading educational institutions underscore our commitment to shaping a brighter future for learners through tailored programs designed for individuals and organizations alike.
            </p>
        </section>
    )
}

export default OurMission
