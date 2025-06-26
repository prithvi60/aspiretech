import { metaData } from "@/utils/Data";

export async function generateMetadata({ params }) {
    const { course } = await params;
    const val = course.replace(/-/g, (match, offset) =>
        offset === 2 ? "/" : " "
    );

    // Fetch the product based on the slug
    const data = metaData.find((item) => item.title === val);

    if (data) {
        return {
            title: data.metaTitle,
            description: data.metaDesc,
            openGraph: {
                title: data.metaTitle,
                description: data.metaDesc,
            },
        };
    }

    // Default metadata if data not found
    return {
        title: "Best Data Science Architecture Program in India | IBM-Certified",
        description:
            "Master AI, ChatGPT, Python, and Cloud in 8 months with Aspire Tech Academy’s IBM-Certified Best Data Science Architecture Program In India. Get hands‑on training, 200+ hiring partners, and a 100% money  back guarantee.",
        openGraph: {
            title: "Best Data Science Architecture Program in India | IBM-Certified",
            description:
                "Master AI, ChatGPT, Python, and Cloud in 8 months with Aspire Tech Academy’s IBM-Certified Best Data Science Architecture Program In India. Get hands‑on training, 200+ hiring partners, and a 100% money  back guarantee.",
        },
    };
}

export default function RootLayout({ children }) {
    return <main>{children}</main>;
}
