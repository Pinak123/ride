import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar/>
      <DashboardContent/>
    </div>
  );
}

export default Dashboard