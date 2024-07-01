import Image from "next/image";
import React from "react";
import GradientText from "@/components/shared/GradientText";
import StakingForms from "@/components/studio/staking/StakingForms";
import { Description } from "@/components/studio/staking/Description";

const Staking: React.FC = () => {
  return (
    <div className="  py-20 w-full bg-[url('/images/contact/contactBg.png')] bg-cover bg-no-repeat">
      <div className="flex flex-col px-6 lg:flex-row lg:gap-8 gap-12 justify-center  py-40` lg:py-12 lg:px-8 ">
        <div className=" text-white w-full h-full text-center lg:text-left">
          <h1 className="font-bold text-[8vmin] uppercase leading-snug text-nowrap">
            <GradientText text={"STAKING"} />
          </h1>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start items-center  lg:gap-2 text-[0.9rem] sm:text-base text-white font-sans">
            <div className="w-[14rem]  md:w-[10rem] px-4 py-2 rounded-sm text-[0.9rem] bg-[#181717]">
              Total Stake
              <br />
              <span className="text-[1rem]">0.00</span>
            </div>
            <div className="w-[14rem] md:w-[10rem] px-4 rounded-sm py-2 text-[0.9rem] bg-[#181717]">
              Your Reward:
              <br />
              <span className="text-[1rem]">0.00</span>
            </div>
            <div className="w-[14rem] md:w-[10rem] px-4 py-2 rounded-sm text-[0.9rem] bg-[#181717]">
              APY(%):
              <br />
              <span className="text-[1rem]">60</span>
            </div>
          </div>
          <p className="text-white pt-8 ">
            Lock your tokens for just 24 hours, then enjoy full control with the
            freedom to withdraw anytime. Earn hourly rewards, with potential
            gains of up to 60% in a year.. Maximize your earnings effortlessly
            while keeping your tokens secure and flexible.{" "}
            <GradientText text="Join now!" className="text-nowrap inline-block" />
          </p>
        </div>
        <div className="w-full h-full">
          <StakingForms />
        </div>
      </div>
      <div className="px-8 py-8">
        <Description />
      </div>
    </div>
  );
};

export default Staking;
