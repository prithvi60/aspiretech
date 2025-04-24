"use client"
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { SectionHeading } from "../UI/SectionHeading";
import { aspireSets } from "@/utils/Data";

const AspireTechSets = ({ title, data, pageSection }) => {
    // const [isInView, setIsInView] = useState(false);
    const [isActive, setIsActive] = useState(false);
    // const containerRef = useRef(null);
    // const sliderRef = useRef(null);

    // Slick slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        className: "center",
        centerPadding: "60px",
        autoplay: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: false,
        beforeChange: (current, next) => {
            setIsActive(current)
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }
        ],
    };

    // // Detect if component is in viewport
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsInView(entry.isIntersecting);
    //         },
    //         { threshold: 0.5 } // Adjust threshold as needed
    //     );

    //     const currentRef = containerRef.current;
    //     if (currentRef) {
    //         observer.observe(currentRef);
    //     }

    //     return () => {
    //         if (currentRef) {
    //             observer.unobserve(currentRef);
    //         }
    //         observer.disconnect();
    //     };
    // }, []);

    // // Control slider autoplay based on visibility
    // useEffect(() => {
    //     if (sliderRef.current) {
    //         if (isInView) {
    //             sliderRef.current.slickPlay();
    //         } else {
    //             sliderRef.current.slickPause();
    //         }
    //     }
    // }, [isInView]);
    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={title} />

            <div className="w-full min-h-[420px] md:min-h-[550px] py-8 slider-container">
                <Slider {...settings} className="aspire-set">
                    {data.map((list, idx) => (
                        <div key={idx} className={`py-2 ${pageSection !== "progress" && "my-1.5 md:my-2"}`}>
                            <h2
                                className={`${pageSection === "progress" ? "border-2 border-borderColor " : "border-4 border-borderColor"} rounded-lg transition-colors transform px-10 py-5 text-[clamp(0.8rem,2vw,1.5rem)] text-foreground max-w-64 sm:max-w-lg lg:max-w-3xl mx-auto text-center duration-700 ease-in-out  slick-center:scale-110 bg-background  ${isActive === idx
                                    ? "scale-110 border-4 border-primary text-primary font-bold"
                                    : "bg-background text-foreground"
                                    }`}
                            >
                                {list}
                            </h2>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default AspireTechSets
