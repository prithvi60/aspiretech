import HeroMarqueeComponent from "@/components/HeroMarqueeComponent";
import GradsOfATA from "@/components/layout/CTS/GradsOfATA";
import EnquireTechExpert from "@/components/layout/EnquireTechExpert";
import AchievementsSlider from "@/components/layout/programs/AchievementsSlider";
import Addons from "@/components/layout/programs/Addons";
import BuildTrust from "@/components/layout/programs/BuildTrust";
import CareerSupport from "@/components/layout/programs/CareerSupport";
import Certifications from "@/components/layout/programs/Certifications";
import GuidedBy from "@/components/layout/programs/GuidedBy";
import IndustrialProject from "@/components/layout/programs/IndustrialProject";
import MasterSkills from "@/components/layout/programs/MasterSkills";
import ProgramBreakdown from "@/components/layout/programs/ProgramBreakdown";
import ProgramCurriculum from "@/components/layout/programs/ProgramCurriculum";
import ProgramsHero from "@/components/layout/programs/ProgramsHero";
import SkillsSection from "@/components/layout/programs/SkillsSection";
import SpotLight from "@/components/layout/programs/SpotLight";
import SummaryAboutCourse from "@/components/layout/programs/SummaryAboutCourse";
import TechSoftware from "@/components/layout/programs/TechSoftware";
import WhyChooseAT from "@/components/layout/programs/WhyChooseAT";
import TrustByCompanies from "@/components/layout/TrustByCompanies";
import {
    careerSupport,
    CertificationDetails,
    corporateData,
    DAAchievements,
    DAAddonSyllabus,
    DACertificationDetails,
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
    DMCertificationDetails,
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
    FSDAddonSyllabus,
    FSDCertificationDetails,
    FSDEnrollment,
    FSDProgramCurriculum,
    FSDStats,
    FSDSummaryDetails,
    FullStackHero,
    UIAchievements,
    UICertificationDetails,
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
            <ProgramsHero
                val={
                    val === "data science architecture program"
                        ? DSHero
                        : val === "data analytics launchpad"
                            ? DAHero
                            : val === "digital marketing program"
                                ? DMHero
                                : val === "full stack development"
                                    ? FullStackHero
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
                                ? "/files/Aspire-Project-Brochure.pdf"
                                : val === "full stack development"
                                    ? "/files/Aspire-Full-stack-development.pdf"
                                    : "/files/Aspire-Project-Brochure.pdf"
                }
                title={
                    val === "data science architecture program"
                        ? [
                            "Pay After Placement IBM Certified Data Science Course Brochure",
                            "IBM Certified Course Data Science Architecture Program",
                        ]
                        : val === "data analytics launchpad"
                            ? "IBM Certified Data Analytics Course Brochure"
                            : val === "full stack development"
                                ? "Aspire Full Stack Development Brochure"
                                : val === "digital marketing program"
                                    ? "Aspire Project Brochure"
                                    : "Aspire Project Brochure"
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
                            : val === "full stack development"
                                ? FSDSummaryDetails
                                : DMSummaryDetails
                }
                stats={
                    val === "data science architecture program"
                        ? DSStats
                        : val === "data analytics launchpad"
                            ? DAStats
                            : val === "digital marketing program"
                                ? DMStats
                                : val === "full stack development"
                                    ? FSDStats
                                    : UIStats
                }
            />
            <BuildTrust />
            <CareerSupport data={careerSupport} />
            {val !== "full stack development" && (
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
            )}
            {val === "full stack development" && (
                <GradsOfATA FSDTitle={true} corporateData={FSDEnrollment} />
            )}
            <ProgramCurriculum
                data={
                    val === "data science architecture program"
                        ? DSProgramCurriculum
                        : val === "data analytics launchpad"
                            ? DAProgramCurriculum
                            : val === "digital marketing program"
                                ? DMProgramCurriculum
                                : val === "full stack development"
                                    ? FSDProgramCurriculum
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
            {(val === "full stack development" ||
                val === "digital marketing program") && (
                    <Addons
                        data={
                            val === "full stack development"
                                ? FSDAddonSyllabus
                                : DMAddonSyllabus
                        }
                        // val === "data science architecture program"
                        //         ? DSAddonSyllabus
                        //         : val === "data analytics launchpad"
                        //             ? DAAddonSyllabus
                        //             :
                        title={
                            val === "data science architecture program"
                                ? "Addon Syllabus : Skyrocketing Skills"
                                : val === "data analytics launchpad"
                                    ? "Who should enroll?"
                                    : val === "full stack development"
                                        ? "Exclusive Full Stack Development (FSD) Add-Ons"
                                        : "Who can apply for this course?"
                        }
                    />
                )}
            {(val === "data science architecture program" ||
                val === "data analytics launchpad") && (
                    <>
                        <MasterSkills />
                        <SkillsSection
                            data={
                                val === "data science architecture program"
                                    ? DSScienceSkillSets
                                    : DAScienceSkillSets
                            }
                        />
                        <TrustByCompanies title={"Our Students Work At"} />
                        {/* <TechSoftware
                            data={
                                val === "data science architecture program"
                                    ? DSTechSoftwares.slice(0, 10)
                                    : DATechSoftwares
                            }
                            data2={
                                val === "data science architecture program" &&
                                DSTechSoftwares.slice(10, DSTechSoftwares.length - 1)
                            }
                        /> */}
                    </>
                )}
            {/* {val === "data science architecture program" && <GuidedBy />} */}

            {(val === "data science architecture program" ||
                val === "data analytics launchpad" ||
                val === "full stack development") && (
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
                        : val === "data analytics launchpad"
                            ? DACertificationDetails
                            : val === "digital marketing program"
                                ? DMCertificationDetails
                                : val === "full stack development"
                                    ? FSDCertificationDetails
                                    : UICertificationDetails
                }
            />
            {(val === "data science architecture program" ||
                val === "data analytics launchpad") && <HeroMarqueeComponent />}
            {(val === "data science architecture program" ||
                val === "data analytics launchpad") && (
                    <ProgramBreakdown
                        data={val === "data science architecture program" ? DSFaq : DAFaq}
                    />
                )}
            <WhyChooseAT />
            <EnquireTechExpert />
        </div>
    );
};

export default Page;
