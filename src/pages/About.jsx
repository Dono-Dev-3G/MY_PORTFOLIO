import React, { useState } from 'react';
import { translations } from '../data/translations';

const About = ({ lang = 'fr' }) => {
  const t = translations[lang]?.about;
  const [showCV, setShowCV] = useState(false);
  const [activePdf, setActivePdf] = useState(null); // Gère le PDF actuellement ouvert dans le modal

  if (!t) return null;

  // 1. Certifications Officielles
  const officialCerts = [
    { name: "Google Cybersecurity", issuer: "Google", desc: t.googleDesc, status: "obtained", logo: "/images/google_badge.png", pdf: "/certs/google_cyber.pdf" },
    { name: "CompTIA Security+", issuer: "CompTIA", desc: t.comptiaDesc, status: "obtained", logo: "/images/comptia_badge.png", pdf: "/certs/security_plus.pdf" },
    { name: "Blue Team Level 1 (BTL1)", issuer: "Centri", desc: t.btl1Desc, status: "in_progress", logo: "/images/btl1_badge.png", pdf: null },
  ];

  // 2. Chemins TryHackMe
  const thmPaths = [
    { name: "SOC Level 2", type: t.socl2Type, logo: "/images/thm_badge.png", pdf: "/certs/thm_socl2.pdf", issuer: "TryHackMe", desc: t.socl2Desc },
    { name: "SOC Level 1", type: t.socl1Type, logo: "/images/thm_badge.png", pdf: "/certs/thm_socl1.pdf", issuer: "TryHackMe", desc: t.socl1Desc },
    { name: "Cyber Security 101", type: t.csType, logo: "/images/thm_badge.png", pdf: "/certs/thm_cyber101.pdf", issuer: "TryHackMe", desc: t.csDesc },
    { name: "Jr Penetration Tester", type: t.jrptType, logo: "/images/thm_badge.png", pdf: "/certs/thm_jrpentester.pdf", issuer: "TryHackMe", desc: t.jrptDesc },
    { name: "Web Fundamentals", type: t.webfunType, logo: "/images/thm_badge.png", pdf: "/certs/thm_webfundamentals.pdf", issuer: "TryHackMe", desc: t.webfunDesc },
    { name: "Pre-Security", type: t.presecType, logo: "/images/thm_badge.png", pdf: "/certs/thm_presecurity.pdf", issuer: "TryHackMe", desc: t.presecDesc },
  ];

  // 3. Certifications Dev Web (FreeCodeCamp)
  const devCerts = [
    { name: "Responsive Web Design", issuer: "FreeCodeCamp", desc: t.fccHtmlDesc, logo: "/images/fcc_badge.webp", pdf: "/certs/fcc_html.pdf" },
    { name: "JavaScript Algorithms & Data Structures", issuer: "FreeCodeCamp", desc: t.fccJsDesc, logo: "/images/fcc_badge.webp", pdf: "/certs/fcc_js.pdf" },
  ];

  // Fonction utilitaire pour ouvrir le modal si le PDF existe
  const openModal = (pdfPath) => {
    if (pdfPath) setActivePdf(pdfPath);
  };

  return (
    <main className="min-h-screen bg-dark-bg text-main-text py-16 px-6 font-space animate-fadeIn">
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* En-tête de la page */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-main-text uppercase">
            {t.title}
          </h1>
          <p className="text-sage text-sm font-mono">// {t.subtitle}</p>
        </div>

        {/* SECTION 1 : BIOGRAPHIE */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sage border-b border-sage/10 pb-2">
            {t.bioTitle}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-main-text/90 whitespace-pre-line font-medium pt-2">
            {t.bioText}
          </p>
          <p className="text-sage text-sm font-mono italic">// {t.bioTransition}</p>
        </section>

        {/* SECTION 2 : CERTIFICATIONS OFFICIELLES */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sage border-b border-sage/10 pb-2">
            {t.certsTitle}
          </h2>
          <div className="divide-y divide-sage/10">
            {officialCerts.map((cert, idx) => {
              const isInProgress = cert.status === "in_progress";
              const isClickable = cert.pdf && !isInProgress;
              
              return (
                <div key={idx} className="py-6 flex gap-6 items-start first:pt-2 last:pb-2">
                  <img 
                    src={cert.logo} 
                    alt="" 
                    onClick={() => isClickable && openModal(cert.pdf)}
                    className={`w-12 h-12 md:w-14 md:h-14 object-contain rounded bg-dark-card/50 p-1 select-none border border-sage/10 ${isClickable ? 'cursor-pointer hover:border-sage/40 transition-colors' : ''}`}
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start gap-4">
                      <h3 
                        onClick={() => isClickable && openModal(cert.pdf)}
                        className={`text-main-text font-bold text-base md:text-lg ${isClickable ? 'cursor-pointer hover:text-sage transition-colors' : ''}`}
                      >
                        {cert.name}
                      </h3>
                      <span className={`text-[9px] font-mono tracking-widest border px-2 py-0.5 rounded uppercase ${
                        isInProgress ? 'bg-sage/5 text-sage border-sage/20 animate-pulse' : 'bg-sage/10 text-sage border-sage/30 font-bold'
                      }`}>
                        {isInProgress ? (lang === 'fr' ? 'En cours' : 'In Progress') : (lang === 'fr' ? 'Vérifié' : 'Verified')}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-sage/60 uppercase">{cert.issuer}</p>
                    <p className="text-xs md:text-sm text-main-text/70 leading-relaxed font-medium pt-2">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3 : LABS CYBER & TRAINING (TRYHACKME) */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sage border-b border-sage/10 pb-2">
            {t.thmTitle}
          </h2>
          <p className="text-xs font-mono text-main-text/70 -mt-2">{t.thmSubtitle}</p>
          <div className="divide-y divide-sage/10">
            {thmPaths.map((path, idx) => {
              const isClickable = path.pdf;
              
              return (
                <div key={idx} className="py-6 flex gap-6 items-start first:pt-2 last:pb-2">
                  <img 
                    src={path.logo} 
                    alt="" 
                    onClick={() => isClickable && openModal(path.pdf)}
                    className={`w-12 h-12 md:w-14 md:h-14 object-contain rounded bg-dark-card/50 p-1 select-none border border-sage/10 ${isClickable ? 'cursor-pointer hover:border-sage/40 transition-colors' : ''}`}
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start gap-4">
                      <h3 
                        onClick={() => isClickable && openModal(path.pdf)}
                        className={`text-main-text font-bold text-base md:text-lg ${isClickable ? 'cursor-pointer hover:text-sage transition-colors' : ''}`}
                      >
                        {path.name}
                      </h3>
                      <span className="text-[9px] font-mono tracking-widest border px-2 py-0.5 rounded uppercase bg-sage/10 text-sage border-sage/30 font-bold">
                        {path.type}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-sage/60 uppercase">{path.issuer}</p>
                    <p className="text-xs md:text-sm text-main-text/70 leading-relaxed font-medium pt-2">
                      {path.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4 : DEV WEB */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-sage border-b border-sage/10 pb-2">
            {t.devTitle}
          </h2>
          <p className="text-xs font-mono text-main-text/70 -mt-2">{t.devDesc}</p>
          <div className="divide-y divide-sage/10">
            {devCerts.map((cert, idx) => (
              <div key={idx} className="py-6 flex gap-6 items-start first:pt-2 last:pb-2">
                <img 
                  src={cert.logo} 
                  alt="" 
                  onClick={() => openModal(cert.pdf)}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain rounded bg-dark-card/50 p-1 cursor-pointer hover:border-sage/40 border border-sage/10 transition-colors select-none"
                />
                <div className="flex-1 space-y-1">
                  <h3 
                    onClick={() => openModal(cert.pdf)}
                    className="text-main-text font-bold text-base md:text-lg cursor-pointer hover:text-sage transition-colors"
                  >
                    {cert.name}
                  </h3>
                  <p className="text-xs font-mono text-sage/60 uppercase">{cert.issuer}</p>
                  <p className="text-xs md:text-sm text-main-text/70 leading-relaxed font-medium pt-2">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 : AFFICHER LE CV COMPLET */}
        <section className="text-center space-y-6 pt-6">
          <button
            onClick={() => setShowCV(!showCV)}
            className="text-xs font-mono border border-sage/40 bg-sage/5 px-6 py-3 rounded text-sage hover:bg-sage/20 hover:text-main-text duration-300 transition-all select-none hover:cursor-pointer"
          >
            {showCV ? t.cvClose : t.cvButton}
          </button>

          {showCV && (
            <div className="w-full h-[600px] md:h-[800px] border border-sage/20 rounded overflow-hidden shadow-lg animate-fadeIn bg-dark-card">
              <iframe 
                src="/cv_donovan.pdf" 
                title="Donovan CV" 
                className="w-full h-full"
              />
            </div>
          )}
        </section>

      </div>

      {/* MODAL RAPIDE POUR LES CERTIFS PDF */}
      {activePdf && (
        <div 
          onClick={() => setActivePdf(null)} // Ferme au clic en dehors
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 cursor-pointer animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique à l'intérieur du conteneur PDF
            className="relative w-full max-w-4xl h-[85vh] bg-dark-card rounded border border-sage/30 flex flex-col cursor-default shadow-2xl"
          >
            {/* Bouton Fermer */}
            <button 
              onClick={() => setActivePdf(null)}
              className="absolute -top-10 right-0 text-sage hover:text-main-text font-mono text-sm tracking-widest bg-black/40 px-3 py-1 rounded border border-sage/20 cursor-pointer"
            >
              {lang === 'fr' ? '[ FERMER ]' : '[ CLOSE ]'}
            </button>
            
            {/* Visionneuse PDF */}
            <iframe 
              src={activePdf} 
              title="Certification Viewer" 
              className="w-full h-full rounded"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default About;