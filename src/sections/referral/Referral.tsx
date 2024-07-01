import React from "react";
import ReferralForm from "@/components/referral/ReferralForm";
import GradientText from "@/components/shared/GradientText";

const Referral: React.FC = () => {
  return (
    <div className=" lg:flex items-center w-full bg-[url('/images/contact/contactBg.png')] min-h-[100vh] bg-cover bg-no-repeat">
      <div className="flex flex-col px-6 lg:flex-row lg:gap-8 gap-12 h-fit md:justify-center md:items-center  py-20 md:py-40 lg:py-12 lg:px-8">
        <div className="text-white w-full h-full  lg:text-left ">
          <h1 className="font-bold text-[8vmin] uppercase leading-snug text-nowrap">
            <GradientText text="REFERRAL" />
          </h1>
          <div className="space-y-6">
            <p className="text-white pt-8">
              Introducing the revolutionary Lumox referral program! Purchase
              Lumox tokens, generate your unique referral link, and start
              earning rewards.
            </p>

            <div className="space-y-4">
              <GradientText
                text="Here's how it works: "
                className="block text-xl font-semibold"
              />

              <div className="space-y-2">
                <p>
                  <GradientText text="Phase 1: " className="inline-block" />{" "}
                  Earn an impressive 8% reward when someone buys Lumox tokens
                  using your referral link.
                </p>
                <p>
                  <GradientText text="Phase 2: " className="inline-block" />{" "}
                  Continue earning with a 5% reward for referrals.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p>
                Your rewards will be added to your vesting tokens and can be
                claimed during the Token Generation Event (TGE).
              </p>
              <p>
                Don&apos;t miss out on this fantastic opportunity! Join the
                Lumox ICO, refer others, and enjoy the benefits of Lumox tokens.
                Start earning today!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full self-start ">
          <ReferralForm />
        </div>
      </div>
    </div>
  );
};

export default Referral;
