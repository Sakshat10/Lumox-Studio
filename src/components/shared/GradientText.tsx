import React from "react";

type GradientTextProps = {
  text: string;
  className?: string;
};

const GradientText: React.FC<GradientTextProps> = ({ text, className }) => {
  return (
    <span className={`${className} relative group text-transparent`}>
      {text}
      <span className=" absolute top-0 left-0  bg-gradient-to-l to-[#F808C1] via-[#AF82F7] from-[#16C6ED] transition-opacity duration-500 group-hover:opacity-0 opacity-100 text-transparent bg-clip-text">
        {text}
      </span>
      <span className="absolute top-0 left-0  bg-gradient-to-l from-[#F808C1] via-[#AF82F7] to-[#16C6ED] transition-opacity duration-500 opacity-0 group-hover:opacity-100 text-transparent bg-clip-text">
        {text}
      </span>
    </span>
  );
};

export default GradientText;
