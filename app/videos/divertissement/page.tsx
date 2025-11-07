"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smile, ArrowLeft } from "lucide-react";
import Link from "next/link";

const divertissementVideos = [
  {
    id: "1",
    title: "Défi écologique: 30 jours sans plastique",
    description: "Suivez notre défi pour réduire l'utilisation du plastique au quotidien.",
    category: "divertissement",
    date: "25 Jan 2025",
    views: "2.1K vues",
    duration: "10:20",
    youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
  },
  {
    id: "2",
    title: "Astuces éco-friendly faciles",
    description: "Des astuces simples et amusantes pour adopter un mode de vie plus écologique.",
    category: "divertissement",
    date: "23 Jan 2025",
    views: "1.9K vues",
    duration: "8:45",
    youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
  }
];

export default function DivertissementPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection="videos" onSectionChange={() => {}} />
      
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <Link href="/videos">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour aux catégories
                </Button>
              </Link>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-none flex items-center justify-center text-yellow-600">
                  <Smile className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold hero-text">
                    Divertissement
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Contenus ludiques et éducatifs sur l'environnement
                  </p>
                </div>
              </div>
            </div>

            {divertissementVideos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {divertissementVideos.map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center border-primary/20">
                <Smile className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-bold mb-2">Aucune vidéo disponible</h3>
                <p className="text-muted-foreground">
                  Les vidéos de divertissement seront bientôt disponibles.
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

