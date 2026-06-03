const services = [
  {
    tag: "💧 Plomberie",
    title: "Plomberie d'urgence",
    text: "Fuites, canalisations bouchées, chauffe-eau défaillant.",
    items: ["Intervention 24h/24", "Devis instantané par photo", "Matériel professionnel"],
  },
  {
    tag: "🔑 Serrurerie",
    title: "Serrurerie",
    text: "Porte claquée, serrure cassée, remplacement d'urgence.",
    items: ["Ouverture sans casse", "Remplacement immédiat", "Tous types de serrures"],
  },
  {
    tag: "⚡ Électricité",
    title: "Électricité",
    text: "Panne électrique, disjoncteur défaillant, installation.",
    items: ["Diagnostic rapide", "Mise en sécurité", "Électricien certifié"],
  },
  {
    tag: "🪟 Vitrerie",
    title: "Vitrerie",
    text: "Vitre cassée, remplacement, sécurisation d'urgence.",
    items: ["Pose immédiate", "Tous types de vitrage", "Sécurisation temporaire"],
  },
  {
    tag: "🧹 Nettoyage",
    title: "Nettoyage à domicile",
    text: "Nettoyage post-intervention, remise en état complète.",
    items: ["Équipe professionnelle", "Produits éco-responsables", "Service complémentaire"],
  },
  {
    tag: "🔥 Chauffage",
    title: "Chauffage",
    text: "Chaudière en panne, radiateurs, dépannage hiver.",
    items: ["Diagnostic complet", "Pièces d'origine", "Contrats d'entretien"],
  },
];

export default function Services() {
  return (
    <section className="block" id="services">
      <div className="container">
        <div className="section-eyebrow">
          <span className="tag">Nos services d&apos;urgence</span>
        </div>
        <h2 className="section-title">
          Une équipe d&apos;<em>artisans experts</em>, 24h/24.
        </h2>
        <p className="section-sub">
          Disponibles pour tous vos dépannages — chaque corps de métier, vérifié
          et noté par la communauté.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <span className="tag service-card-tag">{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
