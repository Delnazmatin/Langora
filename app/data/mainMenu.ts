import type { IconType } from "react-icons";
import { LuClipboardList } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { PiBookDuotone } from "react-icons/pi";

export type MainMenuType = {
  name: string;
  href?: string;
  color: string;
  icon: IconType;
};
export const MainMenu: MainMenuType[] = [
  {
    name: "Add Word",
    href: "addWord",
    color: "#339388",
    icon: IoMdAdd,
  },
  {
    name: "Word Lists",
    href: "wordLists",
    color: "#E2B2CC",
    icon: LuClipboardList,
  },
  {
    name: "Flashcards",
    href: "flashcards",
    color: "#96CCDE",
    icon: MdFormatListBulletedAdd,
  },
  {
    name: "Statistics",
    href: "statistics",
    color: "#DFB58A",
    icon: LuChartNoAxesCombined,
  },
  {
    name: "Story",
    href: "Story",
    color: "#E25314",
    icon: PiBookDuotone,
  },
];
