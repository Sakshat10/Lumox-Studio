"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import BorderGradientBtn from "../shared/BorderGradientBtn";
import TeamMemberModal from "./Team/TeamMemberModal";
import { AnimatePresence } from "framer-motion";

type TeamCardProps = {
  image: string;
  designation: string;
  name: string;
  bio: string;
  linkedin?: string;
  telegram?: string;
  email?: string;
};

const TeamCard: FC<TeamCardProps> = ({
  image,
  designation,
  name,
  bio,
  linkedin,
  telegram,
  email,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="relative bg-gradient-to-l to-[#332c31] gradient-border via-[#68597f] from-[#2b3030] overflow-hidden rounded-md classrounded group">
      <AnimatePresence>
        {isModalOpen && (
          <TeamMemberModal
            bio={bio}
            designation={designation}
            image={image}
            name={name}
            linkedin={linkedin}
            telegram={telegram}
            email={email}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </AnimatePresence>
      <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 size-full bg-gradient-to-br from-[#F808C1]/20 via-[#AF82F7]/20 to-[#16C6ED]/20 flex justify-center items-center">
        <BorderGradientBtn
          label="Read bio"
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
      </div>
      <div className="w-[270px] pt-4 flex flex-col justify-center">
        <div className="bg-gradient-to-l to-[#332c31] via-[#68597f] from-[#2b3030]">
          <div className="bg-[#1b1c1d] w-fit px-[1rem] py-2 rounded-md mx-auto mb-2">
            <p className="text-white">{designation}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={image} alt="Male" height={180} width={180} />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-[2.5rem] py-4 bg-[#2e2d31]">
          <h1 className="text-white text-center font-semibold">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
