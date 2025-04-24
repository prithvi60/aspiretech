import { Accordion } from '@/components/UI/Accordion'
import { SectionHeading } from '@/components/UI/SectionHeading'
import React from 'react'

const ProgramBreakdown = ({ data }) => {
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={"Addon Syllabus : Skyrocketing Skills"} />
            <Accordion items={data} />
        </section>
    )
}

export default ProgramBreakdown
