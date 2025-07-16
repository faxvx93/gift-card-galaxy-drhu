import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  Grid3X3,
  Tags
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export const DashboardSidebar = ({ activeView, setActiveView }: DashboardSidebarProps) => {
  const menuItems = [
    {
      id: "overview",
      label: "Overview",
      icon: LayoutDashboard,
    },
    {
      id: "categories",
      label: "Categories",
      icon: Grid3X3,
    },
    {
      id: "products",
      label: "Products",
      icon: Package,
    },
    {
      id: "orders",
      label: "Orders",
      icon: ShoppingCart,
    },
    {
      id: "users",
      label: "Users",
      icon: Users,
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-64 border-r bg-muted/20 min-h-[calc(100vh-4rem)]">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeView === item.id ? "gaming" : "ghost"}
              className={cn(
                "w-full justify-start",
                activeView === item.id && "bg-gaming-red text-white"
              )}
              onClick={() => setActiveView(item.id)}
            >
              <Icon className="w-4 h-4 mr-3" />
              {item.label}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
};