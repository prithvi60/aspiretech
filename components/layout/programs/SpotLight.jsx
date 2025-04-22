"use client"
import { SectionHeading } from '@/components/UI/SectionHeading'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

const SpotLight = ({ data }) => {
    const [isActive, setIsActive] = useState(0);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: "0px",
        autoplay: 2000,
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
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3
                }
            },
        ],
    };

    return (
        <section className="w-full h-full padding space-y-10 md:space-y-20 relative">
            <SectionHeading text={"The Reasons you will be under spotlight"} />
            <div
                className="flex flex-col-reverse lg:flex-row justify-between gap-8 md:gap-4 font-inter h-full max-w-[1660px] mx-auto"
            >
                <div className="w-full lg:w-2/5 space-y-6 md:space-y-10">
                    <div className="space-y-1.5 md:space-y-3 slider-container">
                        <Slider
                            arrows={false}
                            asNavFor={nav1}
                            ref={(slider) => (sliderRef2 = slider)}
                            waitForAnimate={false}
                            {...settings}
                            className='spotlight'
                        >
                            {data.map((list, idx) => (
                                <p key={idx}
                                    className={`p-4 md:p-6 ${isActive === idx ? "bg-primary/45 text-primary" : "text-[#BAB9BD] border-2 border-[#BAB9BD]/30"}  text-[clamp(1rem,1.15vw,1.45rem)] leading-5 md:leading-7 font-bold tracking-tight rounded-xl`}
                                >
                                    {list.note}
                                </p>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="hidden md:block w-full lg:w-3/5 space-y-6 md:space-y-10 slider-container">
                    <Slider
                        arrows={false}
                        asNavFor={nav2}
                        waitForAnimate={false}
                        fade={true}
                        vertical
                        draggable={false}
                        autoplaySpeed={2000}
                        ref={(slider) => (sliderRef1 = slider)}
                    >
                        {data.map((item, id) => (
                            <div className="relative overflow-hidden rounded-xl w-full h-72 lg:w-full lg:h-[490px]" key={id}>
                                <Image
                                    src={item.img}
                                    fill
                                    alt={item.alt}
                                    className="object-contain lg:object-contain object-center"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default SpotLight
