import HeroMarqueeComponent from "@/components/HeroMarqueeComponent";
import EnquireTechExpert from "@/components/layout/EnquireTechExpert";
import Hero from "@/components/layout/Hero";
import IndustrialCoursesCard from "@/components/layout/IndustrialCoursesCard";

import Stories from "@/components/layout/Stories";
import TrustByCompanies from "@/components/layout/TrustByCompanies";
import WhatMakesUsDiff from "@/components/layout/WhatMakesUsDiff";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aspire Tech Academy",
    image: "https://ik.imagekit.io/a7ag28udt/aspire-logo",
    description:
      "Aspire Tech Academy - Transform your career with industry-relevant tech courses. Learn data science, AI, web development & more through hands-on projects, expert mentorship, and pay-after-placement programs. Start your journey today!",
    email: "connect@aspiretechacademy.com",
    url: "https://www.aspiretechacademy.com",
  };
  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aspire Tech Academy",
    image: "https://ik.imagekit.io/a7ag28udt/aspire-logo",
    url: "https://www.aspiretechacademy.com",
    telephone: "+91-9036879156",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:30",
      closes: "19:00",
    },
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }}
      />
      <Hero />
      <IndustrialCoursesCard />
      <EnquireTechExpert home />
      <Stories />
      <TrustByCompanies title={"Trusted by Leading Tech Companies"} />
      <WhatMakesUsDiff />
    </main>
  );
}
