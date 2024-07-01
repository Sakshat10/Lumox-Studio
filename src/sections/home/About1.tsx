import BorderGradientBtn from "@/components/shared/BorderGradientBtn";
import GradientText from "@/components/shared/GradientText";
import { MotionValue, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const About1: React.FC<Props> = ({ scrollYProgress }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    // [0.8, 1]
    [isTabletOrMobile ? 1 : 0.8, 1]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    // [5, 0]
    [isTabletOrMobile ? 0 : 5, 0]
  );

  return (
    <motion.div
      style={{ scale, rotate }}
      className=" bg-[#101010] relative w-full space-y-16 lg:space-y-48 lg:py-32 pb-16 lg:px-32 px-8 overflow-hidden"
    >
      <div className="flex gap-12 lg:gap-32 items-center">
        <div className="w-full hidden md:block">
          <img
            src="/images/homepage/about1/gamingEcosystem.png"
            alt="gaming ecosystem"
            width={1000}
            height={1000}
            className="object-contain w-full "
          />
        </div>
        <div className="relative w-full space-y-6">
          <h2 className="text-2xl sm:text-4xl uppercase font-semibold ">
            the ultimate <br /> gaming{" "}
            <GradientText text="ecosystem" className="inline-block" />
          </h2>
          <p className="leading-loose">
            Our innovative ecosystem combines blockchain technology, Web3
            infrastructure, a comprehensive platform, and a cutting-edge studio.
            We deliver immersive, player-centric experiences while empowering
            developers with seamless blockchain integration. Join us and
            redefine the gaming landscape.
          </p>
        </div>
      </div>
      <div className="relative flex gap-12 lg:gap-32 items-center">
        <div className="w-full space-y-6">
          <h2 className="text-2xl sm:text-4xl uppercase font-semibold ">
            Lumox <GradientText text="Studio" className="inline-block" />
          </h2>
          <p className="leading-loose">
            Lumox Studio, where innovation meets immersion. Our studio is the
            backbone of the Lumox ecosystem, we design and develop
            groundbreaking games for the world. Our cutting-edge technology and
            visionary design create immersive experiences that push the
            boundaries of gaming. Join us in crafting the future of interactive
            entertainment.
          </p>
          <Link
            className="inline-block bg-red-900"
            href="/studio/games"
            passHref
          >
            <BorderGradientBtn label="Go to platform" border={false} />
            {/* <span className="px-4 py-2 bg-red-500"> Go to platform</span> */}
          </Link>
        </div>
        <div className="w-full hidden md:block">
          <img
            src="/images/homepage/about1/lumoxPlatform.png"
            alt="gaming ecosystem"
            width={1000}
            height={1000}
            className="object-contain w-full scale-150 relative z-10"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 flex gap-52 animate-pulse duration-500">
          <div className="size-48 from-[#8F00FF] to-[#BA62FF] bg-gradient-to-r blur-[240px]" />
          <div className="size-48 bg-[#1B9EFC] blur-[240px]" />
        </div>
      </div>
    </motion.div>
  );
};

export default About1;
