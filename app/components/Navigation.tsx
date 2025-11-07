"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      // Si on est déjà sur la page d'accueil, scroller vers le haut
      window.scrollTo({ top: 0, behavior: "smooth" });
      onSectionChange("accueil");
    } else {
      // Sinon, naviguer vers la page d'accueil
      router.push("/");
    }
  };

  const menuItems = [
    { id: "accueil", label: "Accueil" },
    { id: "apropos", label: "À propos" },
    { id: "video", label: "Vidéo" },
    { id: "thematiques", label: "Thématiques" },
    { id: "partenaires", label: "Partenaires" },
    { id: "publicite", label: "Publicité" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="mx-[5%]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              onClick={handleLogoClick}
              className="cursor-pointer"
            >
              <Logo size="md" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => onSectionChange(item.id)}
                  className={`transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-sm rounded-none mt-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left justify-start transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
