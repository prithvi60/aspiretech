"use client"
import React, { useState } from 'react'
import Slider from 'react-slick';

const AchievementsSlider = ({ data }) => {
    const [isActive, setIsActive] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 7,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "25px",
        autoplay: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: false,
        beforeChange: (current, next) => {
            setIsActive(next)
        },
        responsive: [
            {
                breakpoint: 1950,
                settings: {
                    slidesToShow: 5,
                    centerPadding: "10px"
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    centerPadding: "15px"
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "0px"
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "10px"
                }
            }
        ],
    };
    return (
        <section className='w-full h-full slider-container overflow-hidden'>
            <Slider {...settings}>
                {data.map((list, idx) => (
                    <div key={idx} className="py-2 my-1.5 md:my-3">
                        <h2
                            className={`transition-colors transform px-2 md:px-5 py-4 text-[clamp(0.75rem,1.15vw,1rem)] w-36 md:w-48 xl:w-60 text-center duration-700 ease-in-out slick-center:scale-110 rounded-full ${isActive === idx
                                ? "scale-110 border-[3px] md:border-4 text-foreground font-extrabold border-primary bg-white"
                                : "bg-background text-foreground border-2 border-[#BAB9BD]/30"
                                }`}
                        >
                            {list}
                        </h2>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default AchievementsSlider
