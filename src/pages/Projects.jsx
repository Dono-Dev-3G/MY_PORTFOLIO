import { useState } from 'react';
import { translations } from '../data/translations'; 

const Projects = ({ lang = 'fr' }) => {
  // On récupère directement la section "reports" correspondant à la langue active
  const t = translations[lang]?.reports;
  
  // États pour la navigation par filtres et le déploiement multi-niveaux
  const [currentFilter, setCurrentFilter] = useState('all');
  const [openReportId, setOpenReportId] = useState(null);
  const [openPhases, setOpenPhases] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  if (!t) return null;

  // Définition des filtres basés sur le type d'exercice cyber
  const filters = [
    { 
      id: 'all', 
      label: lang === 'fr' ? '[ Tous ]' : '[ All ]' 
    },
    { 
      id: 'triage', 
      label: lang === 'fr' ? '[ Alertes SOC & Triage ]' : '[ SOC Alerts & Triage ]' 
    },
    { 
      id: 'investigation', 
      label: lang === 'fr' ? '[ Enquêtes & Incident Response ]' : '[ Investigations & Incident Response ]' 
    }
  ];

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

  const toggleReport = (id) => {
    setOpenReportId(openReportId === id ? null : id);
    setOpenPhases([]); // Réinitialise les phases ouvertes si on change de rapport
  };

  const togglePhase = (reportId, phaseIdx) => {
    const phaseKey = `${reportId}-${phaseIdx}`;
    if (openPhases.includes(phaseKey)) {
      setOpenPhases(openPhases.filter((key) => key !== phaseKey));
    } else {
      setOpenPhases([...openPhases, phaseKey]);
    }
  };

  // Filtrage des listes de rapports courts et longs
  const filteredShortReports = t.shortReports?.filter(
    (r) => currentFilter === 'all' || r.category === currentFilter
  ) || [];

  const displayedShortReports = filteredShortReports.slice(0, visibleCount);

  const filteredLongReports = t.longReports?.filter(
    (r) => currentFilter === 'all' || r.category === currentFilter
  ) || [];

  return (
    <main className="min-h-screen bg-dark-bg text-main-text py-16 px-6 font-space animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* En-tête de la page */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-main-text">
            {t.title}
          </h1>
          <p className="text-sage text-sm font-mono">// {t.subtitle}</p>
        </div>

        {/* Barre de navigation des filtres */}
        <div className="flex flex-wrap justify-center gap-4 border-b border-sage/10 pb-6">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setCurrentFilter(filter.id);
                setOpenReportId(null);
                setVisibleCount(10); // Referme les détails au changement de catégorie
              }}
              className={`text-xs font-mono px-3 py-1.5 rounded transition-all select-none border ${
                currentFilter === filter.id
                  ? 'bg-sage/20 text-sage border-sage/40'
                  : 'bg-transparent text-main-text/60 border-transparent hover:text-sage hover:cursor-pointer duration-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Rendu : Section Alertes SOC (Format Court) */}
        {filteredShortReports.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sage border-b border-sage/10 pb-2">
              [({filteredShortReports.length})]
            </h2>
            <div className="space-y-4">
              {displayedShortReports.map((report) => {
                const isOpen = openReportId === report.id;
                return (
                  <div key={report.id} className="border border-sage/10 bg-dark-card/40 rounded p-4 transition-all">
                    <div onClick={() => toggleReport(report.id)} className="flex justify-between items-start cursor-pointer select-none">
                      <div>
                        <span className="text-[11px] font-mono text-sage/60 block mb-0.5">
                          {report.time} — ID: {report.id}
                        </span>
                        <h3 className="text-main-text font-semibold text-base">{report.name}</h3>
                      </div>
                    <span className={`text-[10px] font-mono font-bold border px-2 py-0.5 rounded tracking-wider uppercase ${getSeverityStyles     (report.severity)}`}>
                        {report.severity}
                    </span>
                    </div>

                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-sage/10 space-y-3 text-sm text-main-text/90 animate-fadeIn">
                        <p>
                          <strong className="text-sage font-mono text-xs block mb-1 uppercase tracking-wide">// Verdict</strong>
                          <span className="text-xs font-mono px-1.5 py-0.5 bg-sage/10 text-sage rounded border border-sage/20">{report.verdict}</span>
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
            {filteredShortReports.length > visibleCount && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 10)}
                  className="text-xs font-mono border border-sage/30 bg-sage/5 px-4 py-2 rounded text-sage hover:bg-sage/20 hover:cursor-pointer duration-300 transition-all"
                >
                  {lang === 'fr' ? "VOIR PLUS D'ALERTES" : 'SEE MORE ALERTS'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Rendu : Section Enquêtes Avancées (Format Long) */}
        {filteredLongReports.length > 0 && (
          <div className="space-y-4 mt-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sage border-b border-sage/10 pb-2">
              [// Rapports d'Investigations ({filteredLongReports.length})]
            </h2>
            <div className="space-y-6">
              {filteredLongReports.map((report) => {
                const isReportOpen = openReportId === report.id;
                return (
                  <div key={report.id} className="border border-sage/10 bg-dark-card/40 rounded p-5 transition-all">
                    
                    {/* En-tête Niveau 1 */}
                    <div onClick={() => toggleReport(report.id)} className="flex justify-between items-center cursor-pointer select-none border-b border-sage/5 pb-3">
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

                    {/* Résumé Exécutif permanent */}
                    <p className="text-sm text-main-text/80 my-4 leading-relaxed italic bg-black/10 p-3 rounded border-l-2 border-sage">
                      {report.summary}
                    </p>

                    {/* Déploiement des Macro-Phases (Niveau 2) */}
                    {isReportOpen && (
                      <div className="mt-4 space-y-3 animate-fadeIn">
                        {report.macrophases?.map((phase, phaseIdx) => {
                          const isPhaseOpen = openPhases.includes(`${report.id}-${phaseIdx}`);
                          return (
                            <div key={phaseIdx} className="bg-black/20 rounded border border-sage/5 overflow-hidden">
                              
                              {/* Bouton de Phase */}
                              <div onClick={() => togglePhase(report.id, phaseIdx)} className="p-3 bg-dark-card/60 flex justify-between items-center cursor-pointer select-none hover:bg-dark-card/80 transition-colors">
                                <h4 className="text-sm font-mono text-sage font-semibold">{phase.name}</h4>
                                <span className="text-xs text-main-text/40 font-mono">{isPhaseOpen ? '▲' : '▼'}</span>
                              </div>

                              {/* Affichage des Étapes de la Phase (Ouverture multi-sélection fluide) */}
                              {isPhaseOpen && (
                                <div className="p-4 space-y-6 bg-black/10 border-t border-sage/5 animate-fadeIn">
                                  {phase.steps?.map((step, stepIdx) => (
                                    <div key={stepIdx} className="space-y-2 last:mb-0 border-b border-sage/5 pb-4 last:border-0 last:pb-0">
                                      <h5 className="text-sm font-semibold text-main-text flex items-center">
                                        <span className="text-xs font-mono text-sage mr-2">↳</span>
                                        {step.title}
                                      </h5>
                                      <p className="text-xs text-main-text/80 pl-4 leading-relaxed whitespace-pre-line">{step.desc}</p>
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
          </div>
        )}

      </div>
    </main>
  );
};

export default Projects;