import React from "react";
import { ContactForm } from "@/components/features/ContactForm";
const CTSHero = ({ mainTitle, contactTitle }) => {
    return (
        <section className="w-full relative padding text-foreground space-y-12 md:space-y-24">
            <h2 className="font-bold text-3xl md:text-6xl xl:text-[90px] text-gradient">
                {mainTitle}
            </h2>
            <ContactForm title={contactTitle} />
        </section>
    );
};

export default CTSHero;
