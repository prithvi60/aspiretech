"use client";
import { useEffect, useState } from "react";
import { SpringModal } from "../layout/programs/Modal";

const ExitModalCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [thank, setThank] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
            setThank(false);
        }, 10000);
    }, []);

    return (
        <section>
            <SpringModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                thank={thank}
                setThank={setThank}
                title={"Aspire Project Brochure"}
                pdf={"/files/Aspire-Project-Brochure.pdf"}
                defaultVal
            />
        </section>
    );
};

export default ExitModalCard;
