import { useState } from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ t, toggleLanguage }) => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: t.home, to: '/' },
        { name: t.about, to: '/a-propos' },
        { name: t.projects, to: '/projets' },
        { name: t.contact, to: '/#contact', isHash: true },
    ];

    const scrollWithOffset = (el) => {
        setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    };

    return (
        
        <nav 
            className="sticky top-0 z-[100] bg-dark-card/90 p-4 border-b-2 border-sage/80 shadow-[0_10px_30px_-10px_rgba(168,195,185,0.25)]"
        > 
            <div className="container mx-auto flex justify-between">
                <div className="text-sage font-bold tracking-tighter md:text-xl">
                    <Link to="/">
                        $ <span className="text-main-text">DONOVAN.EXE<span className="text-sage animate-pulse">_</span></span>
                    </Link>
                    
                </div>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden relative text-sage hover:text-main-text md:text-xl transition-all"
                >
                    {isOpen ? t.close : t.open}
                </button>


                {/*Div to close menu when clicking outside of it */}
                {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-10" />}

                
                {/*Dropdown menu for mobile */}
                <ul className={`
                    lg:hidden absolute top-full right-0 w-full p-4 text-center text-dark-card bg-sage flex flex-col text-xl md:text-2xl landscape:text-xl transition-all duration-300 ease-in-out overflow-hidden z-20
                    ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
                `}>
                    {navLinks.map((link) => (
                        <li className="w-full active:bg-black/20 active:scale-95 transition-all duration-100 rounded" 
                            key={link.name}
                        >
                            {link.isHash ? (
                                <HashLink  
                                    to={link.to}
                                    scroll={scrollWithOffset}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full p-2"
                                >
                                    {link.name}
                                </HashLink>
                            ) : (
                                <Link  
                                    to={link.to}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full p-2"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                    {/* Mobile Language Button */}
                    <li>
                        <button 
                            onClick={toggleLanguage}
                            className="w-full p-2 active:scale-90 transition-transform flex justify-center items-center gap-2 font-bold"
                        >
                           <span>{t.flag}</span> {t.langLabel}
                        </button>
                    </li>
                </ul>
            

                {/* Regular menu for desktop */}
                <ul className="hidden lg:flex space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            {link.isHash ? (
                                <HashLink 
                                    to={link.to} 
                                    scroll={scrollWithOffset}
                                    className="text-main-text hover:text-sage active:text-main-text transition-colors duration-300 font-medium"
                                >
                                    {link.name}
                                </HashLink>
                            ) : (
                                <Link 
                                    to={link.to} 
                                    className="text-main-text hover:text-sage active:text-main-text transition-colors duration-300 font-medium"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                    {/* Desktop Language Button */}
                    <li>
                        <button 
                            onClick={toggleLanguage}
                            className="text-sage active:scale-95 rounded px-2 py-1 hover:bg-sage hover:text-dark-card hover:cursor-pointer transition-all text-sm font-bold flex items-center gap-2"
                        >
                           <span>{t.flag}</span> {t.langLabel}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;