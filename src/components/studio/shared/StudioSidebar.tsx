"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { BiHome } from "react-icons/bi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Props {
  onLinkClick?: () => void;
  className?: string;
}

const StudioSidebar: React.FC<Props> = ({ onLinkClick, className }) => {
  const pathname = usePathname();

  const SIDEBAR_NAV_TABS = [
    { link: "/studio/games/", label: "Games", logo: <IoGameController /> },
    { link: "/studio/vesting/", label: "Vesting", logo: <FaMoneyBill1Wave /> },
    {
      link: "/studio/staking/",
      label: "Staking",
      logo: <FaMoneyBillTrendUp />,
    },
  ];

  return (
    <div
      className={`${className} relative bg-gradient-to-t from-[#16C6ED] via-[#AF82F7] to-[#F808C1] w-fit h-[70vh] p-[1px] rounded-tr-md rounded-br-md`}
    >
      <div className="absolute hidden lg:block py-3  top-0 left-1/2 -translate-x-1/2">
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
      </div>

      <nav className="w-full h-full flex flex-col gap-4 justify-center items-center p-4 rounded-tr-md rounded-br-md bg-[#0f1114]">
        {SIDEBAR_NAV_TABS.map(({ link, logo, label }, index) => {
          return (
            <Link
              key={index}
              href={link}
              onClick={onLinkClick}
              className={`${
                pathname === link
                  ? "bg-gradient-to-l from-[#16C6ED] via-[#AF82F7] to-[#F808C1] text-white"
                  : "text-white/50 "
              } w-full py-2 px-4 rounded-md flex justify-center items-center gap-2`}
            >
              {logo}
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default StudioSidebar;
