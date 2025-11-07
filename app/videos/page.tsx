"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Newspaper, 
  Film, 
  Mic, 
  Smile, 
  Megaphone,
  ArrowRight,
  Play
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const videoCategories = [
  {
    id: "actualite",
    name: "Actualité",
    icon: <Newspaper className="w-8 h-8" />,
    description: "Restez informé avec nos reportages d'actualité environnementale",
    color: "from-blue-500/10 to-blue-600/10",
    textColor: "text-blue-600",
    link: "/videos/actualite"
  },
  {
    id: "documentaires",
    name: "Documentaires",
    icon: <Film className="w-8 h-8" />,
    description: "Des documentaires approfondis sur les enjeux environnementaux",
    color: "from-green-500/10 to-green-600/10",
    textColor: "text-green-600",
    link: "/videos/documentaires"
  },
  {
    id: "interviews",
    name: "Interviews",
    icon: <Mic className="w-8 h-8" />,
    description: "Rencontrez les acteurs du changement environnemental",
    color: "from-purple-500/10 to-purple-600/10",
    textColor: "text-purple-600",
    link: "/videos/interviews"
  },
  {
    id: "divertissement",
    name: "Divertissement",
    icon: <Smile className="w-8 h-8" />,
    description: "Contenus ludiques et éducatifs sur l'environnement",
    color: "from-yellow-500/10 to-yellow-600/10",
    textColor: "text-yellow-600",
    link: "/videos/divertissement"
  },
  {
    id: "publicite",
    name: "Publicité",
    icon: <Megaphone className="w-8 h-8" />,
    description: "Campagnes publicitaires écoresponsables",
    color: "from-red-500/10 to-red-600/10",
    textColor: "text-red-600",
    link: "/videos/publicite"
  }
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection="videos" onSectionChange={() => {}} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold hero-text mb-6">
                Vidéos JTVM
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez toutes nos vidéos organisées par catégorie. 
                Actualité, documentaires, interviews, divertissement et publicité environnementale.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoCategories.map((category) => (
                <Link key={category.id} href={category.link}>
                  <Card className="p-8 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group border-primary/10 h-full">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${category.color} rounded-none flex items-center justify-center ${category.textColor}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 text-center group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-center mb-6">
                      {category.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                    >
                      Voir les vidéos
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

