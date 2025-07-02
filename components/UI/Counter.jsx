"use client";
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stat = ({ num, suffix, decimals = 0, space, type }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const formatIndianNumber = (value) => {
        return value.toLocaleString("en-IN");
    };

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;
                {
                    type
                        ? (ref.current.textContent = formatIndianNumber(
                            parseFloat(value.toFixed(decimals))
                        ))
                        : (ref.current.textContent = value.toFixed(decimals));
                }
                // ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <>
            {!type ? (
                <h3
                    className={`${space ? "text-[clamp(1.8rem,3vw,5.1rem)]" : type ? "text-[clamp(1.8rem,3vw,3.74rem)]" : "text-[clamp(1.8rem,2.5vw,3.15rem)]"} tracking-wide font-extrabold text-black`}
                >
                    <span
                        className="font-extrabold"
                        ref={ref}
                    >
                        {num}
                    </span>
                    {suffix}
                </h3>
            ) : (
                <h3
                    className={`text-[clamp(1.8rem,3vw,3.74rem)] tracking-wide font-extrabold text-black`}
                >
                    {suffix}
                    <span
                        className="text-[clamp(1.8rem,3vw,5.1rem)] font-extrabold"
                        ref={ref}
                    >
                        {formatIndianNumber(num)}
                    </span>
                </h3>
            )}
        </>
    );
};
