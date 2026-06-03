const serviceLinks = [
  "Plomberie d'urgence",
  "Serrurerie",
  "Électricité",
  "Vitrerie",
  "Nettoyage",
];

const legalLinks = ["Mentions légales", "CGU", "CGV", "Confidentialité"];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              Dépan<span className="logo-dot">.Pro</span>
            </a>
            <p>
              La première plateforme de dépannage d&apos;urgence transparente et
              éthique. Prix clairs, artisans vérifiés, intervention rapide.
            </p>
            <div className="footer-contact">
              <a href="tel:0184608630">📞 01 84 60 86 30</a>
              <a href="mailto:contact@depan.pro">✉ contact@depan.pro</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact rapide</h5>
            <ul>
              <li>
                <a href="#">WhatsApp</a>
              </li>
              <li>
                <a href="#">Messenger</a>
              </li>
              <li>
                <a href="#waitlist">Devenir partenaire</a>
              </li>
            </ul>
            <p
              style={{
                marginTop: "16px",
                fontSize: "var(--text-caption)",
                color: "var(--color-storm-gray)",
              }}
            >
              Disponible 24h/24 — 7j/7
            </p>
          </div>
          <div className="footer-col">
            <h5>Légal</h5>
            <ul>
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 Dépan.Pro — Tous droits réservés. Plateforme en cours de
            développement.
          </span>
          <div className="footer-bottom-links">
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#31c431",
                }}
              ></span>
              Service actif
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
