import AspireTechSets from "@/components/layout/AspireTechSets";
import EnquireTechExpert from "@/components/layout/EnquireTechExpert";
import Hero from "@/components/layout/Hero";
import IndustrialCoursesCard from "@/components/layout/IndustrialCoursesCard";
import Stories from "@/components/layout/Stories";
import TrustByCompanies from "@/components/layout/TrustByCompanies";

export default function Home() {
  return (
    <div>
      <Hero />
      <IndustrialCoursesCard />
      <EnquireTechExpert />
      <Stories />
      <TrustByCompanies />
      <AspireTechSets />
    </div>
  );
}
