import ExitModalCard from "@/components/features/ExitModalCard";
import AspireTechSets from "@/components/layout/AspireTechSets";
import EnquireTechExpert from "@/components/layout/EnquireTechExpert";
import Hero from "@/components/layout/Hero";
import IndustrialCoursesCard from "@/components/layout/IndustrialCoursesCard";
import Stories from "@/components/layout/Stories";
import TrustByCompanies from "@/components/layout/TrustByCompanies";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aspire Tech Academy",
    image:
      "https://ik.imagekit.io/webibee/aspiire%20logo.png?updatedAt=1744800414967",
    description:
      "Aspire Tech Academy - Transform your career with industry-relevant tech courses. Learn data science, AI, web development & more through hands-on projects, expert mentorship, and pay-after-placement programs. Start your journey today!",
    email: "connect@aspiretechacademy.com",
    url: "https://aspiretech.vercel.app",
  };
  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aspire Tech Academy",
    image:
      "https://ik.imagekit.io/webibee/aspiire%20logo.png?updatedAt=1744800414967",
    url: "https://aspiretech.vercel.app",
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
      <ExitModalCard />
      <Hero />
      <IndustrialCoursesCard />
      <EnquireTechExpert />
      <Stories />
      <TrustByCompanies />
      <AspireTechSets />
    </main>
  );
}
