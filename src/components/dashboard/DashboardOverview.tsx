import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Package,
  TrendingUp,
  TrendingDown,
  Eye,
  Plus
} from "lucide-react";

export const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,543.50",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-gaming-red"
    },
    {
      title: "Active Users",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-gaming-cyan"
    },
    {
      title: "Total Orders",
      value: "567",
      change: "+23.1%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-gaming-purple"
    },
    {
      title: "Products",
      value: "89",
      change: "+5.4%",
      trend: "up",
      icon: Package,
      color: "text-gaming-blue"
    }
  ];

  const recentOrders = [
    { id: "#1234", customer: "John Doe", product: "PUBG Mobile UC", amount: "$25.99", status: "completed" },
    { id: "#1235", customer: "Jane Smith", product: "Free Fire Diamonds", amount: "$15.99", status: "pending" },
    { id: "#1236", customer: "Mike Johnson", product: "Starlink Package", amount: "$99.99", status: "processing" },
    { id: "#1237", customer: "Sarah Wilson", product: "Gaming Credits", amount: "$49.99", status: "completed" },
  ];

  const topCategories = [
    { name: "PUBG Mobile", sales: 234, revenue: "$5,432" },
    { name: "Free Fire", sales: 187, revenue: "$3,221" },
    { name: "Chat Apps", sales: 145, revenue: "$2,876" },
    { name: "Gaming", sales: 98, revenue: "$1,987" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your store.</p>
        </div>
        <Button variant="gaming" className="gap-2">
          <Plus className="w-4 h-4" />
          Quick Action
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <Card key={stat.title} className="gaming-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendIcon className={`w-3 h-3 mr-1 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`} />
                  <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                    {stat.change}
                  </span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Orders
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View All
              </Button>
            </CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium">{order.customer}</div>
                    <div className="text-sm text-muted-foreground">{order.product}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{order.amount}</div>
                    <Badge 
                      variant={order.status === "completed" ? "default" : "secondary"}
                      className={order.status === "completed" ? "bg-green-500" : ""}
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Categories */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Top Categories
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View All
              </Button>
            </CardTitle>
            <CardDescription>Best performing categories this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCategories.map((category, index) => (
                <div key={category.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? "bg-gaming-red" : 
                      index === 1 ? "bg-gaming-cyan" :
                      index === 2 ? "bg-gaming-purple" : "bg-gaming-blue"
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{category.name}</div>
                      <div className="text-sm text-muted-foreground">{category.sales} sales</div>
                    </div>
                  </div>
                  <div className="font-bold text-gaming-red">{category.revenue}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};