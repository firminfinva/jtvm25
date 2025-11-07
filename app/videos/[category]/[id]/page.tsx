"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import YouTubePlayer from "@/components/YouTubePlayer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Eye, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Données d'exemple - à remplacer par vos vraies données
const videoData: Record<string, Record<string, any>> = {
  actualite: {
    "1": {
      id: "1",
      title: "Reportage: Initiatives environnementales à Goma",
      description: "Découvrez les initiatives locales pour la protection de l'environnement dans la région de Goma.",
      category: "actualite",
      date: "15 Jan 2025",
      views: "1.2K vues",
      duration: "5:30",
      youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
    }
  },
  documentaires: {
    "1": {
      id: "1",
      title: "Documentaire: La biodiversité de la RDC",
      description: "Un voyage à travers la riche biodiversité de la République Démocratique du Congo.",
      category: "documentaires",
      date: "20 Jan 2025",
      views: "3.5K vues",
      duration: "25:00",
      youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
    }
  },
  interviews: {
    "1": {
      id: "1",
      title: "Interview: Expert en environnement",
      description: "Rencontre avec un expert qui partage sa vision sur les défis environnementaux.",
      category: "interviews",
      date: "22 Jan 2025",
      views: "1.8K vues",
      duration: "15:30",
      youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
    }
  },
  divertissement: {
    "1": {
      id: "1",
      title: "Défi écologique: 30 jours sans plastique",
      description: "Suivez notre défi pour réduire l'utilisation du plastique au quotidien.",
      category: "divertissement",
      date: "25 Jan 2025",
      views: "2.1K vues",
      duration: "10:20",
      youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
    }
  },
  publicite: {
    "1": {
      id: "1",
      title: "Campagne: Produits Forestiers Non Lignés",
      description: "Découvrez les PFNL et leur impact positif sur l'environnement et les communautés locales.",
      category: "publicite",
      date: "28 Jan 2025",
      views: "3.2K vues",
      duration: "2:30",
      youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
    }
  }
};

export default function VideoDetailPage() {
  const params = useParams();
  const category = params.category as string;
  const id = params.id as string;

  const video = videoData[category]?.[id];

  if (!video) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation activeSection="videos" onSectionChange={() => {}} />
        <main className="pt-16 flex items-center justify-center min-h-screen">
          <Card className="p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Vidéo non trouvée</h2>
            <p className="text-muted-foreground mb-6">
              La vidéo que vous recherchez n'existe pas.
            </p>
            <Button asChild>
              <Link href="/videos">Retour aux vidéos</Link>
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // Extraire l'ID YouTube depuis l'URL
  const extractYouTubeId = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : url;
  };

  const youtubeId = extractYouTubeId(video.youtubeUrl);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection="videos" onSectionChange={() => {}} />
      
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link href={`/videos/${category}`}>
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à {category}
              </Button>
            </Link>

            {/* Video Player */}
            <Card className="mb-8 overflow-hidden border-primary/20">
              <YouTubePlayer
                videoId={youtubeId}
                title={video.title}
                autoplay={true}
              />
            </Card>

            {/* Video Info */}
            <Card className="p-6 border-primary/20">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {video.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {video.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                {video.date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{video.date}</span>
                  </div>
                )}
                {video.views && (
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{video.views}</span>
                  </div>
                )}
                {video.duration && (
                  <div>
                    <span>Durée: {video.duration}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  asChild
                >
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir sur YouTube
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

