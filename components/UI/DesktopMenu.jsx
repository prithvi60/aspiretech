"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function DesktopMenu({ menu }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const hasSubMenu = menu?.subMenus?.length;

  return (
    <motion.li
      className={`group/link ${menu.menu === "Programs" && "relative"} font-medium tracking-wide`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={menu.menu}
    >
      <div
        className={`flex items-center gap-1 text-sm xl:text-[18px] cursor-pointer px-2 2xl:px-4 py-1.5 xl:py-2 rounded-lg font-medium`}
      >
        {hasSubMenu ? (
          <>
            <h4 className="capitalize">{menu.menu}</h4>
            <IoIosArrowDown
              className={`mt-[0.6px] group-hover/link:rotate-180 group-hover/link:text-primary duration-200 text-foreground`}
            />
          </>
        ) : (
          <Link
            title={menu.menu}
            href={menu.link || "#"}
            className="flex capitalize items-center hover:text-primary transition-all duration-500 ease-in-out gap-1 hover:underline underline-offset-4 decoration-primary"
          >
            <span>{menu.menu}</span>
          </Link>
        )}
      </div>

      <AnimatePresence>
        {isHover && hasSubMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute z-50 mt-2 top-12 bg-primary/80 text-foreground shadow-xl rounded-lg overflow-hidden w-max -left-0 xl:left-0 border-2 border-[var(--gradient-top)] backdrop-blur-xs`}
          >
            {menu.menu === "programs" ? (
              // Card-based layout
              <div className="px-3.5 py-4 w-full">
                <div className="relative space-y-2">
                  {menu.subMenus?.map((submenu, i) => (
                    <div key={i} className="py-2 rounded-lg transition">
                      <Link
                        title={submenu.menu}
                        href={submenu.link || "#"}
                        className="flex items-center gap-2 rounded-md p-3 hover:underline hover:scale-105 transition-all duration-300 underline-offset-4 decoration-primary capitalize"
                      >
                        {/* <span className="mr-2">{submenu.icon}</span> */}
                        <span className="font-semibold text-base text-foreground">
                          {submenu.menu}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Grid-based layout for all other submenus
              <div className={`px-6 py-6 w-full space-y-3`}>
                {menu.subMenus?.map((item, idx) => (
                  <div key={idx}>
                    <Link
                      title={item.menu}
                      href={item.link}
                      className="text-lg font-semibold pb-2.5 hover:underline hover:underline-offset-4 decoration-black transition-all duration-300 ease-in-out capitalize"
                    >
                      {item.menu}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
