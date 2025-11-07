"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Eye, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  youtubeUrl?: string;
  category: string;
  date?: string;
  views?: string;
  duration?: string;
}

export default function VideoCard({
  id,
  title,
  description,
  thumbnail,
  youtubeUrl,
  category,
  date,
  views,
  duration,
}: VideoCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group border-primary/10">
      {/* Video Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-tertiary/20 overflow-hidden">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-primary/20 rounded-none flex items-center justify-center">
                <Play className="w-10 h-10 text-primary" fill="currentColor" />
              </div>
            </div>
          </div>
        )}
        {duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs font-medium rounded-none">
            {duration}
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <Button
            size="lg"
            className="opacity-0 group-hover:opacity-100 transition-opacity w-16 h-16 rounded-none bg-white/90 hover:bg-white text-primary"
            asChild
          >
            <Link href={`/videos/${category}/${id}`}>
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          {date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
          )}
          {views && (
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{views}</span>
            </div>
          )}
        </div>
        <div className="flex gap-2 pt-2">
          {youtubeUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 group-hover:bg-primary group-hover:text-white transition-all"
              asChild
            >
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir sur YouTube
              </a>
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            className="flex-1 group-hover:bg-primary group-hover:text-white transition-all"
            asChild
          >
            <Link href={`/videos/${category}/${id}`}>
              Voir plus
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

