"use client";
import React from "react";

import CornerStyledButton from "@/components/shared/CorneredStyleButton/CornerStyleButton";
import CornerStyleButton1 from "@/components/shared/CorneredStyleButton/CornerStyleButton1";
import { Roadmap2024 } from "@/components/home/roadmap/Roadmap2024";
import GradientText from "@/components/shared/GradientText";

export const Roadmap: React.FC = () => {
  const handleClick = () => {
    // Your click event handler logic here
    console.log("Button clicked!");
  };

  return (
    <div className="bg-[#101010] w-full overflow-hidden min-h-[100vh] flex flex-col items-center gap-[7rem] py-[5rem]">
      <div className="text-[2rem] leading-[2.6rem] font-semibold flex gap-[8px]">
        <div className="text-white">OUR</div>
        <GradientText text="ROADMAP" />
      </div>
      <div className="w-full h-[1px] bg-gradient-to-l from-[#16C6ED] via-[#AF82F7] to-[#F808C1]">
        <div className="flex gap-4">
          <div className="relative -translate-y-[50%] translate-x-[-75%] md:translate-x-[-50%] left-[40%]">
            <CornerStyledButton label="2024" onClick={handleClick} />
          </div>
          <div className="relative -translate-y-[50%]  translate-x-[-75%] md:translate-x-[-50%] left-[40%]">
            <CornerStyleButton1 label="2025" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center">
        <Roadmap2024 />
      </div>
    </div>
  );
};

export default Roadmap;
