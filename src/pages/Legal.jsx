import { useEffect } from 'react';

const Legal = ({ lang = 'fr' }) => {
  
  // Textes en dur pour éviter de surcharger ton index de traduction pour des mentions légales
  const content = {
    fr: {
      title: "Mentions Légales",
      editorTitle: "1. Éditeur du site",
      editorDesc: "Ce site est édité à titre personnel par Donovan Carman. Conformément à l'article 6-III-2 de la loi LCEN, les coordonnées physiques de l'éditeur ont été transmises à l'hébergeur ci-dessous, l'adresse personnelle étant protégée.",
      contact: "Contact : donovan.carman@hotmail.com",
      hostTitle: "2. Hébergement",
      hostDesc: "Le site est hébergé par [Nom de l'hébergeur (ex: Vercel, Netlify, GitHub Pages)].",
      hostAddress: "Adresse : [Adresse physique de l'hébergeur]",
      hostContact: "Contact hébergeur : [Lien ou téléphone de l'hébergeur]",
      ipTitle: "3. Propriété intellectuelle",
      ipDesc: "L'ensemble des contenus présents sur ce site (textes, rapports d'investigation, design, code) est la propriété exclusive de son auteur, sauf mention contraire.",
      dataTitle: "4. Données personnelles & Cookies",
      dataDesc: "Ce site respecte la vie privée. Il ne collecte aucune donnée personnelle et n'utilise aucun cookie tiers à des fins publicitaires ou de traçage."
    },
    en: {
      title: "Legal Notice",
      editorTitle: "1. Site Editor",
      editorDesc: "This website is personally published by Donovan [Your Last Name].",
      contact: "Contact: [your.email@example.com]",
      hostTitle: "2. Hosting",
      hostDesc: "This website is hosted by [Host Name (e.g., Vercel, Netlify, GitHub Pages)].",
      hostAddress: "Address: [Host physical address]",
      hostContact: "Host Contact: [Host link or phone]",
      ipTitle: "3. Intellectual Property",
      ipDesc: "All content on this site (texts, investigation reports, design, code) is the exclusive property of its author, unless otherwise stated.",
      dataTitle: "4. Personal Data & Cookies",
      dataDesc: "This site respects your privacy. It does not collect any personal data and does not use any third-party cookies for advertising or tracking purposes."
    }
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-dark-bg text-main-text py-16 px-6 font-space animate-fadeIn">
      <div className="max-w-2xl mx-auto space-y-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-main-text uppercase">
            {t.title}
          </h1>
        </div>

        <div className="space-y-6 text-sm text-main-text/80 leading-relaxed font-sans">
          
          <section className="space-y-2 border-l border-sage/20 pl-4">
            <h2 className="font-mono text-xs uppercase text-sage font-bold tracking-wide">{t.editorTitle}</h2>
            <p>{t.editorDesc}</p>
            <p className="text-xs font-mono text-main-text/50">{t.contact}</p>
          </section>

          <section className="space-y-2 border-l border-sage/20 pl-4">
            <h2 className="font-mono text-xs uppercase text-sage font-bold tracking-wide">{t.hostTitle}</h2>
            <p>{t.hostDesc}</p>
            <p className="text-xs font-mono text-main-text/50">{t.hostAddress}</p>
            <p className="text-xs font-mono text-main-text/50">{t.hostContact}</p>
          </section>

          <section className="space-y-2 border-l border-sage/20 pl-4">
            <h2 className="font-mono text-xs uppercase text-sage font-bold tracking-wide">{t.ipTitle}</h2>
            <p>{t.ipDesc}</p>
          </section>

          <section className="space-y-2 border-l border-sage/20 pl-4">
            <h2 className="font-mono text-xs uppercase text-sage font-bold tracking-wide">{t.dataTitle}</h2>
            <p>{t.dataDesc}</p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Legal;