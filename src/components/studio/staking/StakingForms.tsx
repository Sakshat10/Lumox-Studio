"use client";
import { useState } from "react";
import Claim from "./Claim";
import Stake from "./Stake";

const StakingForms = () => {
  const [selectedTab, setSelectedTab] = useState("stake");
  return (
    <div className="max-w-[400px] bg-gradient-to-r from-[#F808C1BF] via-transparent to-[#16C6EDBF] w-full min-w-fit p-[1px] text-white mx-auto">
      <div className="relative w-full py-8 px-8 bg-black/90 space-y-6">
        <div className="flex justify-center gap-4 items-center">
          <button
            onClick={() => {
              setSelectedTab("stake");
            }}
            className={`${
              selectedTab === "stake"
                ? "text-white bg-[#F808C1BF]"
                : "text-white/50 hover:bg-white/10"
            } transition-all duration-300 px-4 py-2 w-full`}
          >
            Stake
          </button>
          <button
            onClick={() => {
              setSelectedTab("claim");
            }}
            className={`${
              selectedTab === "claim"
                ? "text-white bg-[#16C6EDBF]"
                : "text-white/50 hover:bg-white/10"
            } transition-all duration-300 px-4 py-2 w-full`}
          >
            Claim
          </button>
        </div>

        {selectedTab === "stake" ? <Stake /> : <Claim />}
      </div>
    </div>
  );
};

export default StakingForms;
