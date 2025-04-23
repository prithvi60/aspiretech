import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aspire Tech Academy",
  description:
    "Aspire Tech Academy - Transform your career with industry-relevant tech courses. Learn data science, AI, web development & more through hands-on projects, expert mentorship, and pay-after-placement programs. Start your journey today!",
  canonical: "https://aspiretech.vercel.app/",
  metadataBase: new URL("https://aspiretech.vercel.app/"),
  openGraph: {
    title: "Aspire Tech Academy",
    description:
      "Aspire Tech Academy - Transform your career with industry-relevant tech courses. Learn data science, AI, web development & more through hands-on projects, expert mentorship, and pay-after-placement programs. Start your journey today!",
    url: "https://aspiretech.vercel.app",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} ${plusJakartaSans.variable} ${inter.variable} antialiased bg-[url("/bg.svg")]`}
      >
        {children}
      </body>
    </html>
  );
}
