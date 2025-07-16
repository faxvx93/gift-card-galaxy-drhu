import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchFilters = () => {
  const filterTabs = [
    { id: "all", label: "All", active: true },
    { id: "categories", label: "Categories", active: false },
    { id: "agents", label: "Agents", active: false },
    { id: "services", label: "Services", active: false },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Search Results</h2>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="search"
            placeholder="Search for gaming services, gift cards, or agents..."
            className="pl-12 pr-4 py-3 text-lg"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filterTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={tab.active ? "gaming" : "gaming-outline"}
              className="rounded-full"
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Empty State */}
        <div className="text-center py-12">
          <div className="gaming-card max-w-md mx-auto p-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-gaming-red/10 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gaming-red" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or browse our categories below.
            </p>
            <Button variant="gaming" size="sm">
              Browse Categories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};