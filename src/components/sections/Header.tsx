"use client";

export default function Header() {
  return (
    <header>
      <div className="nav">
        <a href="#" className="logo">
          Dépan<span className="logo-dot">.Pro</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#solution">Solution</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#avis">Avis</a>
          </li>
          <li>
            <a href="#waitlist">Contact</a>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="btn-text">Se connecter</button>
          <a href="#waitlist" className="btn-primary">
            Rejoindre maintenant
          </a>
        </div>
      </div>
    </header>
  );
}
