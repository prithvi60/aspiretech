import Link from "next/link";
import { footerLinks1, footerLinks2, footerLinks3, socialLinks } from "@/utils/Data";
import Image from "next/image";

const Footer = () => {

    return (
        <footer className={`relative overflow-hidden w-full text-footerText font-inter bg-footerBg`}>
            <div className="space-y-6 md:space-y-10 padding">
                <div className="size-64 md:size-[450px] z-0 absolute top-0 -left-24 block">
                    <Link href="/" title="logo" >
                        <Image
                            title={"logo"}
                            src={"/aspire-footer.svg"}
                            alt="aspire tech logo"
                            fill
                            className="object-contain object-center"
                        />
                    </Link>
                </div>
                <div className="flex flex-col md:justify-center md:items-center lg:items-start lg:flex-row lg:justify-between gap-6 lg:gap-8 w-full relative z-10">
                    <div className="flex flex-col gap-y-6 w-full md:w-2/5">
                        <Link
                            title="logo"
                            href={"/"}
                            className="flex items-center gap-2"
                        >
                            <Image title={"logo"}
                                src={"/aspire-logo-1.svg"}
                                alt="aspire tech logo" width={250} height={180} className="object-contain object-center" />
                        </Link>
                        <p className="text-lg md:text-xl tracking-wide font-bold text-foreground w-11/12">Empowering Minds & Transforming Futures</p>
                        <ul className="flex items-center gap-5">
                            {socialLinks.map((list, idx) => (
                                <li key={idx} className="flex-shrink-0">
                                    <Link title="footer social icons" href={list.href}>{list.icon}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-5 md:gap-6">
                            <p className="text-sm font-semibold md:text-lg text-footerText">Contact:</p>
                            <div className="text-sm font-semibold md:text-lg text-footerText">
                                <p className="w-full">connect@aspiretechacademy.com</p>
                                <p className="w-full">+91-9036879156</p>
                            </div>
                        </div>
                        <div className="flex gap-5 md:gap-6">
                            <p className="text-sm font-semibold md:text-lg text-footerText">Office Address:</p>
                            <div className="text-sm font-semibold md:text-lg text-footerText">
                                <p className="w-full md:w-4/5">504, Tribe Co-working Space,  1st floor, Sector 3, HSR Layout, Bengaluru, Karnataka 560102</p>
                                {/* <p className="w-max">+91-9036879156</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:items-start md:justify-between md:flex-row gap-x-0 gap-y-10 md:gap-12 w-full md:w-3/5">
                        <div className="block space-y-3">
                            <h4 className="uppercase font-extrabold text-primary tracking-wider text-sm md:text-base">
                                PRODUCT COURSES
                            </h4>
                            <ul className="block space-y-2.5 md:space-y-4">
                                {footerLinks1.map((list, idx) => (
                                    <li
                                        key={idx}
                                        className={`text-base capitalize hover:underline hover:underline-offset-4 decoration-primary md:text-lg tracking-wide font-bold`}
                                    >
                                        <Link title={list.menu} href={list.href}>{list.menu}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="block space-y-3">
                            <h4 className="uppercase font-extrabold text-primary tracking-wider text-sm md:text-base">
                                EXPLORE
                            </h4>
                            <ul className="block space-y-2.5 md:space-y-4">
                                {footerLinks2.map((list, idx) => (
                                    <li
                                        key={idx}
                                        className={`text-base capitalize hover:underline hover:underline-offset-4 decoration-primary md:text-lg tracking-wide font-bold`}
                                    >
                                        <Link title={list.menu} href={list.href}>{list.menu}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="block space-y-3">
                            <h4 className="uppercase font-extrabold text-primary tracking-wider text-sm md:text-base">
                                ASPIRE
                            </h4>
                            <ul className="block space-y-2.5 md:space-y-4">
                                {footerLinks3.map((list, idx) => (
                                    <li
                                        key={idx}
                                        className={`text-base capitalize hover:underline hover:underline-offset-4 decoration-primary md:text-lg tracking-wide font-bold`}
                                    >
                                        <Link title={list.menu} href={list.href}>{list.menu}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
