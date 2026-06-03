export default function Showcase() {
  return (
    <section className="block">
      <div className="container">
        <div className="section-eyebrow">
          <span className="tag">Découvrez l&apos;application</span>
        </div>
        <h2 className="section-title">
          Une interface pensée pour vos <em>urgences</em>.
        </h2>
        <p className="section-sub">
          Moderne et intuitive, pour simplifier le dépannage de chaque côté —
          particuliers et artisans.
        </p>

        {/* Row 1 — Mobile app */}
        <div className="showcase-row">
          <div className="showcase-text">
            <h3>Application mobile</h3>
            <p>
              Gérez vos urgences directement depuis votre smartphone. Interface
              simple, estimation instantanée par IA, suivi en temps réel.
            </p>
            <ul className="showcase-bullets">
              <li>
                <div>
                  <strong>Estimation IA instantanée</strong>
                  <span>
                    Envoyez une photo ou vidéo, recevez un devis précis en
                    quelques secondes.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Paiement sécurisé</strong>
                  <span>
                    Règlement uniquement après intervention réussie, garantie
                    satisfaction.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>iOS &amp; Android</strong>
                  <span>
                    Disponible sur les deux plateformes, mêmes fonctionnalités
                    partout.
                  </span>
                </div>
              </li>
            </ul>
            <a href="#waitlist" className="btn-primary">
              Télécharger l&apos;app
            </a>
          </div>
          <div className="showcase-visual">
            <div className="mock-phone">
              <div className="mock-phone-screen">
                <div className="mock-phone-status">
                  <span>9:41</span>
                  <span className="mock-phone-status-icons">📶 􀙇 ▰▰▰</span>
                </div>
                <div className="mock-row">
                  <div className="mock-row-label">Problème</div>
                  <div className="mock-row-value">Fuite chauffe-eau</div>
                </div>
                <div className="mock-row accent">
                  <div className="mock-row-label">Estimation IA</div>
                  <div className="mock-row-value">120 € — 150 €</div>
                </div>
                <div className="mock-row">
                  <div className="mock-row-label">Artisan le + proche</div>
                  <div className="mock-row-value">Sophie L. · 8 min</div>
                </div>
                <div className="mock-row">
                  <div className="mock-row-label">Note</div>
                  <div className="mock-row-value">4.9 ★ · 312 avis</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 — Pro dashboard (reversed) */}
        <div className="showcase-row reverse">
          <div className="showcase-text">
            <h3>Dashboard professionnel</h3>
            <p>
              Pour les artisans partenaires et la gestion centralisée. Tableau
              de bord complet avec interventions, statistiques et optimisation
              des tournées.
            </p>
            <ul className="showcase-bullets">
              <li>
                <div>
                  <strong>Suivi temps réel</strong>
                  <span>
                    Localisez votre technicien et suivez sa progression
                    jusqu&apos;à l&apos;arrivée.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Notation artisans</strong>
                  <span>
                    Système d&apos;avis clients pour garantir la qualité de
                    service en continu.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Accessible partout</strong>
                  <span>
                    Disponible depuis tout navigateur web, aucun téléchargement
                    nécessaire.
                  </span>
                </div>
              </li>
            </ul>
            <a href="#waitlist" className="btn-default">
              Accès artisan
            </a>
          </div>
          <div className="showcase-visual">
            <div className="mock-dashboard">
              <div className="mock-dashboard-header">
                <span className="mock-dash-dot"></span>
                <span className="mock-dash-dot"></span>
                <span className="mock-dash-dot"></span>
                <span className="mock-dash-title">Tournée du jour</span>
              </div>
              <div className="mock-dash-grid">
                <div className="mock-stat">
                  <div className="mock-stat-num">7</div>
                  <div className="mock-stat-label">Interventions</div>
                </div>
                <div className="mock-stat">
                  <div className="mock-stat-num">680 €</div>
                  <div className="mock-stat-label">Chiffre du jour</div>
                </div>
              </div>
              <div className="mock-map">
                <span className="mock-pin p1"></span>
                <span className="mock-pin p2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
