"use client";
import React, { FC, MouseEventHandler } from "react";
import "./CornerStyleButton1.css";

interface Props {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CornerStyleButton: FC<Props> = ({ label, onClick }) => {
  return (
    <button className="neon-button a1" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {label}
    </button>
  );
};

export default CornerStyleButton;
