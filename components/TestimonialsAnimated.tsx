"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { SparklesCore } from "@/components/ui/backgrounds/sparkles";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "Member Wins",
  subheadline = "Stories from athletes who transformed their energy and confidence.",
  testimonials = [
    {
      quote: "After eight weeks, I hit my first unassisted pull-up. The coaching and community are unreal.",
      name: "Taylor Grant",
      designation: "Performance Member",
      src: "/images/hero.jpg",
    },
    {
      quote: "The HIIT classes keep me motivated and the programming pushes me in the best way.",
      name: "Casey Brooks",
      designation: "Group Training",
      src: "/images/hero.jpg",
    },
    {
      quote: "I dropped 12 pounds and gained strength I never thought possible. This place delivers.",
      name: "Jamie Cole",
      designation: "Elite Member",
      src: "/images/hero.jpg",
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <SparklesCore
          id="testimonial-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={40}
          particleColor="#ffffff66"
        />
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}
