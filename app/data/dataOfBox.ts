import { IconType } from "react-icons";

import {
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
  MdSignalCellularAlt,
} from "react-icons/md";
export type BoxType = {
  text: string;
  color: string;
  icon: IconType;
};

export const DataOfBoxes = [
  {
    text: "Easy",
    color: "#34C759",
    icon: MdSignalCellularAlt1Bar,
  },
  {
    text: "Medium",
    color: "#FFAF2A",
    icon: MdSignalCellularAlt2Bar,
  },
  {
    text: "Hard",
    color: "#FF4267",
    icon: MdSignalCellularAlt,
  },
];
