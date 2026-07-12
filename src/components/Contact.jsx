import React from 'react';

const Contact = ({ t }) => {
  const contactLinks = [
    {
      label: t.emailLabel,
      value: "donovan.carman@hotmail.com", // Mets ton adresse mail ici
      href: "mailto:donovan.carman@hotmail.com",
    },
    {
      label: t.linkedinLabel,
      value: "linkedin.com/in/donovan-carman", // Ton lien LinkedIn
      href: "https://www.linkedin.com/in/donovan-carman-945a76346", 
    },
    {
      label: t.githubLabel,
      value: "github.com/dono-dev-3g",
      href: "https://github.com/dono-dev-3g",
    },
  ];

  return (
    <section id="contact" className="px-6 py-20 w-full bg-dark-bg flex flex-col items-center animate-fadeIn ">
      
      {/* Statut Disponibilité "Cyber" */}
      <div className="mb-8 flex items-center gap-2 px-3 py-1 bg-sage/5 border border-sage/20 rounded-full select-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-[10px] font-mono tracking-wider text-sage font-bold">
          {t.statusAvailable}
        </span>
      </div>

      {/* En-tête de la section */}
      <div className="max-w-2xl w-full text-center space-y-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-main-text uppercase">
          {t.title}
        </h2>
        <p className="text-sage text-xs font-mono">// {t.subtitle}</p>
      </div>

      {/* Liens de contact épurés (Style Hero) */}
      <div className="max-w-xl w-full space-y-12">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row sm:items-baseline border-b border-sage/5 pb-3 last:border-0 group transition-all duration-300"
          >
            {/* Label à gauche */}
            <span className="text-xs font-mono tracking-wider text-sage font-semibold w-full sm:w-36 shrink-0 mb-1 sm:mb-0">
              {link.label}
            </span>
            
            {/* Valeur cliquable à droite */}
            <span className="text-main-text text-base md:text-lg font-medium group-hover:text-sage transition-colors duration-300 break-all">
              {link.value} <span className="text-xs text-sage/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">↗</span>
            </span>
          </a>
        ))}
      </div>

    </section>
  );
};

export default Contact;