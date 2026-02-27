import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
}

interface TeamGridProps {
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

export default function TeamGrid({
  headline = "Meet the Coaches",
  subheadline = "Certified trainers who push you past your limits safely.",
  members = [
    {
      name: "Avery Diaz",
      title: "Head Strength Coach",
      imageUrl: "/images/team.jpg",
      bio: "Specializes in powerlifting and progressive overload.",
    },
    {
      name: "Jordan Lee",
      title: "HIIT & Conditioning",
      imageUrl: "/images/team.jpg",
      bio: "High-energy sessions designed to torch calories.",
    },
    {
      name: "Morgan Reed",
      title: "Mobility & Recovery",
      imageUrl: "/images/team.jpg",
      bio: "Focuses on movement quality and injury prevention.",
    },
    {
      name: "Riley Park",
      title: "Nutrition Coach",
      imageUrl: "/images/team.jpg",
      bio: "Personalized fueling plans for peak performance.",
    },
  ],
}: Partial<TeamGridProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl uppercase">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map(function(member, i) {
            return (
              <Card key={i} className="overflow-hidden border-0 bg-background shadow-md text-center">
                {member.imageUrl && (
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={800}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground uppercase">{member.name}</h3>
                  <p className="text-sm text-primary">{member.title}</p>
                  {member.bio && <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
