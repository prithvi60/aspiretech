import FutureChecks from "@/components/layout/impact/FutureChecks";
import ImpactHero from "@/components/layout/impact/ImpactHero";
import IndustryRoleTrends from "@/components/layout/impact/IndustryRoleTrends";
import MapSection from "@/components/layout/impact/MapSection";
import PlacementSection from "@/components/layout/impact/PlacementSection";
import Transformation from "@/components/layout/impact/Transformation";
import React from "react";

const Page = () => {
    return (
        <div>
            <ImpactHero />
            <PlacementSection
                title={"Placement Landscape by Sector"}
                desc={
                    "Aspire Tech Academy is a certified e-learning platform, ISO/IAF accredited, dedicated to empowering your career through skill enhancement and upskilling. Our certifications cover a range of domains like the IBM Certified Data Science Architect Program, Fast Track Data Analyst Course,  UI/UX, Digital Marketing, and Cybersecurity."
                }
                img={"/placement-chart.png"}
                alt={"Placement Pie Chart"}
            />
            <MapSection />
            <PlacementSection
                title={"Setting new Reach and achievements"}
                desc={
                    "Aspire Tech Academy graduates secure roles with salaries averaging 60% higher than the industry benchmark. With packages reaching up to ₹40 LPA, our alumni rank among the best-placed professionals in the country."
                }
                img={"/achievement-chart.svg"}
                alt={"achievement Bar Chart"}
            />
            <Transformation />
            <FutureChecks />
            <IndustryRoleTrends />
        </div>
    );
};

export default Page;
