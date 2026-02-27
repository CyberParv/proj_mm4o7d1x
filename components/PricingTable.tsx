import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

interface PricingTableProps {
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
}

export default function PricingTable({
  headline = "Memberships Built for Momentum",
  subheadline = "Choose a plan that matches your training intensity and goals.",
  tiers = [
    {
      name: "Starter",
      price: "$39",
      period: "mo",
      description: "Perfect for newcomers building consistency.",
      features: ["24/7 gym access", "2 group classes weekly", "Starter training plan", "Locker room access"],
      ctaLabel: "Join Starter",
      ctaHref: "#",
      highlighted: false,
    },
    {
      name: "Performance",
      price: "$69",
      period: "mo",
      description: "Our most popular plan for daily training.",
      features: ["Unlimited group classes", "Strength & HIIT programs", "Monthly body scan", "Guest pass monthly"],
      ctaLabel: "Go Performance",
      ctaHref: "#",
      highlighted: true,
    },
    {
      name: "Elite",
      price: "$119",
      period: "mo",
      description: "All-access for maximum results.",
      features: ["Personal training session", "Recovery lounge access", "Nutrition coaching", "Priority class booking"],
      ctaLabel: "Choose Elite",
      ctaHref: "#",
      highlighted: false,
    },
  ],
}: Partial<PricingTableProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {tiers.map(function(tier, i) {
            return (
              <Card
                key={i}
                className={
                  "relative flex flex-col border bg-background " +
                  (tier.highlighted ? "border-primary ring-2 ring-primary shadow-xl scale-105" : "shadow-md")
                }
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl uppercase">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map(function(feature, j) {
                      return (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 text-primary">&#10003;</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.highlighted ? "default" : "outline"} asChild>
                    <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
