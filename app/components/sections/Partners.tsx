import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Globe, Trophy, Handshake } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "MediaCorp International",
      type: "Média & Communication",
      description: "Partenariat stratégique pour la production de contenus multimedia premium",
      since: "2022",
      projects: 15,
      logo: "M",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      name: "Creative Studios RDC", 
      type: "Production Créative",
      description: "Collaboration exclusive pour les projets de grande envergure en RDC",
      since: "2021",
      projects: 23,
      logo: "CS",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      name: "Digital Agency Pro",
      type: "Marketing Digital",
      description: "Alliance pour les campagnes digitales et stratégies de communication 360°",
      since: "2023",
      projects: 8,
      logo: "DA",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      name: "Kinshasa Events",
      type: "Événementiel",
      description: "Partenaire officiel pour tous nos événements et productions live",
      since: "2020",
      projects: 31,
      logo: "KE",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      name: "Tech Innovation Hub",
      type: "Technologie",
      description: "Collaboration technique pour l'intégration de solutions innovantes",
      since: "2023",
      projects: 12,
      logo: "TI",
      color: "from-red-500/20 to-red-600/20"
    },
    {
      name: "African Creative Network",
      type: "Réseau Panafricain",
      description: "Membre du plus grand réseau créatif d'Afrique pour les échanges internationaux",
      since: "2021",
      projects: 19,
      logo: "AC",
      color: "from-teal-500/20 to-teal-600/20"
    }
  ];

  const stats = [
    { icon: <Building2 className="w-6 h-6" />, value: "50+", label: "Partenaires Actifs" },
    { icon: <Globe className="w-6 h-6" />, value: "15", label: "Pays" },
    { icon: <Trophy className="w-6 h-6" />, value: "100+", label: "Projets Collaboratifs" },
    { icon: <Handshake className="w-6 h-6" />, value: "5 ans", label: "Expérience Réseau" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-tertiary/5">
      <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">
            Nos Partenaires
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des collaborations stratégiques qui enrichissent notre créativité et étendent notre expertise
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/10">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group border-primary/10">
              {/* Partner Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xl font-bold text-foreground">{partner.logo}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {partner.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {partner.type}
                  </Badge>
                </div>
              </div>

              {/* Partner Info */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>

                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{partner.projects}</div>
                    <div className="text-xs text-muted-foreground">Projets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">Depuis {partner.since}</div>
                    <div className="text-xs text-muted-foreground">Partenariat</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Rejoignez Notre Réseau</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vous êtes une entreprise créative ou technologique ? Explorons ensemble de nouvelles opportunités de collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline" className="px-4 py-2">
                <Handshake className="w-4 h-4 mr-2" />
                Partenariats Stratégiques
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                Collaborations Internationales
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partners;