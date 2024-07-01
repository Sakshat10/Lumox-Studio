"use client";

import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import GradientText from "@/components/shared/GradientText";
import React, { useEffect, useState } from "react";
import LUMOX_TOKEN_ABI from "@/constants/ABI/LUMOX_TOKEN_ABI.json";
import LUMOX_TOKEN_OLD_ABI from "@/constants/ABI/LUMOX_TOKEN_ABI_OLD.json";
import { useAccount, useReadContracts } from "wagmi";
import { formatEther } from "viem";
import toast from "react-hot-toast";
import Custom from "@/components/shared/CustomConnectButton";
import { config } from "@/config";

const lumoxIcoContractConfig = {
  address: process.env.NEXT_PUBLIC_LUMOX_TOKEN_ADDRESS as `0x${string}`,
  abi: LUMOX_TOKEN_ABI,
} as const;

const lumoxIcoOldContractConfig = {
  address: process.env.NEXT_PUBLIC_LUMOX_TOKEN_ADDRESS_OLD as `0x${string}`,
  abi: LUMOX_TOKEN_OLD_ABI,
} as const;

export const Vesting = () => {
  const [totalBalance, setTotalBalance] = useState<string>("0");

  const { address: walletAddress } = useAccount();

  const {
    data: balance,
    isError,
    isLoading,
  } = useReadContracts({
    config,
    contracts: [
      {
        ...lumoxIcoContractConfig,
        functionName: "getTotalTokensAllocatedToAddress",
        args: [walletAddress],
      },
      {
        ...lumoxIcoOldContractConfig,
        functionName: "getTotalTokensAllocatedToAddress",
        args: [walletAddress],
      },
    ],
  });

  useEffect(() => {
    if (balance && walletAddress) {
      const total =
        Number(Number(formatEther(balance[0].result as bigint)).toFixed(2)) +
        Number(Number(formatEther(balance[1].result as bigint)).toFixed(2));
      setTotalBalance(total.toFixed(2));
    }
  }, [balance, walletAddress]);

  return (
    <div className="flex items-center justify-center min-h-screen  w-full h-full py-20 px-6 sm:p-0 bg-[url('/images/contact/contactBg.png')] bg-cover bg-no-repeat ">
      <div className="max-w-[90vw] sm:max-w-[400px] bg-gradient-to-r from-[#F808C1BF] via-transparent to-[#16C6EDBF] w-full  p-[1px] text-white">
        <div className="relative w-full py-8 px-4 sm:px-8 bg-black/90 space-y-16">
          <h1 className="font-semibold text-center">$LUMOX TOKEN VESTING</h1>
          <div className="flex flex-col gap-8">
            <span className="flex items-start break-all gap-2">
              <GradientText text="Claimable Amount: " className="text-nowrap" />
              <span>
                0 <span className="text-nowrap">$LUMOX</span>
              </span>
            </span>
            <span className="flex items-end gap-2 break-all">
              <GradientText text="Balance: " className="text-nowrap" />
              {isLoading ? (
                "loading..."
              ) : isError || !walletAddress ? (
                "0 $LUMOX"
              ) : (
                <span>
                  {totalBalance} <span className="text-nowrap">$LUMOX</span>
                </span>
              )}
            </span>
          </div>
          {!walletAddress ? (
            <Custom className="w-full" />
          ) : (
            <BorderGradientBtn
              disabled={!walletAddress}
              label="Claim"
              variant="full"
              onClick={() => {
                toast.error("Claim hasn't started yet");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
