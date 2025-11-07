import { Card } from "@/components/ui/card";
import {
  Video,
  Megaphone,
  Lightbulb,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Thematics = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="mx-[5%] max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-4">
            Thématiques
          </h2>
        </div>

        <div className="space-y-12">
          {/* Le JT & Vidéo Mobile */}
          <Card className="p-8 border-primary/20">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-none flex items-center justify-center text-blue-600 flex-shrink-0">
                <Video className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Le JT & Vidéo Mobile
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Notre JT est un format vidéo court, innovant, percutant et
                  mobile, diffusé sur les réseaux et plateformes numériques.
                </p>
                <p className="text-base font-semibold text-foreground mb-4">
                  Nous proposons :
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Des reportages de terrain sur des initiatives locales en
                      faveur de l'environnement
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Des interviews d'acteurs du changement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Des capsules sur des innovations technologiques vertes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Des décryptages pédagogiques de l'actualité
                      environnementale et numérique
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Des tutoriels et conseils concrets pour une vie plus
                      écoresponsable
                    </span>
                  </li>
                </ul>
                <p className="text-base text-muted-foreground mt-6 italic">
                  Tout cela réalisé et diffusé via des outils mobiles, pour une
                  approche moderne, légère, et proche du public.
                </p>
                <p className="text-base font-semibold text-foreground mt-4">
                  Objectif : rendre visible l'action environnementale de
                  proximité, montrer que le changement est possible, et
                  encourager l'engagement citoyen.
                </p>
              </div>
            </div>
          </Card>

          {/* Communication Environnementale */}
          <Card className="p-8 border-primary/20">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-none flex items-center justify-center text-green-600 flex-shrink-0">
                <Megaphone className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Communication Environnementale
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Nous accompagnons les acteurs publics, privés et associatifs
                  dans leur communication responsable :
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Production de contenus vidéos mobiles sur l'environnement
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Conception de campagnes de sensibilisation écologique
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Valorisation de projets ou produits verts et
                      technologiques
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Conseil en communication globale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Formations à la vidéo mobile et à la communication
                      environnementale
                    </span>
                  </li>
                </ul>

                {/* Publicité environnementale sur JTVM */}
                <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-none">
                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    Publicité environnementale sur JTVM
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Nous promouvons des produits, services ou initiatives
                        qui contribuent à la préservation de l'environnement.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Nous faisons de la publicité pour les produits
                        commerçables écoresponsables.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Exemples :</strong> les PFNL (Produits
                        Forestiers Non Lignés) ; les produits issus de
                        l'agriculture, de la pêche et de l'élevage ; le biogaz,
                        l'énergie propre…
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Éduquer le public en lui montrant des alternatives
                        durables.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Technologies vertes & Innovations durables */}
          <Card className="p-8 border-primary/20">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-none flex items-center justify-center text-purple-600 flex-shrink-0">
                <Lightbulb className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Technologies vertes & Innovations durables
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Nous mettons à l'honneur les startups, projets et initiatives
                  qui réconcilient technologie et écologie :
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Promotion de solutions numériques pour la planète
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Création de contenus éditoriaux & visuels engagés
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Valorisation des énergies renouvelables, des techs
                      propres, de l'agritech, etc.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Visibilité pour les innovations mobiles éco-conçues
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      Couverture médiatique de salons, forums ou événements Tech
                      & green
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Thematics;
