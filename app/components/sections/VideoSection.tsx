import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import YouTubePlayer from "@/components/YouTubePlayer";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // ID de la vidéo YouTube d'exemple
  const exampleVideoId = "QK_xRpIoH8E";

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">
            Vidéos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="text-sm flex flex-wrap justify-center items-center gap-2 mt-4">
              <span>-</span>
              <Button
                variant="link"
                className="p-0 h-auto text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                asChild
              >
                <Link href="/videos/actualite">Actualité</Link>
              </Button>
              <span>-</span>
              <Button
                variant="link"
                className="p-0 h-auto text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                asChild
              >
                <Link href="/videos/documentaires">Documentaires</Link>
              </Button>
              <span>-</span>
              <Button
                variant="link"
                className="p-0 h-auto text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                asChild
              >
                <Link href="/videos/interviews">Interviews</Link>
              </Button>
              <span>-</span>
              <Button
                variant="link"
                className="p-0 h-auto text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                asChild
              >
                <Link href="/videos/divertissement">Divertissement</Link>
              </Button>
              <span>-</span>
              <Button
                variant="link"
                className="p-0 h-auto text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                asChild
              >
                <Link href="/videos/publicite">Publicité</Link>
              </Button>
            </span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden shadow-2xl border-primary/20">
            {/* Video Container */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 flex items-center justify-center overflow-hidden rounded-none">
              {!isPlaying ? (
                /* Video Thumbnail */
                <div className="text-center space-y-4">
                  <Button
                    onClick={() => setIsPlaying(true)}
                    size="lg"
                    className="w-20 h-20 rounded-none bg-white/90 hover:bg-white text-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Cliquez pour lancer la vidéo
                  </p>
                </div>
              ) : (
                /* YouTube Video Player */
                <YouTubePlayer
                  videoId={exampleVideoId}
                  title="Présentation Officielle JTVM"
                  onClose={() => setIsPlaying(false)}
                  autoplay={true}
                />
              )}
            </div>

            {/* Video Description */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Présentation Officielle JTVM
              </h3>
              <p className="text-muted-foreground">
                Une présentation complète de notre équipe, nos valeurs, et nos
                réalisations. Découvrez l'histoire de JTVM et notre vision pour
                l'avenir.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
