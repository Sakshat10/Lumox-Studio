import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import GradientText from "@/components/shared/GradientText";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

interface GameCardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  btnLabel: string;
  comingSoon?: boolean; // New optional prop
}

const GameCard: React.FC<GameCardProps> = ({
  imageUrl,
  title,
  description,
  linkUrl,
  btnLabel,
  comingSoon = false, // Default value
}) => {
  const [showMore, setShowMore] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [textHeight, setTextHeight] = useState("3rem"); // Initial height set to collapsed state
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Set the height based on showMore state
      setTextHeight(showMore ? `${textRef.current.scrollHeight}px` : "3rem");
    }
  }, [showMore]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-[85vw] md:w-[35vw] lg:w-[23vw] h-[75vh] md:h-[62vh] lg:h-[85vh]">
      <div>
        <div
          className="relative w-[90vw] md:w-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={imageUrl}
            alt={title}
            className={`h-[35vh] lg:h-[40vh] w-full object-cover flex items-center justify-center transition-transform duration-300 transform hover:scale-105 ${
              comingSoon ? "filter grayscale blur-[2px]" : ""
            }`}
          />
          {isHovered && (
            <Link href={comingSoon ? "#" : linkUrl} target="_blank" passHref>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <BorderGradientBtn
                  label={comingSoon ? "Coming Soon" : btnLabel}
                  disabled={comingSoon}
                  border={false}
                />
              </div>
            </Link>
          )}
        </div>
        <div className="text-white flex flex-col gap-2 pt-4">
          <GradientText
            className="text-[1.3rem] font-semibold font-sans"
            text={title}
          />
          <div
            className="relative overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: textHeight, opacity: showMore ? 1 : 0.8 }}
          >
            <p
              ref={textRef}
              className="font-light transition-opacity duration-300"
              style={{ maxHeight: "100%", overflow: "hidden" }}
            >
              {description}
            </p>
          </div>
          <button
            className="text-blue-500 text-start hover:underline transition-all duration-300"
            onClick={toggleShowMore}
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
