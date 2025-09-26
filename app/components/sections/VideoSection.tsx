import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">
            Découvrez JTVM en Vidéo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plongez dans notre univers créatif et découvrez ce qui nous rend uniques
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden shadow-2xl border-primary/20">
            {/* Video Container */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 flex items-center justify-center">
              {!isPlaying ? (
                /* Video Thumbnail */
                <div className="text-center space-y-4">
                  <Button
                    onClick={() => setIsPlaying(true)}
                    size="lg"
                    className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </Button>
                  <p className="text-sm text-muted-foreground">Cliquez pour lancer la vidéo</p>
                </div>
              ) : (
                /* Video Player Placeholder */
                <div className="w-full h-full bg-black/90 flex items-center justify-center relative">
                  <div className="text-center text-white space-y-4">
                    <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <p>Vidéo JTVM en cours de lecture...</p>
                    
                    {/* Video Controls */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-white hover:bg-white/20"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Video Description */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Présentation Officielle JTVM</h3>
              <p className="text-muted-foreground">
                Une présentation complète de notre équipe, nos valeurs, et nos réalisations. 
                Découvrez l'histoire de JTVM et notre vision pour l'avenir.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;