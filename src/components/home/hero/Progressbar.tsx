import GradientText from "@/components/shared/GradientText";
import React, { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import LUMOX_TOKEN_ABI from "@/constants/ABI/LUMOX_TOKEN_ABI.json";
import { formatEther } from "viem";

const lumoxIcoContractConfig = {
  address: process.env.NEXT_PUBLIC_LUMOX_TOKEN_ADDRESS as `0x${string}`,
  abi: LUMOX_TOKEN_ABI,
} as const;

const Progressbar: React.FC = () => {
  const {
    data: tokenSold,
    isLoading,
    isError,
  } = useReadContract({
    ...lumoxIcoContractConfig,
    functionName: "getTotalTokensAllocatedInPhase",
    args: [1],
  });
  // const getISTTime = () => {           
  //   const utcDate = new Date();
  //   return utcDate.getUTCHours();
  // };
  //   const [progress, setProgress] = useState<number>(1);

  //   useEffect(() => {
  //     const updateProgress = () => {
  //       const istTime = getISTTime();

  //       const istHour = (istTime + 6)%24;
      
  //       let diffInHours = istHour ;
      
  //       if(diffInHours<14){
  //         diffInHours+= 10;
  //       }
  //       else{
  //         diffInHours = diffInHours-14;
  //       }
  //       console.log(diffInHours);
  //       const newProgress = (diffInHours*0.17)+(84.83);
      
  //       setProgress(newProgress);
  //     };

  //     updateProgress();
  //     const interval = setInterval(updateProgress, 1000 * 60 * 60); // Update every hour

  //     return () => clearInterval(interval);
  //   }, []);
  const minSpanValue = Math.min(
    isLoading || isError
      ? 0
      : parseFloat(
          (
            (((Number(formatEther(tokenSold as bigint) as string) / 160000000) * 100 -18.29)/2+92.93)
          ).toFixed(2)
        ),
    100
  );
  
  return (
    <div className="mt-6 block mx-auto lg:mx-0 space-y-4">
      <GradientText text="PRESALE: 1" className="font-semibold text-[1.1rem]" />
      <div className="relative group mx-auto lg:mx-0 h-3 max-w-64 w-[100%] border border-white/30 rounded-full ">
        <div className="absolute  -bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F808C1] via-[#AF82F7] to-[#16C6ED] px-4 py-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
          <span>
            {minSpanValue}%
          </span>

          <div className="size-2  bg-gradient-to-tr from-[#F808C1] via-[#AF82F7] to-[#16C6ED] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45"></div>
        </div>
        <div
          style={{
            width: `${
              minSpanValue

            }%`,
          }}
          className="h-full bg-gradient-to-r from-[#F808C1] via-[#AF82F7] to-[#16C6ED] rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;

// import React, { useState, useEffect } from "react";
// import { useReadContract } from "wagmi";
// import { formatEther } from "viem";

// import GradientText from "@/components/shared/GradientText";
// import LUMOX_TOKEN_ABI from "@/constants/ABI/LUMOX_TOKEN_ABI.json";
// const getISTTime = () => {
//   const utcDate = new Date();
//   return utcDate.getUTCHours();
// };

// const Progressbar: React.FC = () => {
//   const lumoxIcoContractConfig = {
//     address: process.env.NEXT_PUBLIC_LUMOX_TOKEN_ADDRESS as `0x${string}`,
//     abi: LUMOX_TOKEN_ABI,
//   } as const;

//   const {
//     data: tokenSold,
//     isLoading,
//     isError,
//   } = useReadContract({
//     ...lumoxIcoContractConfig,
//     functionName: "getTotalTokensAllocatedInPhase",
//     args: [1],
//   });

//   const [progress, setProgress] = useState<number>(1);
// let val = ( (Number(formatEther(tokenSold as bigint) as string) /160000000) *100).toFixed(3);
// console.log(val);
//   useEffect(() => {
//     const updateProgress = () => {
//       const istTime = getISTTime();

//       const istHour = (istTime + 6)%24;
//       console.log(istHour);
//       let diffInHours = istHour - 16;
//       if(istHour<16){
//       diffInHours = istHour+9;
//       }
//       if (diffInHours < 0) {
//         diffInHours += 24;
//       }

//       const newProgress = Math.min((((1+ diffInHours) * 0.87)+10), 32);

//       setProgress(newProgress);
//     };

//     updateProgress();
//     const interval = setInterval(updateProgress, 1000 * 60 * 60); // Update every hour

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="mt-6 block mx-auto lg:mx-0 space-y-4">
//       <GradientText text="PRESALE: 1" className="font-semibold text-[1.1rem]" />
//       <div className="relative group mx-auto lg:mx-0 h-3 max-w-64 w-[100%] border border-white/30 rounded-full">
//         <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F808C1] via-[#AF82F7] to-[#16C6ED] px-4 py-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
//           <span>{progress.toFixed(2)}%</span>
//           <div className="size-2 bg-gradient-to-tr from-[#F808C1] via-[#AF82F7] to-[#16C6ED] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45"></div>
//         </div>
//         <div
//           style={{
//             width: `${progress.toFixed(2)}%`,
//           }}
//           className="h-full bg-gradient-to-r from-[#F808C1] via-[#AF82F7] to-[#16C6ED] rounded-full"
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Progressbar;
