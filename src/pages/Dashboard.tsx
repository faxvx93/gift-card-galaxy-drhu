import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { CategoryManager } from "@/components/dashboard/CategoryManager";
import { ProductManager } from "@/components/dashboard/ProductManager";
import { OrderManager } from "@/components/dashboard/OrderManager";
import { UserManager } from "@/components/dashboard/UserManager";
import { AnalyticsView } from "@/components/dashboard/AnalyticsView";
import { SettingsView } from "@/components/dashboard/SettingsView";

const Dashboard = () => {
  const [activeView, setActiveView] = useState("overview");

  const renderActiveView = () => {
    switch (activeView) {
      case "overview":
        return <DashboardOverview />;
      case "categories":
        return <CategoryManager />;
      case "products":
        return <ProductManager />;
      case "orders":
        return <OrderManager />;
      case "users":
        return <UserManager />;
      case "analytics":
        return <AnalyticsView />;
      case "settings":
        return <SettingsView />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="flex-1 p-6">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;