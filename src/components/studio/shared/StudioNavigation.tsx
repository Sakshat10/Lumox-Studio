"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import StudioNavbar from "./StudioNavbar";
import StudioSidebar from "./StudioSidebar";
import Searchbar from "./Searchbar";
import { usePathname } from "next/navigation";
import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Custom from "@/components/shared/CustomConnectButton";

const StudioNavigation: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [isHidden, setIsHidden] = useState({
    searchbar: false,
    navbar: false,
    sidebar: isTabletOrMobile,
  });

  const lastYRef = useRef<number>(0);
  const pathname = usePathname();
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsHidden((prev) => ({
      ...prev,
      sidebar: isTabletOrMobile,
    }));
  }, [isTabletOrMobile]);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;

    if (Math.abs(difference) > 2) {
      if (isTabletOrMobile) {
        setIsHidden({
          searchbar: false,
          navbar: false,
          sidebar: true,
        });
      } else {
        setIsHidden({
          searchbar: difference > 0,
          navbar: difference > 0,
          sidebar: difference > 0,
        });
      }
    }

    lastYRef.current = y;
  });

  const handleToggleVisibility = () => {
    setIsHidden((prev) => ({
      sidebar: !prev.sidebar,
      searchbar: !prev.searchbar,
      navbar: !prev.navbar,
    }));
  };

  const handleLinkClick = () => {
    setIsHidden({
      sidebar: true,
      searchbar: false,
      navbar: false,
    });
  };

  const logoVariants = {
    // hidden: { x: "-100%" },
    visible: { top: "0", scaleX: 1 },
  };

  const searchVariants = {
    hidden: { x: "100%", right: 12 },
    visible: { top: "12px", right: 8, x: "0%" },
  };

  const sidebarVariants = {
    hidden: { x: "-100%", left: 12 },
    visible: { top: "50%", y: "-50%", left: 8, x: "0%" },
  };

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

  return (
    <div className="h-fit">
      <motion.div
        initial="visible"
        variants={logoVariants}
        animate="visible"
        transition={{ duration: 0.3 }}
        className="fixed lg:hidden py-3 w-full h-fit top-0 pl-6 z-[99]"
      >
        <Link href="/" className="inline-block">
          <motion.img
            whileHover={{
              scaleX: [1, 1.2, 1.2, 1, 1],
              cursor: "pointer",
              transition: {
                duration: 0.3,
                ease: "circInOut",
              },
            }}
            src="/images/shared/lumoxLogo.png"
            alt="logo"
            className="object-contain w-16 md:w-24 aspect-video"
          />
        </Link>
      </motion.div>

      <motion.div
        initial="visible"
        whileHover="visible"
        variants={navVariants}
        animate={isHidden.navbar ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
        className="fixed z-[99] left-1/2 [--bottom-from:12px] [--bottom-to:8px] lg:[--bottom-from:auto] lg:[--bottom-to:auto] lg:[--top-from:16px] lg:[--top-to:4px] [--y-from:100%] lg:[--y-from:-100%] [--y-to:0%]"
      >
        <StudioNavbar />
      </motion.div>

      <motion.div
        initial="visible"
        whileHover="visible"
        variants={searchVariants}
        animate={isHidden.searchbar ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
        className="fixed z-[99] text-sm"
      >
        {pathname === "/studio/games/" ? <Searchbar /> : <Custom />}
      </motion.div>

      <motion.div
        initial="visible"
        whileHover="visible"
        variants={sidebarVariants}
        animate={isHidden.sidebar ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
        className="fixed lg:hidden z-[99]"
      >
        <div className="rounded-s-full w-12 h-4 bg-gradient-to-r from-[#F808C1] via-[#AF82F7] to-[#16C6ED] absolute right-2 top-4" />
        <div className="rounded-e-full w-12 h-4 bg-gradient-to-l from-[#F808C1] via-[#AF82F7] to-[#16C6ED] absolute left-2 bottom-4" />
        <StudioSidebar
          onLinkClick={isTabletOrMobile ? handleLinkClick : () => {}}
        />
      </motion.div>

      <div
        ref={menuContainerRef}
        className="w-full z-[-99] h-screen fixed top-0 left-0"
      ></div>

      <motion.div
        onClick={handleToggleVisibility}
        animate={{
          scale: [1, 1.2, 1, 1.2, 1],
          y: ["0%", "-50%", "0%", "50%", "0%"],
          transition: {
            delay: 1,
            repeat: 2,
            ease: "easeInOut",
            duration: 1,
          },
        }}
        drag
        dragConstraints={menuContainerRef}
        whileDrag={{ cursor: "grabbing" }}
        className="shadow-sm shadow-black fixed cursor-pointer size-12 rounded-full [background:radial-gradient(circle_at_100%,#F808C1_0,#AF82F7,#16C6ED_100%)] right-4 top-24 z-10 flex justify-center items-center"
      >
        {isHidden.sidebar ? <RiMenu5Fill /> : <RiCloseFill />}
      </motion.div>
    </div>
  );
};

export default StudioNavigation;
