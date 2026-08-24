import "@/app/components/navbar/style.css";
import Link from "next/link";
import {
  IoSettingsOutline,
  IoGridOutline,
  IoHomeOutline,
  IoPersonOutline,
} from "react-icons/io5";

export default function Navbar() {
  return (
    <ul className="navbarContainer">
      <Link href="">
        <li>
          <span className="navIcon">
            <IoPersonOutline />
          </span>
        </li>
      </Link>

      <Link href="">
        <li>
          <span className="navIcon">
            <IoSettingsOutline />
          </span>
        </li>
      </Link>

      <Link href="">
        <li>
          <span className="navIcon">
            <IoGridOutline />
          </span>
        </li>
      </Link>

      <Link href="">
        <li>
          <span className="navIcon">
            <IoHomeOutline />
          </span>
        </li>
      </Link>
    </ul>
  );
}
