import "@/app/dashboard/style.css";
import Navbar from "../components/navbar/navbar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboardContainer">
      <div className="dashboardContent">
        <div className="dashboardHeader">
          <h2>Langora</h2>
        </div>
        <div className="dashboardMain">{children}</div>
        <footer className="navDashboard">
          <Navbar />
        </footer>
      </div>
    </div>
  );
}
