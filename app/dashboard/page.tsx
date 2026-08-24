import SquareIcon from "../components/squareIcon/page";
import Link from "next/link";
import { MainMenu } from "../data/mainMenu";

export default function Dashboard() {
  return (
    <div className="squareContainer">
      {MainMenu.map((item) => {
        return (
          <Link href={`/dashboard/${item.href}`} key={item.href}>
            <SquareIcon name={item.name} color={item.color} icon={item.icon} />
          </Link>
        );
      })}
    </div>
  );
}
