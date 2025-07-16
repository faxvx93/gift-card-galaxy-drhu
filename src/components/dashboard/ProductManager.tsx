import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye,
  Package,
  DollarSign,
  Star
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const ProductManager = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "PUBG Mobile 60 UC",
      category: "PUBG Mobile",
      price: "$0.99",
      stock: 999,
      sales: 234,
      rating: 4.8,
      status: "active",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "PUBG Mobile 325 UC",
      category: "PUBG Mobile",
      price: "$4.99",
      stock: 999,
      sales: 187,
      rating: 4.9,
      status: "active",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Free Fire 100 Diamonds",
      category: "Free Fire",
      price: "$1.99",
      stock: 500,
      sales: 145,
      rating: 4.7,
      status: "active",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Discord Nitro 1 Month",
      category: "Chat Apps",
      price: "$9.99",
      stock: 200,
      sales: 98,
      rating: 4.6,
      status: "active",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      name: "Starlink Basic Package",
      category: "Starlink",
      price: "$99.99",
      stock: 50,
      sales: 23,
      rating: 4.5,
      status: "inactive",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=100&h=100&fit=crop"
    }
  ];

  const stats = [
    {
      title: "Total Products",
      value: "89",
      icon: Package,
      color: "text-gaming-red"
    },
    {
      title: "Active Products",
      value: "76",
      icon: Package,
      color: "text-gaming-cyan"
    },
    {
      title: "Avg Price",
      value: "$23.45",
      icon: DollarSign,
      color: "text-gaming-purple"
    },
    {
      title: "Avg Rating",
      value: "4.7",
      icon: Star,
      color: "text-gaming-blue"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Product Management</h1>
          <p className="text-muted-foreground">Manage your gaming products and services</p>
        </div>
        <Button variant="gaming" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Product
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
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">All Categories</Button>
            <Button variant="outline">All Status</Button>
            <Button variant="outline">Sort by Sales</Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>Manage all your gaming products</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">ID: #{product.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.category}</Badge>
                  </TableCell>
                  <TableCell className="font-medium text-gaming-red">{product.price}</TableCell>
                  <TableCell>
                    <Badge variant={product.stock > 100 ? "default" : "destructive"}>
                      {product.stock}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.sales}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {product.rating}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={product.status === "active" ? "default" : "secondary"}>
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                        <Trash2 className="w-3 h-3" />
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