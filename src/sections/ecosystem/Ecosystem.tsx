"use client";
import React, { useState } from "react";
import GradientText from "../../components/shared/GradientText";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../home/Footer";
import { Spinner } from "@/components/shared/Spinner";

const Ecosystem: React.FC = () => {
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://lumox-studio-backend.onrender.com/ecosystem",
        {
          website,
          email,
          telegram,
          twitter,
          description,
        }
      );
      setLoading(false);
      toast.success(response.data.result);
    } catch (error: any) {
      setLoading(false);
      toast.error("Message could not be sent");
    }
  };

  return (
    <div className="min-h-[100vh] pt-[8rem] bg-cover bg-no-repeat flex flex-col bg-[url('/images/contact/contackBg1.png')]  gap-4 items-center py-[3rem] justify-center text-white  ">
      {/* <Navbar/> */}

      <div className="text-[1.8rem] font-semibold flex gap-2">
        <div className="text-white pb-4">PROJECT</div>
        <GradientText text="DETAILS" />
      </div>
      <div className="flex font-sans items-center justify-center">
        <form className="flex flex-col gap-2 w-[90vw] md:w-[40vw] text-[1rem] lg:w-[30vw] ">
          <label className="font-light text-[1rem]">
            Website Link <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-[#282629] py-[12px]  px-[10px] text-[1rem] font-sans rounded-md text-gray-300"
            placeholder="www.google.com"
            type="text"
            value={website}
            required
            onChange={(e) => setWebsite(e.target.value)}
          />

          <label className="font-light">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            value={email}
            placeholder="Your Email..."
            className="bg-[#282629] py-[12px] px-[10px] text-[1rem] font-sans rounded-sm text-gray-300"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="font-light">
            Your Twitter Handle <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={twitter}
            required
            placeholder="Twitter handle here"
            className="bg-[#282629] py-[12px] px-[10px] text-[1rem] font-sans rounded-sm text-gray-300"
            onChange={(e) => setTwitter(e.target.value)}
          />
          <label className="font-light">
            Your Telegram Handle <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={telegram}
            required
            placeholder="Telegram handle here"
            className="bg-[#282629] py-[12px] px-[10px] text-[1rem] font-sans rounded-sm text-gray-300"
            onChange={(e) => setTelegram(e.target.value)}
          />
          <label className="font-light">
            Your Project Description <span className="text-red-500">*</span>
          </label>

          <textarea
            required
            className="bg-[#282629] py-[12px] px-[10px] text-[1rem] font-sans rounded-sm text-gray-300"
            value={description}
            placeholder="Your Project Description"
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
          />
          <button
            className={`text-white bg-gradient-to-r from-[#F808C1] via-[#9667e0] to-[#16C6ED] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 ${
              loading ? "cursor-not-allowed opacity-75 " : ""
            } text-[1.1rem] px-5 py-2.5 flex justify-center items-center text-center mt-4`}
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Send"}
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Ecosystem;