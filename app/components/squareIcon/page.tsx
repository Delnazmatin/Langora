import "@/app/components/squareIcon/style.css";
import { MainMenuType } from "@/app/data/mainMenu";

export default function SquareIcon({ name, color, icon: Icon }: MainMenuType) {
  return (
    <div className="squareIconContainer" style={{ backgroundColor: color }}>
      <span>
        <Icon />
      </span>
      {name}
    </div>
  );
}
