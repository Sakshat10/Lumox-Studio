import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameCard from "@/components/home/games/GameCard";
import GradientText from "@/components/shared/GradientText";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NewGames = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerRow, setCardsPerRow] = useState(1);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setCardsPerRow(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerRow(2);
      } else {
        setCardsPerRow(1);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom easing function for smooth transition
      },
    },
    exit: {
      x: (custom) => (custom === "right" ? "-100%" : "100%"),
      opacity: 0,
      transition: {
        duration: 0,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom easing function for smooth transition
      },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setStartIndex((prevIndex) => {
      if (prevIndex < cards.length - cardsPerRow) {
        return prevIndex + 1;
      } else {
        return 0; // Wrap around to the first card
      }
    });
  };

  const handlePrev = () => {
    setDirection("left");
    setStartIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return cards.length - cardsPerRow; // Wrap around to the last card
      }
    });
  };

  const cards = [
    {
      imageUrl: "/images/homepage/games/game1.png",
      title: "MINI ARENA",
      description:
        "Mini Arena, is a competitive top-down PvP infinite royale shooter game on a mission to bring the vision of kill-to-earn to all gamers. Pay-to-spawn, take your enemies down and earn cash for every kill!",
      linkUrl: "https://play.miniarena.xyz/",
      btnLabel: "Play now!",
    },
    {
      imageUrl: "/images/homepage/games/game3.png",
      title: "NOVOPANGEA",
      description:
        "Discover the world of Novopangea and be part of the best community as you build your empire in this fun immersive economy style game. Acquire Land, Buildings, Facilities, Mines and Skilled Workers to produce resources and economic growth in Novopangea",
      linkUrl: "https://hub.novopangea.io/?u=https%3A%2F%2Fgame.novopangea.io",
      btnLabel: "Play now!",
    },
    {
      imageUrl: "/images/homepage/games/game2.png",
      title: "ANIBORGS",
      description:
        "Level up your health in the world of Web3.0! Join the fantasy aniborgs and earn the reward while staying fit. Embrace the future of wellness and unleash your inner hero!",
      linkUrl: "https://aniborgs.com/",
      btnLabel: "Play now!",
    },
    {
      imageUrl: "/images/homepage/portfolio/portfolioGame5.png",
      title: "COMING SOON",
      description:
        "Get ready for non-stop action with our adrenaline-pumping shooter game, coming soon! Test your skills, dominate the battlefield, and experience heart-pounding thrills as you face off against formidable opponents.",
      linkUrl: "#",
      comingSoon: true,
    },
  ];

  return (
    <div className="pt-24  lg:px-0 px-6 relative overflow-hidden  lg:w-[80vw] md:px-12">
      <div className="text-[2rem] px-12 leading-[2.6rem] font-semibold flex items-center  gap-[8px]">
        <div className="text-white">MORE</div>
        <GradientText text="GAMES" />
      </div>
      <div className="flex justify-end gap-4 my-4 md:mr-12">
        <button
          onClick={handlePrev}
          className={`${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={startIndex === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className={`${
            startIndex >= cards.length - cardsPerRow
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={startIndex >= cards.length - cardsPerRow}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          {cards
            .slice(startIndex, startIndex + cardsPerRow)
            .map((card, index) => (
              <motion.div
                key={startIndex + index}
                custom={direction}
                variants={slideVariants}
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
              >
                <GameCard
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  linkUrl={card.linkUrl}
                  btnLabel={card.btnLabel}
                  comingSoon={card.comingSoon}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewGames;
