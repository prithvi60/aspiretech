import React from "react";
import { SectionHeading } from "../UI/SectionHeading";
import { certificationsReq, followingActivities, referAFriend, refundPolicy, terms } from "@/utils/Data";

const Terms = () => {
    return (
        <div className="w-full h-full space-y-10 md:space-y-20 font-inter">
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Terms"} space />
                <ul className="space-y-4 md:space-y-6">
                    {terms.map((list, idx) => (
                        <li
                            key={idx}
                            className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                        >
                            {list}
                        </li>
                    ))}
                </ul>
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
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Service Modifications:"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    {
                        "'Aspire Tech Academy' retains the right to modify or discontinue, either temporarily or permanently, the Service (in whole or in part) with or without prior notice. You agree that 'Aspire Tech Academy' shall not be liable to you or any third party for any modifications, suspensions, or discontinuations of the Service. We are not obligated to retain your Accounts or Submitted Content for any duration beyond what may be mandated by applicable law."
                    }
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"General Use and Storage Practices:"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    {
                        "You acknowledge that 'Aspire Tech Academy' bears no responsibility or liability for the deletion or failure to store any data or other content maintained or uploaded via the Service. You also recognize that 'Aspire Tech Academy' reserves the right to terminate accounts that remain inactive for an extended period. Furthermore, 'Aspire Tech Academy' retains the right to alter these general practices and limitations at its sole discretion, with or without prior notice. Once you access the 'Aspire Tech Academy' or Programs, you are deemed a 'user' according to these Terms. You are accountable for all your activities associated with using the 'Aspire Tech Academy' and Programs. You hereby commit to full compliance with all relevant local, provincial, state, national, and international laws, treaties, and regulations in connection with such use. Unethical practices are strictly prohibited while using the 'Aspire Tech Academy'."
                    }
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Specifically, you will not engage in the following activities using the Service:"} space />
                <ul className="space-y-4 md:space-y-6 list-disc">
                    {followingActivities.map((list, idx) => (
                        <li
                            key={idx}
                            className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                        >
                            {list}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Certification Requirements"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    The criteria for certification in each course can be found in the offer letter/course details. Certification entails:
                </p>
                <ul className="space-y-4 md:space-y-6 list-disc">
                    {certificationsReq.map((list, idx) => (
                        <li
                            key={idx}
                            className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                        >
                            {list}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Placement Terms & Conditions"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    Aspire Tech Academy's placement cell supports students in various ways, including CV review, providing a question bank for job interviews, conducting preparatory interviews, and distributing CVs to hiring companies and agencies associated with Aspire Tech Academy. To be eligible for participation in placement activities, students must meet the following criteria:
                </p>
                <ul className="space-y-4 md:space-y-6 list-disc">
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Fulfilling all terms and conditions outlined in the Placement Guarantee/Assistance letter.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Completing the certification and related assessments and assignments.
                    </li>
                </ul>
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    There are specific guidelines students must adhere to to maintain their eligibility for potential interviews and other placement activities, including:
                </p>
                <ul className="space-y-4 md:space-y-6 list-disc">
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Keeping Aspire Tech Academy's placement cell informed of all communications with prospective employers.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Informing Aspire Tech Academy if shortlisted for an interview after resume submission.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Providing advance notice if deciding not to participate in a scheduled test or interview.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Taking the placement process seriously and maintaining professionalism.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Promptly notify the placement cell if unable to join a company after receiving an appointment or offer letter.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Limiting job offer rejections to five instances, after which reapplication is not allowed.
                    </li>
                </ul>
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    Any inquiries regarding placements should be directed exclusively to the placement cell and not through other Aspire Tech Academy departments or representatives.
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Refer a Friend"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    The referral program operates as follows:
                </p>
                <ul className="space-y-4 md:space-y-6 list-disc">
                    {referAFriend.map((list, idx) => (
                        <li
                            key={idx}
                            className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                        >
                            {list}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Payment Terms & Refund Policy"} space />
                <ul className="space-y-4 md:space-y-6 list-disc">
                    {refundPolicy.map((list, idx) => (
                        <li
                            key={idx}
                            className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                        >
                            {list}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"User Accounts, Registration, and Service Delivery"} space />
                <ul className="space-y-4 md:space-y-6 list-disc">
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        To participate in Aspire Tech Academy activities and apply for programs, users must register for a personal account by providing an email address and a unique password. After payment of program fees, access to the program and terms of use will be granted, with an invoice provided as proof of delivery.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Users must not share their User Account access with third parties and agree to use only one User Account. Provided information must be accurate and kept up-to-date. Inaccurate information may result in termination of use and program enrollment.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        As a student, you agree to complete relevant assignments for the enrolled programs.
                    </li>
                </ul>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Intellectual Property Rights"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    You acknowledge and agree that the Service may contain content or features (referred to as "Service Content") protected by copyright, patent, trademark, trade secret, or other proprietary rights and laws. You expressly agree not to modify, copy, frame, scrape, rent, lease, loan, sell, distribute, or create derivative works based on the Service or the Service Content, in whole or in part, except when authorized` by Aspire Tech Academy. This restriction does not apply to your User Content (as defined below) that you legally upload to the Service. In connection with your use of the Service, you shall not engage in or use any data mining, robots, scraping, or similar data gathering or extraction methods. If your access to the Service is blocked by Aspire Tech Academy (including blocking your IP address), you agree not to implement any measures to circumvent such blocking, such as masking your IP address or using a proxy IP address. Any use of the Service or the Service Content that goes beyond the specific authorizations herein is strictly prohibited. The technology and software supporting the Service or distributed in connection with it are the property of Aspire Tech Academy, our affiliates, and our partners (referred to as the "Software"). You agree not to copy, modify, create derivative works from, reverse engineer, reverse assemble or attempt to discover any source code, sell, assign, sublicense, or otherwise transfer any rights in the Software. Any rights not expressly granted herein are reserved by Aspire Tech Academy.
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Third-Party Websites"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    The Service may provide links or other access to other websites and resources on the Internet. Aspire Tech Academy has no control over such sites and resources and does not endorse them. You acknowledge and agree that Aspire Tech Academy is not responsible for and will not be liable for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, events, goods, or services available on or through such sites or resources. Any interactions you have with third parties while using the Service are solely between you and the third party, and you agree that Aspire Tech Academy is not liable for any loss or claim you may have against any such third party.
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Disputes Between Users"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    You agree that you are solely responsible for your interactions with other users of the Service, and Aspire Tech Academy will have no liability or responsibility in connection with such interactions. While Aspire Tech Academy reserves the right to get involved in disputes between you and other users of the Service, it is not obligated to do so.
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Termination"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    You acknowledge that Aspire Tech Academy, in its sole discretion, may suspend or terminate your account (or any part thereof) or your use of the Service and remove or delete any content within the Service for any reason, including, but not limited to, lack of use or a belief that you have violated or acted inconsistently with these Terms of Service. Any suspected fraudulent, abusive, or illegal activity that may be grounds for termination of your use of the Service may be referred to appropriate law enforcement authorities. Aspire Tech Academy may also discontinue providing the Service, or any part thereof, at any time with or without notice. You agree that any termination of your access to the Service under any provision of these Terms of Service may be affected without prior notice and acknowledge and agree that Aspire Tech Academy may immediately deactivate or delete your account and all related information and files in your account and/or bar any further access to such files or the Service. Furthermore, you agree that Aspire Tech Academy will not be liable to you or any third party for any termination of your access to the Service. If a user does not access the LMS for over a month, the University/Academic Institution and Aspire Tech Academy reserve the right to temporarily deactivate their user ID.
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Disclaimer of Warranties"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    Your use of the Service is at your sole risk. The Service is provided on an "as is" and "as available" basis, except as otherwise expressly provided herein. Aspire Tech Academy expressly disclaims all warranties of any kind, whether express, implied, or statutory, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Copyright Complaints"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    Aspire Tech Academy respects the intellectual property rights of others. If you believe that any materials on the Sites infringe upon your copyrights, please send the following information to Aspire Tech Academy's Copyright Designated Agent at the provided email address:
                </p>
                <ul className="space-y-4 md:space-y-6 list-disc">
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Identification of the copyrighted work claimed to have been infringed, or if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, along with information reasonably sufficient to permit the service provider to locate the material.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        Your address, telephone number, and email address.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        A statement by you that you have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law. A statement by you, made under penalty of perjury, that the information in your notification is accurate, and that you are the copyright owner or are authorized to act on the copyright owner's behalf.
                    </li>
                    <li
                        className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground ml-6 md:ml-8"
                    >
                        A physical or electronic signature of the copyright owner or the person authorized to act on behalf of the owner of the copyright interest.
                    </li>
                </ul>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Governing Law and Jurisdiction"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    The Services are managed by Aspire Tech Academy, located in Bangalore, Karnataka, India. You agree that any dispute related to these Terms will be governed by the laws of the State of Karnataka, excluding its conflicts of law provisions. You further consent to the personal jurisdiction of an exclusive venue in the national and state courts located in and serving Bangalore, Karnataka as the legal forum for any such dispute.
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Education Research"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    Aspire Tech Academy is committed to advancing the science of learning and teaching, and records of your participation in courses may be used for education research. Research findings will typically be reported at the aggregate level, and your identity will not be publicly disclosed in any research findings without your express consent.
                </p>
            </div>
            <div className="w-full h-full space-y-7 md:space-y-14">
                <SectionHeading text={"Force Majeure"} space />
                <p
                    className="text-[clamp(1rem,1.15vw,1.5rem)] leading-7 font-normal text-foreground"
                >
                    Neither party shall be liable to the other for any delay or failure in performance under these Terms, other than payment obligations, arising out of a cause beyond its control and without its fault or negligence. Such causes may include but are not limited to fires, floods, earthquakes, strikes, unavailability of necessary utilities, blackouts, acts of God, acts of declared or undeclared war, acts of regulatory agencies, or national disasters.
                </p>
            </div>
        </div>
    );
};

export default Terms;
