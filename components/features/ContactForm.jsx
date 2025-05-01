"use client";
import { useState } from "react";
import Loader from "../UI/Loader";

const initialFormData = {
    name: "",
    email: "",
    message: "",
    phoneNo: ""
};
export const ContactForm = ({ title }) => {
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
                    message: formData.message,
                    phoneNo: formData.phoneNo,
                    title
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
            }
        } catch (error) {
            console.error("Error sending emails:", error);
            setStatus(false);
        }
    };
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w-full space-y-6 md:space-y-10 border-4 border-borderColor p-6 rounded-lg max-w-6xl mx-auto bg-white"
            >
                <div className="gap-2 flex flex-col">
                    {/* <label htmlFor="name" className="capitalize font-bold tracking-wider">
                        name
                    </label> */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name || ""}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="focus-within:rounded-lg p-4 border-b-2  border-[#CACACA] placeholder:text-foreground focus-within:border-2 focus-within:border-[#CACACA] focus-within:outline-none"
                    />
                </div>
                <div className="gap-2 flex flex-col">
                    {/* <label htmlFor="email" className="capitalize font-bold tracking-wider">
                        email
                    </label> */}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
                        className="focus-within:rounded-lg p-4 border-b-2  border-[#CACACA] placeholder:text-foreground focus-within:border-2 focus-within:border-[#CACACA] focus-within:outline-none"
                    />
                </div>
                <div className="gap-2 flex flex-col">
                    {/* <label htmlFor="email" className="capitalize font-bold tracking-wider">
                        Phone Number (optional)
                    </label> */}
                    <input
                        type="text"
                        id="phone"
                        name="phoneNo"
                        value={formData.phoneNo || ""}
                        onChange={handleChange}
                        placeholder="Phone Number (optional)"
                        className="focus-within:rounded-lg p-4 border-b-2  border-[#CACACA] placeholder:text-foreground focus-within:border-2 focus-within:border-[#CACACA] focus-within:outline-none"
                    />
                </div>
                <div className="gap-2 flex flex-col">
                    {/* <label htmlFor="message" className="capitalize font-bold tracking-wider">
                        message
                    </label> */}
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message || ""}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Message"
                        className="focus-within:rounded-lg p-4 border-b-2  border-[#CACACA] placeholder:text-foreground focus-within:border-2 focus-within:border-[#CACACA] focus-within:outline-none"
                    />
                </div>
                <button
                    role="button"
                    aria-label="Submit Form"
                    type="submit"
                    className="rounded-lg w-max border-2 border-solid border-white flex justify-center items-center gap-3 bg-btn px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-white text-sm md:text-base transition-all duration-300 hover:scale-110 hover:bg-primary cursor-pointer"
                >
                    {status ? <Loader /> : "Let's Shape the  Future!"}
                </button>
            </form>
        </>
    );
};
