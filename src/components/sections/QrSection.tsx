const qrSteps = [
  {
    title: "Ouvrez l'appareil photo",
    text: "De votre smartphone (iOS ou Android).",
  },
  {
    title: "Pointez vers le QR code",
    text: "Et touchez la notification qui apparaît.",
  },
  {
    title: "Explorez Dépan.Pro",
    text: "Et testez librement nos fonctionnalités.",
  },
];

export default function QrSection() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="qr-section">
          <div>
            <div className="section-eyebrow">
              <span className="tag yellow">Démo disponible</span>
            </div>
            <h2 className="section-title" style={{ fontSize: "36px" }}>
              Testez Dépan.Pro <em>dès maintenant</em>.
            </h2>
            <p
              style={{
                fontSize: "var(--text-body)",
                color: "var(--color-storm-gray)",
                maxWidth: "460px",
              }}
            >
              Scannez le QR code avec votre smartphone pour accéder à la version
              de démonstration et découvrir toutes nos fonctionnalités.
            </p>
            <ol className="qr-steps">
              {qrSteps.map((step) => (
                <li key={step.title}>
                  <div className="qr-step-text">
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </div>
                </li>
              ))}
            </ol>
            <a href="#" className="btn-default">
              Télécharger le QR
            </a>
          </div>
          <div className="qr-visual">
            <div className="qr-code"></div>
            <div className="qr-caption">
              Scannez pour tester
              <br />
              <span
                style={{
                  fontFamily: "var(--font-graphik)",
                  fontSize: "var(--text-caption)",
                  color: "var(--color-storm-gray)",
                }}
              >
                Service actif · démonstration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
