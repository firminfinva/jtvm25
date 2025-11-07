"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, ArrowLeft } from "lucide-react";
import Link from "next/link";

const interviewsVideos = [
  {
    id: "1",
    title: "Interview: Expert en environnement",
    description: "Rencontre avec un expert qui partage sa vision sur les défis environnementaux.",
    category: "interviews",
    date: "22 Jan 2025",
    views: "1.8K vues",
    duration: "15:30",
    youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
  },
  {
    id: "2",
    title: "Portrait: Entrepreneure verte",
    description: "Découvrez le parcours d'une entrepreneure engagée pour l'environnement.",
    category: "interviews",
    date: "19 Jan 2025",
    views: "1.5K vues",
    duration: "12:45",
    youtubeUrl: "https://www.youtube.com/watch?v=QK_xRpIoH8E"
  }
];

export default function InterviewsPage() {
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-none flex items-center justify-center text-purple-600">
                  <Mic className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold hero-text">
                    Interviews
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Rencontrez les acteurs du changement environnemental
                  </p>
                </div>
              </div>
            </div>

            {interviewsVideos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {interviewsVideos.map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center border-primary/20">
                <Mic className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-bold mb-2">Aucune interview disponible</h3>
                <p className="text-muted-foreground">
                  Les interviews seront bientôt disponibles.
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

