import { useState } from 'react';
import { Link } from 'react-router-dom';

const Reports = ({ t, toggleLanguage }) => {
  const [openReportId, setOpenReportId] = useState(null);
  const [openPhaseIndex, setOpenPhaseIndex] = useState(null);

  if (!t) return null;

  const toggleReport = (id) => {
    setOpenReportId(openReportId === id ? null : id);
    setOpenPhaseIndex(null);
  };

  const getSeverityStyles = (severity) => {
  const sev = severity?.toUpperCase();
  
    switch (sev) {
        case 'CRITICAL':
        case 'CRITIQUE':
        return 'bg-fuchsia-800/10 text-fuchsia-700 border-fuchsia-800/20';
        case 'HIGH':
        case 'HAUTE':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
        case 'MEDIUM':
        case 'MOYENNE':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
        case 'LOW':
        case 'BASSE':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
        default:
        return 'bg-sage/10 text-sage border-sage/20'; // Couleur par défaut (gris/vert)
    }
    };

  return (
    <section className="py-12 max-w-4xl mx-auto px-6 font-space">
      
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-main-text text-center m-2 hover:text-sage active:text-main-text transition-colors duration-300">
          <Link to="/projets">
            {t.title}
          </Link>
          
        </h2>
        <p className="text-sage text-sm font-mono text-center">
          // {t.subtitle}
        </p>
      </div>

      
        <div className="space-y-4">
          {t.shortReports?.slice(0, 2).map((report) => {
            const isOpen = openReportId === report.id;
            
            return (
              <div 
                key={report.id} 
                className="border border-sage/10 bg-dark-card/40 rounded p-4 transition-all"
              >
                <div 
                  onClick={() => toggleReport(report.id)}
                  className="flex justify-between items-start cursor-pointer select-none"
                >
                  <div>
                    <span className="text-[11px] font-mono text-sage/60 block mb-0.5">
                      {report.time} — ID: {report.id}
                    </span>
                    <h3 className="text-main-text font-semibold text-base">
                      {report.name}
                    </h3>
                  </div>
                  
                  <span className={`text-[10px] font-mono font-bold border px-2 py-0.5 rounded tracking-wider uppercase ${getSeverityStyles     (report.severity)}`}>
                        {report.severity}
                  </span>
                </div>

                {/* Partie Basse : Détails (Visible uniquement si isOpen est vrai) */}
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-sage/10 space-y-3 text-sm text-main-text/90">
                    <p>
                      <strong className="text-sage font-mono text-xs block mb-1 uppercase tracking-wide">// Verdict</strong>
                      <span className="text-xs font-mono px-1.5 py-0.5 bg-sage/10 text-sage rounded border border-sage/20">
                        {report.verdict}
                      </span>
                    </p>
                    <p className="pt-1">
                      <strong className="text-sage font-mono text-xs block mb-1 uppercase tracking-wide">// Analyse Technique</strong>
                      {report.analysis}
                    </p>
                    <p className="pt-1">
                      <strong className="text-sage font-mono text-xs block mb-1 uppercase tracking-wide">// Confinement & Remédiation</strong>
                      {report.remediation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      

      {/* Rendu conditionnel : Onglet 'long' (Investigations) */}

        <div className="space-y-4 mt-4">
          {t.longReports?.slice(0, 2).map((report) => {
            const isReportOpen = openReportId === report.id;

            return (
              <div 
                key={report.id} 
                className="border border-sage/10 bg-dark-card/40 rounded p-5 transition-all"
              >
                {/* En-tête de l'investigation (Niveau 1) */}
                <div 
                  onClick={() => {
                    setOpenReportId(isReportOpen ? null : report.id);
                    setOpenPhaseIndex(null); // Réinitialise les sous-sections à la fermeture/changement
                  }}
                  className="flex justify-between items-center cursor-pointer select-none border-b border-sage/5 pb-3"
                >
                  <div>
                    <h3 className="text-main-text font-bold text-lg">{report.name}</h3>
                    <span className={`text-[10px] font-mono font-bold border px-2 py-0.5 rounded tracking-wider mt-1 inline-block uppercase ${getSeverityStyles(report.severity)}`}>
                            {report.severity}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-sage bg-sage/5 px-2 py-1 rounded border border-sage/10">
                    {isReportOpen ? '[-]' : '[+]'}
                  </span>
                </div>

                {/* Résumé Global (Toujours visible pour donner du contexte) */}
                <p className="text-sm text-main-text/80 my-4 leading-relaxed italic bg-black/10 p-3 rounded border-l-2 border-sage">
                  {report.summary}
                </p>

                {/* Les Macro-Phases (Visibles si le rapport est ouvert - Niveau 2) */}
                {isReportOpen && (
                  <div className="mt-4 space-y-3 animate-fadeIn">
                    {report.macrophases?.map((phase, phaseIdx) => {
                      const isPhaseOpen = openPhaseIndex === phaseIdx;

                      return (
                        <div key={phaseIdx} className="bg-black/20 rounded border border-sage/5 overflow-hidden">
                          {/* Bouton de la Macro-Phase */}
                          <div 
                            onClick={() => setOpenPhaseIndex(isPhaseOpen ? null : phaseIdx)}
                            className="p-3 bg-dark-card/60 flex justify-between items-center cursor-pointer select-none hover:bg-dark-card/80 transition-colors"
                          >
                            <h4 className="text-sm font-mono text-sage font-semibold">
                              {phase.name}
                            </h4>
                            <span className="text-xs text-main-text/40 font-mono">
                              {isPhaseOpen ? '▲' : '▼'}
                            </span>
                          </div>

                          {/* Étapes intermédiaires contenues dans cette Macro-Phase */}
                          {isPhaseOpen && (
                            <div className="p-4 space-y-6 bg-black/10 border-t border-sage/5 animate-fadeIn">
                              {phase.steps?.map((step, stepIdx) => (
                                <div key={stepIdx} className="space-y-2 last:mb-0 border-b border-sage/5 pb-4 last:border-0 last:pb-0">
                                  <h5 className="text-sm font-semibold text-main-text flex items-center">
                                    <span className="text-xs font-mono text-sage mr-2">↳</span>
                                    {step.title}
                                  </h5>
                                  <p className="text-xs text-main-text/80 pl-4 leading-relaxed">
                                    {step.desc}
                                  </p>
                                  {step.code && (
                                    <div className="pl-4 pt-1">
                                      <pre className="p-3 bg-black/40 text-red-300 rounded font-mono text-[11px] overflow-x-auto whitespace-pre border border-red-500/5">
                                        {step.code}
                                      </pre>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="text-center pt-10">
          <Link 
            to="/projets"
            className="inline-block text-xs font-mono border border-sage bg-sage/5 text-sage px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-sage hover:text-dark-bg transition-all duration-300 shadow-[0_0_15px_rgba(168,195,185,0.1)]"
          >
            {t.allAlerts}
          </Link>
        </div>
    </section>
  );
};

export default Reports;