import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { dhruApi, DhruProduct } from "@/services/dhruApi";
import { DhruApiSettings } from "./DhruApiSettings";
import { 
  Search, 
  Edit, 
  Trash2, 
  Eye,
  Package,
  DollarSign,
  Star,
  RefreshCw,
  Settings
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
  const [products, setProducts] = useState<DhruProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const dhruProducts = await dhruApi.getProducts();
      setProducts(dhruProducts);
      toast({
        title: "Success",
        description: `Loaded ${dhruProducts.length} products from Dhru API`,
      });
    } catch (error) {
      console.error('Failed to load products:', error);
      toast({
        title: "Error",
        description: "Failed to load products. Please check your API configuration.",
        variant: "destructive",
      });
      setShowSettings(true);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.category_name && product.category_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const stats = [
    {
      title: "Total Products",
      value: products.length.toString(),
      icon: Package,
      color: "text-gaming-red"
    },
    {
      title: "Available Products",
      value: products.filter(p => p.available).length.toString(),
      icon: Package,
      color: "text-gaming-cyan"
    },
    {
      title: "Avg Price",
      value: products.length > 0 ? `$${(products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2)}` : "$0.00",
      icon: DollarSign,
      color: "text-gaming-purple"
    },
    {
      title: "Product Types",
      value: [...new Set(products.map(p => p.product_type))].length.toString(),
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
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => setShowSettings(!showSettings)}
            className="gap-2"
          >
            <Settings className="w-4 h-4" />
            API Settings
          </Button>
          <Button 
            variant="gaming" 
            onClick={loadProducts} 
            disabled={isLoading}
            className="gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            Sync Products
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

      {/* API Settings */}
      {showSettings && <DhruApiSettings />}

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
            <Button variant="outline">Sort by Price</Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>Manage all your gaming products from Dhru API</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Quantity Range</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <div className="flex items-center justify-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Loading products from Dhru API...
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredProducts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    No products found. {products.length === 0 ? 'Configure API settings to sync products.' : 'Try adjusting your search.'}
                  </TableCell>
                </TableRow>
              ) : (
                filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                          <Package className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">ID: #{product.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category_name || 'Uncategorized'}</Badge>
                    </TableCell>
                    <TableCell className="font-medium text-gaming-red">
                      ${product.price.toFixed(4)}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {product.product_type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">
                        {product.qty_values 
                          ? (Array.isArray(product.qty_values) 
                              ? `${product.qty_values.length} options` 
                              : `${product.qty_values.min} - ${product.qty_values.max}`)
                          : 'N/A'
                        }
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={product.available ? "default" : "secondary"}>
                        {product.available ? 'Available' : 'Unavailable'}
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
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};