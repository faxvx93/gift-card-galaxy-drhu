import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Save, 
  Upload,
  Globe,
  Mail,
  Shield,
  Palette,
  Bell
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SettingsView = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your store configuration and preferences</p>
        </div>
        <Button variant="gaming" className="gap-2">
          <Save className="w-4 h-4" />
          Save All Changes
        </Button>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card className="gaming-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Store Information
              </CardTitle>
              <CardDescription>Basic information about your gaming store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input id="storeName" defaultValue="MIGA Gaming Store" />
                </div>
                <div>
                  <Label htmlFor="storeUrl">Store URL</Label>
                  <Input id="storeUrl" defaultValue="miga4card.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="storeDescription">Store Description</Label>
                <Textarea 
                  id="storeDescription" 
                  defaultValue="Your premier destination for gaming gift cards and digital services"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="storeLogo">Store Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gaming-red rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">M</span>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Upload className="w-4 h-4" />
                    Upload New Logo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gaming-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Theme Settings
              </CardTitle>
              <CardDescription>Customize your store appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="w-full h-10 bg-gaming-red rounded-lg border-2 border-border"></div>
                </div>
                <div className="space-y-2">
                  <Label>Secondary Color</Label>
                  <div className="w-full h-10 bg-gaming-cyan rounded-lg border-2 border-border"></div>
                </div>
                <div className="space-y-2">
                  <Label>Accent Color</Label>
                  <div className="w-full h-10 bg-gaming-purple rounded-lg border-2 border-border"></div>
                </div>
                <div className="space-y-2">
                  <Label>Background</Label>
                  <div className="w-full h-10 bg-background rounded-lg border-2 border-border"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark theme for your store</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payments" className="space-y-6">
          <Card className="gaming-card">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Configure accepted payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "PayPal", enabled: true },
                { name: "Stripe", enabled: true },
                { name: "Credit Cards", enabled: true },
                { name: "Cryptocurrency", enabled: false },
                { name: "Bank Transfer", enabled: false }
              ].map((method) => (
                <div key={method.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium">{method.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {method.enabled ? "Active" : "Disabled"}
                    </div>
                  </div>
                  <Switch checked={method.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="gaming-card">
            <CardHeader>
              <CardTitle>Currency Settings</CardTitle>
              <CardDescription>Set your store currency preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Primary Currency</Label>
                  <Input defaultValue="USD" />
                </div>
                <div>
                  <Label>Currency Symbol</Label>
                  <Input defaultValue="$" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="gaming-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Email Notifications
              </CardTitle>
              <CardDescription>Configure email notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "New Orders", description: "Get notified when new orders are placed", enabled: true },
                { name: "Payment Confirmations", description: "Notifications for successful payments", enabled: true },
                { name: "User Registrations", description: "Alerts for new user sign-ups", enabled: false },
                { name: "Low Stock Alerts", description: "Warnings when products are running low", enabled: true },
                { name: "Weekly Reports", description: "Weekly analytics summary", enabled: true }
              ].map((notification) => (
                <div key={notification.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium">{notification.name}</div>
                    <div className="text-sm text-muted-foreground">{notification.description}</div>
                  </div>
                  <Switch checked={notification.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card className="gaming-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Current Password</Label>
                <Input type="password" placeholder="Enter current password" />
              </div>
              <div>
                <Label>New Password</Label>
                <Input type="password" placeholder="Enter new password" />
              </div>
              <div>
                <Label>Confirm New Password</Label>
                <Input type="password" placeholder="Confirm new password" />
              </div>
              <Button variant="gaming">Update Password</Button>
            </CardContent>
          </Card>

          <Card className="gaming-card">
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Enable 2FA</div>
                  <div className="text-sm text-muted-foreground">Secure your account with 2FA</div>
                </div>
                <Switch />
              </div>
              <Button variant="outline">Configure 2FA</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API Settings */}
        <TabsContent value="api" className="space-y-6">
          <Card className="gaming-card">
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
              <CardDescription>Configure your DRHU API integration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>API Base URL</Label>
                <Input defaultValue="https://api.drhu.example.com" />
              </div>
              <div>
                <Label>API Key</Label>
                <Input type="password" defaultValue="••••••••••••••••" />
              </div>
              <div>
                <Label>Webhook URL</Label>
                <Input defaultValue="https://yourdomain.com/webhook" />
              </div>
              <div className="flex gap-2">
                <Button variant="gaming">Test Connection</Button>
                <Button variant="outline">Generate New Key</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="gaming-card">
            <CardHeader>
              <CardTitle>API Endpoints</CardTitle>
              <CardDescription>Configure specific API endpoints</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Products", endpoint: "/api/products", status: "active" },
                { name: "Orders", endpoint: "/api/orders", status: "active" },
                { name: "Users", endpoint: "/api/users", status: "active" },
                { name: "Categories", endpoint: "/api/categories", status: "active" },
                { name: "Analytics", endpoint: "/api/analytics", status: "inactive" }
              ].map((endpoint) => (
                <div key={endpoint.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium">{endpoint.name}</div>
                    <div className="text-sm text-muted-foreground">{endpoint.endpoint}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      endpoint.status === "active" ? "bg-green-500" : "bg-red-500"
                    }`}></div>
                    <span className="text-sm">{endpoint.status}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};