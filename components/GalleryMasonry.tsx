"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = "Transformation Gallery",
  subheadline = "Real members. Real results. Every rep counts.",
  images = [
    { url: "/images/gallery-1.jpg", alt: "Member transformation 1", caption: "12-week strength rebuild" },
    { url: "/images/gallery-1.jpg", alt: "Member transformation 2", caption: "HIIT endurance boost" },
    { url: "/images/gallery-1.jpg", alt: "Member transformation 3", caption: "Body recomposition journey" },
    { url: "/images/gallery-1.jpg", alt: "Member transformation 4", caption: "New personal record" },
    { url: "/images/gallery-1.jpg", alt: "Member transformation 5", caption: "Lean mass gain" },
    { url: "/images/gallery-1.jpg", alt: "Member transformation 6", caption: "Sprint speed upgrade" },
  ],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(function(img, i) {
            return (
              <div
                key={i}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                onClick={function() { setSelectedImage(img); }}
                role="button"
                tabIndex={0}
                onKeyDown={function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedImage(img); } }}
              >
                <Image src={img.url} alt={img.alt} width={800} height={800} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/30" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                    <p className="text-sm text-white">{img.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={function() { setSelectedImage(null); }}
          >
            <Image src={selectedImage.url} alt={selectedImage.alt} width={1600} height={900} className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain" />
          </div>
        )}
      </div>
    </section>
  );
}
