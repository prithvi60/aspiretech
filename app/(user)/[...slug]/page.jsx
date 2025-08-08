import Bonuses from "@/components/layout/dynamicCities/Bonuses";
import CourseHighlights from "@/components/layout/dynamicCities/CourseHighlights";
import WhyAspireTechTrusted from "@/components/layout/dynamicCities/WhyAspireTechTrusted";
import EnquireTechExpert from "@/components/layout/EnquireTechExpert";
import AchievementsSlider from "@/components/layout/programs/AchievementsSlider";
import CareerSupport from "@/components/layout/programs/CareerSupport";
import ProgramBreakdown from "@/components/layout/programs/ProgramBreakdown";
import ProgramsHero from "@/components/layout/programs/ProgramsHero";
import SpotLight from "@/components/layout/programs/SpotLight";
import SummaryAboutCourse from "@/components/layout/programs/SummaryAboutCourse";
import { parseDataScienceRoute } from "@/helper/helperFunctions";
import {
    careerSupportCities,
    CITY_DISPLAY_NAMES,
    DSAchievements,
    DSStats,
} from "@/utils/Data";
import { notFound } from "next/navigation";

export default async function CatchAllPage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const fullPath = slug.join("/");

    // Parse the route to extract city
    const routeInfo = parseDataScienceRoute(fullPath);

    if (!routeInfo) {
        // console.log("No valid route found, returning 404");
        return notFound();
    }

    // Render the Data Science course page for the city
    return <DataScienceCoursePage city={routeInfo.city} />;
}

function DataScienceCoursePage({ city }) {
    const cityDisplayName = CITY_DISPLAY_NAMES[city] || city;

    return (
        <main>
            <ProgramsHero
                val={{
                    title: `Best <span class='text-primary'>Data Science Course</span> in ${cityDisplayName} with Job Assistance`,
                    desc: `Looking to build a future-proof career in Data Science from ${cityDisplayName}?
                    <br/>
                     Aspire Tech Academy offers the #1 Data Science Course in ${cityDisplayName} — designed for working professionals and freshers who want hands-on learning, live mentorship, and guaranteed job assistance.`,
                }}
                pdf={
                    "/files/Pay-After-Placement-IBM-Certified-Data-Science-Course-Brochure.pdf"
                }
                title={"IBM Certified Course Data Science Architecture Program"}
            />
            <AchievementsSlider data={DSAchievements} />
            <SummaryAboutCourse
                data={{
                    title: `Why Learn Data Science in ${cityDisplayName}?`,
                    desc: `${cityDisplayName} is India's tech capital — home to top companies like Infosys, Wipro, IBM, Flipkart, and many startups. With a massive demand for Data Analysts, Machine Learning Engineers, and AI Professionals, Data Science skills are your ticket to a high-paying job in ${cityDisplayName}.`,
                    month: "IN 6 Months (Flexible)",
                }}
                stats={DSStats}
            />
            <CareerSupport data={careerSupportCities} note />
            <SpotLight
                data={[
                    {
                        note: `Freshers & Final-Year Students from ${cityDisplayName}`,
                        img: "/reasons/reason-6.png",
                        alt: "image",
                    },
                    {
                        note: "Working Professionals looking to upskill",
                        img: "/reasons/reason-2.png",
                        alt: "image",
                    },
                    {
                        note: "Engineers, BCA/MCA, BSc/MSc, or MBA grads",
                        img: "/reasons/reason-7.png",
                        alt: "image",
                    },
                    {
                        note: "Anyone serious about a Data Science career",
                        img: "/reasons/reason-1.png",
                        alt: "image",
                    },
                    {
                        note: `Freshers & Final-Year Students from ${cityDisplayName}`,
                        img: "/reasons/reason-6.png",
                        alt: "image",
                    },
                    {
                        note: "Working Professionals looking to upskill",
                        img: "/reasons/reason-2.png",
                        alt: "image",
                    },
                    {
                        note: "Engineers, BCA/MCA, BSc/MSc, or MBA grads",
                        img: "/reasons/reason-7.png",
                        alt: "image",
                    },
                    {
                        note: "Anyone serious about a Data Science career",
                        img: "/reasons/reason-1.png",
                        alt: "image",
                    },
                ]}
                city
            />
            <CourseHighlights />
            <WhyAspireTechTrusted name={cityDisplayName}/>
            {city === "bangalore" && (
                <Bonuses
                    data={{
                        title: "Bonuses",
                        lists: [
                            "FREE Resume Building Session",
                            "Exclusive Access to Bangalore-Based Job Boards",
                            "Offline Meetups & Interview Support",
                        ],
                    }}
                />
            )}
            <EnquireTechExpert city />
            <ProgramBreakdown
                data={[
                    {
                        ques: "Is the course online or offline?",
                        ans: "The course is conducted 100% online with live 1:1 mentorship.",
                    },
                    {
                        ques: `Will I get placement assistance in ${cityDisplayName}?`,
                        ans: `Yes, we offer placement support for ${cityDisplayName}-based and remote roles.`,
                    },
                    {
                        ques: "What is the course fee?",
                        ans: "Speak to our counselors for the latest fee & installment plans.",
                    },
                ]}
            />
        </main>
    );
}
