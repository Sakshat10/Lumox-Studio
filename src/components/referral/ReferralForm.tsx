"use client";

import React, { useEffect, useState } from "react";
import GradientText from "../shared/GradientText";
import Custom from "../shared/CustomConnectButton";
import BorderGradientBtn from "../shared/BorderGradientBtn";
import {
  useAccount,
  useReadContract,
  useTransactionReceipt,
  useWriteContract,
} from "wagmi";
import lumoxTkenAbi from "@/constants/ABI/LUMOX_TOKEN_ABI.json";
import { config } from "@/config";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaCopy } from "react-icons/fa6";

const ReferralForm: React.FC = () => {
  const { address: walletAddress } = useAccount();
  const [referralCodeInput, setReferralCodeInput] = useState<string>("");

  const [origin, setOrigin] = useState("");
  const [btnText, setBtnText] = useState<string>("");

  useEffect(() => {
    if (window) {
      setOrigin(window.location.origin);
    }
  }, [setOrigin]);

  function generateReferral() {
    if (referralCodeInput) {
      writeContract({
        abi: lumoxTkenAbi,
        address: process.env.NEXT_PUBLIC_LUMOX_TOKEN_ADDRESS as `0x${string}`,
        functionName: "generateReferralLink",
        args: [referralCodeInput.trim()],
      });
    }
  }

  const {
    writeContract,
    isError,
    data,
    isPending,
    isSuccess: isReferralStarted,
    error,
  } = useWriteContract({
    config,
  });

  const { isSuccess: txSuccess } = useTransactionReceipt({ hash: data });

  const { data: referralLink }: { data: string | undefined } = useReadContract({
    abi: lumoxTkenAbi,
    address: process.env.NEXT_PUBLIC_LUMOX_TOKEN_ADDRESS as `0x${string}`,
    functionName: "getReferralLink",
    args: [walletAddress],
  });

  const handleCopyAddress = () => {
    const link = `${origin}/?referralCode=${
      referralLink ? referralLink.toString() : referralCodeInput.toString()
    }`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  useEffect(() => {
    isPending
      ? setBtnText("Confirm the transaction")
      : txSuccess
      ? setBtnText("Referral generated")
      : isReferralStarted
      ? setBtnText("Generating referral code...")
      : setBtnText("Generate referral");

    if (isError) {
      if (error.message.includes("you are not eligible to genrate referral")) {
        toast.error("Please must buy $LUMOX token first");
      } else if (error.message.includes("yourReferralLinkExist")) {
        toast.error("You have already genrate referral");
      } else if (error.message.includes("refferalCodeAlreadyUsed")) {
        toast.error("Referral code already used");
      }
      console.log(error);
    }

    if (txSuccess) {
      toast.success("Referral code generated successfully");
    }
  }, [
    setBtnText,
    isPending,
    isReferralStarted,
    txSuccess,
    isError,
    error,
    referralLink,
    walletAddress,
  ]);

  return (
    <div className="max-w-[400px]  bg-gradient-to-r from-[#F808C1BF] via-transparent to-[#16C6EDBF] w-full p-[1px] text-white mx-auto">
      <div className="relative w-full py-8 px-8 bg-black/90 space-y-6">
        {txSuccess || referralLink ? (
          <div className="space-y-8">
            <h2 className="text-center font-semibold">Your Referral Link</h2>

            <div className="space-y-3">
              <GradientText text="Referral Link" className="inline-block" />

              <div className="flex gap-4 items-center ">
                <span className="w-full text break-all">
                  {`${origin}/?referralCode=`}
                  <span className="bg-gradient-to-l from-[#F808C1] via-[#AF82F7] to-[#16C6ED] bg-clip-text text-transparent text-nowrap">
                    {referralLink
                      ? referralLink.toString()
                      : referralCodeInput.toString()}
                  </span>
                </span>

                <FaCopy
                  onClick={handleCopyAddress}
                  className="text-[#16C6ED]  w-fit self-start cursor-pointer"
                />
              </div>
            </div>
            <p className="">
              Share your referral link with friends and family to earn{" "}
              <GradientText text="$LUMOX" className="inline-block" /> tokens!
              The more you share, the more you earn!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <h2 className="text-center font-semibold">
              Generate Referral Link
            </h2>

            <div className="space-y-3">
              <label htmlFor="referralCodeInput">
                <GradientText text="Referral Code" />
              </label>

              <input
                id="referralCodeInput"
                type="text"
                placeholder="LUMOX"
                value={referralCodeInput}
                onChange={(e) => {
                  setReferralCodeInput(e.target.value);
                }}
                className="px-4 py-2 bg-[rgba(255,255,255,0.10)] w-full placeholder:text-gray-200/35 placeholder:font-extralight"
              />
            </div>
            {!walletAddress ? (
              <Custom className="w-full" />
            ) : (
              <BorderGradientBtn
                disabled={
                  !walletAddress ||
                  referralCodeInput.trim().length < 1 ||
                  isPending ||
                  isReferralStarted
                }
                label={btnText}
                variant="full"
                onClick={(e) => {
                  e.preventDefault();
                  generateReferral();
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferralForm;
