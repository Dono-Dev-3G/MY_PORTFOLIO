import { Link } from 'react-router-dom';

const Footer = ({ t }) => {
  if (!t) return null;

  return (
    <footer className="bg-dark-bg border-t border-sage/10 py-8 px-6 font-space mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-main-text/40">
        
        {/* Gauche : Copyright / Droits réservés */}
        <div className="text-center sm:text-left font-mono">
          &copy; {new Date().getFullYear()} — DonoDevSec. {t.rights}
        </div>

        {/* Droite : Mentions légales & Icônes réseaux sociaux */}
        <div className="flex items-center gap-6 font-mono">
          <Link to="/mentions-legales" className="hover:text-sage transition-colors">
            {t.legal}
          </Link>
          
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a 
              href="https://github.com/Dono-Dev-3G" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-sage text-main-text/40 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/donovan-carman-945a76346" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-sage text-main-text/40 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;