import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

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
                menu: "digital marketing program ",
                link: "/programs/digital-marketing-program ",
            },
        ],
    },
    { menu: "News", link: "/news" },
    { menu: "Impact", link: "/impact" },
    // { menu: "Corporate training", link: "/corporate-training" },
    { menu: "Job board", link: "/job-board" },
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
    // { menu: "Press", href: "/press" },
    { menu: "Contact us", href: "/contact" },
];

export const socialLinks = [
    {
        icon: (
            <FaInstagram className="text-3xl md:text-4xl text-primary hover:text-primary/70 hover:animate-pulse rounded-full border border-primary p-2" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaXTwitter className="text-3xl md:text-4xl text-primary hover:text-primary/70 hover:animate-pulse rounded-full border border-primary p-2" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaFacebook className="text-3xl md:text-4xl text-primary hover:text-primary/70 hover:animate-pulse rounded-full border border-primary p-2" />
        ),
        href: "#",
    },
];

export const IndustrialCoursesCardData = [
    {
        img: "/Data-Science.png",
        alt: "course image",
        enrol: "Enrolment opening soon ",
        title: "IBM certified Data Science Architecture Program",
        desc: "Achieve data science excellence with our IBM-backed program! Enjoy live sessions, earn while you learn, and get 100% career support with guaranteed interviews. (6 Months | Online)",
        href: "/programs/data-science-architecture-program",
    },
    {
        img: "/Data-Analytics.png",
        alt: "course image",
        enrol: "Enrolment opening soon ",
        title: "Fast Track Data Analytics Launchpad Course",
        desc: "Kick-start your Data Analytics career with IBM! Get live sessions, career support, and guaranteed internships. (3 Months | Online)",
        href: "/programs/data-analytics-launchpad",
    },
    {
        img: "/Digital-Marketing.png",
        alt: "course image",
        enrol: "Enrolment opening soon ",
        title: "Digital Strategic Marketing Course",
        desc: "Trust us—go beyond traditional digital marketing and learn more! Enjoy live sessions, pay after placement, and secure a guaranteed internship. (3 Months | Online)",
        href: "/programs/digital-marketing-program",
    },
    {
        img: "/UI-UX.png",
        alt: "course image",
        enrol: "Enrolment opening soon ",
        title: "User-Centricity Unleashed: UI/UX Mastery Course",
        desc: "Now is the best time to start your design career with rising demand for Design Thinking! Enjoy live sessions, pay after placement, and get a guaranteed internship. (5 Months | Online)",
        href: "/programs/UI-UX-design-course",
    },
];

export const StoriesByCustomer = [
    {
        img: "/avatar.jpg",
        alt: "customer image",
        customerName: "Shashi Kiran",
        about:
            "The instructors here are highly skilled and patient; I could sense it in how they conducted the sessions. It was not only about the lectures they gave, but they also provided great career guidance which is not that easily found. Aspire Tech Academy helped me bag a job that pays well and also prepared me in a way that I enjoy what I do for a living.",
        offers: "Offer 14LPA",
        position: "Data Scientist at Tata Consultancy Services",
    },
    {
        img: "/avatar.jpg",
        alt: "customer image",
        customerName: "Jay Prakash",
        about:
            "The mentorship and guidance provided by Aspire Tech Academy is something that, I feel, stands out from the rest on a personal level. I don't think I could have found this type of direction and guidance elsewhere. The instructions that were provided or the feedback I received were so elaborate that it motivated me to face all the interviews and placement processes with a new sense of dedication and confidence.",
        offers: "Offer 30% Hike",
        position: "Assistant Manager at Flipkart",
    },
    {
        img: "/avatar.jpg",
        alt: "customer image",
        customerName: "Shameer Khan",
        about:
            "I never thought career guidance could be so eased out until I found Aspire Tech Academy. There have been instances I clearly remember that have helped me ace the interviews and secure a great job. They not only provided a thorough knowledge of data science concepts but also helped with their real-life applications.",
        offers: "Offer 9 LPA",
        position: "Professional 1 Product Delivery at DXC Technology",
    },
    {
        img: "/avatar-2.png",
        alt: "customer image",
        customerName: "Sindhu",
        about:
            "Thanks to Aspire Tech Academy for giving me a great kickstart for my career. Joined the course in my final year MBA and now I am placed with Flipkart",
        offers: "Offer 5.5 LPA",
        position: "Digital Marketer at Flipkart",
    },
    {
        img: "/avatar-2.png",
        alt: "customer image",
        customerName: "Suba",
        about:
            "This is a huge leap in my career. It was a very difficult decision for me to take this course working in BPO for 25k PM but now I realise this is the best decision I have ever taken.",
        offers: "Offer 6 LPA",
        position: "Content Marketer at Big Basket",
    },
    {
        img: "/avatar-2.png",
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
        count: "2000+",
        statusName: "Students trained",
    },
    {
        count: "7 LPA",
        statusName: "Average Salary",
    },
    {
        count: "100%",
        statusName: "Live Classes",
    },
    {
        count: "4/5",
        statusName: "Land dream job",
    },
];

export const trustedCompany = [
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
    "IBM Certified Courses - We provide you a certification from IBM",
    "Pay After Placement - You will be paying major chunk of the fee after landing in job",
    "ISO & IAF Certified Firm - Aspire Tech Academy is ISO & IAF certified",
    "Partner with 150+ hiring partners - Get hired after completing the course",
    "Guaranteed Interview Opportunities - We train you in such a way that you clear the interviews",
    "Affordable Fees - Quality education at affordable pricing",
    "Domain Specific Learning - We teach things in a core domain specific way for you to land in a job soon",
    "Expert Trainers - All our trainers are working professionals with minimum 5+ years of experience.",
];

// programs

export const dataScienceStatus = [
    {
        count: "31 March",
        statusName: "ENROLMENT ENDS",
        img: "/enrollment.svg",
    },
    {
        count: "7LPA+",
        statusName: "Avg Salary Package",
        img: "/salary.svg",
    },
    {
        count: "200+",
        statusName: "Hiring Partners",
        img: "/hiring-partner.svg",
    },
];

export const dataScienceSkillSets = [
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

export const dSAddonSyllabus = [
    "Bigdata, Sparck & Kafka, MongoDB",
    "Chat GPT",
    "Business Analytics",
    "Data WareHousing & ETL",
    "Data Analytics",
    "Cloud Computing (AWS, AZURE, CGP)",
    "Deployment of Machine Learning Models to Cloud",
    "Data Science Project Management",
];

export const DSTechSoftwares = [
    {
        img: "/tools/aws.webp",
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
        img: "/tools/matplotlib.jpg",
        alt: "matplotlib logo",
    },
    {
        img: "/tools/mysql.webp",
        alt: "mysql logo",
    },
    {
        img: "/tools/nlp.webp",
        alt: "nlp logo",
    },
    {
        img: "/tools/numpy.webp",
        alt: "numpy logo",
    },
    {
        img: "/tools/pandas.jpg",
        alt: "panda logo",
    },
    {
        img: "/tools/postgresql.webp",
        alt: "postgresql logo",
    },
    {
        img: "/tools/powerbi.jpg",
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
        img: "/tools/tableau.webp",
        alt: "tableau logo",
    },
    {
        img: "/tools/tensorflow.webp",
        alt: "tensorflow logo",
    },
    {
        img: "/tools/scikit.webp",
        alt: "scikit logo",
    },
    {
        img: "/tools/timeseries.jpg",
        alt: "time series logo",
    },
]

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
        img: "/aspire.png",
        alt: "image",
    },
];

export const DSProgramCurriculum = [
    {
        module: "Module 1-5",
        content: [
            "Statistics topics",
            "Probability topics",
            "Introduction to Mathematics for Data Science",
            "Linear Algebra topics",
            "Calculus topics",
        ],
    },
    {
        module: "Module 6-10",
        content: [
            "Introduction to Python",
            "Deep Dive - Functions, OOPS, Modules, Errors and Exceptions",
            "Data Manipulation",
            "Introduction to Machine Learning with Python",
            "Supervised Learning - I",
        ],
    },
    {
        module: "Module 11-15",
        content: [
            "Dimensionality Reduction",
            "Supervised Learning - II",
            "Unsupervised Learning",
            "Association Rules Mining and Recommendation Systems",
            "Reinforcement Learning",
        ],
    },
    {
        module: "Module 16-20",
        content: [
            "Data Clustering",
            "Time Series Analysis",
            "Model Selection and Boosting",
            "Sequences and File Operations",
            "Introduction to NumPy, Pandas, and Matplotlib",
        ],
    },
    {
        module: "Module 21-25",
        content: [
            "Natural Language Processing with Deep Learning in Python N",
            "Natural Language Processing in TensorFlow",
            "Introduction to Natural Language Processing",
            "A Refresher to Python",
            "Learn to use Regular Expressions",
        ],
    },
    {
        module: "Module 26-30",
        content: [
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

export const DSSpotlight = [
    {
        note: "Learn from Industry Experts who have achieved the success you aim for",
        img: "/aspire-vector.svg",
        alt: "image",
    },
    {
        note: "Placement-Oriented Training with Guaranteed Interviews & Job Support",
        img: "/aspire-vector.svg",
        alt: "image",
    },
    {
        note: "IBM Certification from an ISO & IAF Certified Company",
        img: "/aspire-vector.svg",
        alt: "image",
    },
    {
        note: "Money-Back Guarantee if promises aren't delivered",
        img: "/aspire-vector.svg",
        alt: "image",
    },
    {
        note: "Domain-Specific Curriculum tailored for real-world applications",
        img: "/aspire-vector.svg",
        alt: "image",
    },
    {
        note: "1:1 Mentoring & Doubt Clearance with expert guidance",
        img: "/aspire-vector.svg",
        alt: "image",
    },
    {
        note: "Mock Interviews & Dedicated Program Manager for personalized career support",
        img: "/aspire-vector.svg",
        alt: "image",
    },
    {
        note: "Only 15 Students per Batch with 24/7 LMS Access for focused and flexible learning",
        img: "/aspire-vector.svg",
        alt: "image",
    },
];

export const DSGuidedBySection = [
    {
        img: "/aspire-vector.svg",
        alt: "image",
        customer: "Advaith R P",
        positionDetail: "Data Scientist at ExcelR",
        aboutCourse:
            "He is our ace trainer working in one of the leading market research companies based out of London and has extensive experience in the field of Analytics. He has been with us for over 2 years.",
    },
    {
        img: "/aspire-vector.svg",
        alt: "image",
        customer: "Thejasvi T V",
        positionDetail: "Data Science Manager",
        aboutCourse:
            "Data Scientist and a Certified Six Sigma Black Belt (ASQ) with 15+ years of experience in applying statistical techniques for solving business problems across industry verticals. Read more",
    },
    {
        img: "/aspire-vector.svg",
        alt: "image",
        customer: "Udayan Goswami",
        positionDetail:
            "Statistics-Masters in Data Science & FinTech at the University of London",
        aboutCourse:
            "Experience in building predictive and statistical models with a demonstrated history of working in the information technology and services industry. Skilled in python, pyspark,",
    },
    {
        img: "/aspire-vector.svg",
        alt: "image",
        customer: "Chandra Shekar Gogula",
        positionDetail: "Consultant at TCS (Data Scientist)",
        aboutCourse:
            "Chandra Sekhar is a Data Scientist professional with close to 9+ years of experience in Machine Learning, Statistical Modelling, Data Science, Predictive Analytics & Business Consulting.",
    },
];
