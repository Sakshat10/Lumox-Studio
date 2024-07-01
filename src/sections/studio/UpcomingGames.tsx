import Image from "next/image";
import React from "react";

const UpcomingGames: React.FC = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="uppercase text-xl md:text-3xl font-semibold">
        Upcoming Games
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full relative">
          <img
            src={"/images/studio/games/upcomingGame1.jpg"}
            alt="upcoming game"
            width={500}
            height={500}
            className="w-full aspect-video object-cover object-center rounded-md"
          />
          <ComingSoonTag />
        </div>
        <div className="w-full relative">
          <img
            src={"/images/studio/games/upcomingGame2.png"}
            alt="upcoming game"
            width={500}
            height={500}
            className="w-full aspect-video object-cover object-center rounded-md"
          />
          <ComingSoonTag />
        </div>
      </div>
    </div>
  );
};

export default UpcomingGames;

const ComingSoonTag = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0101017D] border border-white px-4 py-2 text-nowrap">
    coming soon
  </div>
);
