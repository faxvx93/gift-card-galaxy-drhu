import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CategoryCardProps {
  title: string;
  image: string;
  serviceCount: number;
  gradient: string;
  href?: string;
}

export const CategoryCard = ({ 
  title, 
  image, 
  serviceCount, 
  gradient,
  href = "#"
}: CategoryCardProps) => {
  return (
    <div className="gaming-card group cursor-pointer overflow-hidden">
      <div className="relative">
        {/* Background Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-70`}></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <div className="text-white space-y-2">
            <h3 className="text-xl font-bold tracking-wide">{title}</h3>
            <div className="flex items-center justify-between">
              <Badge 
                variant="secondary" 
                className="bg-white/20 text-white border-white/30 hover:bg-white/30"
              >
                Services: {serviceCount}
              </Badge>
              <Button 
                variant="gaming-cyan" 
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View
              </Button>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-gaming-cyan/20 via-transparent to-gaming-red/20"></div>
        </div>
      </div>
    </div>
  );
};