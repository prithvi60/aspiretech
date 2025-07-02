import Image from "next/image";

const MasterSkills = () => {
    return (
        <div className="w-full relative padding text-foreground space-y-10 md:space-y-20">
            <div className="w-full space-y-1">
                <h2 className="text-[clamp(1rem,1.15vw,1.5rem)] text-primary">
                    Hands - on Training
                </h2>
                <h3 className="text-[clamp(1.3rem,2.5vw,3.05rem)] leading-6 md:leading-10 tracking-wide font-bold w-full md:w-4/5">
                    Master essential Tools and skills
                </h3>
            </div>
            <div className="rounded-lg w-full h-full flex flex-col gap-10 md:gap-6 lg:gap-10 md:flex-row justify-between text-foreground">
                <div className="w-full md:w-1/2 space-y-3 md:space-y-6">
                    {data.map((item, idx) => (
                        <div className="flex gap-3" key={idx}>
                            <Image
                                priority={false}
                                loading="lazy"
                                quality={100}
                                width={150}
                                height={150}
                                src={item.img}
                                alt={"icon"}
                                className="object-contain object-center shrink-0 size-16 lg:size-20"
                            />
                            <div className="block space-y-1">
                                <h3 className="text-lg lg:text-lg xl:text-2xl font-extrabold">
                                    {item.heading}
                                </h3>
                                <p className="font-inter text-xs xl:text-sm tracking-wide md:w-4/5">
                                    {item.subHeading}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2 xl:-mt-8">
                    <Image
                        width={850}
                        height={650}
                        src={"/master-tools.png"}
                        alt={"skills"}
                        priority={false}
                        loading="lazy"
                        quality={100}
                        className="w-full xl:w-4/5 h-auto"
                        sizes="(min-width: 1260px) 512px, (min-width: 780px) 42.61vw, (min-width: 600px) 512px, calc(92.86vw - 27px)"
                    />
                </div>
            </div>
        </div>
    )
}

export default MasterSkills

const data = [
    {
        img: "/essentials.svg",
        subHeading: "Deep Learning, Natural Language Processing (NLP), Generative AI (Gen AI), ChatGPT",
        heading: "Advanced AI & Deep Learning",
    },
    {
        img: "/essentials.svg",
        subHeading: "Cloud Computing (AWS, Azure, GCP), Deployment of Machine Learning Models to Cloud",
        heading: "Cloud & Deployment",
    },
    {
        img: "/essentials.svg",
        subHeading: "Big Data, Spark & Kafka, MongoDB, Data Warehousing & ETL",
        heading: "Big Data & Data Engineering",
    },
    {
        img: "/essentials.svg",
        subHeading: "Data Science Project Management",
        heading: "Project & Workflow Management",
    },
];