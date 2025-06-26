"use client";
import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export const Button1 = ({ text, href, type }) => {
    return (
        <button title={`${text} page`} role="button" className="w-max">
            <Link
                title={`${text} page`}
                href={href || "#"}
                className="rounded-lg w-full border-2 border-solid border-white flex justify-center items-center gap-3 bg-white px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-black text-sm md:text-base transition-all duration-300 hover:scale-110 hover:bg-primary"
            >
                {text}
                {type && (
                    <span>
                        <FaArrowRight className="text-base md:text-lg" />
                    </span>
                )}
            </Link>
        </button>
    );
};

export const AnimateButton = ({ text, href, icon, clip }) => {
    return (
        <button
            title={`${text} page`}
            role="button"
            type="button"
            aria-label={`${text} button`}
            className="w-max transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
        >
            <Link
                title={`${text} page`}
                href={href || "#"}
                aria-label={`${text}`}
                className={`${clip ? "bg-background text-foreground" : "bg-btn text-background"} flex justify-between items-center gap-2 md:gap-4 hover:shadow-[4px_4px_0px_var(--primary)] text-center font-bold w-full cursor-pointer px-4 py-2 md:py-3 md:px-8 capitalize text-[clamp(0.7rem,1.15vw,1.1rem)] rounded-lg`}
            >
                {text}
                {icon && (
                    <span>
                        <FiArrowRight className="shrink-0 text-base md:text-lg text-background" />
                    </span>
                )}
            </Link>
        </button>
    );
};

const SPRING_OPTIONS = {
    mass: 1.5,
    stiffness: 500,
    damping: 100,
};

export const CTAButton = ({ type, text, href }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, SPRING_OPTIONS);
    const ySpring = useSpring(y, SPRING_OPTIONS);

    const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

    return (
        <Link
            href={href}
            className={`w-max bg-primary rounded-lg cursor-pointer`}
        >
            <motion.button
                ref={ref}
                style={{
                    transform,
                }}
                className={`group gap-5 font-extrabold capitalize bg-btn text-background flex h-full w-full items-center justify-between transition-all duration-300 rounded-lg cursor-pointer text-[clamp(0.6rem,1.15vw,1.1rem)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_var(--primary)] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none shadow-xl px-3 py-1.5 md:py-2.5 md:px-5`}
            >
                <Copy>{text}</Copy>
                <Arrow />
            </motion.button>
        </Link>
    );
};

const Copy = ({ children }) => {
    return (
        <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full text-sm md:text-base py-1">
                {children}
            </span>
            <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 text-sm md:text-base group-hover:translate-y-0 py-1">
                {children}
            </span>
        </span>
    );
};

const Arrow = () => (
    <div className="pointer-events-none flex h-6 w-4 md:w-6 mt-1.5 md:mt-0 overflow-hidden text-xl md:text-2xl">
        <FiArrowRight className="shrink-0 -translate-x-full text-green-lighter transition-transform duration-300 group-hover:translate-x-0" />
        <FiArrowRight className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
    </div>
);
