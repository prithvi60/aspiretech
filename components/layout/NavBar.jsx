"use client"
import React from "react";
import Link from "next/link";
import DesktopMenu from "../UI/DesktopMenu";
import MobMenu from "../UI/MobMenu";
import { navLinks } from "@/utils/Data";
import Image from "next/image";
import { Button1, CTAButton } from "../UI/Button";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname()

  return (
    <header className={`px-5 md:px-14 lg:px-20 pt-6 md:pt-4 text-lg ${path.startsWith("/programs") ? "static" : "z-50 sticky inset-0"} flex items-center backdrop-blur-md text-foreground bg-background/80`}>
      <nav className="flex justify-between items-center w-full">
        <div className="w-64 relative h-16 hidden md:block">
          <Link href="/" title="logo" >
            <Image
              title={"logo"}
              src={"/aspire-logo-1.svg"}
              alt="aspire tech logo"
              fill
              className="object-contain object-center"
            />
          </Link>
        </div>
        <div className="w-20 relative h-10 block md:hidden">
          <Link href="/" title="logo" >
            <Image
              title={"logo"}
              src={"/aspire-logo-2.svg"}
              alt="aspire tech logo"
              fill
              className="object-contain object-center"
            />
          </Link>
        </div>
        {/* navbar menu lists */}
        <div className="flex items-center gap-0.5 sm:gap-x-3.5 xl:gap-x-5">
          <ul className="gap-x-1 lg:!flex items-center hidden ">
            {navLinks.map((menu, idx) => (
              <DesktopMenu key={idx} menu={menu} />
            ))}
          </ul>
          <div className="block lg:hidden">
            <CTAButton text={"contact us"} href={"/contact"} />
          </div>
          <div className="md:ml-4 flex items-center">
            <div className="lg:!hidden ml-2">
              <MobMenu Menus={navLinks} />
            </div>
          </div>
          <div className="hidden lg:!block">
            <CTAButton text={"contact us"} href={"/contact"} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
