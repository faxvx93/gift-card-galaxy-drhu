import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import { SearchFilters } from "@/components/SearchFilters";

const Index = () => {
  // Gaming categories data
  const hotCategories = [
    {
      title: "PUBG MOBILE",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop",
      serviceCount: 30,
      gradient: "from-gaming-red/70 to-gaming-red-dark/90"
    },
    {
      title: "FREE FIRE",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop",
      serviceCount: 4,
      gradient: "from-gaming-cyan/70 to-gaming-cyan-dark/90"
    },
    {
      title: "CHAT APP",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      serviceCount: 41,
      gradient: "from-gaming-purple/70 to-gaming-blue/90"
    },
    {
      title: "STARLINK",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
      serviceCount: 3,
      gradient: "from-gaming-blue/70 to-gaming-cyan/90"
    },
    {
      title: "GAMING",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      serviceCount: 5,
      gradient: "from-gaming-red/70 to-gaming-purple/90"
    },
    {
      title: "STREAMING",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      serviceCount: 12,
      gradient: "from-gaming-cyan/70 to-gaming-red/90"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SearchFilters />
      
      {/* Hot Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Hot Categories 🔥
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the most popular gaming services and digital products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              serviceCount={category.serviceCount}
              gradient={category.gradient}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gaming-red rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gaming-red">MIGA</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-gaming-red transition-colors">Terms</a>
              <a href="#" className="hover:text-gaming-red transition-colors">Privacy</a>
              <a href="#" className="hover:text-gaming-red transition-colors">Support</a>
              <a href="#" className="hover:text-gaming-red transition-colors">API</a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t text-center text-sm text-muted-foreground">
            © 2024 MIGA Gaming Store. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
