const stats = [
  { num: "500+", label: "Artisans partenaires vérifiés" },
  { num: "98%", label: "Clients satisfaits" },
  { num: "15 min", label: "Temps d'intervention moyen" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
