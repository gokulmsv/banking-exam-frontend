import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/dashboard/HeroSection";
import StatsCards from "../components/dashboard/StatsCards";
import TestCategories from "../components/dashboard/TestCategories";
import RecentActivity from "../components/dashboard/RecentActivity";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import QuickMockTests from "../components/dashboard/QuickMockTests";

function Dashboard({ startTest }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">
        <Navbar />

        <div className="p-8 space-y-8">
          <HeroSection startTest={startTest} />

          <StatsCards />

          <TestCategories />

          <div className="grid grid-cols-2 gap-6">
            <PerformanceChart />
            <RecentActivity />
          </div>

          <QuickMockTests />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;