"use client";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(
    () => import("@/components/layout/MarqueeHero"),
    {
        ssr: false,
    }
);

const HeroMarqueeComponent = () => {
    return <HeavyComponent />;
};

export default HeroMarqueeComponent;
