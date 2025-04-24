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
import {
    CertificationDetails,
    DAAchievements,
    DAAddonSyllabus,
    DAFaq,
    DAHero,
    DAPlacement,
    DAProgramCurriculum,
    DAScienceSkillSets,
    DASpotlight,
    DAStats,
    DASummaryDetails,
    DATechSoftwares,
    DMAchievements,
    DMAddonSyllabus,
    DMHero,
    DMProgramCurriculum,
    DMSpotlight,
    DMStats,
    DMSummaryDetails,
    DSAchievements,
    DSAddonSyllabus,
    DSCertificationDetails,
    DSFaq,
    DSHero,
    DSPlacement,
    DSProgramCurriculum,
    DSScienceSkillSets,
    DSSpotlight,
    DSStats,
    DSSummaryDetails,
    DSTechSoftwares,
    UIAchievements,
    UIHero,
    UIProgramCurriculum,
    UISpotlight,
    UIStats,
} from "@/utils/Data";
import React from "react";

const Page = async ({ params }) => {
    const { course } = await params;
    const val = course.replace(/-/g, (match, offset) =>
        offset === 2 ? "/" : " "
    );

    return (
        <div>
            <ExitModalCard />
            <ProgramsHero
                val={
                    val === "data science architecture program"
                        ? DSHero
                        : val === "data analytics launchpad"
                            ? DAHero
                            : val === "digital marketing program"
                                ? DMHero
                                : UIHero
                }
                pdf={
                    val === "data science architecture program"
                        ? [
                            "/files/Pay-After-Placement-IBM-Certified-Data-Science-Course-Brochure.pdf",
                            "/files/IBM-Certified-Data-Analytics-Course-Brochure.pdf",
                        ]
                        : val === "data analytics launchpad"
                            ? "/files/IBM-Certified-Data-Analytics-Course-Brochure.pdf"
                            : val === "digital marketing program"
                                ? "/files/IBM-Certified-Data-Analytics-Course-Brochure.pdf"
                                : "/files/IBM-Certified-Data-Analytics-Course-Brochure.pdf"
                }
                title={
                    val === "data science architecture program"
                        ? [
                            "Pay After Placement IBM Certified Data Science Course Brochure",
                            "IBM Certified Course Data Science Architecture Program",
                        ]
                        : val === "data analytics launchpad"
                            ? "IBM Certified Data Analytics Course Brochure"
                            : val === "digital marketing program"
                                ? "IBM Certified Data Analytics Course Brochure"
                                : "IBM Certified Data Analytics Course Brochure"
                }
            />
            <AchievementsSlider
                data={
                    val === "data science architecture program"
                        ? DSAchievements
                        : val === "data analytics launchpad"
                            ? DAAchievements
                            : val === "digital marketing program"
                                ? DMAchievements
                                : UIAchievements
                }
            />
            <SummaryAboutCourse
                data={
                    val === "data science architecture program"
                        ? DSSummaryDetails
                        : val === "data analytics launchpad"
                            ? DASummaryDetails
                            : DMSummaryDetails
                }
                stats={
                    val === "data science architecture program"
                        ? DSStats
                        : val === "data analytics launchpad"
                            ? DAStats
                            : val === "digital marketing program"
                                ? DMStats
                                : UIStats
                }
            />
            <SpotLight
                data={
                    val === "data science architecture program"
                        ? DSSpotlight
                        : val === "data analytics launchpad"
                            ? DASpotlight
                            : val === "digital marketing program"
                                ? DMSpotlight
                                : UISpotlight
                }
            />
            <ProgramCurriculum
                data={
                    val === "data science architecture program"
                        ? DSProgramCurriculum
                        : val === "data analytics launchpad"
                            ? DAProgramCurriculum
                            : val === "digital marketing program"
                                ? DMProgramCurriculum
                                : UIProgramCurriculum
                }
                pdf={
                    val === "data science architecture program"
                        ? [
                            "/files/Pay-After-Placement-IBM-Certified-Data-Science-Course-Brochure.pdf",
                            "/files/IBM-Certified-Data-Analytics-Course-Brochure.pdf",
                        ]
                        : val === "data analytics launchpad"
                            ? "/files/IBM-Certified-Data-Analytics-Course-Brochure.pdf"
                            : val === "digital marketing program"
                                ? "/files/IBM-Certified-Data-Analytics-Course-Brochure.pdf"
                                : "/files/IBM-Certified-Data-Analytics-Course-Brochure.pdf"
                }
                title={
                    val === "data science architecture program"
                        ? [
                            "Pay After Placement IBM Certified Data Science Course Brochure",
                            "IBM Certified Course Data Science Architecture Program",
                        ]
                        : val === "data analytics launchpad"
                            ? "IBM Certified Data Analytics Course Brochure"
                            : val === "digital marketing program"
                                ? "IBM Certified Data Analytics Course Brochure"
                                : "IBM Certified Data Analytics Course Brochure"
                }
            />
            {val !== "UI/UX design course" && (
                <Addons
                    data={
                        val === "data science architecture program"
                            ? DSAddonSyllabus
                            : val === "data analytics launchpad"
                                ? DAAddonSyllabus
                                : DMAddonSyllabus
                    }
                    title={
                        val === "data science architecture program"
                            ? "Addon Syllabus : Skyrocketing Skills"
                            : val === "data analytics launchpad"
                                ? "Who should enroll?"
                                : "Who can apply for this course?"
                    }
                />
            )}
            {(val === "data science architecture program" ||
                val === "data analytics launchpad") && (
                    <>
                        <SkillsSection
                            data={
                                val === "data science architecture program"
                                    ? DSScienceSkillSets
                                    : DAScienceSkillSets
                            }
                        />
                        <TechSoftware
                            data={
                                val === "data science architecture program"
                                    ? DSTechSoftwares.slice(0, 10)
                                    : DATechSoftwares
                            }
                            data2={
                                val === "data science architecture program" &&
                                DSTechSoftwares.slice(10, DSTechSoftwares.length - 1)
                            }
                        />
                    </>
                )}
            {val === "data science architecture program" && <GuidedBy />}

            {(val === "data science architecture program" ||
                val === "data analytics launchpad") && (
                    <IndustrialProject
                        data={
                            val === "data science architecture program"
                                ? DSPlacement
                                : DAPlacement
                        }
                    />
                )}
            <Certifications
                data={
                    val === "data science architecture program"
                        ? DSCertificationDetails
                        : CertificationDetails
                }
            />
            {(val === "data science architecture program" ||
                val === "data analytics launchpad") && (
                    <ProgramBreakdown
                        data={val === "data science architecture program" ? DSFaq : DAFaq}
                    />
                )}
        </div>
    );
};

export default Page;
