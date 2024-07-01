"use client";

import React, { FC, MouseEventHandler } from "react";
import Image from "next/image";
import "./CornerStyleButton.css";
interface Props {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  image?: string;
  link?: string;
}

const CornerStyleButton: FC<Props> = ({ label, onClick, link, image }) => {
  return link ? (
    <a href={link} target={"_blank"}>
      <Logos image={image} onClick={onClick} label={label} />
    </a>
  ) : (
    <Logos image={image} onClick={onClick} label={label} />
  );
};

const Logos: FC<Props> = ({ label, onClick, image }) => {
  return (
    <button
      className="neon-button a2 !flex items-center justify-center "
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {label && label}
      {image && (
        <img
          className="w-[6rem] h-[2.3rem] object-contain "
          src={image}
          alt="logo"
          height={50}
          width={130}
        />
      )}
    </button>
  );
};

export default CornerStyleButton;
