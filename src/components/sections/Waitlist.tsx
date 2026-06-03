"use client";

import { useState } from "react";

const perks = [
  {
    icon: "🎯",
    title: "Accès prioritaire",
    text: "Sois le premier à utiliser Dépan.Pro dès l'ouverture dans ta ville.",
  },
  {
    icon: "💰",
    title: "Tarifs préférentiels",
    text: "Profite de –20% sur tes premières interventions, à vie.",
  },
  {
    icon: "🏆",
    title: "Support VIP",
    text: "Bénéficie d'un support client dédié et prioritaire.",
  },
];

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: brancher ici votre logique d'inscription (API, CRM, etc.)
  };

  return (
    <section className="block" id="waitlist" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="waitlist">
          <h2>
            Rejoins les <em>premiers utilisateurs</em>.
          </h2>
          <p>
            Sois parmi les premiers à découvrir Dépan.Pro dans ta ville et
            bénéficie d&apos;avantages exclusifs réservés aux early users.
          </p>

          <div className="waitlist-perks">
            {perks.map((perk) => (
              <div className="perk" key={perk.title}>
                <div className="perk-icon">{perk.icon}</div>
                <h4>{perk.title}</h4>
                <p>{perk.text}</p>
              </div>
            ))}
          </div>

          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="waitlist-input"
              placeholder="votre-email@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="waitlist-submit">
              {submitted ? "Inscrit ✓" : "Rejoindre"}
            </button>
          </form>
          <p className="waitlist-fineprint">
            En vous inscrivant, vous acceptez de recevoir nos communications.
            Désinscription possible à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
}
