import { Card } from "@/components/ui/card";
import { Leaf, Lightbulb, Smartphone, GraduationCap, Target, Eye, Users, Heart, Zap, BookOpen } from "lucide-react";
import Image from "next/image";

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Écologie",
      description: "Chaque contenu, chaque action vise la préservation de la planète"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Mise en avant de solutions technologiques éthiques et efficaces"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobilité",
      description: "La vidéo mobile comme outil de réactivité, d'accessibilité et d'impact"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Transmission",
      description: "Partager, éduquer, faire comprendre"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Engagement",
      description: "Au-delà de l'info, un média acteur du changement"
    }
  ];

  const team = [
    { 
      name: "Jonas Alvin", 
      role: "CEO",
      fullName: "Jonas Alvin"
    },
    { 
      name: "Firmin NGANDULI", 
      role: "Web Master",
      fullName: "Firmin NGANDULI"
    },
    { 
      name: "JACQUES KITOKO", 
      role: "Vidéaste mobile & reporter",
      fullName: "JACQUES KITOKO"
    },
    { 
      name: "Aminata bwiruka", 
      role: "Communicante environnementaliste",
      fullName: "Aminata bwiruka"
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
            Le JT de la vidéo mobile est un média environnemental engagé, une agence de communication verte et une organisation de mobilisation pour la planète
          </p>
        </div>

        {/* Qui sommes-nous */}
        <div className="mb-16">
          <Card className="p-8 border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              1. Qui sommes-nous ?
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Le JT de la vidéo mobile est un média environnemental engagé, une agence de communication verte et une organisation de mobilisation pour la planète.
              </p>
              <p>
                Nous vivons une époque où les enjeux environnementaux sont devenus impossibles à ignorer : dérèglement climatique, pollution, disparition de la biodiversité… La planète tire la sonnette d'alarme, et il est plus que jamais temps d'agir.
              </p>
              <p>
                En revanche, aujourd'hui, nous avons un atout majeur entre les mains : la technologie. Grâce à l'évolution des caméras de nos smartphones, nous pouvons filmer, monter et diffuser des vidéos de qualité professionnelle… tout ça, depuis sa poche !
              </p>
              <p className="font-semibold text-foreground">
                Notre objectif est de communiquer sur l'environnement afin de donner envie de passer à l'action.
              </p>
              <p>
                À travers des reportages courts, des interviews, des documentaires, de publicités, des sujets locaux et des innovations technologiques écoresponsable, nous voulons créer un média mobil first utilisant les techniques du Journalisme Mobil (MOJO), qui parle vrai, qui parle à tout le monde… et qui agit.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 border-primary/10">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  UN MÉDIA ENVIRONNEMENTAL
                </h4>
                <p className="text-sm text-muted-foreground">
                  Mobile-first : un journal télévisé innovant, utilisant les techniques du journalisme mobile, pour une info de terrain, rapide et engagée.
                </p>
              </Card>

              <Card className="p-6 border-primary/10">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  UNE AGENCE DE COMMUNICATION ENVIRONNEMENTALE
                </h4>
                <p className="text-sm text-muted-foreground">
                  Spécialisée dans les contenus Ecoresponsables, la vidéo mobile et les campagnes de sensibilisation. Nous accompagnons les organisations environnementales dans leur communication.
                </p>
              </Card>

              <Card className="p-6 border-primary/10">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  UNE ORGANISATION D'ACTION ENVIRONNEMENTALE
                </h4>
                <p className="text-sm text-muted-foreground">
                  Œuvrant pour la sensibilisation, l'éducation écologique et la mobilisation citoyenne.
                </p>
              </Card>

              <Card className="p-6 border-primary/10">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-primary" />
                  UN PROMOTEUR DES NTIC
                </h4>
                <p className="text-sm text-muted-foreground">
                  En particulier lorsqu'elles servent l'intérêt écologique et social.
                </p>
              </Card>

              <Card className="p-6 border-primary/10">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  UN VECTEUR DE PROMOTION DES TECHNOLOGIES VERTES
                </h4>
                <p className="text-sm text-muted-foreground">
                  Pour accélérer la transition écologique.
                </p>
              </Card>
            </div>
          </Card>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <Card className="p-8 border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              2. Notre mission
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Communiquer sur l'environnement ; Informer pour faire agir.</strong>
              </p>
              <p className="text-lg text-muted-foreground">
                Promouvoir une écologie connectée, innovante et humaine.
              </p>
              <p className="text-lg text-muted-foreground">
                Valoriser les solutions de demain pour répondre aux urgences d'aujourd'hui.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-foreground mb-3">Nous utilisons la vidéo mobile et les techniques du journalisme Mobile comme levier pour :</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Diffuser des informations environnementales accessibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mettre en lumière des solutions technologiques durables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Encourager la transition écologique et numérique.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Vision */}
        <div className="mb-16">
          <Card className="p-8 border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Eye className="w-8 h-8 text-primary" />
              3. Vision
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Faire du JT de la vidéo mobile un média citoyen de référence en RDC et au delà des frontières du pays qui utilise la puissance de la vidéo mobile pour éduquer, mobiliser et faire émerger une génération d'acteur engagés pour la planète.
              </p>
              <p>
                Révéler et amplifier les voix de citoyens qui agissent pour la planète a travers une communication accessible, créative et mobilisatrice.
              </p>
              <p>
                Utiliser la vidéo mobile comme outil d'expression, de transformation et de sensibilisation écologique partout où la camera d'un téléphone peut devenir un micro ouvert pour l'avenir.
              </p>
            </div>
          </Card>
        </div>

        {/* Nos valeurs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            4. Nos valeurs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/10">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-none flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Notre équipe */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold hero-text mb-4">
              Notre équipe
            </h3>
          </div>
          <div className="space-y-10">

            {/* Introduction Text - Black text, list with bullets */}
            <div className="space-y-4 text-lg text-foreground mb-12 max-w-4xl">
              <p>
                Une équipe passionnée, un collectif pluridisciplinaire engagé, composé de:
              </p>
              <ul className="space-y-2 ml-6 list-disc text-foreground">
                <li>Journalistes, photographes et vidéastes mobiles</li>
                <li>Communicants spécialisés en environnement</li>
                <li>Spécialistes des NTIC et numérique responsable</li>
                <li>Éducateurs à l'environnement</li>
              </ul>
            </div>

            {/* Team Members Grid - 4 columns, horizontal layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  {/* Photo Container - Rectangular with solid blue background behind person */}
                  <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-none bg-primary">
                    {/* Solid blue background - the photos should have blue background in the image itself */}
                    {/* 
                      IMAGES SUGGESTIONS:
                      Place team photos in: public/team/
                      
                      Recommended file names:
                      - jonas-alvin.jpg (or .png, .webp)
                      - firmin-nganduli.jpg
                      - jacques-kitoko.jpg
                      - aminata-bwiruka.jpg
                      
                      Image requirements:
                      - Format: JPG, PNG, or WebP
                      - Aspect ratio: 3:4 (portrait, vertical)
                      - Recommended size: 600x800px or 900x1200px
                      - Background: Solid blue (#primary color) behind the person
                      - Quality: High resolution for web (optimized)
                      
                      Tips:
                      - Use consistent lighting and style for all photos
                      - Ensure faces are clearly visible and centered
                      - Blue background should match the site's primary color
                      - Compress images for web (use tools like TinyPNG or ImageOptim)
                    */}
                    {/* Placeholder - Replace with actual team photos when available */}
                    <div className="w-full h-full flex items-center justify-center bg-primary">
                      <Users className="w-32 h-32 text-white/20" />
                    </div>
                    {/* 
                      Uncomment and use this when you have the actual photos:
                      <Image 
                        src={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    */}
                  </div>
                  {/* Name - Bold, centered, black text */}
                  <h4 className="font-bold text-xl md:text-2xl text-foreground mb-2">
                    {member.fullName || member.name}
                  </h4>
                  {/* Role - Centered below name */}
                  <p className="text-base md:text-lg text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
