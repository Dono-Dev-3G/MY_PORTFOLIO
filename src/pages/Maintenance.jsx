import { Link } from 'react-router-dom';

const UnderDevelopment = ({ lang = 'fr' }) => {
  const t = {
    fr: {
      title: "ACCÈS RESTREINT",
      subtitle: "Module en cours de déploiement",
      desc: "Cette section du portfolio fait l'objet d'une mise à jour de sécurité et d'un développement actif. Le code sera poussé en production très prochainement.",
      button: "[ REVENIR À L'ACCUEIL ]"
    },
    en: {
      title: "ACCESS RESTRICTED",
      subtitle: "Module deployment in progress",
      desc: "This section of the portfolio is currently undergoing a security update and active development. Code will be pushed to production shortly.",
      button: "[ RETURN TO HOME ]"
    }
  };

  const current = t[lang] || t.fr;

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-dark-bg text-main-text px-6 font-space animate-fadeIn">
      <div className="max-w-md w-full border border-red-500/20 bg-red-500/5 p-6 rounded text-center space-y-6 shadow-[0_0_20px_rgba(239,68,68,0.05)]">
        
        {/* Icône d'alerte / Cyber */}
        <div className="flex justify-center text-red-400">
          <svg className="w-12 h-12 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold tracking-wider text-red-400 uppercase font-mono">
            {current.title}
          </h1>
          <p className="text-sage text-xs font-mono">// status_code: 503_compiling</p>
        </div>

        <p className="text-sm text-main-text/70 leading-relaxed">
          {current.desc}
        </p>

        <div className="pt-2">
          <Link 
            to="/" 
            className="inline-block text-xs font-mono border border-sage/40 bg-sage/5 px-4 py-2 rounded text-sage hover:bg-sage/20 transition-all"
          >
            {current.button}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default UnderDevelopment;