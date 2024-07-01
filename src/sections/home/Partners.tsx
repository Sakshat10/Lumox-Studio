import Image from "next/image";
import CornerStyleButton from "../../components/shared/CorneredStyleButton/CornerStyleButton";
import React from "react";
import GradientText from "@/components/shared/GradientText";

interface Logos {
  image: string;
  link?: string;
}

const partnerLogos: Logos[] = [
  { image: "/images/homepage/partners/binance.png" },
  {
    image: "/images/homepage/partners/binance2.png",
    link: "https://blocklionscapital.com/",
  },
  { image: "/images/homepage/partners/binance3.png" },
  { image: "/images/homepage/partners/binance4.png" },
  { image: "/images/homepage/partners/binance5.png" },
  { image: "/images/homepage/partners/binance6.png" },
  { image: "/images/homepage/partners/binance1.png" },
];

const featuredInLogos: Logos[] = [
  {
    image: "/images/homepage/partners/yahoo.png",
    link: "https://finance.yahoo.com/news/lumox-studio-unveils-plans-native-200000237.html",
  },
  {
    image: "/images/homepage/partners/yahoo1.png",
    link: "https://www.digitaljournal.com/pr/news/accesswire/lumox-studio-unveils-plans-native-1735679359.html",
  },
  {
    image: "/images/homepage/partners/yahoo2.png",
    link: "https://www.benzinga.com/pressreleases/24/06/39171502/lumox-studio-announces-ambitious-release-schedule-for-2024-with-three-exciting-new-games",
  },
  {
    image: "/images/homepage/partners/yahoo3.png",
    link: "https://markets.businessinsider.com/news/stocks/lumox-studio-reveals-their-exciting-schedule-of-upcoming-games-through-2024-1033463247",
  },
];

const Partners: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 pt-8 items-center overflow-hidden bg-cover bg-center bg-[url('/images/homepage/partners/bgImage.png')] min-h-screen">
      <div className="text-[2rem] leading-[2.6rem] font-semibold z-10 relative flex gap-2">
        <div className="text-white">OUR</div>
        <GradientText text="PARTNERS" />
      </div>
      <div className="grid grid-cols-2   lg:grid-cols-4 px-2 justify-center gap-8">
        {partnerLogos.slice(0, 4).map(({ image, link }, index) => (
          <CornerStyleButton key={index} image={image} link={link} />
        ))}
        {/* The remaining items */}
        <div className="col-span-2  lg:col-span-4 flex flex-wrap justify-center gap-8">
          {partnerLogos.slice(4).map(({ image, link }, index) => (
            <CornerStyleButton key={index + 4} image={image} link={link} />
          ))}
        </div>
      </div>
      <div className="flex flex-col backdrop-blur-[2px] justify-center items-center py-16">
        <div className="pb-4">
          <img
            src="/images/homepage/partners/line.png"
            alt="line"
            width={2000}
            height={4}
          />
        </div>
        <div className="text-2xl pb-8 font-semibold relative flex gap-4">
          <GradientText text="FEATURED IN" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 px-4 items-center justify-center gap-12">
          {featuredInLogos.map(({ image, link }, index) => (
            <a key={index} target="_blank" href={link}>
              <img
                src={image}
                className="`h-[5.5rem] w-[9rem] ${index === 3 ? 'h-[3rem] w-[6rem]' : ''}`"
                alt="Featured logo"
                width={140}
                height={45}
              />
            </a>
          ))}
        </div>
        <div className="pt-4">
          <img
            src="/images/homepage/partners/line.png"
            alt="line"
            width={2000}
            height={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
