export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="tag dark">
                <span className="tag-dot"></span>Plateforme certifiée
              </span>
            </div>
            <h1>
              Le dépannage d&apos;urgence enfin <em>transparent</em> et fiable.
            </h1>
            <p className="hero-sub">
              Prix clairs. Artisans vérifiés. Intervention rapide et éthique —
              sans la panique, sans l&apos;arnaque.
            </p>
            <div className="hero-features">
              <span className="hero-feature">Intervention 24h/24</span>
              <span className="hero-feature">Artisans 5 étoiles</span>
              <span className="hero-feature">Prix garantis</span>
            </div>
            <div className="hero-ctas">
              <a href="#waitlist" className="btn-primary">
                Rejoins les premiers utilisateurs
              </a>
              <a href="#solution" className="btn-default">
                Voir la démo
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="float-notif n1">
              <div className="float-notif-ic">📍</div>
              <div>
                <div className="float-notif-t">Marc arrive dans 12 min</div>
                <div className="float-notif-s">Plombier · 4.9 ★</div>
              </div>
            </div>
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-status">
                    <span>9:41</span>
                    <span className="phone-status-icons">📶 􀙇 ▰▰▰</span>
                  </div>
                  <div className="phone-title">Fuite cuisine</div>
                </div>
                <div className="phone-body">
                  <div className="estimate-card">
                    <div className="estimate-label">Devis garanti</div>
                    <div className="estimate-price">89 €</div>
                    <div className="estimate-meta">Tout compris · TTC</div>
                  </div>
                  <div className="tech-card">
                    <div className="tech-avatar">M</div>
                    <div>
                      <div className="tech-name">Marc Dupont</div>
                      <div className="tech-eta">À 1.2 km · 12 min</div>
                    </div>
                  </div>
                  <div className="estimate-card">
                    <div className="estimate-label">Statut</div>
                    <div
                      className="estimate-meta"
                      style={{
                        color: "var(--color-ink-black)",
                        fontWeight: 500,
                      }}
                    >
                      ● En route
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-notif n2">
              <div className="float-notif-ic">🤖</div>
              <div>
                <div className="float-notif-t">Devis IA en 8 sec</div>
                <div className="float-notif-s">Précis à ±5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
