import type { IconType } from "react-icons";
import { LuClipboardList } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { MdFormatListBulletedAdd, MdOutlineQuiz } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { PiBookDuotone } from "react-icons/pi";
import { FiRepeat, FiSliders } from "react-icons/fi";

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
    name: "Add Grammar",
    href: "addGrammar",
    color: "#FA6261",
    icon: PiBookDuotone,
  },
  {
    name: "Weakly Review",
    href: "weaklyReview",
    color: "#E25314",
    icon: FiRepeat,
  },
  {
    name: "Set up",
    href: "setup",
    color: "#FFCA73",
    icon: FiSliders,
  },
  {
    name: "Quiz",
    href: "quiz",
    color: "#7FDEA7",
    icon: MdOutlineQuiz,
  },
];
