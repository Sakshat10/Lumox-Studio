"use client";
import React, { FC, useRef, useState, useEffect } from "react";
import Image from "next/image";
import BorderGradientBtn from "@/components/shared/BorderGradientBtn";

const roadmapItems = [
  {
    src: "/images/homepage/Roadmap/Polygon1.png",
    label: "Website ",
    tick: true,
  },
  {
    src: "/images/homepage/Roadmap/Polygon1.png",
    label: "Social Media Channels",
    tick: true,
  },
  {
    src: "/images/homepage/Roadmap/Polygon1.png",
    label: "Trailer, Gameplay",
    tick: true,
  },
  {
    src: "/images/homepage/Roadmap/Polygon1.png",
    label: "LumoxLand: Multiplayer",
    tick: true,
  },
  {
    src: "/images/homepage/Roadmap/Polygon1.png",
    label: "$LUMOX Generated",
    tick: true,
  },
  {
    src: "/images/homepage/Roadmap/Polygon1.png",
    label: "Commmunity Groups",
    tick: true,
  },
  {
    src: "/images/homepage/Roadmap/Polygon1.png",
    label: "Audit",
    tick: true,
  },
  {
    src: "/images/homepage/Roadmap/Polygon1.png",
    label: "CEX Listing Confirmation 1",
    tick: true,
  },
  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "LumoxLand- Android & IOS app",
    tick: false,
  },
  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "LumoxMMORPG",
    tick: false,
  },

  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "Token Presale",
    tick: false,
  },
  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "Listing: DEX & CEX ",
    tick: false,
  },
  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "Marketplace: BUY & SELL",
    tick: false,
  },
  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "Global Tournaments",
    tick: false,
  },
  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "WEB3 Connect",
    tick: false,
  },

  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "Ambassadors Program- Season 1",
    tick: false,
  },
  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "Global Marketing",
    tick: false,
  },
  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "LumoxFighters",
    tick: false,
  },
  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "Quarterly Award",
    tick: false,
  },
  {
    src: "/images/homepage/Roadmap/Polygon2.png",
    label: "Global Expansion",
    tick: false,
  },
];

export const Roadmap2024: FC = () => {
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState("0px");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Initial check
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [showAll]);

  return (
    <div className="w-[100%] md:pl-[7rem] lg:px-[3rem]">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 sm:grid-rows-10 lg:grid-rows-5 lg:grid-cols-4 lg:justify-between sm:grid-flow-col gap-2 transition-max-height duration-500 overflow-hidden ${
          showAll ? "max-h-[1000px]" : "max-h-[630px]"
        }`}
        style={{ maxHeight: showAll ? contentHeight : "640px" }}
        ref={contentRef}
      >
        {roadmapItems.map((item, index) => (
          <div
            key={index}
            className={`flex gap-[0.8rem] pl-[2rem] md:pl-0 ${
              item.tick ? "relative pt-[4px]" : "pb-1"
            }`}
          >
            <div>
              <img src={item.src} width={40} height={32} alt="polygon" />
              {item.tick && (
                <div className="relative translate-y-[-190%] translate-x-[30%]">
                  <img
                    src="/images/homepage/Roadmap/Tick.png"
                    width={16}
                    height={10}
                    alt="check"
                  />
                </div>
              )}
            </div>
            <p
              className={`font-extralight text-[0.9rem] md:text-[0.9rem] pb-[0.8rem] tracking-wide text-white ${
                !item.tick ? "pt-2" : "pt-2"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
      {isSmallScreen && (
        <div className="flex mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-white pl-[2.2rem]"
          >
            {showAll ? (
              <BorderGradientBtn label="Show Less" />
            ) : (
              <BorderGradientBtn label="Show More" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};
