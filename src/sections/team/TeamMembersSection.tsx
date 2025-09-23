import React from 'react';
import './TeamMembersSection.css';

export const TeamMembersSection: React.FC = () => {
  const teamMembers = [
    {
      id: 'benedicte',
      name: "Bénédicte",
      lastname: "Lecoq",
      role: "Fondatrice",
      description: "Passionnée et visionnaire, Bénédicte fait ses armes dans les grandes maisons du spectacle vivant entre Paris et Marseille. Convaincue que chaque artiste mérite un accompagnement aussi unique que son talent, elle crée Tiny Team pour offrir cette proximité essentielle.",
      quote: "Chaque artiste a une histoire unique à raconter",
      skills: ["Direction stratégique", "Production artistique", "Développement de talents"],
      email: "benedicte@tinyteam.fr",
      image: "https://static.eno.do/x/fs-207406-default/2584a08dbb3b3d9c470bee9fb6019dd1/media.jpg"
    },
    {
      id: 'isabelle',
      name: "Isabelle",
      lastname: "Sabatier",
      role: "Responsable Diffusion",
      description: "Animée par une passion profonde pour le spectacle vivant, Isabelle développe depuis toujours de multiples compétences : planification de tournées, structuration artistique, stratégie de développement personnalisée.",
      quote: "La scène est un lieu de rencontres magiques",
      skills: ["Programmation culturelle", "Gestion de tournées", "Relations publiques"],
      email: "booking@tinyteam.fr",
      image: "https://static.eno.do/x/fs-207410-default/af6d91411c60335f407220493c043763/media.jpg"
    },
    {
      id: 'elodie',
      name: "Elodie",
      lastname: "Biffi",
      role: "Responsable Administrative",
      description: "Gardienne de l'excellence opérationnelle, Elodie assure une gestion irréprochable permettant aux artistes de se concentrer sur leur art. Son expertise administrative garantit la fluidité de tous les projets.",
      quote: "L'organisation est la clé de la créativité",
      skills: ["Gestion administrative", "Optimisation des process", "Veille juridique"],
      email: "administratif@tinyteam.fr",
      image: "https://static.eno.do/x/fs-207411-default/0ed25e6fe47508a9f55ceb7a0ee6fc4c/media.jpg"
    },
    {
      id: 'jeremy',
      name: "Jérémy",
      lastname: "Dravigny",
      role: "Responsable Communication",
      description: "Fort de 20 ans dans le spectacle, Jérémy apporte une vision globale unique. Créateur d'un festival en 2006, il cultive l'art de faire les choses sérieusement sans se prendre au sérieux.",
      quote: "La communication, c'est créer des ponts entre les cœurs",
      skills: ["Communication digitale", "Marketing artistique", "Relations presse"],
      email: "tourmanager@tinyteam.fr",
      image: "https://static.eno.do/x/fs-207412-default/b0bd97d300f452b564d515009f33562b/media.jpg"
    },
    {
      id: 'margaux',
      name: "Margaux",
      lastname: "Morel",
      role: "Chargée de Production",
      description: "Nouvelle recrue dynamique de l'équipe, Margaux apporte fraîcheur et créativité. Forte de plus de 10 ans d'expérience dans l'événementiel, elle enrichit Tiny Team de son enthousiasme communicatif.",
      quote: "Transformer les rêves en réalité spectaculaire",
      skills: ["Production artistique", "Direction technique", "Gestion de projet"],
      email: "diffusion@tinyteam.fr",
      image: "https://static.eno.do/x/fs-207407-default/6f534256453179693776055b70110e0e/media.jpg"
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="members-grid">
          {teamMembers.map((member, index) => (
            <article 
              key={member.id} 
              className={`member-card ${member.id}`}
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="member-image-container">
                <img 
                  src={member.image}
                  alt={`${member.name} ${member.lastname}`}
                  className="member-image"
                />
                <div className="member-overlay">
                  <p className="member-quote">"{member.quote}"</p>
                </div>
              </div>
              
              <div className="member-content">
                <header className="member-header">
                  <h3 className="member-fullname">
                    <span className="firstname">{member.name}</span>
                    <span className="lastname">{member.lastname}</span>
                  </h3>
                  <span className="member-role">{member.role}</span>
                </header>
                
                <p className="member-bio">{member.description}</p>
                
                <div className="member-skills">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="skill-chip">{skill}</span>
                  ))}
                </div>
                
                <a href={`mailto:${member.email}`} className="member-contact">
                  <span className="contact-icon">✉</span>
                  <span className="contact-text">Contacter</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};