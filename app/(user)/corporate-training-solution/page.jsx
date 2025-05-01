import CTSHero from "@/components/layout/CTS/CTSHero";
import TrustByCompanies from "@/components/layout/TrustByCompanies";
import React from "react";
import { corporateTalentData, corporateTrainingData, corporateTrainingList } from "@/utils/Data";
import GradsOfATA from "@/components/layout/CTS/GradsOfATA";
import ProgramsHero from "@/components/layout/programs/ProgramsHero";
import RolesBasedTraining from "@/components/layout/CTS/RolesBasedTraining";
import CTSMarquee from "@/components/layout/CTS/CTSMarquee";

const Page = () => {
    return (
        <div>
            <CTSHero
                contactTitle={"corporate training solution"}
                mainTitle={"Where Talent Meets Targeted Development"}
            />
            <GradsOfATA corporateData={corporateTrainingList} />
            <RolesBasedTraining />
            <CTSMarquee />
            <ProgramsHero val={corporateTrainingData} btn={"about"} />
        </div>
    );
};

export default Page;
