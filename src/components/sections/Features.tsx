const features = [
  {
    icon: "🤖",
    title: "IA prédictive",
    text: "Estimation précise du coût avant même l'arrivée du technicien. Plus de mauvaise surprise sur la facture.",
  },
  {
    icon: "📱",
    title: "Suivi en temps réel",
    text: "Localisation et temps d'arrivée de votre technicien en direct, comme une course VTC.",
  },
  {
    icon: "💚",
    title: "Éco-responsable",
    text: "Optimisation des trajets et matériaux durables privilégiés à chaque intervention.",
  },
];

export default function Features() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-eyebrow">
          <span className="tag">Pourquoi Dépan.Pro</span>
        </div>
        <h2 className="section-title">
          La technologie au service de l&apos;<em>artisanat</em>.
        </h2>

        <div className="feature-grid-3">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-card-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
