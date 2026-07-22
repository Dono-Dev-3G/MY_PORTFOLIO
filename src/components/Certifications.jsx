import { Link } from 'react-router-dom';

const Certifications = ({ t, lang }) => {
  
  const certList = [
    {
      name: "Google Cybersecurity",
      issuer: "Google / Coursera",
      status: "obtained",
      logo: "/images/google_badge.png"
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      status: "obtained",
        logo: "/images/comptia_badge.png"
    },
    {
      name: "Blue Team Level 1 (BTL1)",
      issuer: "Centri",
      status: "in_progress",
      logo: "/images/btl1_badge.png"
    }
  ];

  return (
    <section className="px-6 py-16 w-full bg-dark-bg flex flex-col items-center animate-fadeIn">
      
      {/* En-tête de section identique à ton style habituel */}
      <div className="max-w-2xl w-full text-center space-y-2 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-main-text uppercase">
          {t.title}
        </h2>
        <p className="text-sage text-xs font-mono">// {t.subtitle}</p>
      </div>

      {/* Liste des Certifications (Flottantes sans encadrement) */}
      <div className="max-w-2xl w-full space-y-10 mb-12">
        {certList.map((cert, index) => {
          const isInProgress = cert.status === "in_progress";
          
          return (
            <div 
              key={index}
              className="flex items-center gap-8 p-2 transition-all duration-300 hover:translate-x-2 "
            >
              {/* Badge en Cercle à gauche */}
              <div className="w-20 h-20 shrink-0 bg-white border border-sage/20 rounded-full flex items-center justify-center font-mono text-[9px] text-sage/40 shadow-[0_0_15px_rgba(168,195,185,0.4)]">
                <img src={cert.logo} alt={cert.name} className="w-full h-full rounded-full object-cover" /> 
              </div>

              {/* Contenu textuel à droite (sans encadrement) */}
              <div className="flex-grow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2   w-full">
                <div>
                  <h3 className="text-main-text font-semibold text-base tracking-wide">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-main-text/50 font-mono mt-0.5">
                    {cert.issuer}
                  </p>
                </div>

                {/* Statut de la certif */}
                <div className="sm:text-right shrink-0">
                  <span className={`text-[9px] font-mono tracking-widest border px-2 py-0.5 rounded uppercase select-none ${
                    isInProgress 
                      ? 'bg-sage/5 text-sage border-sage/20 animate-pulse' 
                      : 'bg-sage/10 text-sage border-sage/30 font-bold'
                  }`}>
                    {isInProgress ? t.statusInProgress : t.statusObtained}
                  </span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Bouton d'action de fin de section */}
      <div className="text-center">
        <Link
          to="/a-propos"
          className="inline-block text-xs font-mono border border-sage bg-sage/5 text-sage px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-sage hover:text-dark-bg transition-all duration-300 shadow-[0_0_15px_rgba(168,195,185,0.1)]"
        >
          {t.button}
        </Link>
      </div>
    </section>
  );
}

export default Certifications;