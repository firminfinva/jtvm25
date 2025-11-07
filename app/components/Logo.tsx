import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showText = true,
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon - Using actual logo.png */}
      <div
        className={`${sizeClasses[size]} relative overflow-hidden rounded-none shadow-lg group hover:shadow-xl transition-all duration-300`}
      >
        {/* Actual logo image */}
        <Image
          src="/logo.png"
          alt="JTVM Logo"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 32px, (max-width: 1200px) 48px, 64px"
        />
        {/* Subtle overlay for hover effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Subtle border */}
        <div className="absolute inset-0 rounded-none border border-white/20" />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col group-hover:translate-x-1 transition-transform duration-300">
          <span
            className={`font-bold ${textSizeClasses[size]} bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent group-hover:from-primary-glow group-hover:to-secondary transition-all duration-300`}
          >
            JTVM
          </span>
          <span className="text-xs text-muted-foreground -mt-1 group-hover:text-primary/80 transition-colors duration-300">
            Communiquer sur l'environnement
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
