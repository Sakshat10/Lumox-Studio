"use client"
import Games from "@/sections/studio/Games";
import Hero from "@/sections/studio/Hero";
import UpcomingGames from "@/sections/studio/UpcomingGames";
import React from "react";
import Footer from "@/sections/home/Footer";
import NewGames from "@/sections/home/NewGames";
const Studio = () => {
  return (
    <div className="space-y-8 pt-24 px-6">

      <Hero />
      <UpcomingGames />
      <NewGames/>
      {/* <Games /> */}
    </div>
  );
};

export default Studio;
