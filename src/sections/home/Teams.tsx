"use client";
import React, { useState, useEffect } from "react";
import TeamCard from "../../components/home/TeamCard";
import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import GradientText from "@/components/shared/GradientText";
import TEAM_DATA from "@/constants/teamData";
import Image from "next/image";

const Teams: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("small");
      } else if (window.innerWidth < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const teamCards = [
    <TeamCard
      key={1}
      image={TEAM_DATA[0].image}
      designation={TEAM_DATA[0].designation}
      name={TEAM_DATA[0].name}
      bio={TEAM_DATA[0].bio}
      email={TEAM_DATA[0].email}
      linkedin={TEAM_DATA[0].linkedin}
      telegram={TEAM_DATA[0].telegram}
    />,
    <TeamCard
      key={2}
      image={TEAM_DATA[1].image}
      designation={TEAM_DATA[1].designation}
      name={TEAM_DATA[1].name}
      bio={TEAM_DATA[1].bio}
      email={TEAM_DATA[1].email}
      linkedin={TEAM_DATA[1].linkedin}
      telegram={TEAM_DATA[1].telegram}
    />,
    <TeamCard
      key={3}
      image={TEAM_DATA[2].image}
      designation={TEAM_DATA[2].designation}
      name={TEAM_DATA[2].name}
      bio={TEAM_DATA[2].bio}
      email={TEAM_DATA[2].email}
      linkedin={TEAM_DATA[2].linkedin}
      telegram={TEAM_DATA[2].telegram}
    />,
    <TeamCard
      key={4}
      image={TEAM_DATA[3].image}
      designation={TEAM_DATA[3].designation}
      name={TEAM_DATA[3].name}
      bio={TEAM_DATA[3].bio}
      email={TEAM_DATA[3].email}
      linkedin={TEAM_DATA[3].linkedin}
      telegram={TEAM_DATA[3].telegram}
    />,
    <TeamCard
      key={5}
      image={TEAM_DATA[4].image}
      designation={TEAM_DATA[4].designation}
      name={TEAM_DATA[4].name}
      bio={TEAM_DATA[4].bio}
      email={TEAM_DATA[4].email}
      linkedin={TEAM_DATA[4].linkedin}
      telegram={TEAM_DATA[4].telegram}
    />,
    <TeamCard
      key={6}
      image={TEAM_DATA[5].image}
      designation={TEAM_DATA[5].designation}
      name={TEAM_DATA[5].name}
      bio={TEAM_DATA[5].bio}
      email={TEAM_DATA[5].email}
      linkedin={TEAM_DATA[5].linkedin}
      telegram={TEAM_DATA[5].telegram}
    />,
    <TeamCard
      key={7}
      image={TEAM_DATA[6].image}
      designation={TEAM_DATA[6].designation}
      name={TEAM_DATA[6].name}
      bio={TEAM_DATA[6].bio}
      email={TEAM_DATA[6].email}
      linkedin={TEAM_DATA[6].linkedin}
      telegram={TEAM_DATA[6].telegram}
    />,
    <TeamCard
      key={8}
      image={TEAM_DATA[7].image}
      designation={TEAM_DATA[7].designation}
      name={TEAM_DATA[7].name}
      bio={TEAM_DATA[7].bio}
      email={TEAM_DATA[7].email}
      linkedin={TEAM_DATA[7].linkedin}
      telegram={TEAM_DATA[7].telegram}
    />,
  ];

  let displayedCards;
  if (screenSize === "small") {
    displayedCards = showAll ? teamCards : teamCards.slice(0, 2);
  } else if (screenSize === "medium") {
    displayedCards = showAll ? teamCards : teamCards.slice(0, 4);
  } else {
    displayedCards = teamCards;
  }

  return (
    <div className="bg-[#101010] relative overflow-hidden w-full min-h-[100vh] flex flex-col items-center gap-[4rem] py-[2rem]">
      <div className="text-[2rem] leading-[2.6] font-semibold flex gap-[8px]">
        <div className="text-white">OUR</div>
        <GradientText text="TEAM" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-8">
        {displayedCards}
      </div>
      {(screenSize === "small" || screenSize === "medium") && (
        <div className="flex mt-4">
          <button onClick={() => setShowAll(!showAll)} className="text-white">
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

export default Teams;
