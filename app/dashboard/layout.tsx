import "@/app/dashboard/style.css";
import Navbar from "../components/navbar/navbar";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboardContainer">
      <div className="dashboardContent">
        <div className="dashboardHeader">
          <Link href="">
            <span className="profileIcon">
              <IoPersonOutline />
            </span>
          </Link>
        </div>
        <div className="dashboardMain">{children}</div>
        <div className="navDashboard">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
