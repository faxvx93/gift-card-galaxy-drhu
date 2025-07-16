import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Eye,
  Edit,
  Ban,
  Users,
  UserCheck,
  UserX,
  DollarSign
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserManager = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "customer",
      status: "active",
      joinDate: "2024-01-10",
      totalOrders: 15,
      totalSpent: "$234.50",
      lastOrder: "2024-01-15"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      role: "customer",
      status: "active",
      joinDate: "2024-01-08",
      totalOrders: 8,
      totalSpent: "$156.99",
      lastOrder: "2024-01-14"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "agent",
      status: "active",
      joinDate: "2023-12-15",
      totalOrders: 45,
      totalSpent: "$1,234.00",
      lastOrder: "2024-01-15"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      role: "customer",
      status: "suspended",
      joinDate: "2024-01-05",
      totalOrders: 3,
      totalSpent: "$45.99",
      lastOrder: "2024-01-12"
    },
    {
      id: 5,
      name: "Tom Brown",
      email: "tom@example.com",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      role: "customer",
      status: "inactive",
      joinDate: "2023-11-20",
      totalOrders: 2,
      totalSpent: "$19.99",
      lastOrder: "2023-12-01"
    }
  ];

  const stats = [
    {
      title: "Total Users",
      value: "2,341",
      icon: Users,
      color: "text-gaming-red"
    },
    {
      title: "Active Users",
      value: "1,987",
      icon: UserCheck,
      color: "text-gaming-cyan"
    },
    {
      title: "Suspended Users",
      value: "23",
      icon: UserX,
      color: "text-gaming-purple"
    },
    {
      title: "Avg Spent",
      value: "$156.78",
      icon: DollarSign,
      color: "text-gaming-blue"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "suspended":
        return "bg-red-500";
      case "inactive":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "agent":
        return "bg-gaming-cyan text-white";
      case "admin":
        return "bg-gaming-red text-white";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage customers and agents</p>
        </div>
        <Button variant="gaming" className="gap-2">
          <Users className="w-4 h-4" />
          Invite User
        </Button>
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
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">All Roles</Button>
            <Button variant="outline">All Status</Button>
            <Button variant="outline">Sort by Activity</Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Manage all platform users</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={user.role === "customer" ? "outline" : "default"}
                      className={getRoleColor(user.role)}
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.totalOrders}</TableCell>
                  <TableCell className="font-medium text-gaming-red">{user.totalSpent}</TableCell>
                  <TableCell>{user.lastOrder}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                        <Ban className="w-3 h-3" />
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