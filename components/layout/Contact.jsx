import React from "react";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { ContactForm } from "@/components/features/ContactForm";
import { socialLinks } from "@/utils/Data";
import Link from "next/link";

const Contact = () => {
    return (
        <section className="w-full relative padding text-foreground space-y-12 md:space-y-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                <div className="space-y-3 w-full md:w-4/5">
                    <h1 className="text-[clamp(1.1rem,1.15vw,1.5rem)] text-primary font-semibold">Reach Out</h1>
                    <h2 className="font-bold text-3xl md:text-6xl xl:text-[90px] text-gradient">
                        We're Here for You - Every Step of the Way
                    </h2>
                </div>
                <ul className="flex gap-4 justify-start w-full md:w-auto md:block space-y-4">
                    {socialLinks.map((list, idx) => (
                        <li key={idx} className="flex-shrink-0">
                            <Link title="social icons" href={list.href}>
                                {list.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <ContactForm />
            <div className="rounded-2xl w-full h-full flex flex-col gap-10 md:gap-0 md:flex-row justify-between font-inter text-foreground px-14 py-20 border-4 md:border-6 border-borderColor mt-32 md:mt-44 bg-white">
                <div className="w-full md:w-2/5 lg:w-1/2 space-y-3 md:space-y-5">
                    <h3 className="text-[clamp(1rem,1.15vw,1.5rem)]">Contact Info</h3>
                    <h4 className="text-[clamp(1.3rem,2.5vw,3.3rem)] leading-6 md:leading-10 tracking-wide font-bold w-full md:w-4/5">
                        We are always happy to assist you
                    </h4>
                </div>
                <div className="w-full md:w-3/5 lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-x-5 md:gap-y-10 py-4">
                    <div className="space-y-3 md:space-y-5">
                        <h3 className="text-[clamp(1.2rem,1.15vw,1.4rem)]">
                            Email Address
                        </h3>
                        <hr className="w-10 p-[1px] bg-foreground rounded-md" />
                        <h3 className="text-[clamp(0.9rem,1.15vw,1.4rem)] leading-4 md:leading-6 font-semibold">
                            connect@aspiretechacademy.com
                        </h3>
                        {/* <p className="text-[clamp(1rem,1.15vw,1.25rem)] leading-6 font-normal">
                            Assistance hours: <br />
                            Monday - Friday 6 am to
                            <br />
                            8 pm EST <br />
                        </p> */}
                    </div>
                    <div className="space-y-3 md:space-y-5">
                        <h3 className="text-[clamp(1.1rem,1.15vw,1.4rem)]">Phone Number</h3>
                        <hr className="w-10 p-[1px] bg-foreground rounded-md" />
                        <h3 className="text-[clamp(1rem,1.15vw,1.4rem)] leading-4 md:leading-6 font-semibold">
                            +91-9036879156
                        </h3>
                    </div>
                    <div className="space-y-3 md:space-y-6">
                        <h3 className="text-[clamp(1.1rem,1.15vw,1.4rem)]">Office Address</h3>
                        <hr className="w-10 p-[1px] bg-foreground rounded-md" />
                        <h3 className="text-[clamp(1rem,1.15vw,1.4rem)] leading-6 font-semibold">
                            504, Tribe Co-working Space,  1st floor, Sector 3, HSR Layout, Bengaluru, Karnataka-560102
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
