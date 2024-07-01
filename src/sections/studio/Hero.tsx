"use client";
import { CiVolumeMute } from "react-icons/ci";
import { GoUnmute } from "react-icons/go";

import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, RefObject } from "react";
import { BsAndroid2 } from "react-icons/bs";

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true); // State to track if video is playing
  const videoRef: RefObject<HTMLVideoElement> = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="w-full flex flex-col lg:grid lg:grid-cols-5 gap-4">
        <div className="w-full aspect-video lg:aspect-auto relative lg:col-span-4 group">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            className="w-full h-full object-cover rounded-md"
            onClick={togglePlayPause} // Add onClick event here
          >
            <source src="/videos/lumox-trailer2.mp4" type="video/mp4" />
          </video>
          <button
            onClick={toggleMute}
            className="absolute top-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            {isMuted ? <CiVolumeMute /> : <GoUnmute />}
          </button>
          <Link
            href={"/games/lumox"}
            passHref
            className="inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-0 group-hover:opacity-100 duration-200 w-fit"
          >
            <BorderGradientBtn label="Play now!" border={false} />
          </Link>
        </div>
        <div className="flex lg:flex-col gap-4 w-full">
          <div className="h-full">
            <img
              src={"/images/studio/games/gamePreview1.png"}
              alt="game preview"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className=" h-full">
            <img
              src={"/images/studio/games/gamePreview2.png"}
              alt="game preview"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="h-full ">
            <img
              src={"/images/studio/games/gamePreview3.png"}
              alt="game preview"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        <p className="col-span-4">
          Dive into a hilarious and chaotic world where your favorite meme
          characters clash in epic wars. Strategize, build your forces, and lead
          your meme army to victory. Whether you&apos;re a fan of classic internet
          culture or just looking for some zany fun.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-items-center sm:w-fit">
        <Link
          href="/games/lumox"
          passHref
          className="col-span-2 w-full sm:col-span-1"
        >
          <BorderGradientBtn
            label="Play Lumox Land now"
            border={false}
            variant="full"
          />
        </Link>
        <Link
          href="#"
          passHref
          className="px-4 py-2 sm:py-1 max-w-44 bg-black border border-white/15 rounded-md"
        >
          <img
            src={"/images/studio/games/appleStore.png"}
            width={250}
            height={100}
            alt="coming soon to apple store"
            className="w-full h-fit object-contain object-center "
          />
        </Link>

        <Link
          href="https://we.tl/t-YZEpCflOJn"
          target="_blank"
          passHref
          className="px-4 py-2 sm:py-1 w-full h-full flex justify-center items-center gap-2 max-w-44 bg-black border border-white/15 rounded-md"
        >
          <span className="font-sans text">Get APK</span> <BsAndroid2 />
        </Link>
      </div>
    </div>
  );
};

export default Hero;