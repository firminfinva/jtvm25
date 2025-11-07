"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Données d'exemple - à remplacer par vos vraies données
const actualiteVideos = [
  {
    id: "1",
    title: "Reportage: Initiatives environnementales à Goma",
    description: "Découvrez les initiatives locales pour la protection de l'environnement dans la région de Goma.",
    category: "actualite",
    date: "15 Jan 2025",
    views: "1.2K vues",
    duration: "5:30",
    youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
  },
  {
    id: "2",
    title: "Actualité: Nouvelle politique environnementale en RDC",
    description: "Analyse des nouvelles mesures gouvernementales pour la protection de l'environnement.",
    category: "actualite",
    date: "12 Jan 2025",
    views: "2.5K vues",
    duration: "8:15",
    youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
  },
  {
    id: "3",
    title: "Urgence climatique: Actions locales",
    description: "Comment les communautés locales réagissent face aux défis climatiques.",
    category: "actualite",
    date: "10 Jan 2025",
    views: "890 vues",
    duration: "6:45",
    youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
  }
];

export default function ActualitePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection="videos" onSectionChange={() => {}} />
      
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <Link href="/videos">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux catégories
                </Button>
              </Link>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-none flex items-center justify-center text-blue-600">
                  <Newspaper className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold hero-text">
                    Actualité
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Restez informé avec nos reportages d'actualité environnementale
                  </p>
                </div>
              </div>
            </div>

            {/* Videos Grid */}
            {actualiteVideos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {actualiteVideos.map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center border-primary/20">
                <Newspaper className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-bold mb-2">Aucune vidéo disponible</h3>
                <p className="text-muted-foreground">
                  Les vidéos d'actualité seront bientôt disponibles.
                </p>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

