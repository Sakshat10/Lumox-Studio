"use client";

import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import Custom from "@/components/shared/CustomConnectButton";
import { HOME_NAVBAR_TABS } from "@/constants/homeNavbarTabs";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [isHidden, setIsHidden] = useState<boolean>(false);
  const lastYRef = useRef<number>(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;

    if (Math.abs(difference) > 10) {
      setIsHidden(difference > 0);
    }
    lastYRef.current = y;
  });

  const navVariants = {
    hidden: {
      top: "var(--top-from)",
      y: "var(--y-from)",
      bottom: "var(--bottom-from)",
      x: "-50%",
    },
    visible: {
      top: "var(--top-to)",
      y: "var(--y-to)",
      bottom: "var(--bottom-to)",
      x: "-50%",
    },
  };

  const logoVariants = {
    hidden: { x: "-100%" },
    visible: { top: "12px", x: 24, scaleX: 1 },
  };

  const buttonVariants = {
    hidden: { x: "100%", right: 24 },
    visible: { top: "12px", right: 16, x: "0%" },
  };

  return (
    <div
      className={`${
        (pathname.startsWith("/studio") || pathname.startsWith("/games")) &&
        "hidden"
      }`}
    >
      <motion.div
        initial="visible"
        variants={logoVariants}
        whileHover={{
          scaleX: [1, 1.2, 1.2, 1, 1],
          // rotate: [0, 0, 270, 270, 0],
          cursor: "pointer",
          transition: {
            duration: 0.3,
            ease: "circInOut",
          },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
        className="fixed z-[99] w-16 md:w-24 aspect-video"
      >
        <img
          src="/images/shared/lumoxLogo.png"
          alt="logo"
          className="object-contain w-full"
        />
      </motion.div>

      <motion.div
        initial="visible"
        whileHover="visible"
        variants={navVariants}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
        className="fixed z-[99] left-1/2 p-[1px] rounded-lg w-fit bg-[#17C6ED] text-white [--bottom-from:12px] [--bottom-to:8px] lg:[--bottom-from:auto] lg:[--bottom-to:auto] lg:[--top-from:8px] lg:[--top-to:12px] [--y-from:100%] lg:[--y-from:-100%] [--y-to:0%]"
      >
        <nav className="bg-black rounded-lg p-2 flex items-center gap-2">
          {HOME_NAVBAR_TABS.map(({ label, link, logo }, i) => {
            const isActive = pathname === link || pathname === `${link}/`;
            return (
              <Link
                href={link}
                key={i}
                target={label === "Whitepaper" ? "_blank" : ""}
                className={`group transition-all duration-300 cursor-pointer flex items-center gap-2 hover:bg-gray-100/15 px-4 py-1 rounded-md ${
                  isActive
                    ? "bg-gradient-to-r from-[#F808C1] to-[#17C6ED] hover:bg-gradient-to-l"
                    : ""
                }`}
              >
                <span>{logo}</span>{" "}
                <span className={`hidden lg:inline`}>{label}</span>
              </Link>
            );
          })}
        </nav>
      </motion.div>

      <motion.div
        initial="visible"
        whileHover="visible"
        variants={buttonVariants}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
        className="fixed z-[99] flex gap-4 text-sm text-white"
      >
        <Link href="/games/lumox">
          <BorderGradientBtn label="Play now!" className="text-white" />
        </Link>
        {/* <BorderGradientBtn label="Connect wallet" className="text-white" /> */}
        <Custom />
      </motion.div>
    </div>
  );
};

export default Navbar;
