/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  comingSoon?: boolean;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  comingSoon,
}: Props) {
  const [showPrivateModal, setShowPrivateModal] = useState(false);

  if (comingSoon) {
    return (
      <div
        className={cn(
          "flex flex-col h-full border border-white/10 dark:border-white/5 rounded-xl overflow-hidden relative group backdrop-blur-md bg-white/10 dark:bg-black/20 ring-1 ring-white/20 shadow-2xl transition-all duration-300",
          className
        )}
      >
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex-1 flex flex-col items-center justify-center p-8 gap-4 relative z-10 text-center">
          <div className="size-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 animate-pulse">
            <span className="text-xl font-bold text-white/50">?</span>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg tracking-wider text-white">PROJECT COMING SOON</h3>
            <p className="text-xs text-white/60 font-medium">STAY TUNED FOR SOMETHING AMAZING</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={cn(
          "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
          className
        )}
      >
        <div className="relative shrink-0">
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover scale-115"
              />
            ) : image ? (
              <ProjectImage src={image} alt={title} />
            ) : (
              <div className="w-full h-48 bg-muted" />
            )}
          </Link>
          {links && links.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-wrap gap-2">
              {links.map((link, idx) => {
                const isPrivate = link.href === "private";
                if (isPrivate) {
                  return (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowPrivateModal(true);
                      }}
                      className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90 px-3 py-1 rounded-md transition-all duration-200"
                    >
                      {link.icon}
                      {link.type}
                    </button>
                  );
                }
                return (
                  <Link
                    href={link.href}
                    key={idx}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Badge
                      className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                      variant="default"
                    >
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{title}</h3>
              <time className="text-xs text-muted-foreground">{dates}</time>
            </div>
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-auto">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {showPrivateModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowPrivateModal(false)}
        >
          <div 
            className="bg-background border border-border p-8 rounded-2xl max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="text-muted-foreground leading-none font-mono text-[10px] select-none opacity-50">
                <pre>
{`      . . . .
    .         .
   .   _   _   .
  .   (.) (.)   .
   .     v     .
    .         .
      ' . . '`}
                </pre>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold tracking-tight">REPOSITORY ACCESS RESTRICTED</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AS THIS PROJECT IS CURRENTLY PART OF AN ACTIVE STARTUP INITIATIVE, THE SOURCE CODE IS KEPT IN A PRIVATE REPOSITORY TO PROTECT PROPRIETARY INTELLECTUAL PROPERTY.
                </p>
                <p className="text-xs text-muted-foreground/80 font-medium italic">
                  WE APOLOGIZE FOR ANY INCONVENIENCE THIS MAY CAUSE.
                </p>
              </div>

              <button 
                onClick={() => setShowPrivateModal(false)}
                className="mt-4 px-6 py-2 bg-foreground text-background rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
