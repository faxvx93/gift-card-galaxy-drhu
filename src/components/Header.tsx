import { Search, ShoppingCart, User, Bell, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  const navItems = [
    "Dashboard",
    "Agents", 
    "Categories",
    "Support Center",
    "Terms and Policies",
    "MIGA APP",
    "Whatsapp",
    "PHONES"
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-gaming-red rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-gaming-red">MIGA</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 w-full"
            />
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Language/Currency */}
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">$</span>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon">
            <Bell className="w-4 h-4" />
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="w-4 h-4" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
              3
            </Badge>
          </Button>

          {/* User Profile */}
          <Button variant="ghost" size="icon">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t bg-muted/50">
        <div className="container">
          <div className="flex h-12 items-center space-x-8 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item}
                className="whitespace-nowrap text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};