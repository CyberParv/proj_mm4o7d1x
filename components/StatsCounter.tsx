interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  bgColor?: string;
}

export default function StatsCounter({
  stats = [
    { value: "120+", label: "Weekly Classes" },
    { value: "35+", label: "Certified Coaches" },
    { value: "5,000+", label: "Member PRs Hit" },
    { value: "12", label: "Weeks to Transform" },
  ],
  bgColor = "bg-primary text-primary-foreground",
}: Partial<StatsCounterProps>) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-8 text-center grid-cols-2 md:grid-cols-4">
          {stats.map(function(stat, i) {
            return (
              <div key={i}>
                <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wider opacity-80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
