import { parseDataScienceRoute } from "@/helper/helperFunctions";
import { CITY_DISPLAY_NAMES } from "@/utils/Data";

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const fullPath = slug.join("/");
    const routeInfo = parseDataScienceRoute(fullPath);

    if (!routeInfo) {
        return {
            title: "Page Not Found",
            description: "The requested page could not be found.",
        };
    }

    const cityDisplayName = CITY_DISPLAY_NAMES[routeInfo.city] || routeInfo.city;

    return {
        title: `Best Data Science Course in ${cityDisplayName} with Job Assistance`,
        description: `Enroll in Aspire Tech Academy's Data Science Course in ${cityDisplayName} – 100% Placement Support, Live Projects, and Expert Mentors. Learn Online!`,
        alternates: {
            canonical: `https://www.aspiretechacademy.com/${fullPath}`,
        },
        metadataBase: new URL("https://www.aspiretechacademy.com"),
        keywords: `Data Science Course in ${cityDisplayName}, Online Data Science Course in ${cityDisplayName}, Data Science Course with Job Placement in ${cityDisplayName}, Best Data Science Courses in ${cityDisplayName}, Data Science Certification Course in ${cityDisplayName}, Learn Data Science in ${cityDisplayName}`,
        openGraph: {
            title: `Best Data Science Course in ${cityDisplayName} with Job Assistance`,
            description: `Enroll in Aspire Tech Academy's Data Science Course in ${cityDisplayName} – 100% Placement Support, Live Projects, and Expert Mentors. Learn Online!`,
            type: "website",
            url: `https://www.aspiretechacademy.com/${fullPath}`,
            images: [
                {
                    url: "https://ik.imagekit.io/webibee/aspiire%20logo.png?updatedAt=1744800414967",
                    width: 1200,
                    height: 630,
                    alt: "Aspire Tech Academy logo",
                },
            ],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

// export async function generateMetadata({ params }) {
//     const { course } = await params;
//     const val = course.replace(/-/g, (match, offset) =>
//         offset === 2 ? "/" : " "
//     );

//     // Fetch the product based on the slug
//     const data = metaData.find((item) => item.title === val);

//     if (data) {
//         return {
//             title: data.metaTitle,
//             description: data.metaDesc,
//             openGraph: {
//                 title: data.metaTitle,
//                 description: data.metaDesc,
//             },
//         };
//     }

//     // Default metadata if data not found
//     return {
//         title: "Best Data Science Architecture Program in India | IBM-Certified",
//         description:
//             "Master AI, ChatGPT, Python, and Cloud in 8 months with Aspire Tech Academy’s IBM-Certified Best Data Science Architecture Program In India. Get hands‑on training, 200+ hiring partners, and a 100% money  back guarantee.",
//         openGraph: {
//             title: "Best Data Science Architecture Program in India | IBM-Certified",
//             description:
//                 "Master AI, ChatGPT, Python, and Cloud in 8 months with Aspire Tech Academy’s IBM-Certified Best Data Science Architecture Program In India. Get hands‑on training, 200+ hiring partners, and a 100% money  back guarantee.",
//         },
//     };
// }

export default function RootLayout({ children }) {
    return <main>{children}</main>;
}
