const testiStats = [
  { num: "4.9/5", label: "Note moyenne" },
  { num: "500+", label: "Interventions" },
  { num: "98%", label: "Satisfaction" },
];

const testimonials = [
  {
    quote:
      "Fuite d'eau à 23h, technicien arrivé en 20 minutes. Prix annoncé respecté, travail impeccable. Enfin un service de confiance.",
    initial: "M",
    name: "Marie Dubois",
    location: "Paris 11e",
    category: "Plomberie d'urgence",
  },
  {
    quote:
      "Serrure cassée un dimanche, j'ai pu voir le prix exact avant même que le serrurier arrive. Très professionnel.",
    initial: "T",
    name: "Thomas Moreau",
    location: "Lyon 3e",
    category: "Serrurerie",
  },
  {
    quote:
      "Application intuitive, j'ai envoyé une photo du problème électrique et eu une estimation immédiate. Service client au top.",
    initial: "S",
    name: "Sophie Laurent",
    location: "Marseille 2e",
    category: "Électricité",
  },
  {
    quote:
      "Vitre cassée suite à un cambriolage, intervention en urgence avec nettoyage complet. Tarif transparent, aucune surprise.",
    initial: "P",
    name: "Pierre Durand",
    location: "Toulouse Centre",
    category: "Vitrerie + Nettoyage",
  },
  {
    quote:
      "Premier essai pour un problème de chauffage. L'app est géniale, le suivi temps réel hyper rassurant. Parfait.",
    initial: "C",
    name: "Camille Rousseau",
    location: "Nice Vieux-Port",
    category: "Chauffage",
  },
  {
    quote:
      "Service révolutionnaire. Fini les arnaques, tout est clair dès le début. Le technicien était compétent et respectueux.",
    initial: "L",
    name: "Lucas Bernard",
    location: "Bordeaux Chartrons",
    category: "Plomberie",
  },
];

export default function Testimonials() {
  return (
    <section className="block" id="avis">
      <div className="container">
        <div className="section-eyebrow">
          <span className="tag">Ils ont testé Dépan.Pro</span>
        </div>
        <div className="testi-header">
          <div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              L&apos;expérience de nos <em>premiers utilisateurs</em>.
            </h2>
          </div>
          <div className="testi-stats">
            {testiStats.map((stat) => (
              <div key={stat.label}>
                <div className="testi-stat-num">{stat.num}</div>
                <div className="testi-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="testi-grid">
          {testimonials.map((testi) => (
            <div className="testi-card" key={testi.name}>
              <div className="testi-rating">★★★★★</div>
              <p className="testi-quote">&quot;{testi.quote}&quot;</p>
              <div className="testi-author">
                <div className="testi-avatar">{testi.initial}</div>
                <div>
                  <strong>{testi.name}</strong>
                  <span>{testi.location}</span>
                </div>
              </div>
              <div className="testi-card-footer">
                <span className="tag">{testi.category}</span>
                <span
                  style={{ fontSize: "12px", color: "var(--color-storm-gray)" }}
                >
                  Vérifié ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
