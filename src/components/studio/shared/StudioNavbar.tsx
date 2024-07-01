import { motion } from "framer-motion";
import Link from "next/link";
import { STUDIO_NAVBAR_TABS } from "@/constants/studioNavbarTabs";
import React from "react";
import { toast } from "react-hot-toast";
import GradientText from "@/components/shared/GradientText";
import { FaCopy } from "react-icons/fa";
import { usePathname } from "next/navigation";

const StudioNavbar: React.FC = () => {
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
    <div className="p-[1px] rounded-lg w-fit bg-[#17C6ED] text-white ">
      <nav className="bg-black rounded-lg p-2 flex items-center gap-2">
        {STUDIO_NAVBAR_TABS.map(({ label, link, logo }, i) => {
          const isActive = link.startsWith("/studio");

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
              <span className={` hidden md:inline`}>{label}</span>
            </Link>
          );
        })}
        {pathname === "/studio/vesting/" && (
          <div className="text-white text-xs">
            <div className="flex gap-2 items-center ">
              <GradientText
                text="| $LUMOX Address |"
                className="hidden text-nowrap md:block"
              ></GradientText>
              <button onClick={handleCopyAddress} className="text-blue-500">
                <div className="flex gap-4 items-center">
                  {"0x218617D3250bE4a1f182C28A1A94b1aB37d94235".slice(0, 6)}...
                  {"0x218617D3250bE4a1f182C28A1A94b1aB37d94235".slice(-4)}
                  <FaCopy></FaCopy>
                </div>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default StudioNavbar;
