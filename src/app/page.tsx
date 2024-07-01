"use client";
import About1 from "@/sections/home/About1";
import About2 from "@/sections/home/About2";
import Hero from "@/sections/home/Hero";
import Portfolio from "@/sections/home/Portfolio";
import Roadmap from "@/sections/home/Roadmap";
import Teams from "@/sections/home/Teams";
import Partners from "@/sections/home/Partners";
import Footer from "@/sections/home/Footer";
// import NewGames from "@/sections/home/NewGames";
import Games from "@/sections/studio/Games";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { motion, useScroll, useTime, useTransform } from "framer-motion";
import SmoothScroller from "@/components/shared/SmoothScroller";

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const ballScale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  // const ballColor = useTransform(
  //   scrollYProgress,
  //   [0, 0.25, 0.5],
  //   ["#16C6ED", "#AF82F7", "#F808C1"]
  // );
  const ballTopPos = useTransform(scrollYProgress, [0, 1], ["5%", "50%"]);
  const ballLeftPos = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);

  const time = useTime();
  const ballRotateTime = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );

  return (
    <main className="text-base text-white bg-[#101010]">
      <SmoothScroller />

      <div ref={containerRef} className="relative z-auto">
        <Hero scrollYProgress={scrollYProgress} />
        <About1 scrollYProgress={scrollYProgress} />
        <motion.div
          style={{
            scale: ballScale,
            rotate: ballRotateTime,
            top: ballTopPos,
            left: ballLeftPos,
            // backgroundColor: ballColor,
            translateX: "-200%",
          }}
          className="fixed hidden lg:block  size-24 rounded-lg bg-gradient-to-l to-[#F808C1] via-[#AF82F7] from-[#16C6ED]"
        ></motion.div>
      </div>
      <About2 />
      <Portfolio />
      {/* <NewGames/> */}
      <Roadmap />
      <Teams />
      {/* <TeamNew /> */}
      <Partners />
      <Footer />
      {/* <Games/> */}
    </main>
  );
}
