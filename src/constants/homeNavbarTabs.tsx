import { SiReasonstudios } from "react-icons/si";
import { GoHomeFill } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { IoReceipt } from "react-icons/io5";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { VscReferences } from "react-icons/vsc";

type StudioNavbarTab = {
  label: string;
  link: string;
  logo: JSX.Element;
};

export const HOME_NAVBAR_TABS: StudioNavbarTab[] = [
  {
    label: "Home",
    link: "/",
    logo: <GoHomeFill />,
  },
  {
    label: "Studio",
    link: "/studio/games",
    logo: <SiReasonstudios />,
  },
  {
    label: "Referral",
    link: "/referral",
    logo: <VscReferences />,
  },
  {
    label: "Vesting",
    link: "/studio/vesting",
    logo: <FaMoneyBill1Wave />,
  },
  {
    label: "Contact",
    link: "/contact",
    logo: <GrContact />,
  },

  {
    label: "Whitepaper",
    link: "/litepaper/LUMOX-Whitepaper.pdf",
    logo: <IoReceipt />,
  },
];
