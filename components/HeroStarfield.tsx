"use client";
import React from "react";
import { StarsBackground } from "@/components/ui/backgrounds/stars-background";
import { ShootingStars } from "@/components/ui/backgrounds/shooting-stars";
import { FlipWords } from "@/components/ui/text/flip-words";
import { Button } from "@/components/ui/button";

interface HeroStarfieldProps {
  title?: string;
  words?: string[];
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  starColor?: string;
  trailColor?: string;
}

export default function HeroStarfield({
  title = "Train for",
  words = ["strength", "speed", "power", "confidence"],
  subtitle = "High-energy classes, expert coaching, and a community that pushes you harder.",
  ctaLabel = "Join the Gym",
  ctaHref = "#",
  secondaryCtaLabel = "View Classes",
  secondaryCtaHref = "#",
  starColor = "#ef4444",
  trailColor = "#f97316",
}: HeroStarfieldProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <StarsBackground starDensity={0.0002} allStarsTwinkle={true} />
      <ShootingStars starColor={starColor} trailColor={trailColor} />
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl uppercase">
          {title}
          <FlipWords words={words} className="text-primary" />
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300 md:text-xl">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
