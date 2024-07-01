import GradientText from "@/components/shared/GradientText";
import React from "react";

interface AmountInputProps {
  label: string;
  amount: string;
  onAmountChange: (value: string) => void;
  gradientVarient?: boolean;
}

const AmountInput: React.FC<AmountInputProps> = ({
  amount,
  onAmountChange,
  label = "Amount",
  gradientVarient,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Handle edge case where input starts with '.'
    if (value === ".") {
      value = "0" + value; // Prepend '0' to handle decimal numbers properly
    }

    // Validate input using regex
    if (/^\d*\.?\d*$/.test(value)) {
      onAmountChange(value); // Update state with valid input
    }
  };

  return (
    <div className="space-y-3">
      {!gradientVarient ? (
        <label className="font-extralight text-gray-300" htmlFor="amount">
          {label}
        </label>
      ) : (
        <label htmlFor="amount">
          <GradientText text="Amount" />
        </label>
      )}
      <input
        id="amount"
        type="text"
        placeholder="Ex. 25000"
        value={amount}
        onChange={handleChange}
        className="px-4 py-2 bg-[rgba(255,255,255,0.10)] w-full placeholder:text-gray-200/35 placeholder:font-extralight"
      />
    </div>
  );
};

export default AmountInput;
