import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Campagne Vidéo Corporative",
      description: "Création d'une série de vidéos promotionnelles pour une entreprise internationale, incluant scénarisation, tournage et post-production.",
      category: "Vidéo Corporate",
      date: "2024",
      image: "bg-gradient-to-br from-primary/20 to-secondary/20",
      stats: { duration: "3 mois", team: "5 personnes", awards: "2 prix" }
    },
    {
      id: 2,
      title: "Identité Visuelle Complète",
      description: "Développement d'une identité de marque complète incluant logo, charte graphique, et supports de communication.",
      category: "Design Graphique", 
      date: "2024",
      image: "bg-gradient-to-br from-secondary/20 to-tertiary/20",
      stats: { duration: "2 mois", team: "3 personnes", awards: "1 prix" }
    },
    {
      id: 3,
      title: "Production Événementielle",
      description: "Organisation et production complète d'un événement corporate avec captation vidéo et diffusion en direct.",
      category: "Événementiel",
      date: "2023",
      image: "bg-gradient-to-br from-tertiary/20 to-primary/20",
      stats: { duration: "6 mois", team: "8 personnes", awards: "3 prix" }
    },
    {
      id: 4,
      title: "Campagne Digitale 360°",
      description: "Stratégie et création de contenu pour une campagne digitale multi-plateforme avec une approche créative innovante.",
      category: "Digital",
      date: "2023",
      image: "bg-gradient-to-br from-accent/20 to-primary/20",
      stats: { duration: "4 mois", team: "6 personnes", awards: "1 prix" }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/10 via-background to-primary/5">
      <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">
            Nos Projets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos réalisations les plus marquantes et les projets qui nous rendent fiers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group border-primary/10">
              {/* Project Image/Visual */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-primary text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-full">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  <div className="text-center">
                    <Calendar className="w-4 h-4 mx-auto mb-1 text-primary" />
                    <p className="text-xs text-muted-foreground">{project.stats.duration}</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-4 h-4 mx-auto mb-1 text-primary" />
                    <p className="text-xs text-muted-foreground">{project.stats.team}</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-4 h-4 mx-auto mb-1 text-primary" />
                    <p className="text-xs text-muted-foreground">{project.stats.awards}</p>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary text-white">
            Voir tous nos projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;