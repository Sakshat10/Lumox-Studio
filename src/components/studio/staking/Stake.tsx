"use client";

import AmountInput from "@/components/home/hero/buyToken/AmountInput";
import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import Custom from "@/components/shared/CustomConnectButton";
import GradientText from "@/components/shared/GradientText";
import { FC, MouseEvent, useState } from "react";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";

const Stake: FC = () => {
  const [amount, setAmount] = useState<string>("");
  function stakeHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    toast.error("Staking hasn't started yet");
  }
  const { address: walletAddress } = useAccount();
  return (
    <div className="space-y-8">
      <h2 className="text-center font-semibold">Stake $LUMOX tokens</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-start">
          <GradientText text="Balance: " />
          <span className="break-all">
            0 <span className="text-nowrap">$LUMOX</span>
          </span>
        </div>
        <div>
          <AmountInput
            amount={amount}
            onAmountChange={setAmount}
            label="Amount"
            gradientVarient
          />
        </div>
      </div>
      {!walletAddress ? (
        <Custom className="w-full" />
      ) : (
        <BorderGradientBtn
          disabled={!walletAddress}
          label="Stake"
          variant="full"
          onClick={(e) => {
            stakeHandler(e);
          }}
        />
      )}
    </div>
  );
};

export default Stake;
