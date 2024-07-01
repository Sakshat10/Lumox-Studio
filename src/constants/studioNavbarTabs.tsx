import { GoHomeFill } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { SiReasonstudios } from "react-icons/si";

type StudioNavbarTabs = {
  label: string;
  link: string;
  logo: JSX.Element;
};

export const STUDIO_NAVBAR_TABS: StudioNavbarTabs[] = [
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
    label: "Contact",
    link: "/contact",
    logo: <GrContact />,
  },
];
