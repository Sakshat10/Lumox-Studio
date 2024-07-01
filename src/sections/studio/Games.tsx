"use client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Navbar from "@/components/studio/shared/Navbar";
import Sidebar from "@/components/studio/shared/Sidebar";
interface GamesProps {}

const Games: React.FC<GamesProps> = () => {
  const [val, setVal] = useState(1);
  let source: string = "";
  let heading: string = "";
  const isSmallScreen: boolean = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen: boolean = useMediaQuery({
    minWidth: 641,
    maxWidth: 1024,
  });

  let height: number, width: number;

  if (isSmallScreen) {
    height = 300;
    width = 150;
  } else if (isMediumScreen) {
    height = 600;
    width = 350;
  } else {
    // Large screen
    height = 350;
    width = 200;
  }
  const handleClick = () => {
    setVal((prev) => {
      const newVal = prev === 5 ? 1 : prev + 1;
      return newVal;
    });
  };

  const handleClick2 = () => {
    setVal((prev) => {
      return prev === 1 ? 5 : prev - 1;
    });
  };
  let imageSources: string[] = [];

  if (val === 1) {
    source = "/images/studio/assassin.png";
    heading = "ASSASSIN";
    imageSources = [
      "/images/studio/assassin1.png",
      "/images/studio/assassin2.png",
      "/images/studio/assassin3.png",
      "/images/studio/assassin4.png",
      "/images/studio/assassin5.png",
    ];
  } else if (val === 2) {
    source = "/images/studio/support.png";
    heading = "SUPPORT";
    imageSources = [
      "/images/studio/support1.png",
      "/images/studio/support2.png",
      "/images/studio/support3.png",
      "/images/studio/support4.png",
      "/images/studio/support5.png",
    ];
  } else if (val === 3) {
    source = "/images/studio/mage.png";
    heading = "MAGE";

    imageSources = [
      "/images/studio/mage1.png",
      "/images/studio/mage2.png",
      "/images/studio/mage3.png",
      "/images/studio/mage4.png",
      "/images/studio/mage5.png",
    ];
  } else if (val === 4) {
    source = "/images/studio/hunter.png";
    heading = "HUNTER";

    imageSources = [
      "/images/studio/hunter1.png",
      "/images/studio/hunter2.png",
      "/images/studio/hunter3.png",
      "/images/studio/hunter4.png",
      "/images/studio/hunter5.png",
    ];
  } else {
    source = "/images/studio/shooter.png";
    heading = "SHOOTER";

    imageSources = [
      "/images/studio/shooter1.png",
      "/images/studio/shooter2.png",
      "/images/studio/shooter3.png",
      "/images/studio/shooter4.png",
      "/images/studio/shooter5.png",
    ];
  }
  return (
    <>
      <div className="flex flex-col   lg:flex-row  gap-4 bg-[#101010] pt-[5rem] lg:pt-[8rem] pb-[3rem]">
        <div className="bg-[url('/images/studio/assassinbg.png')] w-[90vw] lg:w-[55vw] md:h-[45vh] h-[50vh] bg-no-repeat bg-cover">
          <div className="min-h-[60vh] items-center translate-x-[2%] translate-y-[-10%] md:translate-x-0 md:translate-y-[-15%]  w-auto flex justify-center">
            <img src={source} alt="Assassin" height={height} width={width} />
          </div>
          <button
            onClick={handleClick2}
            className="relative translate-x-[100%] translate-y-[-750%] md:translate-x-[300%] md:translate-y-[-1150%] lg:translate-x-[115%] lg:translate-y-[-800%] w-[40px] h-[40px]"
          >
            <img
              src="/images/studio/leftIcon.png"
              alt="leftIcon"
              height={15}
              width={15}
            />
          </button>
          <button
            className="relative md:translate-x-[1300%] translate-x-[650%] translate-y-[-750%] md:translate-y-[-1150%] lg:translate-x-[1130%] lg:translate-y-[-800%] w-[40px] h-[40px]"
            onClick={handleClick}
          >
            <img
              src="/images/studio/rightIcon.png"
              alt="rightIcon"
              height={15}
              width={15}
            />
          </button>
        </div>
        <div className="flex flex-col gap-4 px-4 pt-20 md:pt-0 lg:translate-y-[-5%] md:px-8 w-[95vw]  lg:w-[45vw]">
          <h1 className="font-bold font-sans text-[1.5rem] ">{heading}</h1>
          <h1 className="font-semibold font-sans text-[1.2rem] ">SKILLS</h1>
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-2">
            {imageSources.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                height={180}
                width={100}
              />
            ))}
          </div>

          <div className="pt-2">
            <h1 className="text-[#5f9ee1] font-sans">
              Massive Attack on a single target
            </h1>
            <p className="text-white pt-2 font-sans ">
              This devastating attack channels more immense power capable of
              even felling the toughest foe with a single concentrated blow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
