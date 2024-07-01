import React from "react";

interface BorderGradientBtnProps {
  label: string;
  variant?: "fit" | "full";
  border?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "reset" | "submit";
}

const BorderGradientBtn: React.FC<BorderGradientBtnProps> = ({
  label,
  variant = "fit",
  border = true,
  onClick,
  disabled,
  className,
  type,
}) => {
  const widthClass = variant === "full" ? "w-full" : "w-fit";
  const borderClass = border ? "bg-black" : "bg-transparent";

  return (
    <div className={`${widthClass} ${className} relative p-[1px] group`}>
      <div className="bg-gradient-to-r  from-[#F808C1] via-[#AF82F7] to-[#16C6ED] opacity-100 group-hover:opacity-0 transition-all duration-500 absolute top-0 left-0 w-full h-full " />
      <div className="bg-gradient-to-l  from-[#F808C1] via-[#AF82F7] to-[#16C6ED] opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-0 left-0 w-full h-full " />
      <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={`${borderClass} w-full px-4 py-2 relative  disabled:cursor-not-allowed`}
      >
        {label}
      </button>
    </div>
  );
};

export default BorderGradientBtn;
