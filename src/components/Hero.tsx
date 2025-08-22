import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl float animate-delay-100"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl float animate-delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-secondary/10 rounded-full blur-xl float animate-delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Name and Tagline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up py-4">
              <span className="block text-foreground">Jay Rupareliya</span>
              <span className="block gradient-text animate-delay-200">UI/UX Designer</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
              Crafting user-friendly digital experiences that blend creativity with functionality
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-500">
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-xl shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              See My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg rounded-xl border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        
      </div>
    </section>
  );
};

export default Hero;