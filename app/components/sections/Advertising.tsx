import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Target, TrendingUp, Megaphone, Sparkles } from "lucide-react";

const Advertising = () => {
  const services = [
    {
      title: "Produits Forestiers Non Lignés (PFNL)",
      description: "Promotion des produits issus de la forêt de manière durable et responsable",
      icon: <Play className="w-8 h-8" />,
      features: ["Valorisation des ressources", "Commerce équitable", "Durabilité", "Impact local"],
      color: "from-green-500/10 to-emerald-500/10",
      accent: "text-green-600"
    },
    {
      title: "Produits Agricoles, Pêche & Élevage",
      description: "Mise en avant des produits issus de l'agriculture durable, de la pêche responsable et de l'élevage éthique", 
      icon: <Target className="w-8 h-8" />,
      features: ["Agriculture durable", "Pêche responsable", "Élevage éthique", "Circuits courts"],
      color: "from-blue-500/10 to-cyan-500/10",
      accent: "text-blue-600"
    },
    {
      title: "Énergie Propre & Biogaz",
      description: "Promotion des solutions énergétiques renouvelables et durables",
      icon: <Sparkles className="w-8 h-8" />,
      features: ["Énergies renouvelables", "Biogaz", "Efficacité énergétique", "Transition écologique"],
      color: "from-yellow-500/10 to-orange-500/10", 
      accent: "text-yellow-600"
    }
  ];

  const campaigns = [
    {
      title: "Campagne \"Émotion Pure\"",
      client: "Marque Premium",
      result: "+250% de notoriété",
      type: "Vidéo Émotionnelle",
      views: "2.5M vues",
      engagement: "15% d'engagement"
    },
    {
      title: "Lancement Produit Digital",
      client: "Startup Tech",
      result: "+400% de conversions",
      type: "Digital 360°",
      views: "1.8M impressions",
      engagement: "22% CTR"
    },
    {
      title: "Rebranding Corporate",
      client: "Grande Entreprise",
      result: "+180% de reconnaissance",
      type: "Identité Complète",
      views: "500K expositions",
      engagement: "89% de mémorisation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white">
              <Megaphone className="w-4 h-4 mr-2" />
              Publicité & Communication
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">
            Publicité Environnementale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous promouvons des produits, services ou initiatives qui contribuent à la préservation de l'environnement.
            <br />
            Nous faisons de la publicité pour les produits commerçables écoresponsable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group border-primary/10">
              <div className={`w-20 h-20 rounded-none bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className={service.accent}>
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-none mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-6 group-hover:bg-primary group-hover:text-white transition-all">
                En savoir plus
              </Button>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Nos Succès Récents</h3>
            <p className="text-muted-foreground">Des résultats concrets qui parlent d'eux-mêmes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/10">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {campaign.type}
                  </Badge>
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                
                <h4 className="font-bold text-foreground mb-2">{campaign.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{campaign.client}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Résultat:</span>
                    <span className="font-semibold text-green-600">{campaign.result}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Portée:</span>
                    <span className="font-semibold">{campaign.views}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Performance:</span>
                    <span className="font-semibold">{campaign.engagement}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 border-primary/20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-none flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Éduquer le public en lui montrant des alternatives durables
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Transformons votre vision en campagne publicitaire mémorable qui génère des résultats exceptionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary text-white">
                Démarrer un Projet
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Portfolio Complet
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Advertising;