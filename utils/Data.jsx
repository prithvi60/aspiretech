import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLinkedinIn,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";

function getNextSunday() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + daysUntilSunday);

    // Format as "d MMMM"
    const day = nextSunday.getDate();
    const month = nextSunday.toLocaleDateString("en-US", { month: "long" });

    // Return as "d MMMM"
    return `${day} ${month}`;
}

export const navLinks = [
    { menu: "About us", link: "/about" },
    {
        menu: "Programs",
        subMenus: [
            {
                menu: "data science architecture program",
                link: "/programs/data-science-architecture-program",
            },
            {
                menu: "data analytics launchpad",
                link: "/programs/data-analytics-launchpad",
            },
            { menu: "UI/UX design course", link: "/programs/UI-UX-design-course" },
            {
                menu: "digital marketing program",
                link: "/programs/digital-marketing-program",
            },
            {
                menu: "full stack development",
                link: "/programs/full-stack-development",
            },
        ],
    },
    { menu: "Blog", link: "/blog" },
    { menu: "Impact", link: "/impact" },
    {
        menu: "Enterprise",
        subMenus: [
            {
                menu: "training solution",
                link: "/enterprise/training-solution",
            },
            {
                menu: "talent solution",
                link: "/enterprise/talent-solution",
            },
        ],
    },
    { menu: "Job board", link: "/job-board" },
    { menu: "Contact us", link: "/contact" },
];

export const footerLinks1 = [
    {
        menu: "Data Science Architecture Program",
        href: "/programs/data-science-architecture-program",
    },
    {
        menu: "Data Analytics Launchpad",
        href: "/programs/data-analytics-launchpad",
    },
    { menu: "UI/UX Design Course", href: "/programs/UI-UX-design-course" },
    {
        menu: "Digital Marketing Program ",
        href: "/programs/digital-marketing-program",
    },
    {
        menu: "Full Stack Development",
        href: "/programs/full-stack-development",
    },
];

export const footerLinks2 = [
    { menu: "Webinar", href: "/webinar" },
    { menu: "Blog", href: "/blog" },
    { menu: "Partner with us", href: "/contact" },
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

export const heroMarqueeData = [
    {
        img: "/stock-1.jpg",
        alt: "stock image",
        name: "Advaith R P",
    },
    {
        img: "/stock-2.jpg",
        alt: "stock image",
        name: "Thejasvi T V",
    },
    {
        img: "/stock-1.jpg",
        alt: "stock image",
        name: "Udayan Goswami",
    },
    {
        img: "/stock-1.jpg",
        alt: "stock image",
        name: "Chandra Shekar Gogula",
    },
    {
        img: "/stock-2.jpg",
        alt: "stock image",
        name: "Thejasvi T V",
    },
];

export const socialLinks = [
    {
        icon: (
            <FaYoutube className="text-3xl md:text-4xl text-background hover:text-background/70 hover:animate-pulse rounded-full border border-primary p-2 bg-primary" />
        ),
        href: "https://www.youtube.com/@AspireTechAcademy",
    },
    {
        icon: (
            <FaLinkedin className="text-3xl md:text-4xl text-background hover:text-background/70 hover:animate-pulse rounded-full border border-primary p-2 bg-primary" />
        ),
        href: "https://www.linkedin.com/company/aspire-tech-academy",
    },
    {
        icon: (
            <FaFacebook className="text-3xl md:text-4xl text-background hover:text-background/70 hover:animate-pulse rounded-full border border-primary p-2 bg-primary" />
        ),
        href: "https://www.facebook.com/aspiretehacademy",
    },
    {
        icon: (
            <FaInstagram className="text-3xl md:text-4xl text-background hover:text-background/70 hover:animate-pulse rounded-full border border-primary p-2 bg-primary" />
        ),
        href: "https://www.instagram.com/theaspiretechacademy",
    },
];

export const IndustrialCoursesCardData = [
    {
        img: "/Data-Science.png",
        alt: "Data Science course",
        enrol: "6 Months | Online",
        title: "IBM certified Data Science Architecture Program",
        desc: "Achieve data science excellence with our IBM-backed program! Enjoy live sessions, earn while you learn, and get 100% career support with guaranteed interviews.",
        href: "/programs/data-science-architecture-program",
        refer: "DS",
    },
    {
        img: "/Data-Analytics.png",
        alt: "Data Analytics course",
        enrol: "3 Months | Online",
        title: "Fast Track Data Analytics Launchpad Course",
        desc: "Kick-start your Data Analytics career with IBM! Get live sessions, career support, and guaranteed internships.",
        href: "/programs/data-analytics-launchpad",
        refer: "DA",
    },
    {
        img: "/Digital-Marketing.png",
        alt: "Digital Marketing course",
        enrol: "3 Months | Online",
        title: "Digital Strategic Marketing Course",
        desc: "Trust us—go beyond traditional digital marketing and learn more! Enjoy live sessions, pay after placement, and secure a guaranteed internship.",
        href: "/programs/digital-marketing-program",
        refer: "DM",
    },
    {
        img: "/UI-UX.png",
        alt: "UI-UX course",
        enrol: "5 Months | Online",
        title: "User-Centricity Unleashed: UI/UX Mastery Course",
        desc: "Now is the best time to start your design career with rising demand for Design Thinking! Enjoy live sessions, pay after placement, and get a guaranteed internship.",
        href: "/programs/UI-UX-design-course",
        refer: "UI",
    },
    {
        img: "/full-stack.png",
        alt: "full-stack course",
        enrol: "6 Months | Online",
        title: "Building Digital Worlds Full Stack Developer",
        desc: "To initiate your journey, the first step is to register for our Full Stack Development Program—an inclusive opportunity open to all individuals aspiring to become industry-ready.",
        href: "/programs/full-stack-development",
        refer: "FS",
    },
    {
        img: "/devops.png",
        alt: "Devops course",
        enrol: "Coming Soon...",
        title: "Mastering DevOps: From Code to Cloud",
        desc: "Launch your DevOps career with our intensive program covering CI/CD pipelines, cloud infrastructure, containerization, and automation tools. Gain hands-on experience to deploy and manage scalable systems efficiently.",
        href: "/programs/devops",
        refer: "DO",
    },
];

export const StoriesByCustomer = [
    {
        img: "/Shashi.jpg",
        alt: "customer image",
        customerName: "Shashi Kiran",
        about:
            "The instructors here are highly skilled and patient; I could sense it in how they conducted the sessions. It was not only about the lectures they gave, but they also provided great career guidance which is not that easily found. Aspire Tech Academy helped me bag a job that pays well and also prepared me in a way that I enjoy what I do for a living.",
        offers: "Offer 14LPA",
        position: "Data Scientist at Tata Consultancy Services",
    },
    {
        img: "/Jay.png",
        alt: "customer image",
        customerName: "Jay Prakash",
        about:
            "The mentorship and guidance provided by Aspire Tech Academy is something that, I feel, stands out from the rest on a personal level. I don't think I could have found this type of direction and guidance elsewhere. The instructions that were provided or the feedback I received were so elaborate that it motivated me to face all the interviews and placement processes with a new sense of dedication and confidence.",
        offers: "Offer 30% Hike",
        position: "Assistant Manager at Flipkart",
    },
    {
        img: "/Shameer.jpg",
        alt: "customer image",
        customerName: "Shameer Khan",
        about:
            "I never thought career guidance could be so eased out until I found Aspire Tech Academy. There have been instances I clearly remember that have helped me ace the interviews and secure a great job. They not only provided a thorough knowledge of data science concepts but also helped with their real-life applications.",
        offers: "Offer 9 LPA",
        position: "Professional 1 Product Delivery at DXC Technology",
    },
    {
        img: "/Sindhu.png",
        alt: "customer image",
        customerName: "Sindhu",
        about:
            "Thanks to Aspire Tech Academy for giving me a great kickstart for my career. Joined the course in my final year MBA and now I am placed with Flipkart",
        offers: "Offer 5.5 LPA",
        position: "Digital Marketer at Flipkart",
    },
    {
        img: "/Suba.jpg",
        alt: "customer image",
        customerName: "Suba",
        about:
            "This is a huge leap in my career. It was a very difficult decision for me to take this course working in BPO for 25k PM but now I realise this is the best decision I have ever taken.",
        offers: "Offer 6 LPA",
        position: "Content Marketer at Big Basket",
    },
    {
        img: "/Priya.jpg",
        alt: "customer image",
        customerName: "Priya",
        about:
            "After completing my graduation I wanted to move into a domain that has no coding so I chose Digital Marketing and I was placed in Lenskart with a 8 LPA package.",
        offers: "Offer 8 LPA",
        position: "Brand Manager at Lenskart",
    },
];

export const expertProgramStatus = [
    {
        count: "2000",
        suffix: "+",
        statusName: "Students trained",
        img: "/expertise/trained.svg"
    },
    {
        count: "7",
        suffix: " LPA",
        statusName: "Average Salary",
        img: "/expertise/package.svg"
    },
    {
        count: "100",
        suffix: "%",
        statusName: "Live Classes",
        img: "/expertise/classes.svg"
    },
    {
        count: "4",
        suffix: "/5",
        statusName: "Land dream job",
        img: "/expertise/job.svg"
    },
];

export const trustedCompany = [
    {
        logo: "/Company/accenture.webp",
        alt: "accenture logo",
        company: "accenture",
    },
    {
        logo: "/Company/adobe.webp",
        alt: "adobe logo",
        company: "adobe",
    },
    {
        logo: "/Company/amazon.webp",
        alt: "amazon logo",
        company: "amazon",
    },
    {
        logo: "/Company/American_Express.png",
        alt: "American Express logo",
        company: "american express",
    },
    {
        logo: "/Company/aon-logo.webp",
        alt: "aon logo",
        company: "aon",
    },
    {
        logo: "/Company/axis-bank.svg",
        alt: " logo",
        company: "axis bank",
    },
    {
        logo: "/Company/capegmini.webp",
        alt: "capegmini logo",
        company: "capegmini",
    },
    {
        logo: "/Company/dalberg-logo.webp",
        alt: "dalberg logo",
        company: "dalberg",
    },
    {
        logo: "/Company/dell.webp",
        alt: "dell logo",
        company: "dell",
    },
    {
        logo: "/Company/ey.webp",
        alt: "ey logo",
        company: "ey",
    },
    {
        logo: "/Company/flipkart.webp",
        alt: "flipkart logo",
        company: "flipkart",
    },
    {
        logo: "/Company/glenmark.webp",
        alt: "glenmark logo",
        company: "glenmark",
    },
    {
        logo: "/Company/Goldman_Sachs.png",
        alt: "Goldman Sachs logo",
        company: "goldman sachs",
    },
    {
        logo: "/Company/google.webp",
        alt: "google logo",
        company: "google",
    },
    {
        logo: "/Company/hcl.webp",
        alt: "hcl logo",
        company: "HCL",
    },
    {
        logo: "/Company/ibm.webp",
        alt: "IBM logo",
        company: "IBM",
    },
    {
        logo: "/Company/infosys.webp",
        alt: "infosys logo",
        company: "infosys",
    },
    {
        logo: "/Company/kpmg.webp",
        alt: "kpmg logo",
        company: "KPMG",
    },
    {
        logo: "/Company/nielsen.webp",
        alt: "nielsen logo",
        company: "nielsen",
    },
    {
        logo: "/Company/nykaa.webp",
        alt: "nykaa logo",
        company: "nykaa",
    },
    {
        logo: "/Company/ola.webp",
        alt: "ola logo",
        company: "ola",
    },
    {
        logo: "/Company/oppo.webp",
        alt: "oppo logo",
        company: "oppo",
    },
    {
        logo: "/Company/paypal.webp",
        alt: "paypal logo",
        company: "paypal",
    },
    {
        logo: "/Company/samsung.webp",
        alt: "samsung logo",
        company: "samsung",
    },
    {
        logo: "/Company/tata-steel.webp",
        alt: "tata steel logo",
        company: "tata steel",
    },
    {
        logo: "/Company/tcs.webp",
        alt: "tcs logo",
        company: "tcs",
    },
    {
        logo: "/Company/walmart.webp",
        alt: "walmart logo",
        company: "walmart",
    },
    {
        logo: "/Company/wipro.webp",
        alt: "wipro logo",
        company: "wipro",
    },
    {
        logo: "/Company/Zoho.webp",
        alt: "Zoho logo",
        company: "Zoho",
    },
];

export const techCompanyData2 = [
    {
        logo: "/aspire-logo-2.svg",
        alt: "logo",
        company: "grow",
    },
    {
        logo: "/aspire-logo-2.svg",
        alt: "logo",
        company: "grow",
    },
    {
        logo: "/aspire-logo-2.svg",
        alt: "logo",
        company: "grow",
    },
    {
        logo: "/aspire-logo-2.svg",
        alt: "logo",
        company: "grow",
    },
    {
        logo: "/aspire-logo-2.svg",
        alt: "logo",
        company: "grow",
    },
    {
        logo: "/aspire-logo-2.svg",
        alt: "logo",
        company: "grow",
    },
];

export const aspireSets = [
    {
        title: "AI-Enabled Job Board & Guaranteed Interviews",
        img: "/WMUD/Ai.svg",
    },
    { title: "100% Money-Back Guarantee", img: "/WMUD/Money.svg" },
    { title: "₹7 LPA+ Average Package", img: "/WMUD/package.svg" },
    {
        title: "IBM Certified Programs with Mentorship",
        img: "/WMUD/Certificate.svg",
    },
    { title: "Personalized Career Coaching", img: "/WMUD/coaching.svg" },
];

// About Us

export const aboutStatus = [
    {
        count: "65",
        suffix: "%",
        statusName: "Average Salary",
        img: "/expertise/package.svg"
    },
    {
        count: "7",
        suffix: " LPA",
        statusName: "Average Salary",
        img: "/expertise/package.svg"
    },
    {
        count: "100",
        suffix: "%",
        statusName: "Live Classes",
        img: "/expertise/classes.svg"
    },
    {
        count: "",
        suffix: "Earn",
        statusName: "While learning",
        img: "/expertise/job.svg"
    },
];

// job board

export const jobBoard = [
    {
        img: "/Siemens-logo.png",
        alt: "Siemens logo",
        title: "Siemens Recruitment Drive",
        desc: "Siemens is hiring candidates for the role of Process Expert – O2C (Data Analyst) for the Bangalore, Karnataka, India locations. The complete details about Siemens Recruitment Drive are as follows.",
        JL: "Bangalore, Karnataka, India",
        JP: "Process Expert - O2C (Data Analyst)",
        SP: "As per Company Standards",
        FPTime: "Full Time",
        RID: "419540",
        EL: "Graduation",
    },
    {
        img: "/SandP_Global.jpg",
        alt: "S&P Global logo",
        title: "S&P Global Recruitment Drive",
        desc: "S&P Global is hiring candidates for the role of Application Associate, Proprietary Data and Office Tools for the Ahmedabad / Hyderabad, India locations. The complete details about S&P Global Recruitment Drive are as follows.",
        JL: "Ahmedabad / Hyderabad, India",
        JP: "Application Associate, Proprietary Data and Office Tools",
        SP: "As per Company Standards",
        FPTime: "Full Time",
        RID: "306804",
        EL: "Graduation",
    },
    {
        img: "/yash-logo.svg",
        alt: "YASH Technologies logo",
        title: "YASH Technologies Recruitment",
        desc: "YASH Technologies is hiring candidates for the role of Trainee Consultant - SAP PI for the Hyderabad, TG, India locations. The complete details about YASH Technologies Recruitment are as follows.",
        JL: " Hyderabad, TG, India",
        JP: "Trainee Consultant - SAP PI",
        SP: "As per Company Standards",
        FPTime: "Full Time",
        RID: "58307",
        EL: "Graduation",
    },
    {
        img: "/oracle.png",
        alt: "Oracle logo",
        title: "Oracle Recruitment Drive",
        desc: "Oracle is hiring candidates for the role of Associate Software Engineer for the Bangalore, Karnataka, India locations. The complete details about Oracle Recruitment Drive are as follows.",
        JL: "Bangalore, Karnataka, India",
        JP: "Associate Software Engineer",
        SP: "As per Company Standards",
        FPTime: "Full Time",
        RID: "255039",
        EL: "Graduation",
    },
    {
        img: "/swiggy-logo.jpg",
        alt: "Swiggy logo",
        title: "Swiggy Work From Home Opportunity",
        desc: "Swiggy is hiring candidates for the role of Associate Software Development Engineer – Android for the Bangalore, Karnataka, India locations. The complete details about Swiggy Work From Home Opportunity are as follows.",
        JL: "Bangalore, Karnataka, India",
        JP: "Associate Software Development Engineer - Android",
        SP: "As per Company Standards",
        FPTime: "Full Time",
        RID: "13954",
        EL: "Graduation",
    },
];
export const aboutHero = {
    title: "Empowering Minds & Transforming Futures",
    desc: "Aspire Tech Academy is a certified e-learning platform, ISO/IAF accredited, dedicated to empowering your career through skill enhancement and upskilling. Our certifications cover a range of domains like the IBM Certified Data Science Architect Program, Fast Track Data Analyst Course,  UI/UX, Digital Marketing, and Cybersecurity.",
};

// terms

export const terms = [
    "Welcome to our website. We kindly request that you carefully review the following terms and conditions, as they establish a legally binding agreement ('Terms') between you and our company concerning your utilization of the website and/or the services we provide. These services encompass but are not confined to, website access, video content, educational materials, presentations, case studies, quizzes, assignments, data sets, and the availability of various content types through the website or any internet-connected device ('Services'). It's important to note that you affirm your status as an individual rather than a corporation. By accessing or using the website or services, you indicate that you have read, comprehended, and consented to abide by these Terms.",
    "Moreover, you assert that you possess the legal authority, as mandated by applicable laws (including age requirements), to accept these Terms on your behalf and potentially on behalf of others you represent about your usage of the website or services. If you do not concur with these Terms, you are not permitted to use the website or services. Our company reserves the discretion to modify, amend, append, or remove sections of these Terms at its discretion. Such changes will be made public by posting the updated Terms. We encourage you to periodically review these Terms for any modifications. Your continued usage of the site or services post-change implementation signifies your binding acceptance of the revised Terms.",
    "Furthermore, when employing specific services, you may be subject to additional guidelines, regulations, product prerequisites, or supplementary terms that are relevant to those services. These guidelines, regulations, product prerequisites, or supplementary terms are hereby incorporated by reference into these Terms.",
    "Aspire Tech Academy Educational Pvt. Ltd. is dedicated to enhancing the lives of students and nurturing their intellectual growth through the acquisition of new skills. We believe that our marketplace model is the most effective way to deliver valuable educational content to our users. To maintain a safe and secure platform and services for you, our students, and our instructor community, we have established certain rules and guidelines. These terms and conditions apply to all your interactions with the Aspire Tech Academy Educational OPC Pvt. Ltd. website, WWW.ASPIRETECHACADEMY.COM, and mobile apps. The information, services, and materials available on these platforms are provided and operated by 'Aspire Tech Academy', which is referred to as 'we', 'us', or 'Aspire Tech Academy'.",
    "'Aspire Tech Academy' offers specialized higher education and industry-relevant postgraduate diploma and certification courses through various platforms, including classroom sessions, online learning, and live sessions.",
    "We kindly request you to review our Terms of Use, Privacy Policy, and other policies available on the platform (collectively referred to as the 'Terms') that govern the use of our platform and programs. Each program may have its own set of terms and conditions regarding refunds, deferrals, payments, and other aspects that govern those specific programs. For our corporate clients, separate written agreements supersede these Terms in case of any conflicts.",
    "These Terms also apply to all 'Aspire Tech Academy' hosted mobile apps, WhatsApp groups, Facebook groups, Instagram pages, Facebook pages, email/SMS/phone communications, and other social media forums associated with 'Aspire Tech Academy.' Updated versions of the Platform Terms may be made available periodically for your reference.",
    "Please be aware that certain parts of the 'Aspire Tech Academy' platform may be provided by third-party service providers, and by using these services, you agree to adhere to their terms and conditions. 'Aspire Tech Academy' is not responsible for any disruptions in services caused by these third-party service providers. Your use of the programs signifies your unconditional agreement to abide by these Terms.",
    "It is your responsibility to safeguard your password and keep it secure at all times. You are solely accountable for all activities conducted under your Account, and you must promptly notify us of any security breaches or unauthorised use of your Account. You are prohibited from using another person's Account without permission, and misrepresentation of your identity is not permitted. You acknowledge that you will be responsible for any losses, damages, or expenses resulting from unauthorised use of your Account, and you may also be liable for losses incurred by us or other parties due to such unauthorised use.",
    "We reserve the right, at our discretion, to modify or amend portions of these Terms of Service. If changes are made, we will post them on this page and specify the date of the last revision at the top of the page. We may also notify you through the Services' user interface, email notifications, or other reasonable means, as applicable law requires. Changes will take effect no earlier than fourteen (14) days after they are posted unless they pertain to new functions of the Services or are made for legal reasons, in which case they will be effective immediately. Your continued use of the Service after the effective date of any changes constitutes your acceptance of the updated Terms of Service. Additionally, when using certain Services, you may be subject to additional terms applicable to those Services, which will be posted on the Service from time to time.",
    "Please note that 'Aspire Tech Academy' does not guarantee its operation in all geographic areas or its legal authorization to operate. Furthermore, the suitability and availability of 'Aspire Tech Academy', as well as the information, services, and products offered through the platform, may vary in different locations. Accessing 'Aspire Tech Academy' from regions where it is illegal or restricted is expressly prohibited. If you choose to access 'Aspire Tech Academy', you do so voluntarily and at your own risk, and you are solely responsible for complying with all applicable laws and regulations.",
];

export const powerProgress = [
    "IBM Certified Data Science Architecture Program",
    "IBM Certified Fast Track Data Analyst Launch Pad Course",
    "Digital Marketing",
    "User Interface & User Experience",
    "Cyber Security",
    "Sales Force",
    "Devops",
    "Full Stack Python Developer",
    "Full Stack Java Developer",
    "Full Stack Php Developer",
];

// programs

export const DSHero = {
    title:
        "IBM-Certified <span class='text-primary'>Data Science & Architecture Program</span> with Money Back Guarantee!",
    desc: "Master Python, ML, Generative AI, and Cloud Deployment with IBM Certification. Join 200+ hiring partners and unlock 7+ LPA careers with 100% job support.",
};
export const DAHero = {
    title:
        "IBM Certified Fast Track <span class='text-primary'>Data Analytics</span> Launchpad",
    desc: "Enroll in our Data Analyst course, developed in collaboration with IBM, to become a proficient expert in Data Analytics. This comprehensive program will equip you with the skills to utilise Upon completion effectively, you will receive a valuable Data Analyst certification, validating your expertise in this dynamic field. This internship-guaranteed course is specifically designed for freshers and recent grads and people who are looking for a career shift into this domain.",
};
export const DMHero = {
    title:
        "Pay After Placement <span class='text-primary'>Digital Marketing</span> Program",
    desc: "As of January 2023, 5.16 billion people — 64.4% of the global population — were internet users. This number continues to grow, highlighting how the digital landscape shapes business success, scalability, and sustainability. Digital marketing leverages online platforms and technologies to promote products and services effectively.",
};
export const UIHero = {
    title:
        "Turning Dreams into Reality <span class='text-primary'>UI/UX</span> Design Course",
    desc: "In today's professional landscape, cultivating design thinking and creative skills is more critical than ever, regardless of your current workplace or job title. That's why we've paved the path for your transition into the world of design.",
};
export const FullStackHero = {
    title:
        "Building Digital Worlds - <span class='text-primary'>Full Stack</span> Developer",
    desc: " To initiate your journey, the first step is to register for our Full Stack Development Program—an inclusive opportunity open to all individuals aspiring to become industry-ready. This program offers hands-on training through specialized projects, providing participants with a comprehensive learning experience.",
};

export const DSAchievements = [
    "15 seats Batch size ",
    "200+ Hiring Partners",
    "60% Average Hike",
    "200+ Career Transition",
    "8 months",
    "Average 7 LPA",
    "24/7 LMS access",
    "1:1 Mentoring",
    "IBM Certification",
    "ISO & IAF Certified",
];
export const DAAchievements = [
    "10 seats Batch size",
    "200+ Hiring Partners",
    "40% Average Hike",
    "3 months",
    "Average 6 LPA",
    "ISO & IAF Certified Company",
    "1:1 Mentoring",
    "Paid internship for 2 months",
    "24/7 LMS access",
];
export const DMAchievements = [
    "25 seats Batch size",
    "ISO & IAF certification",
    "200+ Hiring Partners",
    "40% Average Hike",
    "ISO & IAF Certified Company",
    "1:1 Mentoring",
    "24/7 LMS access",
];
export const UIAchievements = [
    "25 seats Batch size",
    "ISO & IAF certification",
    "200+ Hiring Partners",
    "40% Average Hike",
    "1-on-1 Mentorship",
    "ISO & IAF certification",
    "Lifetime Support",
];

export const DSSummaryDetails = {
    title: "Master the Most In-Demand Data Science Skills",
    desc: "",
    lists: [
        "IBM-Certified Data Science & Architecture Program",
        "Build real-world projects with Python, ML, GenAI, Cloud & more",
        "Learn directly from industry experts & top mentors",
        "Money Back Guarantee",
    ],
    month: "Get Job-Ready in Just 8 Months",
};
export const DASummaryDetails = {
    title: "Just 20% Upfront fee",
    desc: "Achieve a Competitive Advantage in Emerging Technologies with Our Pay After Placement Data Analytics Course",
    month: "IN 3 Months",
};
export const FSDSummaryDetails = {
    title: "Get Up to 30% Scholarship",
    desc: " Unlock your future in one of the most versatile and high-demand tech fields—Full Stack Development! Whether you come from a technical or non-technical background, this course is crafted to guide you from the fundamentals to advanced development skills through hands-on projects and real-world applications. Learn from industry professionals, master both front-end and back-end technologies, and build a strong portfolio of full-featured web applications. With personalized mentorship, career support, and a job-ready curriculum, this is the perfect time to start your journey toward a rewarding career in Full Stack Development. Enroll now and turn your passion for coding into a profession!",
    month: "IN 6 months",
};
export const DMSummaryDetails = {
    title: "Gear up with Futuristic career",
    desc: "In today's professional landscape, cultivating design thinking and creative skills is more critical than ever, regardless of your current workplace or job title. That's why we've paved the path for your transition into the world of design.",
    month: "IN 18 Weeks",
};

export const DSStats = [
    {
        count: "11 Seats Only",
        statusName: "ENROLMENT ENDS",
        img: "/DSAIcon/seats.svg",
    },
    {
        count: "7LPA+",
        statusName: "Avg Salary Package",
        img: "/DSAIcon/salary.svg",
    },
    {
        count: "200+",
        statusName: "Hiring Partners",
        img: "/DSAIcon/partner.svg",
    },
];
export const DAStats = [
    {
        count: getNextSunday(),
        statusName: "ENROLMENT ENDS",
        img: "/enrollment.svg",
    },
    {
        count: "6LPA+",
        statusName: "Avg Salary Package",
        img: "/salary.svg",
    },
    {
        count: "200+",
        statusName: "Hiring Partners",
        img: "/hiring-partner.svg",
    },
];
export const DMStats = [
    {
        count: getNextSunday(),
        statusName: "ENROLMENT ENDS",
        img: "/enrollment.svg",
    },
    {
        count: "Modules",
        statusName: "15",
        img: "/modules.svg",
    },
    {
        count: "200+",
        statusName: "Hiring Partners",
        img: "/hiring-partner.svg",
    },
];
export const UIStats = [
    {
        count: getNextSunday(),
        statusName: "ENROLMENT ENDS",
        img: "/enrollment.svg",
    },
    {
        count: "Modules",
        statusName: "15",
        img: "/modules.svg",
    },
    {
        count: "200+",
        statusName: "Hiring Partners",
        img: "/hiring-partner.svg",
    },
];
export const FSDStats = [
    {
        count: getNextSunday(),
        statusName: "ENROLMENT ENDS",
        img: "/enrollment.svg",
    },
    {
        count: "Modules",
        statusName: "6",
        img: "/modules.svg",
    },
    {
        count: "30%",
        statusName: "Scholarship",
        img: "/hiring-partner.svg",
    },
];

export const DSSpotlight = [
    {
        note: "Learn from Industry Experts who have achieved the success you aim for",
        img: "/reasons/reason-1.png",
        alt: "image",
    },
    {
        note: "Placement-Oriented Training with Guaranteed Interviews & Job Support",
        img: "/reasons/reason-2.png",
        alt: "image",
    },
    {
        note: "IBM Certification from an ISO & IAF Certified Company",
        img: "/reasons/image-3.png",
        alt: "image",
    },
    {
        note: "Money-Back Guarantee if promises aren't delivered",
        img: "/reasons/reason-4.png",
        alt: "image",
    },
    {
        note: "Domain-Specific Curriculum tailored for real-world applications",
        img: "/reasons/reason-5.png",
        alt: "image",
    },
    {
        note: "1:1 Mentoring & Doubt Clearance with expert guidance",
        img: "/reasons/reason-6.png",
        alt: "image",
    },
    {
        note: "Mock Interviews & Dedicated Program Manager for personalized career support",
        img: "/reasons/reason-7.png",
        alt: "image",
    },
    {
        note: "AI Enabled Job Board - Once being eligible for placements you will get access to the job board where it will act as a one point contact for all your placement needs",
        img: "/reasons/reason-8.png",
        alt: "image",
    },
    {
        note: "Only 15 Students per Batch with 24/7 LMS Access for focused and flexible learning",
        img: "/reasons/reason-9.png",
        alt: "image",
    },
];
export const DASpotlight = [
    {
        note: "Lifetime Support with the LMS content",
        img: "/reasons/reason-7.png",
        alt: "image",
    },
    {
        note: "Develop practical skills through hands-on projects and real-world applications",
        img: "/reasons/reason-2.png",
        alt: "image",
    },
    {
        note: "Paid internship for 2 months",
        img: "/reasons/reason-6.png",
        alt: "image",
    },
    {
        note: "Build a strong foundation for a successful career in data analytics",
        img: "/reasons/reason-9.png",
        alt: "image",
    },
    {
        note: "Access to exclusive features and resources to enhance your learning experience",
        img: "/reasons/reason-8.png",
        alt: "image",
    },
    {
        note: "1:1 mentoring session",
        img: "/reasons/reason-6.png",
        alt: "image",
    },
    {
        note: "Gain a comprehensive understanding of data analytics concepts, techniques, and tools",
        img: "/reasons/reason-1.png",
        alt: "image",
    },
    {
        note: "100% Placement Assistance",
        img: "/reasons/reason-2.png",
        alt: "image",
    },
];
export const DMSpotlight = [
    {
        note: "Lifetime Support with the LMS content",
        img: "/reasons/reason-8.png",
        alt: "image",
    },
    {
        note: "Develop practical skills through hands-on projects and real-world applications",
        img: "/reasons/reason-2.png",
        alt: "image",
    },
    {
        note: "Pay 15,000 initially and the rest after you land in the job",
        img: "/reasons/reason-1.png",
        alt: "image",
    },
    {
        note: "Internship Guarantee",
        img: "/reasons/reason-6.png",
        alt: "image",
    },
    {
        note: "Access to exclusive features and resources to enhance your learning experience",
        img: "/reasons/reason-7.png",
        alt: "image",
    },
    {
        note: "1:1 mentoring session",
        img: "/reasons/reason-5.png",
        alt: "image",
    },
    {
        note: "Pay After Placement",
        img: "/reasons/reason-9.png",
        alt: "image",
    },
    {
        note: "100% Placement Assistance",
        img: "/reasons/reason-2.png",
        alt: "image",
    },
];
export const UISpotlight = [
    {
        note: "Hands-on UX/UI Design Experience from Scratch",
        img: "/reasons/UI.jpg",
        alt: "image",
    },
    {
        note: "Earn a Globally Recognized Design Certification",
        img: "/reasons/reason-9.png",
        alt: "image",
    },
    {
        note: "Personalized 1-on-1 Mentorship from Experts",
        img: "/reasons/reason-5.png",
        alt: "image",
    },
    {
        note: "Step-by-Step Guidance to Launch Your Career",
        img: "/reasons/reason-4.png",
        alt: "image",
    },
    {
        note: "Lifetime Support from Industry Professionals",
        img: "/reasons/reason-6.png",
        alt: "image",
    },
    {
        note: "Join a Thriving, Passionate Design Community",
        img: "/reasons/reason-7.png",
        alt: "image",
    },
    {
        note: "Master Design Skills in 18 Weeks",
        img: "/reasons/reason-8.png",
        alt: "image",
    },
    {
        note: "Learn Directly from Industry-Leading Designers",
        img: "/reasons/reason-1.png",
        alt: "image",
    },
];
export const FSDEnrollment = [
    {
        title: "",
        desc: "Live Classes on Weekdays(Mon-Sat) by Industry Experts",
        img: "/fsd-icons/fsd-1.svg",
        alt: "image",
    },
    {
        title: "",
        desc: "Beginner Friendly Curriculum Everything will be Taught from Scratch",
        img: "/fsd-icons/fsd-2.svg",
        alt: "image",
    },
    {
        title: "",
        desc: "Recordings of live classes can access through LMS for lifetime",
        img: "/fsd-icons/fsd-3.svg",
        alt: "image",
    },
    {
        title: "",
        desc: "Guaranteed Certification Learner will get post Completion",
        img: "/fsd-icons/fsd-4.svg",
        alt: "image",
    },
    {
        title: "",
        desc: "Dedicated Mentorship To Boost up of your Confidence",
        img: "/fsd-icons/fsd-5.svg",
        alt: "image",
    },
    {
        title: "",
        desc: "24*7 Learner Support from Teaching assistance & Peer Groups",
        img: "/fsd-icons/fsd-6.svg",
        alt: "image",
    },
    {
        title: "",
        desc: "Easy Doubt Resolution Through Teachers/Peer Groups",
        img: "/fsd-icons/fsd-7.svg",
        alt: "image",
    },
    {
        title: "",
        desc: "Job Ready Projects Based on real-world scenarios",
        img: "/fsd-icons/fsd-8.svg",
        alt: "image",
    },
    {
        title: "",
        desc: "Crack Interviews with ease With our 50+Mock Sessions",
        img: "/fsd-icons/fsd-9.svg",
        alt: "image",
    },
];

export const DSProgramCurriculum = [
    {
        module: "Module 1-5",
        phase: "📍 Phase 1: Foundations (Modules 1-5)",
        content: [
            "Statistics topics",
            "Probability topics",
            "Introduction to Mathematics for Data Science",
            "Linear Algebra topics",
            "Calculus topics",
        ],
    },
    {
        module: "Module 6-15",
        phase: "⚙️ Phase 2: Data Science Core (Modules 6-15)",
        content: [
            "Introduction to Python",
            "Deep Dive - Functions, OOPS, Modules, Errors and Exceptions",
            "Data Manipulation",
            "Introduction to Machine Learning with Python",
            "Supervised Learning - I",
            "Dimensionality Reduction",
            "Supervised Learning - II",
            "Unsupervised Learning",
            "Association Rules Mining and Recommendation Systems",
            "Reinforcement Learning",
        ],
    },
    {
        module: "Module 16-20",
        phase: "📊 Phase 3: Data Analytics & Visualization (Modules 16–20)",
        content: [
            "Data Clustering",
            "Time Series Analysis",
            "Model Selection and Boosting",
            "Sequences and File Operations",
            "Introduction to NumPy, Pandas, and Matplotlib",
        ],
    },
    {
        module: "Module 21-30",
        phase: "💬 Phase 4: NLP & Text Mining (Modules 21–30)",
        content: [
            "Natural Language Processing with Deep Learning in Python N",
            "Natural Language Processing in TensorFlow",
            "Introduction to Natural Language Processing",
            "A Refresher to Python",
            "Learn to use Regular Expressions",
            "First Step of NLP - Text Processing",
            "Extracting Named Entities from Text",
            "Feature Engineering for Text",
            "Mastering the Art of Text Cleaning",
            "Interpreting Patterns from Text - Topic Modelling",
            "Machine Learning Algorithms",
        ],
    },
    {
        module: "Module 31-36",
        phase: "Phase 5: GenAI & Cloud Deployment (Modules 31-36)",
        content: [
            "Understanding Text Classification",
            "Introduction to Deep Learning (Optional)",
            "Deep Learning for NLP",
            "Recurrent Neural Networks",
            "Introduction to Language Modelling in NLP",
            "Sequence-to-Sequence Modelling",
        ],
    },
];
export const DAProgramCurriculum = [
    {
        module: "Module 1-2",
        content: [
            "Introduction to Data Analytics",
            "Introduction to Python programming",
        ],
    },
    {
        module: "Module 3-4",
        content: ["Python - Basics", "Python Data Types & Utilities"],
    },
    {
        module: "Module 5-6",
        content: ["Python Essential Packages", "SQL and Database"],
    },
    {
        module: "Module 7-8",
        content: ["Visualisation using Power BI", "Visualisation using Tableau"],
    },
    {
        module: "Module 9-10",
        content: ["Excel Basic", "Excel Advanced"],
    },
];
export const DMProgramCurriculum = [
    {
        module: "Module 1-5",
        content: [
            "Introduction to Digital Marketing Topics",
            "Search Engine Optimization",
            "Keyword Research",
            "On-Page SEO",
            "Content Writing & Marketing",
        ],
    },
    {
        module: "Module 6-10",
        content: [
            "Technical SEO",
            "Off-Page SEO",
            "Analytics - Google Search Console",
            "Search Engine Marketing",
            "Social Media Marketing",
        ],
    },
    {
        module: "Module 11-15",
        content: [
            "Facebook Marketing",
            "Facebook Paid Advertisement",
            "Facebook Campaign Creation",
            "Instagram Marketing",
            "YouTube Marketing",
        ],
    },
    {
        module: "Module 16-20",
        content: [
            "Website Structure",
            "YouTube Studio",
            "Excel Essentials",
            "Formulae",
            "Logical and Lookup Functions",
        ],
    },
    {
        module: "Module 21-24",
        content: [
            "Email & Affiliate Marketing",
            "Affiliate Marketing",
            "Blogging",
            "Email Marketing",
        ],
    },
];
export const UIProgramCurriculum = [
    {
        module: "Week 1-3",
        content: [
            "Embracing the Design Philosophy",
            "Embarking on the Design Quest",
            "Equipping with Tools and Building Teams",
        ],
    },
    {
        module: "Week 4-6",
        content: [
            "Unearthing the 'Why' Behind Design",
            "Charting the Course",
            "Getting Hands-On with Wireframing",
        ],
    },
    {
        module: "Week 7-9",
        content: [
            "Mastering the Rules of Interface Design",
            "The Art of Captivating Design",
            "Bringing Designs to Life",
        ],
    },
    {
        module: "Week 10-12",
        content: [
            "Exploring the World of Android",
            "Web Design and Review",
            "Delivering Professional Designs",
        ],
    },
    {
        module: "Week 13-14",
        content: ["Elevating the Game", "Preparing for Battle"],
    },
    {
        module: "Week 15-18",
        content: ["Ready for the Spotlight"],
    },
];
export const FSDProgramCurriculum = [
    {
        module: "Module 1",
        content: [
            "Introduction to web technologies",
            " Understanding the client-server architecture",
            "HTML markup and structure",
            "CSS styling and layout",
            "FInstalling and configuring code editors (e.g., Visual Studio Code, Sublime Text)",
            "Setting up a local development server (e.g., Node.js, XAMPP)",
        ],
    },
    {
        module: "Module 2",
        content: [
            "Semantic HTML5 elements",
            " Responsive web design with CSS JavaScript Variables, data types, and operators",
            "Control flow and functions",
            "Overview of popular front-end frameworks (any one e.g.,React, Angular, Vue)",
            "Interacting with the Document Object Model(DOM",
            "Handling user events with JavaScript",
            "Basics of a chosen framework",
            "Introduction to CSS Preprocessors SASS or LESS",
            "Advanced styling techniques",
        ],
    },
    {
        module: "Module 3",
        content: [
            "Overview of server-side programming",
            "Basics of a back-end language (e.g., Node.js, Python, Ruby)",
            "Server-Side Frameworks (e.g., Express, Django), Building server-side applications",
            "Introduction to databases (SQL and NoSQL",
            "CRUD operations and database design",
            "RESTful APIs",
            "Authentication and Authorization",
            "Testing and Debugging",
        ],
    },
    {
        module: "Module 4",
        content: [
            "Version Control with Git, basics and branching",
            "Collaborative development with GitHub",
            "Deployment and Hosting (Heroku, Netlify)",
            "Web Security",
            "Techniques for optimizing web performance",
            "Page load speed and rendering optimization",
        ],
    },
    {
        module: "Module 6",
        content: [
            "Web Foundations & React Basics",
            "Advanced React & APIs",
            "Back end development",
            "Full stack Integration",
        ],
    },
];

export const DSAddonSyllabus = [
    "Bigdata, Sparck & Kafka, MongoDB",
    "Chat GPT",
    "Deep Learning and NPL",
    "Data WareHousing & ETL",
    "Gen AI",
    "Cloud Computing (AWS, AZURE, CGP)",
    "Deployment of Machine Learning Models to Cloud",
    "Data Science Project Management",
];
export const DAAddonSyllabus = [
    "Aspiring data analysts, business analysts",
    "Professionals seeking to enhance their analytical skills and advance their careers",
    "Anyone interested in exploring the dynamic field of data analytics and its applications",
    "College students who are looking for internships and projects",
];
export const DMAddonSyllabus = [
    "Students who are in the final year of graduation or post-graduation",
    "Recent Graduates who want to pursue a career in the field of Digital Marketing",
    "Professionals Who are looking at building a career in Digital Marketing",
];
export const FSDAddonSyllabus = [
    "Lifetime LMS Access",
    "Corporate Communication Training",
    "24*7 Dedicated Learner Support",
    "Job Ready in 20 Weeks",
];

export const DSScienceSkillSets = [
    "Data Science",
    "Data Analytics",
    "Data Visualization",
    "Machine Learning",
    "Deep Learning",
    "AI",
    "Python",
    "Data wrangling",
    "NLP",
];
export const DAScienceSkillSets = [
    "Data Analytics",
    "Data Cleaning & Preparation",
    "Creation of Data Visuals",
    "Creating Dashboards",
    "Statistical Knowledge",
    "Data Visualisation",
];

export const DSTechSoftwares = [
    {
        img: "/tools/aws.png",
        alt: "Aws logo",
    },
    {
        img: "/tools/chatgpt.webp",
        alt: "chatGPT logo",
    },
    {
        img: "/tools/excel.webp",
        alt: "excel logo",
    },
    {
        img: "/tools/google-cloud.webp",
        alt: "google cloud logo",
    },
    {
        img: "/tools/heroku.webp",
        alt: "heroku logo",
    },
    {
        img: "/tools/keras.webp",
        alt: "keras logo",
    },
    {
        img: "/tools/matplotlib.png",
        alt: "matplotlib logo",
    },
    {
        img: "/tools/mysql.png",
        alt: "mysql logo",
    },
    {
        img: "/tools/nlp.png",
        alt: "nlp logo",
    },
    {
        img: "/tools/numpy.webp",
        alt: "numpy logo",
    },
    {
        img: "/tools/pandas.png",
        alt: "panda logo",
    },
    {
        img: "/tools/postgresql.png",
        alt: "postgresql logo",
    },
    {
        img: "/tools/powerbi.png",
        alt: "powerbi logo",
    },
    {
        img: "/tools/python.webp",
        alt: "python logo",
    },
    {
        img: "/tools/scipy.webp",
        alt: "scipy logo",
    },
    {
        img: "/tools/tableau.png",
        alt: "tableau logo",
    },
    {
        img: "/tools/tensorflow.png",
        alt: "tensorflow logo",
    },
    {
        img: "/tools/scikit.webp",
        alt: "scikit logo",
    },
    {
        img: "/tools/timeseries.png",
        alt: "time series logo",
    },
];
export const DATechSoftwares = [
    {
        img: "/tools/excel.webp",
        alt: "excel logo",
    },
    {
        img: "/tools/tableau.png",
        alt: "tableau logo",
    },
    {
        img: "/tools/powerbi.png",
        alt: "powerbi logo",
    },
    {
        img: "/tools/mysql.png",
        alt: "mysql logo",
    },
    {
        img: "/tools/python.webp",
        alt: "python logo",
    },
];

export const DSPlacement = {
    title: "Industry Projects",
    desc: "In this certificate program, you'll gain hands-on experience through industry projects, guided by seasoned professionals. These projects will be integrated into your Certification in Data Science Architecture Program to deepen your expertise. You'll work with real-world datasets, receiving mentorship from world-class industry experts throughout the process.",
};
export const DAPlacement = {
    title: "Placements",
    desc: "Interview preparations will begin in the 4th month, with a strong focus on training and equipping candidates for success. Since our program follows a Pay After Placement model, candidates will only pay 30% of the fees upfront.",
};

export const DSSoftwareLogo = [
    {
        img: "/netflix.png",
        alt: "netflix logo",
    },
    {
        img: "/amazon.png",
        alt: "amazon logo",
    },
    {
        img: "/walmart.png",
        alt: "walmart logo",
    },
    {
        img: "/zomato.png",
        alt: "zomato logo",
    },
    {
        img: "/twitter.png",
        alt: "twitter logo",
    },
];

export const DSFaq = [
    {
        ques: "What are the key learning outcomes of this Data Science course?",
        ans: "We are in an age where data-driven decisions are crucial. While the volume of data is rapidly increasing, experts are needed to transform it into actionable insights. This Data Science and Artificial Intelligence program, in collaboration with IBM, equips you with the job-specific skills essential for advancing in the field.The course curriculum includes key concepts such as Python, Machine Learning, Deep Learning, and Natural Language Processing (NLP). With hands-on training using capstone projects and real-world datasets, you’ll be prepared for roles like Data Analyst, Data Engineer, and more.",
    },
    {
        ques: "What key skills will you develop through this Data Science Architecture course?",
        ans: "In this Data Science Architecture course, you'll gain expertise in Data Science, Data Analysis, Data Visualization, Machine Learning, Deep Learning, Artificial Intelligence, Python, Statistics, NLP models, SQL, and Data Wrangling.",
    },
    {
        ques: "What projects are included in this Data Science Architecture course?",
        ans: "Get an opportunity to work on Real-World Datasets of various industries like healthcare, e-commerce, social media, entrepreneurship, supply chain, and more. Learn from basics like cleaning a large amount of data, organizing it, and much more.",
    },
    {
        ques: "Who should take this Data Science Architecture course?",
        ans: "Anyone with a graduate degree in any field can apply and enrol in a Data Science Architecture course. Freshers and working professionals with any educational background are eligible for the course.",
    },
    {
        ques: "Are there any prerequisites for this Data Science Architecture course?",
        ans: "No, There are no prerequisites for taking this course ",
    },
];
export const DAFaq = [
    {
        ques: "What key skills will you develop through this Fast Track Data Analytics course?",
        ans: "In this Fast Track Data Analytics course, you'll gain expertise in Data Analysis, Data Segregation, Python, Statistics, SQL, and Data Wrangling.",
    },
    {
        ques: "What projects are included in this  Fast Track Data Analytics course?",
        ans: "Get an opportunity to work on Real-World Datasets of various industries like healthcare, e-commerce, social media, entrepreneurship, supply chain, and more. Learn from basics like cleaning a large amount of data, organizing it, and much more.",
    },
    {
        ques: "Who should take this  Fast Track Data Analytics course?",
        ans: "Anyone with a graduate degree in any field can apply and enrol in a Fast Track Data Analytics. Freshers and working professionals with any educational background are eligible for the course.",
    },
    {
        ques: "Are there any prerequisites for this Fast Track Data Analytics course?",
        ans: "No, There are no prerequisites for taking this course",
    },
    {
        ques: "What are the reasons to enrol in the Fast Track Data Analytics program?",
        ans: "The demand for Data Analytics professionals is surging due to the rapid growth of data across industries and the need for data-driven decision-making. Organizations are increasingly seeking skilled analysts to interpret data and improve efficiency, leading to a wide range of job opportunities.Overall, careers in data analytics are thriving and expected to grow in the coming years.",
    },
    {
        ques: "Who should enrol in this program?",
        ans: "Freshers from any stream of Graduation,People looking forward to keep their first baby steps in IT sector,Aspirants looking for career transition",
    },
    {
        ques: "What if I miss attending one or more lectures?",
        ans: "If you happen to miss any lectures, we will provide you with a recording of the session within 24 hours. Additionally, if you have any questions, you can reach out to the dedicated program manager for assistance.",
    },
    {
        ques: "How does the Pay After Placement work?",
        ans: "The Pay After Placement model creates a win-win situation for both learners and Aspire Tech Academy, as students will pay the majority—70%—of the fees only after successfully securing a job.",
    },
    {
        ques: "Is there any minimum package post which I will have to pay the 70% fees in Data Analytics ?",
        ans: "In Fast Track Data Analytics Course you are entitled to pay the 70% of the fees irrespective of your salary package.",
    },
];

export const DSCertificationDetails = [
    {
        note1: "IBM Certificate",
        note2:
            "Post completing the IBM Certified Data Science Algorithm Course, you'll be eligible for official certification from IBM which will help you in boosting your credentials and career in Data Science.",
        note3: "Internship Certificate",
        note4: "Experience Certificate upto 1 year",
        img: "/ibm-certificate.png",
        alt: "image",
    },
    {
        note1: "Certificate from Aspire Tech Academy",
        note2:
            "Upon successfully completing your program, you will receive an official certificate from Aspire Tech Academy. This certification will serve as a valuable credential to showcase your skills and knowledge as you advance in your career.",
        img: "/DS-sampleCertificate.png",
        alt: "image",
    },
];

export const DACertificationDetails = [
    {
        note1: "Certificate from Aspire Tech Academy",
        note2:
            "Upon successfully completing your program, you will receive an official certificate from Aspire Tech Academy. This certification will serve as a valuable credential to showcase your skills and knowledge as you advance in your career.",
        note3: "Internship Certificate",
        note4: "Experience Certificate upto 1 year",
        img: "/DA-sampleCertificate.jpg",
        alt: "image",
    },
];
export const DMCertificationDetails = [
    {
        note1: "Certificate from Aspire Tech Academy",
        note2:
            "Upon successfully completing your program, you will receive an official certificate from Aspire Tech Academy. This certification will serve as a valuable credential to showcase your skills and knowledge as you advance in your career.",
        note3: "Internship Certificate",
        note4: "Experience Certificate upto 1 year",
        img: "/DM-sampleCertificate.jpg",
        alt: "image",
    },
];
export const UICertificationDetails = [
    {
        note1: "Certificate from Aspire Tech Academy",
        note2:
            "Upon successfully completing your program, you will receive an official certificate from Aspire Tech Academy. This certification will serve as a valuable credential to showcase your skills and knowledge as you advance in your career.",
        note3: "Internship Certificate",
        note4: "Experience Certificate upto 1 year",
        img: "/UI-sampleCertificate.jpg",
        alt: "image",
    },
];
export const FSDCertificationDetails = [
    {
        note1: "Certificate from Aspire Tech Academy",
        note2:
            "Upon successfully completing your program, you will receive an official certificate from Aspire Tech Academy. This certification will serve as a valuable credential to showcase your skills and knowledge as you advance in your career.",
        note3: "Internship Certificate",
        note4: "Experience Certificate upto 1 year",
        img: "/certificate-full-stack.png",
        alt: "image",
    },
];

export const DSGuidedBySection = [
    {
        img: "/stock-1.jpg",
        alt: "image",
        customer: "Advaith R P",
        positionDetail: "Data Scientist at ExcelR",
        aboutCourse:
            "He is our ace trainer working in one of the leading market research companies based out of London and has extensive experience in the field of Analytics. He has been with us for over 2 years.",
    },
    {
        img: "/stock-2.jpg",
        alt: "image",
        customer: "Thejasvi T V",
        positionDetail: "Data Science Manager",
        aboutCourse:
            "Data Scientist and a Certified Six Sigma Black Belt (ASQ) with 15+ years of experience in applying statistical techniques for solving business problems across industry verticals. Read more",
    },
    {
        img: "/stock-1.jpg",
        alt: "image",
        customer: "Udayan Goswami",
        positionDetail:
            "Statistics-Masters in Data Science & FinTech at the University of London",
        aboutCourse:
            "Experience in building predictive and statistical models with a demonstrated history of working in the information technology and services industry. Skilled in python, pyspark,",
    },
    {
        img: "/stock-1.jpg",
        alt: "image",
        customer: "Chandra Shekar Gogula",
        positionDetail: "Consultant at TCS (Data Scientist)",
        aboutCourse:
            "Chandra Sekhar is a Data Scientist professional with close to 9+ years of experience in Machine Learning, Statistical Modelling, Data Science, Predictive Analytics & Business Consulting.",
    },
];

export const careerSupport = [
    "Create tailored resumes, cover letters, and profiles that help you stand out in today’s job market.",
    "Access everything you need — from interview prep and job boards to real-time dashboards and expert guidance.",
    "Enjoy a smooth, intuitive design focused on making your career-building journey simple and effective.",
    "Whether you're starting out or making a shift, the tools are built to support professionals and students alike.",
    "Built with innovation, accessibility, and empowerment at its core to help you achieve your career goals faster.",
];

// terms

export const followingActivities = [
    "Sending phishing, pharming, or whaling messages designed to obtain passwords, account information, personal data, confidential information, or private information from any user of the 'Aspire Tech Academy' or any third party.",
    "Posting content that infringes upon intellectual property rights or other proprietary rights, violates laws or contractual relationships, contains malicious software, or poses privacy or security risks.",
    "Engaging in unsolicited or unauthorised advertising, promotional materials, commercial activities, 'spam', or any other form of solicitation.",
    "Posting unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, pornographic, libellous, invasive, hateful, or otherwise objectionable content.",
    " Interfering with or disrupting the Service, its servers, or connected networks, or disobeying network-related requirements, procedures, policies, or regulations.",
    "Violating any applicable local, state, national, or international laws or regulations or impersonating any person or entity.",
    "Harvesting or collecting user email addresses or contact information for unsolicited communications.",
    "Advertising, selling, or buying goods or services for unauthorised business purposes.",
    "Attempting to access materials or information not intentionally provided through the Service.",
];

export const certificationsReq = [
    "The successful completion of graded assignments with a minimum passing score/grade.",
    "The satisfactory completion of a project and viva as determined by the Subject Matter   Expert (SME) or Mentor.",
    "Meeting the minimum attendance requirements specified for the program.",
    "If all criteria are met, Aspire Tech Academy or the University will commence the certification process.",
    "Graded assignments, distinct from practice or non-graded assignments, are clearly outlined in the Learning Management System (LMS). Additionally, Aspire Tech Academy includes one end-of-course certification exam in the course fee.",
    "Some courses do not allow multiple attempts for certification exams, and in cases where a student requires a repeat exam, an additional fee may apply.",
];

export const referAFriend = [
    "Referrers must submit leads online or contact a counsellor, providing at least the lead's name and telephone number.",
    "Referral bonuses, up to 5 to 10% of the course selling price net of discounts, apply to the first program enrolled by the new referee.",
    "Selling price calculations exclude GST and discounts/scholarships.",
    "Friends must enrol within 45 calendar days from the date of referral to qualify.",
    "In cases where multiple referrers submit the same lead, the referral fee is awarded to the first referrer based on the CRM entry date.",
    "Existing students are not eligible for referrals.",
    "Referral amounts can be claimed once the friend has purchased the course and met payment norms.",
    "Referral rewards are provided as Amazon vouchers and cannot be used for instalment payments, discounts, or other courses or a reduction in the fees",
    "Referral vouchers are non-transferable and cannot be converted into cash or other forms of credit.",
    "The referral program is one-way; friends referred cannot subsequently refer to the referrer.",
    "In case of disputes, management retains the final decision-making authority.",
    "Applicable TDS and taxes will be deducted from referral rewards.",
    "Referrals do not apply to blood relations, spouses, siblings, or cousins unless the referrer is an existing student.",
];

export const refundPolicy = [
    "Unless explicitly agreed in writing by Aspire Tech Academy, full payment for program participation is due at registration. For programs offering a trial period, access to the trial is provided after full payment. During the trial, a refund of program fees, subject to applicable charges, may be considered upon request and approval by Aspire Tech Academy. After the trial period, no refunds will be granted for any reason.",
    "It is the responsibility of the user enrolling in a program to verify the program's accuracy, suitability, and relevance. Enrolment in a program is non-transferable.",
    "To make payments for programs or purchases through Aspire Tech Academy, users must have internet access and a valid accepted payment method. Aspire Tech Academy does not store credit card information and uses third-party payment providers. Users agree to the terms of these providers and are responsible for any losses incurred due to their use. Failure to pay may result in program access withdrawal.",
    "Depending on the transaction location and payment method, foreign exchange fees or rates may apply. Aspire Tech Academy does not support all payment methods, currencies, or locations. Taxes are based on billing information provided during enrollment or purchase.",
    "Enrolment may be cancelled at any time, but no refunds will be issued once payment (in part or full) has been made. Refunds are not provided for lack of usage or dissatisfaction.",
    "If a free trial is subscribed, it will be valid for the specified period. Free trials cannot be combined with certain offers, and eligibility depends on previous subscriptions and associated email addresses.",
];

// Impact Page

export const placementRecords = [
    {
        logo: "/netflix.png",
        alt: "netflix logo",
    },
    {
        logo: "/amazon.png",
        alt: "amazon logo",
    },
    {
        logo: "/walmart.png",
        alt: "walmart logo",
    },
    {
        logo: "/zomato.png",
        alt: "zomato logo",
    },
    {
        logo: "/twitter.png",
        alt: "twitter logo",
    },
];

// corporate page
export const corporateData = [
    {
        title: "Quick Turn-Around Time",
        desc: "Receive shortlisted profiles within 24 hours",
        img: "/SVGIcons/talent-1.svg",
        alt: "image",
    },
    {
        title: "Zero Cost Hiring",
        desc: "Hire the right talents at zero cost!",
        img: "/SVGIcons/talent-2.svg",
        alt: "image",
    },
    {
        title: "Year-Round Availability",
        desc: "Hire job-ready candidates throughout the year",
        img: "/SVGIcons/talent-3.svg",
        alt: "image",
    },
    {
        title: "High Acceptance Rate",
        desc: "Above 98% of OdinGrads accept job offers",
        img: "/SVGIcons/talent-4.svg",
        alt: "image",
    },
];
export const corporateTrainingList = [
    {
        title: "Customization",
        lists: [
            "Understanding your requirement and expected outcomes",
            "Customizing the training program to align with your business goals",
        ],
        img: "/SVGIcons/1.svg",
        alt: "image",
    },
    {
        title: "Delivery",
        lists: [
            "Instructor-led interactive classes by industry experts",
            "High engagement through assignments, tests, and Capstone projects",
        ],
        img: "/SVGIcons/2.svg",
        alt: "image",
    },
    {
        title: "Evaluation",
        lists: [
            "Assignments, tests, and assessments",
            "Reports on employee progress",
        ],
        img: "/SVGIcons/3.svg",
        alt: "image",
    },
    {
        title: "Support",
        lists: ["Dedicated SME support", "Dedicated technical support"],
        img: "/SVGIcons/4.svg",
        alt: "image",
    },
];

export const corporateTrainingData = {
    title: "Empower Your Team to Achieve More",
    desc: "Aspire Tech Academy is a certified e-learning platform, ISO/IAF accredited, dedicated to empowering your career through skill enhancement and upskilling. Our certifications cover a range of domains like the IBM Certified Data Science Architect Program, Fast Track Data Analyst Course,  UI/UX, Digital Marketing, and Cybersecurity.",
};
export const roleBasedTrainingList = [
    {
        title: "Data Engineer",
        img: "/SVGIcons/engineer.svg",
        alt: "image",
    },
    {
        title: "Data Analyst",
        img: "/SVGIcons/analyst.svg",
        alt: "image",
    },
    {
        title: "Data Visualization",
        img: "/SVGIcons/visualization.svg",
        alt: "image",
    },
    {
        title: "ML Engineer",
        img: "/SVGIcons/ml.svg",
        alt: "image",
    },
];

export const corporateTalentData = {
    title: "One Platform. Infinite Talent.",
    desc: "From fresh graduates to experienced professionals, tap into a wide-ranging talent pool that brings varied perspectives and real-world skills to your team.Build a workforce that's as dynamic and adaptable as your business.",
};


export const metaData = [
    {
        title: "data science architecture program",
        metaTitle: "Best Data Science Architecture Program in India | IBM-Certified",
        metaDescription: "Master AI, ChatGPT, Python, and Cloud in 8 months with Aspire Tech Academy’s IBM-Certified Best Data Science Architecture Program In India. Get hands‑on training, 200+ hiring partners, and a 100% money  back guarantee."
    },
    {
        title: "data analytics launchpad",
        metaTitle: "",
        metaDescription: ""
    },
    {
        title: "digital marketing program",
        metaTitle: "",
        metaDescription: ""
    },
    {
        title: "UI/UX design course",
        metaTitle: "",
        metaDescription: ""
    },
    {
        title: "full stack development",
        metaTitle: "",
        metaDescription: ""
    },
]