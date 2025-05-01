import CTSHero from "@/components/layout/CTS/CTSHero";
import TrustByCompanies from "@/components/layout/TrustByCompanies";
import React from "react";
import { corporateData, corporateTalentData } from "@/utils/Data";
import GradsOfATA from "@/components/layout/CTS/GradsOfATA";
import ProgramsHero from "@/components/layout/programs/ProgramsHero";

const Page = () => {
    return (
        <div>
            <CTSHero
                contactTitle={"corporate talent solution"}
                mainTitle={"Hire Talent That Delivers Results"}
            />
            <GradsOfATA title corporateData={corporateData} />
            <TrustByCompanies />
            <ProgramsHero
                val={corporateTalentData}
                btn={"about"}
            />
        </div>
    );
};

export default Page;
