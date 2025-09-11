import React from 'react';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero-section" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Rivière d'artistes en arrière-plan - DANS LE HERO */}
      <div className="artists-river" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        {/* Rangée du haut */}
        <div className="artist-row top">
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg" alt="Urbain" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg" alt="Marc-Antoine Le Bret" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200361-default/ce4d47f8d131e7971b4f3fc0de45b470/media.jpg" alt="Adel Fugazi" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg" alt="D'Jal" /></div>
          <div className="artist-card"><img src="https://i.imgur.com/munE7s3.jpeg" alt="Morgane Berling" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg" alt="Thomas Angelvy" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg" alt="Urbain" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg" alt="Marc-Antoine Le Bret" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200361-default/ce4d47f8d131e7971b4f3fc0de45b470/media.jpg" alt="Adel Fugazi" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg" alt="D'Jal" /></div>
          <div className="artist-card"><img src="https://i.imgur.com/munE7s3.jpeg" alt="Morgane Berling" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg" alt="Thomas Angelvy" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg" alt="Urbain" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg" alt="Marc-Antoine Le Bret" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200361-default/ce4d47f8d131e7971b4f3fc0de45b470/media.jpg" alt="Adel Fugazi" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg" alt="D'Jal" /></div>
          <div className="artist-card"><img src="https://i.imgur.com/munE7s3.jpeg" alt="Morgane Berling" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200364-default/2cf3c8b262adfc3c6e72e95639c39cf8/media.jpg" alt="Thomas Angelvy" /></div>
        </div>

        {/* Rangée du milieu - NOUVELLE */}
        <div className="artist-row middle">
          <div className="artist-card"><img src="https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg" alt="Julien Santini" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg" alt="Urbain" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg" alt="Lucie Carbone" /></div>
          <div className="artist-card"><img src="https://i.imgur.com/ht3EucF.jpeg" alt="Sophie & Alex" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg" alt="D'Jal" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg" alt="Marc-Antoine Le Bret" /></div>
          <div className="artist-card"><img src="https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg" alt="Djamel Comedy Club" /></div>
          <div className="artist-card"><img src="https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg" alt="Julien Santini" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200359-default/9fb343deaad6dbe750cd731b4c0564b8/media.jpg" alt="Urbain" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg" alt="Lucie Carbone" /></div>
          <div className="artist-card"><img src="https://i.imgur.com/ht3EucF.jpeg" alt="Sophie & Alex" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200362-default/0743597244e1da871493bfbf5d13b7f7/media.jpg" alt="D'Jal" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200360-default/a0c4d924ae52585a517dd76531300e5b/media.jpg" alt="Marc-Antoine Le Bret" /></div>
          <div className="artist-card"><img src="https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg" alt="Djamel Comedy Club" /></div>
          <div className="artist-card"><img src="https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg" alt="Julien Santini" /></div>
        </div>

        {/* Rangée du bas */}
        <div className="artist-row bottom">
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg" alt="Lucie Carbone" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg" alt="Edouard Deloignon" /></div>
          <div className="artist-card"><img src="https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg" alt="Julien Santini" /></div>
          <div className="artist-card"><img src="https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg" alt="Djamel Comedy Club" /></div>
          <div className="artist-card"><img src="https://i.imgur.com/ht3EucF.jpeg" alt="Sophie & Alex" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg" alt="Lucie Carbone" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg" alt="Edouard Deloignon" /></div>
          <div className="artist-card"><img src="https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg" alt="Julien Santini" /></div>
          <div className="artist-card"><img src="https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg" alt="Djamel Comedy Club" /></div>
          <div className="artist-card"><img src="https://i.imgur.com/ht3EucF.jpeg" alt="Sophie & Alex" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200365-default/cda1d9f46d486a0ba2357daa5a79f6bd/media.jpg" alt="Lucie Carbone" /></div>
          <div className="artist-card"><img src="https://static.eno.do/x/fs-200366-default/cdc3aba992ae1735c4a9b7a3fd8befc4/media.jpg" alt="Edouard Deloignon" /></div>
          <div className="artist-card"><img src="https://26.staticbtf.eno.do/v1/29-default/caa1da7f867fc1ad334621eba4d80b76/media.jpg" alt="Julien Santini" /></div>
          <div className="artist-card"><img src="https://26.staticbtf.eno.do/v1/30-default/975e3fdd1700df5c9bd53662949e3fda/media.jpg" alt="Djamel Comedy Club" /></div>
          <div className="artist-card"><img src="https://i.imgur.com/ht3EucF.jpeg" alt="Sophie & Alex" /></div>
        </div>
      </div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Contenu principal */}
      <div className="main-content">
        {/* Badge */}
        <div className="badge">
          <span className="badge-dot"></span>
          <span className="badge-text">Production de spectacles vivants</span>
        </div>

        {/* Titres */}
        <h1 className="title-tiny">TINY TEAM,</h1>
        <h1 className="title-big">BIG DREAMS</h1>

        {/* Boutons */}
        <div className="buttons">
          <a href="#" className="btn btn-primary">
            Découvrir nos artistes →
          </a>
          <a href="#" className="btn btn-secondary">
            ▶ Voir le showreel
          </a>
        </div>

        {/* Cartes */}
        <div className="cards">
          <div className="card">
            <p className="card-label">VOUS ÊTES ARTISTE ?</p>
            <h3 className="card-title">Développez votre carrière</h3>
            <p className="card-description">Production • Tournées • Communication</p>
            <div className="card-link">En savoir plus →</div>
          </div>
          <div className="card">
            <p className="card-label">VOUS ÊTES PROGRAMMATEUR ?</p>
            <h3 className="card-title">Des spectacles qui cartonnent</h3>
            <p className="card-description">Humour • Stand-up • One-man shows</p>
            <div className="card-link">En savoir plus →</div>
          </div>
          <div className="card">
            <p className="card-label">VOUS ÊTES ENTREPRISE ?</p>
            <h3 className="card-title">Événements mémorables</h3>
            <p className="card-description">Soirées • Conventions • Team building</p>
            <div className="card-link">En savoir plus →</div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="scroll-indicator">
          <span className="scroll-text">SCROLL</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};