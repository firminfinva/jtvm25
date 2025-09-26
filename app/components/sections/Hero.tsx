import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface HeroProps {
  onVideoClick: () => void;
}

const Hero = ({ onVideoClick }: HeroProps) => {
  const handleVideoClick = () => {
    onVideoClick();
    toast({
      title: "Présentation vidéo lancée!",
      description: "Profitez de la découverte de notre univers.",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative geometric-bg">
      <div className="mx-[5%] w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold hero-text animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
              Bienvenue chez JTVM
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
              Créatifs, innovants et passionnés depuis toujours. Découvrez notre
              univers unique et nos créations exceptionnelles.
            </p>
          </div>

          {/* Video Preview Button */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
            <Button
              onClick={handleVideoClick}
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-tertiary hover:from-primary-glow hover:via-secondary-light hover:to-tertiary-light text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Regarder la présentation
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full animate-pulse glow-effect"></div>
          <div className="absolute top-40 right-32 w-8 h-8 bg-secondary/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-32 w-12 h-12 bg-tertiary/25 rounded-full animate-bounce"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
