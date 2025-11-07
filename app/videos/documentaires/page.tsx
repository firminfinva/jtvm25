"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Film, ArrowLeft } from "lucide-react";
import Link from "next/link";

const documentairesVideos = [
  {
    id: "1",
    title: "Documentaire: La biodiversité de la RDC",
    description: "Un voyage à travers la riche biodiversité de la République Démocratique du Congo.",
    category: "documentaires",
    date: "20 Jan 2025",
    views: "3.5K vues",
    duration: "25:00",
    youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
  },
  {
    id: "2",
    title: "Forêts tropicales: Enjeux et solutions",
    description: "Exploration des défis et solutions pour la préservation des forêts tropicales.",
    category: "documentaires",
    date: "18 Jan 2025",
    views: "2.8K vues",
    duration: "30:15",
    youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
  }
];

export default function DocumentairesPage() {
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-none flex items-center justify-center text-green-600">
                  <Film className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold hero-text">
                    Documentaires
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Des documentaires approfondis sur les enjeux environnementaux
                  </p>
                </div>
              </div>
            </div>

            {documentairesVideos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documentairesVideos.map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center border-primary/20">
                <Film className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-bold mb-2">Aucun documentaire disponible</h3>
                <p className="text-muted-foreground">
                  Les documentaires seront bientôt disponibles.
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

