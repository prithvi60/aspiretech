"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setOpenMenuIndex(null);
    setOpenSubMenuIndex(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div className="relative">
      <button role="button" aria-label="open or close"
        className="xl:hidden z-[999] relative"
        onClick={() => toggleDrawer()}
      >
        {isOpen ? (
          <IoClose className="text-black text-3xl rounded-full border border-black p-1" />
        ) : (
          <GiHamburgerMenu className="text-2xl" />
        )}
      </button>

      <motion.div
        className="fixed !z-50 left-0 right-0 top-0 no_scrollbar h-screen overflow-y-auto bg-primary/85 text-black p-6"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul className="mt-20">
          {Menus.map((menu, i) => {
            const isMenuOpen = openMenuIndex === i;
            const hasSubMenu = menu?.subMenus?.length;
            return (
              <li key={i} className="">
                <div className="p-4">
                  {hasSubMenu ? (
                    <div
                      className="flex justify-between font-semibold capitalize items-center text-lg rounded-md cursor-pointer relative"
                      onClick={() => {
                        setOpenMenuIndex(isMenuOpen ? null : i);
                      }}
                    >
                      <h1>{menu.menu}</h1>
                      <IoIosArrowDown
                        className={`ml-auto text-black ${isMenuOpen && "rotate-180"} `}
                      />
                    </div>
                  ) : (
                    <Link title={menu.menu}
                      onClick={() => {
                        toggleDrawer();
                      }}
                      href={menu.link ? menu.link : "#"}
                      className="capitalize text-lg font-semibold rounded-md relative"
                    >
                      {menu.menu}
                    </Link>
                  )}
                </div>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isMenuOpen ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {menu?.subMenus?.map((submenu, idx) => {
                      const isSubMenuOpen = openSubMenuIndex === idx;
                      return (
                        <li key={idx} className="cursor-pointer w-full">
                          <div
                            onClick={() => toggleDrawer()}
                            className="flex justify-between items-center rounded-md gap-x-2 w-full"
                          >
                            <Link title={submenu.menu}
                              href={submenu.link}
                              className="flex capitalize justify-between items-center w-full p-4 rounded-md cursor-pointer relative"
                              onClick={() =>
                                setOpenSubMenuIndex(isSubMenuOpen ? null : idx)
                              }
                            >
                              {submenu.menu}
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
