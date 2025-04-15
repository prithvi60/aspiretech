import Addons from '@/components/layout/programs/Addons';
import Certifications from '@/components/layout/programs/Certifications';
import IndustrialProject from '@/components/layout/programs/IndustrialProject';
import ProgramBreakdown from '@/components/layout/programs/ProgramBreakdown';
import ProgramCurriculum from '@/components/layout/programs/ProgramCurriculum';
import ProgramsHero from '@/components/layout/programs/ProgramsHero';
import SkillsSection from '@/components/layout/programs/SkillsSection';
import SpotLight from '@/components/layout/programs/SpotLight';
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
            <SpotLight />
            <ProgramCurriculum />
            <Addons />
            <SkillsSection />
            <TechSoftware />
            <IndustrialProject />
            <Certifications />
            <ProgramBreakdown />
        </div>
    )
}

export default Page
