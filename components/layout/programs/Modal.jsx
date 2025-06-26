"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Loader from "@/components/UI/Loader";
import { CustomSelect } from "@/components/UI/CustomSelect";

export const ProgramsModal = ({ title, pdf, program }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [thank, setThank] = useState(false);
    return (
        <>
            <button
                title={`Download Brochure page`}
                role="button"
                className="w-full transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                onClick={() => {
                    setIsOpen(true);
                    setThank(false);
                }}
            >
                <div
                    className={`${program ? "px-4 py-2 md:py-3 md:px-8 sm:ms-4 text-[clamp(0.7rem,1.15vw,1.2rem)] font-bold text-black focus:outline-none rounded-lg border-2 hover:text-background transition-all duration-500 ease-in-out border-foreground/50 hover:bg-btn/90 hover:opacity-80 focus:z-10 focus:ring-4 focus:ring-btn/50 cursor-pointer" : "bg-btn flex justify-center items-center gap-2 md:gap-4 hover:shadow-[4px_4px_0px_var(--primary)] text-center text-background font-bold w-full cursor-pointer px-4 py-2 md:py-3 md:px-8 capitalize text-[clamp(0.7rem,1.15vw,1.1rem)] rounded-lg"}`}
                >
                    Download Brochure
                </div>
            </button>
            <SpringModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={title}
                thank={thank}
                setThank={setThank}
                pdf={pdf}
            />
        </>
    );
};

export const SpringModal = ({
    isOpen,
    setIsOpen,
    title,
    thank,
    setThank,
    pdf,
    defaultVal,
}) => {
    const initialFormData = {
        name: "",
        email: "",
        phoneNo: "",
        course: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(true);

        try {
            const emailResponse = await fetch("/api/sendMail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phoneNo: formData.phoneNo,
                    course: formData.course,
                    message: formData.message,
                    title: title,
                    pdf: pdf,
                }),
            });

            if (!emailResponse.ok) {
                const errorData = await emailResponse.text();
                throw new Error(
                    `Email API Error: ${emailResponse.status} ${errorData}`
                );
            }

            const emailDataResult = await emailResponse.json();

            // Check for success in both responses
            if (emailDataResult.success) {
                setStatus(false);
                setFormData(initialFormData);
                e.target.reset();
                setThank(true);
            }
        } catch (error) {
            console.error("Error sending emails:", error);
            setStatus(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => {
                        setIsOpen(false);
                        setThank(false);
                    }}
                    className="fixed inset-0 !z-[9999] grid w-full h-full p-6 md:p-8 overflow-y-scroll no_scrollbar cursor-pointer bg-primary/15 backdrop-blur place-items-center font-Montserrat"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-xl overflow-scroll no_scrollbar bg-background rounded-lg cursor-default p-4 md:p-8 md:max-w-lg shadow-2xl"
                    >
                        {thank ? (
                            <div className="w-full mt-5 space-y-2 p-4 md:p-8  text-foreground flex flex-col justify-center items-center">
                                <Image
                                    title="thumbs up icon"
                                    src={"/thumbs-up.gif"}
                                    alt="thumbs up icon"
                                    width={65}
                                    height={65}
                                    className=""
                                    quality={100}
                                    priority
                                    unoptimized
                                />
                                <h1 className="text-base font-bold md:text-lg">
                                    You're All Set!
                                </h1>
                                <p className="text-base md:text-lg font-inter">
                                    Check your inbox for access to our curated brochure.
                                </p>
                            </div>
                        ) : (
                            <div className="relative z-10">
                                <div className="w-full">
                                    <h1 className="font-extrabold text-[clamp(1.02rem,1.65vw,1.5rem)] leading-6 md:leading-10 text-center text-black">
                                        Book a free counseling call
                                    </h1>
                                    <h2 className="font-semibold text-[clamp(0.9rem,1.35vw,1.3rem)] text-center text-black">
                                        Enquire Now
                                    </h2>
                                </div>
                                <div className="relative w-full max-w-md mx-auto">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="relative z-10 text-foreground space-y-2 md:space-y-4 py-4 md:py-7"
                                    >
                                        <div className="gap-2 flex flex-col items-start">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name || ""}
                                                onChange={handleChange}
                                                placeholder="Name"
                                                className="rounded-lg border-3 p-2 border-primary focus-within:border-2 focus-within:border-primary focus-within:outline-none w-full placeholder:text-sm placeholder:md:text-base"
                                            />
                                        </div>
                                        <div className="gap-2 flex flex-col  items-start">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email || ""}
                                                onChange={handleChange}
                                                placeholder="Email ID"
                                                className="rounded-lg border-3 p-2 border-primary focus-within:border-2 focus-within:border-primary focus-within:outline-none w-full placeholder:text-sm placeholder:md:text-base"
                                            />
                                        </div>
                                        <div className="gap-2 flex flex-col items-start">
                                            <input
                                                type="text"
                                                id="phoneNo"
                                                name="phoneNo"
                                                required
                                                value={formData.phoneNo || ""}
                                                onChange={handleChange}
                                                placeholder="Phone No."
                                                className="rounded-lg border-3 p-2 border-primary focus-within:border-2 focus-within:border-primary focus-within:outline-none w-full placeholder:text-sm placeholder:md:text-base"
                                            />
                                        </div>
                                        {!defaultVal && (
                                            <CustomSelect
                                                name={"course"}
                                                val={formData.course}
                                                handleChange={handleChange}
                                            />
                                        )}
                                        <div className="gap-2 flex flex-col items-start">
                                            <textarea
                                                type="text"
                                                id="message"
                                                name="message"
                                                required
                                                value={formData.message || ""}
                                                onChange={handleChange}
                                                placeholder="Comment or Message"
                                                className="rounded-lg border-3 p-2 border-primary focus-within:border-2 focus-within:border-primary focus-within:outline-none w-full placeholder:text-sm placeholder:md:text-base"
                                            />
                                        </div>
                                        <button
                                            role="button"
                                            aria-label="Submit Form"
                                            type="submit"
                                            className="rounded-lg w-full border-2 border-solid border-white flex justify-center items-center gap-3 bg-btn px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-background text-sm md:text-base transition-all duration-300 hover:scale-105 hover:bg-primary cursor-pointer"
                                        >
                                            {status ? <Loader /> : "Download Brochure"}
                                        </button>
                                    </form>
                                </div>
                                <p className="font-semibold text-[clamp(0.8rem,1.25vw,1rem)] leading-4 md:leading-5 text-center text-foreground">
                                    Have questions? Send us your details, and we'll be in touch
                                    soon!
                                </p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
