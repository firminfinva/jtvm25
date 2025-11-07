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
    <section className="min-h-screen flex items-center justify-center relative geometric-bg overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vw",
            height: "100vh",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
          }}
        >
          <source src="/presentation site hd.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/30"></div>
      </div>

      <div className="mx-[5%] w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold hero-text animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
              Bienvenue chez les vidéastes mobiles
            </h1>
            {/* <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
              Bienvenue sur le site bleu
            </p> */}
            <p className="text-2xl md:text-3xl font-semibold text-primary max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
              « Communiquer sur l'environnement »
            </p>
          </div>

          {/* Video Preview Button */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
            <Button
              onClick={handleVideoClick}
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-primary-glow hover:from-primary-glow hover:via-secondary-light hover:to-primary-light text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Regarder la présentation
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-none animate-pulse glow-effect"></div>
          <div className="absolute top-40 right-32 w-8 h-8 bg-secondary/30 rounded-none animate-ping"></div>
          <div className="absolute bottom-32 left-32 w-12 h-12 bg-primary-glow/25 rounded-none animate-bounce"></div>
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
