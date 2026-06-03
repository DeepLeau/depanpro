const techCards = [
  {
    icon: "🤖",
    title: "Intelligence Artificielle",
    text: "Estimation précise des coûts par analyse d'image et de vidéo.",
  },
  {
    icon: "📍",
    title: "Géolocalisation",
    text: "Suivi temps réel et optimisation intelligente des trajets.",
  },
  {
    icon: "🔒",
    title: "Sécurité",
    text: "Chiffrement bout en bout des données et paiement sécurisé.",
  },
  {
    icon: "☁️",
    title: "Cloud",
    text: "Architecture scalable et haute disponibilité 24h/24.",
  },
];

export default function TechStack() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-eyebrow">
          <span className="tag">Technologie de pointe</span>
        </div>
        <h2 className="section-title">
          Tradition de métier, <em>infrastructure moderne</em>.
        </h2>

        <div className="tech-grid">
          {techCards.map((card) => (
            <div className="tech-card-item" key={card.title}>
              <div className="tech-card-item-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
