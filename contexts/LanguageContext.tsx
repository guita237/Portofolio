'use client';
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'hello': 'Hello,',
    'professional': 'IT Student & Full-Stack Developer',
    'contact': 'CONTACT ME',
    'resume': 'GET RESUME',
    'whoami': 'WHO I AM?',
    'about': 'About',
    'experience': 'Experience',
    'skills': 'Skills',
    'education': 'Education',
    'projects': 'Projects',
    'contactSection': 'Contact',
    'location': 'Dieburg, Hessen',
    'email': 'guirauld.tayon@stud.h-da.de',
    'phone': '+49 176 29053181',
    'description': `My name is Guirauld Tayon. I am a passionate IT student and developer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love working with modern web technologies, AI-driven solutions, and cloud computing.`,
    'currentJob': 'Working Student IT Operations at StandardLife',
    'bachelorThesis': 'Bachelor Thesis – AI-driven Automation of Software Testing',
    'educationHDA': 'Computer Science B.Sc. - Hochschule Darmstadt',
    'languages': 'Languages: French, German, English, Ukrainian',
    'viewProject': 'View Project',
    'technologies': 'Technologies',
    'downloadCV': 'Download CV',
  },
  de: {
    'hello': 'Hallo,',
    'professional': 'IT-Student & Full-Stack Entwickler',
    'contact': 'KONTAKT',
    'resume': 'LEBENSLAUF',
    'whoami': 'WER ICH BIN?',
    'about': 'Über mich',
    'experience': 'Erfahrung',
    'skills': 'Fähigkeiten',
    'education': 'Bildung',
    'projects': 'Projekte',
    'contactSection': 'Kontakt',
    'location': 'Dieburg, Hessen',
    'email': 'guirauld.tayon@stud.h-da.de',
    'phone': '+49 176 29053181',
    'description': `Mein Name ist Guirauld Tayon. Ich bin ein leidenschaftlicher IT-Student und Entwickler. Ich lerne schnell und habe eine selbstlernende Einstellung. Ich liebe es, neue Technologien zu entdecken und habe eine Leidenschaft für Problemlösungen. Ich arbeite gerne mit modernen Web-Technologien, KI-gestützten Lösungen und Cloud Computing.`,
    'currentJob': 'Werkstudent IT Operations bei StandardLife',
    'bachelorThesis': 'Bachelorarbeit – KI-gestützte Automatisierung von Softwaretests',
    'educationHDA': 'Informatik B.Sc. - Hochschule Darmstadt',
    'languages': 'Sprachen: Französisch, Deutsch, Englisch, Ukrainisch',
    'viewProject': 'Projekt ansehen',
    'technologies': 'Technologien',
    'downloadCV': 'Lebenslauf herunterladen'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}