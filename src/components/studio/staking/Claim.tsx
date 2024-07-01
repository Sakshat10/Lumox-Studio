"use client";

import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import Custom from "@/components/shared/CustomConnectButton";
import GradientText from "@/components/shared/GradientText";
import React from "react";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";

const Claim: React.FC = () => {
  function claimHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    toast.error("Claim hasn't started yet");
  }
  const { address: walletAddress } = useAccount();
  return (
    <div className="space-y-8 w-full ">
      <h2 className="text-center font-semibold">Claim $LUMOX tokens</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-start">
          <GradientText text="Staked token: " className="text-nowrap" />
          <span className="break-all">
            0 <span className="text-nowrap">$LUMOX</span>
          </span>
        </div>
        <div className="flex gap-2 items-start">
          <GradientText text="Reward: " className="text-nowrap" />
          <span className="break-all">
            0 <span className="text-nowrap">$LUMOX</span>
          </span>
        </div>
      </div>
      {!walletAddress ? (
        <Custom className="w-full" />
      ) : (
        <BorderGradientBtn
          disabled={!walletAddress}
          label="Claim"
          variant="full"
          onClick={(e) => {
            claimHandler(e);
          }}
        />
      )}
    </div>
  );
};

export default Claim;
