import Image from "next/image";
import React from "react";
import BuyToken from "@/components/home/hero/BuyToken";
import GradientText from "@/components/shared/GradientText";
import Progressbar from "@/components/home/hero/Progressbar";
import { MotionValue, motion, useTime, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const Hero: React.FC<Props> = ({ scrollYProgress }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, isTabletOrMobile ? 1 : 0.8]
    // [1, 0.8]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isTabletOrMobile ? 0 : -5]
    // [0, -5]
  );

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative lg:sticky top-0 left-0 sm:min-h-screen w-full flex flex-col lg:flex-row lg:gap-8 gap-32 justify-center lg:items-center py-32 lg:py-0 lg:px-32"
    >
      <div className="absolute h-full w-full max-w-[850px] right-0">
        <div className="absolute bg-gradient-to-r from-[#101010]/15 via-transparent to-transparent text-white w-full h-full" />
        <div className="absolute bg-gradient-to-t from-[#101010]/75 via-transparent to-transparent text-white w-full h-full" />
        <img
          alt="background"
          src="/images/homepage/hero/hero.png"
          className="w-full h-full"
        />
      </div>
      <div className="z-10 text-white w-full h-full text-center lg:text-left">
        <h1 className="font-bold text-4xl sm:text-6xl uppercase text-nowrap tracking-tight">
          Epic Adventures <br /> by Crafting the <br />
          <GradientText text={"Future of Gaming"} className="animate-pulse" />
        </h1>
        <p className="mt-6 text-[3.5vmin] sm:text-base font-extralight">
          Unleash Your Imagination: Where Epic Games Come to Life
        </p>
        <p className="mt-6 text-[3.5vmin] sm:text-base font-extralight">
          Purchase tokens for Minimum $1,000 to receive a bonus from the $30,000
          pool!{" "}
          <a
            href="https://medium.com/@LumoxStudio/pre-order-lumox-lmx-get-rewarded-for-driving-the-future-of-gaming-a6d69e313a35"
            target="_blank"
          >
            <GradientText
              text="Check out the details"
              className="font-normal text-nowrap inline-block"
            />
          </a>
        </p>
        <div className="mt-6 flex flex-col items-center lg:items-start">
          <p className="flex items-center gap-2">
            <GradientText text="Token price: " />{" "}
            <span className="font-extralight">$0.003</span>
          </p>
          <p className="flex items-center gap-2">
            <GradientText text="Listing price: " />{" "}
            <span className="font-extralight">$0.009</span>
          </p>
        </div>
        <Progressbar />
      </div>
      <div className="z-10 w-full h-full">
        <BuyToken />
      </div>
    </motion.div>
  );
};

export default Hero;
