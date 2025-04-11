"use client"
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { SectionHeading } from "../UI/SectionHeading";
import { aspireSets } from "@/utils/Data";

const AspireTechSets = () => {
    const [isInView, setIsInView] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const containerRef = useRef(null);
    const sliderRef = useRef(null);

    // Slick slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: "0px",
        autoplay: isInView,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
        beforeChange: (current, next) => {
            setIsActive(current)
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }
        ],
    };

    // Detect if component is in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, []);

    // Control slider autoplay based on visibility
    useEffect(() => {
        if (sliderRef.current) {
            if (isInView) {
                sliderRef.current.slickPlay();
            } else {
                sliderRef.current.slickPause();
            }
        }
    }, [isInView]);
    return (
        <section ref={containerRef} className="w-full h-full padding space-y-10 md:space-y-20">
            <SectionHeading text={"What sets Aspire Tech Academy apart from the rest?"} />

            <div className="w-full min-h-[420px] md:min-h-[550px] py-8">
                <Slider ref={sliderRef} {...settings} className="aspire-set">
                    {aspireSets.map((list, idx) => (
                        <div key={idx} className="py-2 my-1.5 md:my-3">
                            <h2
                                className={`rounded-lg transition-colors transform px-10 py-5 text-[clamp(0.8rem,2vw,1.5rem)] max-w-64 sm:max-w-lg lg:max-w-4xl mx-auto text-center duration-700 ease-in-out shadow-[0px_0px_50px_-22px_var(--primary)] slick-center:scale-110 bg-radial-[at_50%_55%] from-[#1a1918] text-foreground via-[#1a1918] to-[#9494924b]  ${isActive === idx
                                    ? "scale-110 border-2 border-primary"
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
