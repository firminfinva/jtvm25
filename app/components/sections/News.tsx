import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Pourquoi Protéger la Couche d'Ozone",
      description: "Sensibilisation sur l'importance de la protection de la couche d'ozone pour préserver notre planète et les générations futures.",
      image: "/news/Pourquoi proteger la couche d'ozone JTVM cover.jpg",
      date: "16 Septembre 2024",
      location: "Goma, RDC",
      category: "Sensibilisation"
    },
    {
      id: 2,
      title: "Protection de la Couche d'Ozone - Initiative 1",
      description: "Première initiative locale pour la protection de la couche d'ozone avec des actions concrètes dans notre communauté.",
      image: "/news/Protection de la couche d'ozone 1.jpg",
      date: "15 Septembre 2024",
      location: "Goma, RDC",
      category: "Initiative"
    },
    {
      id: 3,
      title: "Protection de la Couche d'Ozone - Initiative 2",
      description: "Deuxième phase de notre campagne de protection de la couche d'ozone avec des ateliers de sensibilisation.",
      image: "/news/Protection de la couche d'ozone 2.jpg",
      date: "14 Septembre 2024",
      location: "Kinshasa, RDC",
      category: "Campagne"
    },
    {
      id: 4,
      title: "Protection de la Couche d'Ozone - Initiative 3",
      description: "Troisième initiative mettant en avant les solutions pratiques pour réduire l'impact sur la couche d'ozone.",
      image: "/news/Protection de la couche d'ozone 3 .jpg",
      date: "13 Septembre 2024",
      location: "Bukavu, RDC",
      category: "Initiative"
    },
    {
      id: 5,
      title: "Protection de la Couche d'Ozone - Initiative 4",
      description: "Quatrième action de notre série sur la protection de la couche d'ozone avec participation communautaire.",
      image: "/news/Protection de la couche d'ozone 4.jpg",
      date: "12 Septembre 2024",
      location: "Goma, RDC",
      category: "Action"
    },
    {
      id: 6,
      title: "Protection de la Couche d'Ozone - Initiative 5",
      description: "Cinquième et dernière initiative de notre campagne intensive sur la protection de la couche d'ozone.",
      image: "/news/Protection de la couche d'ozone 5.jpg",
      date: "11 Septembre 2024",
      location: "Kinshasa, RDC",
      category: "Campagne"
    },
    {
      id: 7,
      title: "Journée Mondiale de la Liberté de la Presse - Climat",
      description: "Célébration de la journée mondiale de la liberté de la presse avec un focus sur le journalisme environnemental et climatique.",
      image: "/news/Word press freedom day climate.jpg",
      date: "3 Mai 2024",
      location: "Goma, RDC",
      category: "Événement"
    }
  ];

  return (
    <section id="actualites-section" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">
            Nos Actualités
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Restez informés de nos dernières activités et événements environnementaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group border-primary/10">
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-primary text-sm font-medium rounded-none">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

