import "@/app/components/navbar/style.css";
import Link from "next/link";
import {
  IoSettingsOutline,
  IoGridOutline,
  IoHomeOutline,
} from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <ul>
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
    </div>
  );
}
