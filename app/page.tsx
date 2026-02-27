import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import HeroStarfield from "@/components/HeroStarfield"
import StatsCounter from "@/components/StatsCounter"
import TeamGrid from "@/components/TeamGrid"
import PricingTable from "@/components/PricingTable"
import GalleryMasonry from "@/components/GalleryMasonry"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import ContactForm from "@/components/ContactForm"
import CTASparkles from "@/components/CTASparkles"

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <HeroStarfield
        title="UNLEASH YOUR POTENTIAL"
        words={["STRONGER", "LEANER", "UNSTOPPABLE"]}
        subtitle="Join Chicago's most elite training facility with world-class coaching and 24/7 access."
        ctaLabel="START FREE TRIAL"
        ctaHref="/contact#free-trial"
        secondaryCtaLabel="VIEW CLASSES"
        secondaryCtaHref="/classes"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <StatsCounter
            stats={[
              { value: "5,000+", label: "Active Members" },
              { value: "50+", label: "Weekly Classes" },
              { value: "15", label: "Expert Trainers" },
              { value: "24/7", label: "Access" },
            ]}
            bgColor="bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">SIGNATURE CLASSES</h2>
            <p className="text-lg text-white/70">
              High-energy sessions designed to transform your body.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "INFERNO HIIT", duration: "45 min", intensity: "High", calories: "600-800" },
              { name: "POWER SPIN", duration: "50 min", intensity: "High", calories: "500-700" },
              { name: "CROSSFIT WOD", duration: "60 min", intensity: "Extreme", calories: "700-900" },
              { name: "FLOW YOGA", duration: "60 min", intensity: "Low-Medium", calories: "200-300" },
            ].map((item) => (
              <Card key={item.name} className="bg-zinc-950 border border-emerald-400/20 p-6">
                <div className="flex items-center justify-between">
                  <Badge className="bg-emerald-400 text-black uppercase">{item.intensity}</Badge>
                  <span className="text-sm text-white/70">{item.duration}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-wide">{item.name}</h3>
                <p className="mt-2 text-sm text-white/60">Calories Burned: {item.calories}</p>
                <Separator className="my-4 bg-white/10" />
                <Button className="w-full bg-emerald-400 text-black">Book Class</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <TeamGrid
            headline="MEET YOUR COACHES"
            subheadline="World-class trainers dedicated to your transformation."
            members={[
              {
                name: "Marcus Johnson",
                title: "Head Strength Coach",
                bio: "Powerlifting and bodybuilding specialist with 12 years of coaching experience.",
              },
              {
                name: "Sarah Chen",
                title: "HIIT & Conditioning Specialist",
                bio: "High-energy instructor focused on fat loss and endurance.",
              },
              {
                name: "Diego Ramirez",
                title: "CrossFit Level 3 Coach",
                bio: "Functional fitness expert and former CrossFit regional athlete.",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <PricingTable
            headline="MEMBERSHIP PLANS"
            subheadline="Invest in yourself with a plan that fits your goals."
            tiers={[
              {
                name: "BASIC",
                price: "$49",
                period: "/month",
                description: "Perfect for self-motivated individuals",
                features: [
                  "24/7 Gym Access",
                  "Locker Room & Showers",
                  "Free WiFi",
                  "Fitness Assessment",
                  "Mobile App Access",
                ],
                ctaLabel: "Get Started",
                ctaHref: "/pricing",
              },
              {
                name: "PRO",
                price: "$99",
                period: "/month",
                description: "Our most popular membership",
                features: [
                  "Everything in Basic",
                  "Unlimited Group Classes",
                  "Recovery Zone Access",
                  "1 PT Session/Month",
                  "Nutrition Consultation",
                  "Guest Passes (2/month)",
                ],
                ctaLabel: "Get Started",
                ctaHref: "/pricing",
                highlighted: true,
              },
              {
                name: "ELITE",
                price: "$199",
                period: "/month",
                description: "The ultimate fitness experience",
                features: [
                  "Everything in Pro",
                  "4 PT Sessions/Month",
                  "Custom Meal Plans",
                  "Priority Class Booking",
                  "Unlimited Guest Passes",
                  "VIP Lounge Access",
                  "Quarterly Body Scan",
                ],
                ctaLabel: "Get Started",
                ctaHref: "/pricing",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">CLIENT TRANSFORMATIONS</h2>
            <p className="text-lg text-white/70">
              Real members. Real results. Proof that commitment changes everything.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Michael Torres",
                duration: "6 months",
                before: "245 lbs / 32% BF",
                after: "185 lbs / 14% BF",
                program: "Strength & Fat Loss",
              },
              {
                name: "Jennifer Walsh",
                duration: "4 months",
                before: "175 lbs / 35% BF",
                after: "145 lbs / 22% BF",
                program: "HIIT & Conditioning",
              },
              {
                name: "David Kim",
                duration: "8 months",
                before: "165 lbs / 18% BF",
                after: "185 lbs / 12% BF",
                program: "Muscle Building",
              },
            ].map((item) => (
              <Card key={item.name} className="bg-black border border-emerald-400/20 p-6">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-sm text-white/60">{item.duration} Program</p>
                <Separator className="my-4 bg-white/10" />
                <p className="text-sm text-white/70">Before: {item.before}</p>
                <p className="text-sm text-emerald-400">After: {item.after}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-white/50">{item.program}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <TestimonialsAnimated
            headline="REAL RESULTS"
            subheadline="Our members' transformations speak for themselves."
            autoplay
            testimonials={[
              {
                quote:
                  "Elite Fitness didn't just change my body—it changed my entire life. The trainers pushed me when I wanted to quit.",
                name: "Michael Torres",
                designation: "Member, 6-Month Transformation",
                src: "/images/hero.jpg",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryMasonry
            headline="OUR FACILITY"
            subheadline="25,000 sq ft of premium training space."
            images={[
              {
                url: "/images/gallery-1.jpg",
                alt: "Main training floor with elite equipment",
                caption: "25,000 sq ft of elite training space",
              },
              {
                url: "/images/about.jpg",
                alt: "Recovery and wellness area",
                caption: "Recovery zone with sauna and cryotherapy",
              },
              {
                url: "/images/team.jpg",
                alt: "Group studio with high-energy classes",
                caption: "Dedicated studios for HIIT, yoga, and spin",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <CTASparkles
            headline="READY TO TRANSFORM?"
            description="Start your 7-day free trial today. No commitment. No credit card required."
            ctaLabel="CLAIM FREE TRIAL"
            ctaHref="/contact#free-trial"
            secondaryCtaLabel="CALL US: (312) 555-0147"
            secondaryCtaHref="tel:+13125550147"
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <ContactForm
            headline="START YOUR FREE TRIAL"
            subheadline="Tell us your goals and we’ll build a plan that fits your lifestyle."
            contactInfo={[
              { icon: "Phone", label: "Call", value: "(312) 555-0147" },
              { icon: "Mail", label: "Email", value: "hello@elitefitness.com" },
              { icon: "MapPin", label: "Visit", value: "312 W Adams St, Chicago, IL" },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
