"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  onClose?: () => void;
  autoplay?: boolean;
}

export default function YouTubePlayer({
  videoId,
  title,
  onClose,
  autoplay = false,
}: YouTubePlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Extraire l'ID de la vidéo depuis l'URL si nécessaire
  const extractVideoId = (urlOrId: string): string => {
    // Si c'est déjà un ID (11 caractères)
    if (urlOrId.length === 11 && !urlOrId.includes("/")) {
      return urlOrId;
    }

    // Extraire depuis différentes formats d'URL YouTube
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/,
    ];

    for (const pattern of patterns) {
      const match = urlOrId.match(pattern);
      if (match) {
        return match[1];
      }
    }

    return urlOrId;
  };

  const finalVideoId = extractVideoId(videoId);
  const embedUrl = `https://www.youtube.com/embed/${finalVideoId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`;

  return (
    <div className="relative w-full aspect-video bg-black rounded-none overflow-hidden">
      {onClose && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
      <iframe
        src={embedUrl}
        title={title || "YouTube video player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

