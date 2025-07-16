import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Eye,
  Download,
  Filter,
  ShoppingCart,
  DollarSign,
  Clock,
  CheckCircle
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const OrderManager = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const orders = [
    {
      id: "#1234",
      customer: "John Doe",
      email: "john@example.com",
      product: "PUBG Mobile 325 UC",
      amount: "$4.99",
      status: "completed",
      paymentMethod: "PayPal",
      date: "2024-01-15",
      time: "14:30"
    },
    {
      id: "#1235",
      customer: "Jane Smith",
      email: "jane@example.com",
      product: "Free Fire 100 Diamonds",
      amount: "$1.99",
      status: "pending",
      paymentMethod: "Credit Card",
      date: "2024-01-15",
      time: "13:45"
    },
    {
      id: "#1236",
      customer: "Mike Johnson",
      email: "mike@example.com",
      product: "Discord Nitro 1 Month",
      amount: "$9.99",
      status: "processing",
      paymentMethod: "Stripe",
      date: "2024-01-15",
      time: "12:20"
    },
    {
      id: "#1237",
      customer: "Sarah Wilson",
      email: "sarah@example.com",
      product: "PUBG Mobile 60 UC",
      amount: "$0.99",
      status: "completed",
      paymentMethod: "PayPal",
      date: "2024-01-15",
      time: "11:15"
    },
    {
      id: "#1238",
      customer: "Tom Brown",
      email: "tom@example.com",
      product: "Starlink Basic Package",
      amount: "$99.99",
      status: "failed",
      paymentMethod: "Credit Card",
      date: "2024-01-15",
      time: "10:30"
    }
  ];

  const stats = [
    {
      title: "Total Orders",
      value: "1,234",
      icon: ShoppingCart,
      color: "text-gaming-red"
    },
    {
      title: "Pending Orders",
      value: "45",
      icon: Clock,
      color: "text-gaming-cyan"
    },
    {
      title: "Completed Orders",
      value: "1,156",
      icon: CheckCircle,
      color: "text-gaming-purple"
    },
    {
      title: "Total Revenue",
      value: "$12,543",
      icon: DollarSign,
      color: "text-gaming-blue"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "processing":
        return "bg-blue-500";
      case "failed":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Order Management</h1>
          <p className="text-muted-foreground">Track and manage customer orders</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button variant="gaming" className="gap-2">
            <Filter className="w-4 h-4" />
            Advanced Filter
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
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
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Search and Filters */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search orders by ID, customer, or product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">All Status</Button>
            <Button variant="outline">Today</Button>
            <Button variant="outline">This Week</Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest customer orders and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.customer}</div>
                      <div className="text-sm text-muted-foreground">{order.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{order.product}</div>
                  </TableCell>
                  <TableCell className="font-medium text-gaming-red">{order.amount}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{order.paymentMethod}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.date}</div>
                      <div className="text-sm text-muted-foreground">{order.time}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button variant="gaming-outline" size="sm">
                        Process
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};