import { PAY_WITH_TOKENS } from "@/constants/payWithTokens";
import React from "react";

interface PayWithOptionsProps {
  payWith: string;
  setPayWith: (value: string) => void;
}

const PayWithOptions: React.FC<PayWithOptionsProps> = ({
  payWith,
  setPayWith,
}) => {
  return (
    <div className="space-y-5">
      <h3 className="text-gray-300 font-extralight">Pay with</h3>
      <div className="flex gap-4">
        {PAY_WITH_TOKENS.map((token) => {
          return (
            <div key={token}>
              <input
                id={`token-${token}`}
                type="radio"
                name="token"
                value={token}
                className="hidden peer"
                onClick={() => setPayWith(token)}
              />
              <label
                htmlFor={`token-${token}`}
                className={`text-xs sm:text-sm px-4 py-2 ${
                  payWith === token
                    ? "text-[#34ADE8] border-[#34ADE8]"
                    : "text-gray-300 border-gray-200/30"
                }  border bg-[rgba(255,255,255,0.10)] font-extralight  cursor-pointer`}
              >
                {token.toUpperCase()}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PayWithOptions;
