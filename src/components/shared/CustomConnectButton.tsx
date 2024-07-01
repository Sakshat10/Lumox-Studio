"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";
import { useAccount, useDisconnect } from "wagmi";
import BorderGradientBtn from "./BorderGradientBtn";

interface Props {
  className?: string;
  type?: "button" | "reset" | "submit";
}

const Custom: React.FC<Props> = ({ className, type }) => {
  const { open } = useWeb3Modal();
  const { isConnected, address: walletAddress } = useAccount();
  const { disconnect } = useDisconnect();

  const truncateAddress = (address: `0x${string}`) => {
    return `${address.slice(0, 6)}...${address.slice(-3)}`;
  };

  // if (isConnected && walletAddress) {
  //   return (
  //     <button
  //       onClick={() => disconnect()}
  //       className={`${className} px-4 py-2 border hover:text-[#17c6ed] hover:bg-transparent border-[#17c6ed] bg-[#17C6ED] text-black font-semibold transition-all duration-300 text-nowrap`}
  //     >
  //       {truncateAddress(walletAddress)}
  //     </button>
  //   );
  // }

  // return (
  //   <button
  //     onClick={() => open()}
  //     className={`${className} px-4 py-2 border border-[#17C6ED] hover:text-black hover:bg-[#17c6ed] transition-all duration-300 text-[#17C6ED] font-semibold text-nowrap`}
  //   >
  //     Connect wallet
  //   </button>
  // );

  return (
    <BorderGradientBtn
      label={
        isConnected && walletAddress
          ? truncateAddress(walletAddress)
          : "Connect wallet"
      }
      onClick={isConnected && walletAddress ? () => disconnect() : () => open()}
      className={className}
    />
  );
};

export default Custom;
