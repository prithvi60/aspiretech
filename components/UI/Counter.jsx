"use client";
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";


export const Stat = ({ num, suffix, decimals = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <h4 className="text-[clamp(1.8rem,2.5vw,3.15rem)] tracking-wide font-extrabold">
            <span ref={ref}></span>
            {suffix}
        </h4>
    );
};