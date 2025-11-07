import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Globe, Trophy, Handshake } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "AGRIMINE",
      type: "Agro-industrie",
      description: "Partenariat stratégique pour la promotion de produits agricoles durables",
      since: "2023",
      projects: 12,
      logo: "AG",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      name: "GIRENAD",
      type: "Développement",
      description: "Collaboration pour les projets de développement environnemental",
      since: "2022",
      projects: 18,
      logo: "GI",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      name: "IPDD",
      type: "Institution",
      description: "Partenariat institutionnel pour la protection de l'environnement",
      since: "2021",
      projects: 25,
      logo: "IP",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      name: "MSHITA MART",
      type: "Commerce",
      description: "Alliance pour la promotion de produits écoresponsables",
      since: "2023",
      projects: 8,
      logo: "MM",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      name: "FECOPEILE",
      type: "Coopérative",
      description: "Collaboration avec les coopératives pour le développement durable",
      since: "2022",
      projects: 15,
      logo: "FE",
      color: "from-red-500/20 to-red-600/20"
    },
    {
      name: "AQUA STORE",
      type: "Commerce",
      description: "Partenariat pour la promotion de solutions aquatiques durables",
      since: "2023",
      projects: 10,
      logo: "AS",
      color: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      name: "BUDARA AGROBUSINESS",
      type: "Agro-business",
      description: "Alliance stratégique pour l'agro-business responsable",
      since: "2022",
      projects: 20,
      logo: "BA",
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
            Ils travaillent déjà avec nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des collaborations stratégiques qui enrichissent notre créativité et étendent notre expertise
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/10">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary to-secondary rounded-none flex items-center justify-center text-white">
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
                <div className={`w-16 h-16 rounded-none bg-gradient-to-br ${partner.color} flex items-center justify-center flex-shrink-0`}>
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