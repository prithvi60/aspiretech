import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa6";

export const navLinks = [
    // { menu: "About us", link: "/about" },
    // {
    //     menu: "Programs",
    //     subMenus: [
    //         { menu: "Programs 1", link: "/programs/programs-1" },
    //         { menu: "Programs 2", link: "/programs/programs-2" },
    //     ],
    // },
    // { menu: "News", link: "/news" },
    // { menu: "Impact", link: "/impact" },
    // { menu: "Corporate training", link: "/corporate-training" },
    // { menu: "Job board", link: "/job-board" },
    { menu: "Contact us", link: "/contact" },
];

export const footerLinks1 = [
    { menu: "Data Science Architecture Program", href: "/product-course/data-science-architecture-program" },
    { menu: "Data Analytics Launchpad", href: "/product-course/data-analytics-launchpad" },
    { menu: "UI/UX Design Course", href: "/product-course/UI-UX-design-course" },
    { menu: "Digital Marketing Program ", href: "/product-course/digital-marketing-program " },
];

export const footerLinks2 = [
    { menu: "Webinar", href: "/webinar" },
    { menu: "Blog", href: "/blog" },
    { menu: "Partner with us", href: "/partner-with-us" },
    { menu: "Career", href: "/career" },
    { menu: "FAQ", href: "/faq" },
];

export const footerLinks3 = [
    { menu: "About us", href: "/about" },
    { menu: "Terms", href: "/terms" },
    { menu: "Privacy", href: "/privacy" },
    { menu: "Legal", href: "/legal" },
    { menu: "Press", href: "/press" },
    { menu: "Contact us", href: "/contact" },
];

export const socialLinks = [
    {
        icon: (
            <FaInstagram className="text-xl md:text-3xl text-primary hover:text-primary/70 hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaLinkedinIn className="text-xl md:text-3xl text-primary hover:text-primary/70 hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaFacebook className="text-xl md:text-3xl text-primary hover:text-primary/70 hover:animate-pulse" />
        ),
        href: "#",
    },
];
