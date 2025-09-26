import { Card } from "@/components/ui/card";
import { Users, Lightbulb, Heart, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Nous repoussons constamment les limites de la créativité pour offrir des solutions uniques."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "L'esprit d'équipe et la collaboration sont au cœur de notre approche créative."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Chaque projet est mené avec passion et dévouement pour atteindre l'excellence."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "Nous visons toujours la perfection dans chacune de nos réalisations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">
            À Propos de JTVM
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Créatifs depuis toujours, nous sommes une équipe passionnée dédiée à l'innovation et à l'excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Notre Histoire
            </h3>
            <p className="text-lg text-muted-foreground">
              JTVM est née d'une vision commune : créer des expériences uniques et mémorables. 
              Depuis nos débuts, nous nous sommes imposés comme une référence dans le domaine créatif, 
              alliant innovation technologique et sensibilité artistique.
            </p>
            <p className="text-lg text-muted-foreground">
              Notre équipe multidisciplinaire rassemble des talents divers, unis par la même passion 
              pour la créativité et l'excellence. Chaque membre apporte son expertise unique pour 
              donner vie à des projets exceptionnels.
            </p>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 border-primary/20">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">J</span>
                </div>
                <h4 className="text-2xl font-bold">JTVM</h4>
                <p className="text-muted-foreground">
                  "Créer l'extraordinaire à partir de l'ordinaire"
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/10">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;