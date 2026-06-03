const steps = [
  {
    num: "1",
    title: "Décrivez votre problème",
    text: "Photo, vidéo ou description textuelle. L'IA s'occupe du reste.",
  },
  {
    num: "2",
    title: "Recevez votre estimation",
    text: "Prix transparent calculé par IA, garanti avant intervention.",
  },
  {
    num: "3",
    title: "Suivez votre technicien",
    text: "Localisation temps réel jusqu'à l'arrivée chez vous.",
  },
  {
    num: "4",
    title: "Intervention & paiement",
    text: "Travail garanti, paiement sécurisé uniquement à la fin.",
  },
];

export default function Steps() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-eyebrow">
          <span className="tag">Comment ça marche</span>
        </div>
        <h2 className="section-title">
          Quatre étapes, <em>zéro friction</em>.
        </h2>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
