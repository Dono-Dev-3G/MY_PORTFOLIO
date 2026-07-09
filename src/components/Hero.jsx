import { useState } from "react";

const Hero = ({ t, toggleLanguage }) => {
    
    return (
        <section className="px-2 py-6 h-screen flex flex-col text-center justify-evenly items-center">

            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-main-text leading-tight">
                {t.greeting} <br />
                <span className="text-sage">{t.role}</span>
                </h1>
            </div>

            <div className="space-y-4 max-w-2xl">
                {t.specs.map((spec, index) => (
                <div 
                    key={index} 
                    className="flex flex-col sm:flex-row sm:items-baseline border-b border-sage/5 pb-3 last:border-0"
                >
                    <span className="text-xs font-mono tracking-wider text-sage font-semibold w-full sm:w-44 shrink-0 mb-1 sm:mb-0">
                    // {spec.label}
                    </span>
                    <span className="text-main-text text-base md:text-lg font-medium">
                    {spec.value}
                    </span>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Hero;