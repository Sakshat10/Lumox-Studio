import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import GradientText from "@/components/shared/GradientText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PORTFOLIO_GAMES from "@/constants/portfolioData";

const Portfolio: React.FC = () => {
  return (
    <div className="relative z-[11] w-full lg:px-16 lg:-mt-24  pt-[11rem] md:pt-[3rem] space-y-16">
      <h2 className="text-2xl sm:text-4xl text-center uppercase font-semibold px-4">
        our games <GradientText text="portfolio" className="" />
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 px-8 gap-8 mx-auto ">
        {PORTFOLIO_GAMES.map((game, i) => (
          <div
            key={i}
            className={`relative aspect-[9:16]   origin  ${
              !game.comingSoonStatus && "lg:scale-110 -order-1 lg:order-none"
            }`}
            style={{ perspective: "500px" }}
          >
            <img
              src={game.image}
              alt="game"
              width={500}
              height={128}
              className={`w-full h-full object-cover object-center`}
            />
            {game.comingSoonStatus ? (
              <span
                className={`px-2 py-1 text-xs border-white border bg-transparent backdrop-blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap`}
              >
                Coming soon
              </span>
            ) : (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit">
                <img
                  src={"/images/homepage/portfolio/lumoxGameLogo.png"}
                  alt="game logo"
                  width={140}
                  height={140}
                  className="w-full object-contain"
                />
                <Link
                  href="/games/lumox"
                  passHref
                  className="w-full flex items-center justify-center px-2 py-1 text-xs text-nowrap"
                >
                  <BorderGradientBtn label={"Play now"} border={false} />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
