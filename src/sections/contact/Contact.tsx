"use client";
import React, { useState } from "react";
import GradientText from "../../components/shared/GradientText";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/studio/shared/Navbar";
import Footer from "../home/Footer";
import { Spinner } from "@/components/shared/Spinner";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [telegram, setTelegram] = useState("");
  

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://lumox-studio-backend.onrender.com/contact/",
        {
          name,
          email,
          telegram,
          message,
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
    <div className="min-h-[100vh] pt-[8rem] bg-[#101010] bg-cover bg-no-repeat flex flex-col bg-[url('/images/contact/contackBg1.png')]  gap-4 items-center py-[3rem] justify-center text-white  ">
      {/* <Navbar/> */}

      <div className="text-[1.8rem] font-semibold flex gap-2">
        <div className="text-white pb-4">CONTACT</div>
        <GradientText text="US" />
      </div>
      <div className="flex font-sans items-center justify-center">
        <form className="flex flex-col gap-2 w-[90vw] md:w-[40vw] text-[1rem] lg:w-[30vw] ">
          <label className="font-light text-[1rem]">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-[#282629] py-[12px]  px-[10px] text-[1rem] font-sans rounded-md text-gray-300"
            placeholder="David Millan"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
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

<label className="font-light text-[1rem]">
            Your Telegram Handle <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-[#282629] py-[12px]  px-[10px] text-[1rem] font-sans rounded-md text-gray-300"
            placeholder="David Millan"
            type="text"
            value={telegram}
            required
            onChange={(e) => setTelegram(e.target.value)}
          />
          <label className="font-light">
            Your Message <span className="text-red-500">*</span>
          </label>

          <textarea
            required
            className="bg-[#282629] py-[12px] px-[10px] text-[1rem] font-sans rounded-sm text-gray-300"
            value={message}
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
          />
          <button
            className={`text-white bg-gradient-to-r from-[#F808C1] via-[#9667e0] to-[#16C6ED] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 ${loading? "cursor-not-allowed opacity-80":""} text-[1.1rem] px-5 py-2.5 flex items-center justify-center text-center mt-4`}
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? <Spinner/> : "Send"}
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Contact;