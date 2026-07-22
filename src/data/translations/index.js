import { ui } from './ui';
import { hero } from './hero';
import { about } from './about';
import { reportsContent } from './reports';
import { certifications } from './certifications';
import { contact } from './contact';

export const translations = {
    fr: {
        nav: ui.fr.nav,
        hero: hero.fr,
        about: about.fr,
        reports: reportsContent.fr,
        certifications: certifications.fr,
        contact: contact.fr,
        footer: ui.fr.footer,
    },
    en: {
        nav: ui.en.nav,
        hero: hero.en,
        about: about.en,
        reports: reportsContent.en,
        certifications: certifications.en,
        contact: contact.en,
        footer: ui.en.footer,
    }
};