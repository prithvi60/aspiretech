import ExitModalCard from "@/components/features/ExitModalCard";
import AchievementsSlider from "@/components/layout/programs/AchievementsSlider";
import Addons from "@/components/layout/programs/Addons";
import Certifications from "@/components/layout/programs/Certifications";
import GuidedBy from "@/components/layout/programs/GuidedBy";
import IndustrialProject from "@/components/layout/programs/IndustrialProject";
import ProgramBreakdown from "@/components/layout/programs/ProgramBreakdown";
import ProgramCurriculum from "@/components/layout/programs/ProgramCurriculum";
import ProgramsHero from "@/components/layout/programs/ProgramsHero";
import SkillsSection from "@/components/layout/programs/SkillsSection";
import SpotLight from "@/components/layout/programs/SpotLight";
import SummaryAboutCourse from "@/components/layout/programs/SummaryAboutCourse";
import TechSoftware from "@/components/layout/programs/TechSoftware";
import React from "react";

const Page = async ({ params }) => {
    const { course } = await params;
    const val = course.replace(/-/g, (match, offset) =>
        offset === 2 ? "/" : " "
    );

    return (
        <>
            {val === "data science architecture program" ? (
                <div>
                    <ExitModalCard />
                    <ProgramsHero />
                    <AchievementsSlider />
                    <SummaryAboutCourse />
                    <SpotLight />
                    <ProgramCurriculum />
                    <Addons />
                    <SkillsSection />
                    <TechSoftware />
                    <GuidedBy />
                    <IndustrialProject />
                    <Certifications />
                    <ProgramBreakdown />
                </div>
            ) : (
                <div className="padding min-h-screen w-full flex justify-between items-center font-extrabold leading-6 tracking-wide text-[clamp(1.8rem,3vw,3rem)] text-center animate-pulse text-gradient">
                    <h4 className="w-full">Arriving shortly !</h4>
                </div>
            )}
        </>
    );
};

export default Page;
