import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import GradientText from "@/components/shared/GradientText";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About2: React.FC = () => {
  return (
    <div className="relative min-h-[50vh] lg:min-h-[75vh] max-h-[800px] w-full py-12 md:py-24 px-8">
      <div className="relative z-10 space-y-8 w-full max-w-[720px] text-center mx-auto">
        <h2 className="text-2xl sm:text-4xl uppercase font-semibold ">
          LUMOX <GradientText text="ECOSYSTEM" />
        </h2>
        <p className="leading-loose text-[0.9rem]">
          Calling all play-to-earn game creators! If you&apos;re passionate
          about gaming and want to join our studio, send us your message here.
          Let&apos;s collaborate and bring your game to life within the Lumox
          ecosystem. Apply now and be part of our exciting journey in
          revolutionizing gaming!
        </p>
        <Link href="/ecosystem" passHref className="inline-block mx-auto">
          <BorderGradientBtn label="Join Ecosystem" border={false} />
        </Link>
      </div>
      <div className="absolute h-full w-full  top-0 left-0">
        <div className="absolute bg-gradient-to-t from-[#101010]/75 via-transparent to-[#101010]/75 text-white w-full h-full" />
        <img
          alt="background"
          src="/images/homepage/about2/about2.png"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About2;
