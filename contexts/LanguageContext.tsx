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
    'downloadCV': 'DOWNLOAD CV',
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
    
    // Experiences
    'experience1.title': 'Student Assistant IT Operations',
    'experience1.company': 'StandardLife',
    'experience1.period': 'Jan 2023 - Present',
    'experience1.location': 'Frankfurt am Main',
    'experience1.point1': 'First and second level support in the client environment',
    'experience1.point2': 'Error analysis and rectification of hardware and software problems, on-site or remote user support',
    'experience1.point3': 'Installation and configuration of computer systems and peripheral devices with Windows 7 / Windows 10',
    'experience1.point4': 'Creation of reports and statistics with MS Excel and MS Access',
    'experience1.point5': 'Processing user enquiries with a ticket system',

    'experience2.title': 'Bachelor Thesis – AI-driven Automation of Software Testing',
    'experience2.company': 'Hochschule Darmstadt',
    'experience2.period': 'Feb 2025 – May 2025',
    'experience2.location': 'Darmstadt',
    'experience2.point1': 'Developed a prototype for automatic generation of test cases from software requirements using GPT-4o and semantic similarity techniques',
    'experience2.point2': 'Combined Retrieval-Augmented Generation (RAG), OpenAI GPT-4o API, and SentenceTransformer models to enrich context and generate structured test cases',
    'experience2.point3': 'Implemented a backend with Python (Flask) and PostgreSQL; designed a modern UI using React, Vite, and TypeScript',
    'experience2.point4': 'Key components: requirement clarity check (Q&A system), semantic search with embeddings, prompt engineering, and format validation',
    'experience2.point5': 'Deployment setup with Docker and Azure Cloud; CI/CD pipeline planned using GitLab and Terraform',

    // Projects
    'project1.title': 'We3ve - Electromobility Platform',
    'project1.description': 'Extension of an existing mobile app (we3ve) on the topic of electromobility (car sharing and booking) with additional functions and refactoring.',
    'project1.contribution1': 'Team leader of the automation test team (Backend, Frontend)',
    'project1.contribution2': 'PlayStore deployment',

    'project2.title': 'Never-have-I-Ever Website',
    'project2.description': 'Multiplayer game website with user registration, playlist creation, question management, and real-time multiplayer rooms using Socket.IO.',
    'project2.contribution1': 'Full-stack development with real-time communication using Socket.IO',
    'project2.contribution2': 'User registration and room management system',

    // Education
    'education1.degree': 'Computer Science (Bachelor)',
    'education1.school': 'Hochschule Darmstadt',
    'education1.period': 'Oct 2020 - June 2025',

    'education2.degree': 'Software Engineering',
    'education2.school': 'National University of Life and Environmental Sciences of Ukraine',
    'education2.period': 'Oct 2018 – July 2019',

    // Extracurricular
    'extracurricular.football': 'Football Player',
    'extracurricular.music': 'Music',
    'extracurricular.videogame': 'Videogame',
    'extracurricular.prometheus': 'Prometheus Certification - Data visualisation - 2019',
    'extracurricular.office': 'Word and Excel: tools and life hacks - 2019',
    'extracurricular.courses': 'Openclassrooms Courses'
  },
  de: {
    'hello': 'Hallo,',
    'professional': 'IT-Student & Full-Stack Entwickler',
    'contact': 'KONTAKTIEREN',
    'resume': 'LEBENSLAUF',
    'downloadCV': 'LEBENSLAUF HERUNTERLADEN',
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
    
    // Experiences
    'experience1.title': 'Studentische Aushilfe IT Operations',
    'experience1.company': 'StandardLife',
    'experience1.period': 'Jan 2023 – heute',
    'experience1.location': 'Frankfurt am Main',
    'experience1.point1': 'First und Second Level Support in der Client-Umgebung',
    'experience1.point2': 'Fehleranalyse und -behebung von Hardware- und Softwareproblemen, Vor-Ort- oder Remote-Support',
    'experience1.point3': 'Installation und Konfiguration von Computersystemen und Peripheriegeräten mit Windows 7 / Windows 10',
    'experience1.point4': 'Erstellung von Berichten und Statistiken mit MS Excel und MS Access',
    'experience1.point5': 'Bearbeitung von Benutzeranfragen mit einem Ticket-System',

    'experience2.title': 'Bachelorarbeit – KI-gestützte Automatisierung von Softwaretests',
    'experience2.company': 'Hochschule Darmstadt',
    'experience2.period': 'Feb 2025 – Mai 2025',
    'experience2.location': 'Darmstadt',
    'experience2.point1': 'Entwicklung eines Prototypen zur automatischen Generierung von Testfällen aus Softwareanforderungen mit GPT-4o und semantischen Ähnlichkeitstechniken',
    'experience2.point2': 'Kombination von Retrieval-Augmented Generation (RAG), OpenAI GPT-4o API und SentenceTransformer-Modellen zur Kontextanreicherung und Generierung strukturierter Testfälle',
    'experience2.point3': 'Implementierung eines Backends mit Python (Flask) und PostgreSQL; Entwurf einer modernen UI mit React, Vite und TypeScript',
    'experience2.point4': 'Schlüsselkomponenten: Anforderungsklarheitsprüfung (Q&A-System), semantische Suche mit Embeddings, Prompt Engineering und Formatvalidierung',
    'experience2.point5': 'Deployment-Setup mit Docker und Azure Cloud; CI/CD-Pipeline geplant mit GitLab und Terraform',

    // Projects
    'project1.title': 'We3ve - Elektromobilitätsplattform',
    'project1.description': 'Erweiterung einer bestehenden Mobile App (we3ve) zum Thema Elektromobilität (Carsharing und Buchung) mit zusätzlichen Funktionen und Refactoring.',
    'project1.contribution1': 'Teamleiter des Automation-Test-Teams (Backend, Frontend)',
    'project1.contribution2': 'PlayStore-Deployment',

    'project2.title': 'Never-have-I-Ever Website',
    'project2.description': 'Multiplayer-Spiel-Website mit Benutzerregistrierung, Playlist-Erstellung, Fragenmanagement und Echtzeit-Multiplayer-Räumen mit Socket.IO.',
    'project2.contribution1': 'Full-Stack-Entwicklung mit Echtzeit-Kommunikation über Socket.IO',
    'project2.contribution2': 'Benutzerregistrierungs- und Raumverwaltungssystem',

    // Education
    'education1.degree': 'Allgemeine Informatik (Bachelor)',
    'education1.school': 'Hochschule Darmstadt',
    'education1.period': 'Okt 2020 - Juni 2025',

    'education2.degree': 'Software Engineering',
    'education2.school': 'National University of Life and Environmental Sciences of Ukraine',
    'education2.period': 'Okt 2018 – Juli 2019',

    // Extracurricular
    'extracurricular.football': 'Fußballspieler',
    'extracurricular.music': 'Musik',
    'extracurricular.videogame': 'Videospiele',
    'extracurricular.prometheus': 'Prometheus Zertifizierung - Datenvisualisierung - 2019',
    'extracurricular.office': 'Word und Excel: Tools und Life Hacks - 2019',
    'extracurricular.courses': 'Openclassrooms Kurse'
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