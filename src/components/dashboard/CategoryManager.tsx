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
  Image as ImageIcon,
  Save,
  X
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const CategoryManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);

  const categories = [
    {
      id: 1,
      name: "PUBG Mobile",
      description: "PUBG Mobile UC and items",
      serviceCount: 30,
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop",
      status: "active",
      revenue: "$5,432"
    },
    {
      id: 2,
      name: "Free Fire",
      description: "Free Fire diamonds and packages",
      serviceCount: 4,
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop",
      status: "active",
      revenue: "$3,221"
    },
    {
      id: 3,
      name: "Chat Apps",
      description: "Chat application credits",
      serviceCount: 41,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      status: "active",
      revenue: "$2,876"
    },
    {
      id: 4,
      name: "Starlink",
      description: "Starlink packages and services",
      serviceCount: 3,
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
      status: "inactive",
      revenue: "$1,234"
    }
  ];

  const CategoryForm = ({ category, onSave, onCancel }: any) => {
    const [formData, setFormData] = useState({
      name: category?.name || "",
      description: category?.description || "",
      image: category?.image || "",
      status: category?.status || "active"
    });

    return (
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Category Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter category name"
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Enter category description"
          />
        </div>
        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            placeholder="Enter image URL"
          />
        </div>
        <div className="flex gap-2">
          <Button onClick={() => onSave(formData)} variant="gaming">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button onClick={onCancel} variant="outline">
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Category Management</h1>
          <p className="text-muted-foreground">Manage your gaming service categories</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="gaming" className="gap-2">
              <Plus className="w-4 h-4" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription>Create a new gaming service category</DialogDescription>
            </DialogHeader>
            <CategoryForm 
              onSave={(data: any) => {
                console.log("Saving category:", data);
                setIsAddDialogOpen(false);
              }}
              onCancel={() => setIsAddDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
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
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">All Status</Button>
            <Button variant="outline">Sort by Revenue</Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="gaming-card overflow-hidden">
            <div className="relative h-48">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge variant={category.status === "active" ? "default" : "secondary"}>
                  {category.status}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {category.name}
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="w-3 h-3" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => setEditingCategory(category)}
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-muted-foreground">Services</div>
                  <div className="font-semibold">{category.serviceCount}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Revenue</div>
                  <div className="font-semibold text-gaming-red">{category.revenue}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={!!editingCategory} onOpenChange={() => setEditingCategory(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
            <DialogDescription>Update category information</DialogDescription>
          </DialogHeader>
          <CategoryForm 
            category={editingCategory}
            onSave={(data: any) => {
              console.log("Updating category:", data);
              setEditingCategory(null);
            }}
            onCancel={() => setEditingCategory(null)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};