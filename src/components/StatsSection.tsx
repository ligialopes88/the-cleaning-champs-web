export default function StatsSection() {
  const stats = [
    { label: "Years", value: "10+" },
    { label: "Clients", value: "500+" },
    { label: "Hours Saved", value: "1500+" },
    { label: "Returning", value: "98%" }
  ];

  return (
    <section className="pt-20 pb-10 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-5xl font-headline font-extrabold text-on-primary mb-2">{stat.value}</p>
              <p className="text-on-primary/60 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
