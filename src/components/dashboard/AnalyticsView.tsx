import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown,
  Download,
  Calendar,
  Users,
  ShoppingCart,
  DollarSign,
  Eye
} from "lucide-react";

export const AnalyticsView = () => {
  const salesData = [
    { month: "Jan", revenue: 4500, orders: 245 },
    { month: "Feb", revenue: 5200, orders: 287 },
    { month: "Mar", revenue: 4800, orders: 267 },
    { month: "Apr", revenue: 6100, orders: 334 },
    { month: "May", revenue: 7200, orders: 398 },
    { month: "Jun", revenue: 8500, orders: 456 }
  ];

  const topProducts = [
    { name: "PUBG Mobile 325 UC", sales: 1234, revenue: "$6,170" },
    { name: "Free Fire 100 Diamonds", sales: 987, revenue: "$1,964" },
    { name: "Discord Nitro 1 Month", sales: 654, revenue: "$6,540" },
    { name: "PUBG Mobile 60 UC", sales: 432, revenue: "$428" }
  ];

  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-gaming-red"
    },
    {
      title: "Total Orders",
      value: "2,456",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-gaming-cyan"
    },
    {
      title: "New Customers",
      value: "345",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "text-gaming-purple"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "-2.1%",
      trend: "down",
      icon: Eye,
      color: "text-gaming-blue"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your store performance and insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </Button>
          <Button variant="gaming" className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <Card key={metric.title} className="gaming-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <Icon className={`w-4 h-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <TrendIcon className={`w-3 h-3 mr-1 ${
                    metric.trend === "up" ? "text-green-500" : "text-red-500"
                  }`} />
                  <span className={metric.trend === "up" ? "text-green-500" : "text-red-500"}>
                    {metric.change}
                  </span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {salesData.map((data, index) => (
                <div key={data.month} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gaming-red rounded-t-lg min-h-[20px] flex items-end justify-center text-white text-xs font-medium p-1"
                    style={{ height: `${(data.revenue / 8500) * 200}px` }}
                  >
                    ${data.revenue / 1000}k
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{data.month}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Best selling products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? "bg-gaming-red" : 
                      index === 1 ? "bg-gaming-cyan" :
                      index === 2 ? "bg-gaming-purple" : "bg-gaming-blue"
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">{product.sales} sales</div>
                    </div>
                  </div>
                  <div className="font-bold text-gaming-red">{product.revenue}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Customer Acquisition */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle>Customer Acquisition</CardTitle>
            <CardDescription>New vs returning customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">New Customers</span>
                <Badge className="bg-gaming-cyan">68%</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gaming-cyan h-2 rounded-full" style={{ width: "68%" }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Returning Customers</span>
                <Badge className="bg-gaming-red">32%</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gaming-red h-2 rounded-full" style={{ width: "32%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Performance */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle>Category Performance</CardTitle>
            <CardDescription>Revenue by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "PUBG Mobile", percentage: 45 },
                { name: "Free Fire", percentage: 25 },
                { name: "Chat Apps", percentage: 20 },
                { name: "Others", percentage: 10 }
              ].map((category, index) => (
                <div key={category.name} className="flex justify-between items-center">
                  <span className="text-sm">{category.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          index === 0 ? "bg-gaming-red" : 
                          index === 1 ? "bg-gaming-cyan" :
                          index === 2 ? "bg-gaming-purple" : "bg-gaming-blue"
                        }`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{category.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Growth Metrics */}
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle>Growth Metrics</CardTitle>
            <CardDescription>Year over year growth</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-red">+127%</div>
                <div className="text-sm text-muted-foreground">Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-cyan">+89%</div>
                <div className="text-sm text-muted-foreground">Customer Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-purple">+156%</div>
                <div className="text-sm text-muted-foreground">Order Growth</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};