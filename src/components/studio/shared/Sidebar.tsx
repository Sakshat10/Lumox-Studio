"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-full bg-[#0f1114] space-y-8 py-8">
      <Link href={"/"} passHref className="w-1/3 block mx-auto">
        <img
          src={"/images/shared/lumoxLogo.png"}
          alt=""
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      </Link>
      <div className="flex flex-col gap-4 justify-center items-center">
        <Link
          href={"/studio/games"}
          className={`${
            pathname === "/studio/games/"
              ? "bg-gradient-to-l from-[#16C6ED] via-[#AF82F7] to-[#F808C1] text-white w-full py-2 text-center"
              : "text-white/50 w-full py-2 text-center"
          }`}
        >
          Games
        </Link>
        <Link
          href="/studio/vesting"
          className={`${
            pathname === "/studio/vesting/"
              ? "bg-gradient-to-l from-[#16C6ED] via-[#AF82F7] to-[#F808C1] text-white w-full py-2 text-center"
              : "text-white/50 w-full py-2 text-center"
          }`}
        >
          Vesting
        </Link>
        <Link
          href="/studio/staking"
          className={`${
            pathname === "/studio/staking/"
              ? "bg-gradient-to-l from-[#16C6ED] via-[#AF82F7] to-[#F808C1] text-white w-full py-2 text-center"
              : "text-white/50 w-full py-2 text-center"
          }`}
        >
          Staking
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
