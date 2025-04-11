import Addons from '@/components/layout/programs/Addons';
import IndustrialProject from '@/components/layout/programs/IndustrialProject';
import ProgramBreakdown from '@/components/layout/programs/ProgramBreakdown';
import ProgramsHero from '@/components/layout/programs/ProgramsHero';
import SkillsSection from '@/components/layout/programs/SkillsSection';
import SummaryAboutCourse from '@/components/layout/programs/SummaryAboutCourse';
import TechSoftware from '@/components/layout/programs/TechSoftware';
import React from 'react'

const Page = async ({ params }) => {
    const { course } = await params
    const val = course.replace(/-/g, (match, offset) => offset === 2 ? "/" : " ");
    // const result = 
    return (
        <div>
            <ProgramsHero />
            <SummaryAboutCourse />
            <Addons />
            <SkillsSection />
            <TechSoftware />
            <IndustrialProject />
            <ProgramBreakdown />
        </div>
    )
}

export default Page
