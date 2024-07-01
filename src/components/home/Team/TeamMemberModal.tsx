import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdClose } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";

interface Props {
  name: string;
  bio: string;
  designation: string;
  image: string;
  linkedin?: string;
  telegram?: string;
  email?: string;
  setIsModalOpen: (arg0: boolean) => void;
}

const TeamMemberModal: React.FC<Props> = ({
  image,
  name,
  designation,
  bio,
  linkedin,
  email,
  telegram,
  setIsModalOpen,
}) => {
  return (
    <div
      onClick={() => {
        setIsModalOpen(false);
      }}
      className="bg-black/50 fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[12]"
    >
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-[75%] h-[75%] lg:h-auto lg:aspect-[16/6]  p-[1px] mt-8 rounded-md bg-gradient-to-r from-[#F808C1] via-[#AF82F7] to-[#16C6ED]"
      >
        <div
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="cursor-pointer absolute top-0 right-0 -translate-x-full translate-y-full"
        >
          <MdClose />
        </div>
        <div className="w-full h-full px-8 py-10 overflow-auto bg-black/85 rounded-md flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-1/3">
            <img
              height={500}
              width={500}
              src={image}
              alt={name}
              className="w-full aspect-square object-cover rounded-md"
            />
          </div>
          <div className="w-full space-y-4">
            <div className="flex items-center flex-col gap-2 sm:flex-row justify-between w-full">
              <h2>
                {name} | {designation}
              </h2>
              <div className="flex items-center gap-4">
                {linkedin && (
                  <a
                    target="_blank"
                    href={linkedin}
                    className="w-6 aspect-square"
                  >
                    <img
                      src={"/images/homepage/footer/linkedin.png"}
                      width={50}
                      height={50}
                      alt={linkedin}
                      className="w-full"
                    />
                  </a>
                )}
                {email && (
                  <a href={`mailto:${email}`} className="w-6 aspect-square">
                    <IoIosMail className="text-3xl" />
                  </a>
                )}
                {telegram && (
                  <a
                    target="_blank"
                    href={telegram}
                    className="w-6 aspect-square"
                  >
                    <img
                      src={"/images/homepage/footer/telegram.png"}
                      width={50}
                      height={50}
                      alt={telegram}
                      className="w-full"
                    />
                  </a>
                )}
              </div>
            </div>
            <hr />
            <p>{bio}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamMemberModal;
