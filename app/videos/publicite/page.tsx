"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Megaphone, ArrowLeft } from "lucide-react";
import Link from "next/link";

const publiciteVideos = [
  {
    id: "1",
    title: "Campagne: Produits Forestiers Non Lignés",
    description: "Découvrez les PFNL et leur impact positif sur l'environnement et les communautés locales.",
    category: "publicite",
    date: "28 Jan 2025",
    views: "3.2K vues",
    duration: "2:30",
    youtubeUrl: "https://youtube.com/watch?v=pub1"
  },
  {
    id: "2",
    title: "Publicité: Énergie propre et biogaz",
    description: "Promotion des solutions énergétiques renouvelables pour un avenir durable.",
    category: "publicite",
    date: "26 Jan 2025",
    views: "2.7K vues",
    duration: "3:15",
    youtubeUrl: "https://youtube.com/watch?v=pub2"
  },
  {
    id: "3",
    title: "Spot: Agriculture durable",
    description: "Valorisation des produits issus de l'agriculture durable et responsable.",
    category: "publicite",
    date: "24 Jan 2025",
    views: "1.8K vues",
    duration: "2:45",
    youtubeUrl: "https://youtube.com/watch?v=pub3"
  }
];

export default function PublicitePage() {
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
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-none flex items-center justify-center text-red-600">
                  <Megaphone className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold hero-text">
                    Publicité
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Campagnes publicitaires écoresponsables
                  </p>
                </div>
              </div>
            </div>

            {publiciteVideos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publiciteVideos.map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center border-primary/20">
                <Megaphone className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-bold mb-2">Aucune publicité disponible</h3>
                <p className="text-muted-foreground">
                  Les publicités seront bientôt disponibles.
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

