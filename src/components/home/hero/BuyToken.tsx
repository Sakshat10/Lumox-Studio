"use client";

import { useEffect, useState, Suspense } from "react";
import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import PayWithOptions from "./buyToken/PayWithOptions";
import AmountInput from "./buyToken/AmountInput";
import { PAY_WITH_TOKENS } from "@/constants/payWithTokens";
import { useAccount, useBalance, useWriteContract } from "wagmi";
import { config } from "@/config";
import LUMOX_TOKEN_ABI from "@/constants/ABI/LUMOX_TOKEN_ABI.json";
import USDT_ABI from "@/constants/ABI/USDT_ABI.json";
import USDC_ABI from "@/constants/ABI/USDC_ABI.json";
import { formatEther, parseEther } from "viem";
import { toast } from "react-hot-toast";
import { waitForTransactionReceipt } from "@wagmi/core";
import Custom from "@/components/shared/CustomConnectButton";
import { useSearchParams } from "next/navigation";

const BuyTokenComponent = () => {
  const [amount, setAmount] = useState<string>("");
  const [payWith, setPayWith] = useState<string>(PAY_WITH_TOKENS[0]);
  const [referralCode, setReferralCode] = useState<any>();
  const { writeContractAsync } = useWriteContract({ config });
  const { address: walletAddress } = useAccount();

  const searchParams = useSearchParams();

  useEffect(() => {
    setReferralCode(searchParams.get("referralCode"));
  }, [searchParams]);

  const handleError = (error: any) => {
    if (error.cause?.details.includes("insufficient funds")) {
      toast.error("You don't have enough tokens in your wallet");
    } else {
      console.log(error);
    }
  };

  const waitForTransaction = async (
    txHash: `0x${string}`,
    loadingMsg?: string,
    successMsg?: string
  ) => {
    await toast.promise(
      waitForTransactionReceipt(config, {
        hash: txHash,
        // confirmations: 5,
      }),
      {
        loading: loadingMsg || "processing the transaction",
        success: successMsg || "Transaction successfull",
        error: "Something went wrong",
      }
    );
  };

  const approveToken = async (
    abi: any,
    address: `0x${string}`,
    amount: string
  ) => {
    return writeContractAsync({
      abi,
      address,
      functionName: "approve",
      args: [
        process.env.NEXT_PUBLIC_LUMOX_TOKEN_ADDRESS as `0x${string}`,
        parseEther(amount),
      ],
    });
  };

  const purchaseWithUSD = async (amount: string, usdId: number) => {
    return writeContractAsync({
      abi: LUMOX_TOKEN_ABI,
      address: process.env.NEXT_PUBLIC_LUMOX_TOKEN_ADDRESS as `0x${string}`,
      functionName: "purchaseWithUSD",
      args: [referralCode || "LUMOX", usdId, parseEther(amount)],
    });
  };

  const purchaseWithBNB = async (amount: string) => {
    return writeContractAsync({
      abi: LUMOX_TOKEN_ABI,
      address: process.env.NEXT_PUBLIC_LUMOX_TOKEN_ADDRESS as `0x${string}`,
      functionName: "purchaseWithBNB",
      args: [referralCode || "LUMOX"],
      value: parseEther(amount),
    });
  };

  const buyToken = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      if (payWith !== "bnb") {
        const abi = payWith === "usdt" ? USDT_ABI : USDC_ABI;
        const address =
          payWith === "usdt"
            ? (process.env.NEXT_PUBLIC_USDT_ADDRESS as `0x${string}`)
            : (process.env.NEXT_PUBLIC_USDC_ADDRESS as `0x${string}`);

        const usdId = payWith === "usdt" ? 2 : 1;

        const approveTxHash = await approveToken(abi, address, amount);
        await waitForTransaction(
          approveTxHash,
          "Waiting for approval",
          "Approved!"
        );
        const purchaseTxHash = await purchaseWithUSD(amount, usdId);
        await waitForTransaction(purchaseTxHash);
      } else {
        const txHash = await purchaseWithBNB(amount);
        waitForTransaction(txHash);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const {
    data: tokenBalance,
    isError: tokenBalanceError,
    isLoading: tokenBalanceLoading,
  } = useBalance({
    address: walletAddress,
    config,
    token:
      payWith === "usdt"
        ? (process.env.NEXT_PUBLIC_USDT_ADDRESS as `0x${string}`)
        : payWith === "usdc"
        ? (process.env.NEXT_PUBLIC_USDC_ADDRESS as `0x${string}`)
        : undefined,
  });

  return (
    <div className="max-w-[400px] bg-gradient-to-r from-[#F808C1BF] via-transparent to-[#16C6EDBF] w-1/2 min-w-fit p-[1px] text-white mx-auto">
      <div className="relative py-8 px-8 bg-black/90 space-y-6">
        <h2 className="text-center font-semibold">BUY $LUMOX TOKENS</h2>
        <div className="flex flex-col gap-8">
          <div className="relative flex gap-2">
            <span className="absolute right-0 top-0 font-extralight">
              Bal:{" "}
              {tokenBalanceLoading
                ? "loading..."
                : tokenBalanceError
                ? "0 USDT"
                : Number(
                    formatEther(tokenBalance ? tokenBalance.value : BigInt(0))
                  ).toFixed(2)}{" "}
              {tokenBalance && tokenBalance.symbol}
            </span>
            <AmountInput
              label="Amount"
              amount={amount}
              onAmountChange={setAmount}
            />
            <BorderGradientBtn
              label="Max"
              border={false}
              className="h-fit min-w-fit self-end py-0 rounded-sm overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                tokenBalance && setAmount(formatEther(tokenBalance.value));
              }}
            />
          </div>

          <PayWithOptions payWith={payWith} setPayWith={setPayWith} />
          <div>
            {!walletAddress ? (
              <Custom type="button" className="w-full" />
            ) : (
              <BorderGradientBtn
                label="Approve and Buy Tokens"
                variant="full"
                onClick={buyToken}
                disabled={
                  !walletAddress || amount === "" || Number(amount) === 0
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const BuyToken = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuyTokenComponent />
    </Suspense>
  );
};

export default BuyToken;
