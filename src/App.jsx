import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reports from './components/Reports';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Legal from './pages/Legal';
import UnderDevelopment from './pages/Maintenance';
import { translations } from './data/translations';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const t = translations[language];

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-dark-bg font-space">

        <Navbar t={t.nav} toggleLanguage={toggleLanguage} />

        <main className="flex-grow">
          <Routes>
            
            <Route 
              path="/"
              element={
                <>
                  <Hero t={t.hero} toggleLanguage={toggleLanguage}/>
                  <Reports t={t.reports} toggleLanguage={toggleLanguage}/>
                  <Certifications t={t.certifications} lang={language} />
                  <Contact t={t.contact} />
                </>
              }
            />

            <Route path="/a-propos" element={<About lang={language} />} />

            <Route path="/projets" element={<Projects lang={language} />} />

            <Route path="/mentions-legales" element={<Legal lang={language} />} />

          </Routes>
        </main>

        <Footer t={t.footer} />
      </div>
    </Router>
  )
}

export default App