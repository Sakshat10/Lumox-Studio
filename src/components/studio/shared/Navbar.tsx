"use client";
import { FaCopy } from "react-icons/fa";

import { STUDIO_NAVBAR_TABS } from "@/constants/studioNavbarTabs";
import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";
import { usePathname } from "next/navigation";
import Custom from "@/components/shared/CustomConnectButton";
import GradientText from "@/components/shared/GradientText";
import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const pathname = usePathname();

  const handleCopyAddress = () => {
    const address = "0x218617D3250bE4a1f182C28A1A94b1aB37d94235";
    navigator.clipboard
      .writeText(address)
      .then(() => {
        toast("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <nav
        className={`${className} lg:flex justify-between px-8 items-center lg:bg-[#101010] py-4 `}
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center text-white/50">
          {STUDIO_NAVBAR_TABS.map(({ label, link }, i) => (
            <Link
              href={link}
              key={i}
              className={`${
                link.includes("/studio") && "text-white"
              } cursor-pointer hover:bg-gray-100/10 px-4 py-2`}
            >
              {label}
            </Link>
          ))}
        </div>
        {pathname === "/studio/games/" ? (
          <Searchbar className="hidden lg:flex cursor-pointer" />
        ) : (
          <Custom className="hidden lg:flex" />
        )}
        {pathname === "/studio/vesting/" && (
          <div className="text-white absolute left-[50%] translate-x-[-50%]">
            <div className="flex gap-2 items-center pt-[1.8rem] lg:pt-0">
              <GradientText
                text="$LUMOX Address |"
                className="hidden lg:block"
              ></GradientText>
              <button onClick={handleCopyAddress} className="text-blue-500">
                <div className="flex gap-4 items-center">
                0x2186.....4235
                <FaCopy></FaCopy>
                </div>
              </button>
            </div>
          </div>
        )}
      </nav>
      <ToastContainer position="bottom-left" draggable />
    </>
  );
};

export default Navbar;
