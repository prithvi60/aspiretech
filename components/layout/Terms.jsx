import React from "react";
import { SectionHeading } from "../UI/SectionHeading";
import { terms } from "@/utils/Data";

const Terms = () => {
    return (
        <div className="w-full h-full space-y-10 md:space-y-20">
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Terms"} space />
                <div className="space-y-4 md:space-y-6">
                    {terms.map((list, idx) => (
                        <p
                            key={idx}
                            className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                        >
                            {list}
                        </p>
                    ))}
                </div>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Access and Use of the Service"} space />
                <SectionHeading text={"Service Usage:"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    {
                        "The 'Aspire Tech Academy' service and any content accessed through it are intended solely for your personal and non-commercial use. When you purchase an 'Aspire Tech Academy' program, we grant you a limited, non-exclusive, non-transferable license to access 'Aspire Tech Academy' content and stream your course(s) exclusively for personal educational purposes. Except for this limited license, no rights, titles, or interests are transferred to you. Public performances using the service are prohibited. 'Aspire Tech Academy' reserves the right to revoke your license at its discretion. If your license is revoked, you must promptly delete all downloaded or otherwise obtained content from the service, along with any copies, whether in compliance with these Terms of Service or otherwise."
                    }
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Registration Requirements:"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    {
                        "To access and utilise specific features of the Service, you may need to register with 'Aspire Tech Academy'. By registering for the Service, you agree to provide accurate, up-to-date, and complete information about yourself as prompted by the Service's registration form."
                    }
                </p>
            </div>
        </div>
    );
};

export default Terms;
