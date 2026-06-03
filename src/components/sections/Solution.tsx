const problems = [
  {
    title: "Stress et incertitude",
    text: "Panique face à une urgence, peur de l'arnaque, doute sur la facture finale.",
  },
  {
    title: "Manque de transparence",
    text: "Prix cachés, devis gonflés sur place, factures incompréhensibles.",
  },
  {
    title: "Délais d'intervention",
    text: "Attente interminable, disponibilité limitée, week-ends impossibles.",
  },
];

const solutions = [
  {
    title: "Transparence totale",
    text: "Estimation IA avec photo ou vidéo, prix clair et garanti avant l'intervention.",
  },
  {
    title: "Rapidité d'intervention",
    text: "Artisans suivis en temps réel, interventions immédiates ou planifiées en un tap.",
  },
  {
    title: "Éthique et qualité",
    text: "Dépanneurs vérifiés, paiement sécurisé, démarche éco-responsable.",
  },
];

export default function Solution() {
  return (
    <section className="block" id="solution">
      <div className="container">
        <div className="section-eyebrow">
          <span className="tag yellow">L&apos;approche Dépan.Pro</span>
        </div>
        <h2 className="section-title">
          Fini les galères. Place à un dépannage{" "}
          <em>moderne et fiable</em>.
        </h2>
        <p className="section-sub">
          Nous transformons une expérience stressante en un service transparent
          — pour les particuliers comme pour les artisans.
        </p>

        <div className="compare-grid">
          <div className="compare-col">
            <div className="compare-header">
              <div className="compare-header-icon">⚠️</div>
              <h3>Les problèmes actuels</h3>
            </div>
            <div className="compare-list">
              {problems.map((item) => (
                <div className="compare-item" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="compare-col highlight">
            <div className="compare-header">
              <div className="compare-header-icon">✦</div>
              <h3>Notre solution Dépan.Pro</h3>
            </div>
            <div className="compare-list">
              {solutions.map((item) => (
                <div className="compare-item" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
