"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Loader from "@/components/UI/Loader";
import Link from "next/link";

export const ProgramsModal = ({ title, data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [thank, setThank] = useState(false);
    // const [pdf, setPdf] = useState("");
    // const [field, setField] = useState("");

    return (
        <div>
            <button
                title={`Download Brochure page`}
                role="button"
                className="w-max transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                onClick={() => {
                    setIsOpen(true);
                    setThank(false);
                }}
            >
                <div
                    className={`bg-white flex justify-between items-center gap-2 md:gap-4 hover:shadow-[4px_4px_0px_var(--primary)] text-center text-black font-bold w-full cursor-pointer px-4 py-2 md:py-3 md:px-8 capitalize text-[clamp(0.7rem,1.15vw,1.1rem)] rounded-lg`}
                >
                    Download Brochure
                    <span>
                        <FiArrowRight className="shrink-0 text-base md:text-lg text-background" />
                    </span>
                </div>
            </button>
            <SpringModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                // title={field}
                thank={thank}
                setThank={setThank}
            // pdf={pdf}
            />
        </div>
    );
};

export const SpringModal = ({
    isOpen,
    setIsOpen,
    // title,
    thank,
    setThank,
    // pdf,
}) => {
    const initialFormData = {
        name: "",
        email: "",
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
                    message: "",
                    // title: title,
                    // pdf: pdf,
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
                    className="fixed inset-0 !z-[9999] grid w-full h-full p-6 md:p-8 overflow-y-scroll no_scrollbar cursor-pointer bg-[#0000001A] backdrop-blur place-items-center font-Montserrat"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-xl overflow-scroll no_scrollbar bg-linear-to-b from-primary/90 via-secondary/70 to-stone-950 rounded-lg cursor-default md:p-8 md:max-w-xl no-scrollbar border border-primary/60 shadow-2xl"
                    >
                        {thank ? (
                            <div className="w-full mt-5 space-y-2 p-4 md:p-8">
                                <Image
                                    title="thumbs up icon"
                                    src={"/thumbs-up.gif"}
                                    alt="thumbs up icon"
                                    width={65}
                                    height={65}
                                />
                                <h3 className="text-base font-bold text-foreground md:text-lg">
                                    You're All Set!
                                </h3>
                                <p className="text-base md:text-lg">
                                    Check your inbox for access to our curated brochure.
                                </p>
                            </div>
                        ) : (
                            <div className="relative z-10 p-5 md:p-3">
                                <div className="w-full md:mt-5 space-y-4">
                                    <h3 className="font-extrabold text-[clamp(1.1rem,2.5vw,3rem)] leading-6 md:leading-10 text-center text-foreground">
                                        Instant Access to Course Details - Just One Click Away
                                    </h3>
                                </div>
                                <div className="relative w-full max-w-md mx-auto">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="relative z-10 space-y-6 text-foreground md:space-y-8 py-4 md:py-7"
                                    >
                                        <div className="gap-2 flex flex-col items-start">
                                            <label
                                                htmlFor="name"
                                                className="capitalize tracking-wider"
                                            >
                                                name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name || ""}
                                                onChange={handleChange}
                                                className="rounded-lg border-3 p-2 border-text focus-within:border-2 focus-within:border-text focus-within:outline-none w-full"
                                            />
                                        </div>
                                        <div className="gap-2 flex flex-col  items-start">
                                            <label
                                                htmlFor="email"
                                                className="capitalize tracking-wider"
                                            >
                                                email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email || ""}
                                                onChange={handleChange}
                                                className="rounded-lg border-3 p-2 border-text focus-within:border-2 focus-within:border-text focus-within:outline-none w-full"
                                            />
                                        </div>
                                        <button
                                            role="button"
                                            aria-label="Submit Form"
                                            type="submit"
                                            className="rounded-lg w-full border-2 border-solid border-white flex justify-center items-center gap-3 bg-white px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-black text-sm md:text-base transition-all duration-300 hover:scale-105 hover:bg-primary cursor-pointer"
                                        >
                                            {status ? <Loader /> : "Download Brochure"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};