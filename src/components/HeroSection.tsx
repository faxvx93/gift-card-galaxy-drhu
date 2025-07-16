import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="hero-gaming relative min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gaming-red/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gaming-cyan/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gaming-purple/20 rounded-full blur-2xl animate-float"></div>
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-0 w-0 h-0 border-l-[100px] border-l-gaming-red/30 border-t-[60px] border-t-transparent border-b-[60px] border-b-transparent"></div>
        <div className="absolute top-1/4 right-0 w-0 h-0 border-r-[100px] border-r-gaming-cyan/30 border-t-[60px] border-t-transparent border-b-[60px] border-b-transparent"></div>
        <div className="absolute bottom-1/4 left-1/4 w-0 h-0 border-l-[80px] border-l-gaming-red/20 border-t-[50px] border-t-transparent border-b-[50px] border-b-transparent"></div>
        <div className="absolute bottom-1/4 right-1/4 w-0 h-0 border-r-[80px] border-r-gaming-cyan/20 border-t-[50px] border-t-transparent border-b-[50px] border-b-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
          <span className="inline-block animate-float">G</span>
          <span className="inline-block animate-float animation-delay-100">A</span>
          <span className="inline-block animate-float animation-delay-200">M</span>
          <span className="inline-block animate-float animation-delay-300">I</span>
          <span className="inline-block animate-float animation-delay-400">N</span>
          <span className="inline-block animate-float animation-delay-500">G</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 font-light tracking-wide">
          YOUR DIGITAL GAMING STORE
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gaming-glow" size="lg" className="text-lg px-8">
            Explore Categories
          </Button>
          <Button variant="gaming-outline" size="lg" className="text-lg px-8">
            View Agents
          </Button>
        </div>
      </div>

      {/* Diagonal Lines */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-gaming-red via-transparent to-gaming-cyan opacity-50"></div>
          <div className="absolute top-2/4 left-0 w-full h-1 bg-gradient-to-r from-gaming-cyan via-transparent to-gaming-red opacity-30"></div>
          <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-gaming-red via-transparent to-gaming-cyan opacity-20"></div>
        </div>
      </div>
    </section>
  );
};