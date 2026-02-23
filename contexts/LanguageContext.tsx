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
      'description': `My name is Guirauld Tayon. I am a passionate IT student and developer in my daily life.I have strong software testing experience, including test case design, manual testing and automation. I worked extensively with Maestro for mobile UI automation and led testing efforts in real projects, ensuring quality and stability across backend, frontend and mobile applications. I love to learn and explore new technologies and am passionate about problem-solving. I love working with modern web technologies, AI-driven solutions, and cloud computing. Through more than three years in IT support, I have developed strong communication skills, enjoy working directly with users, and feel comfortable explaining complex technical topics in a clear and simple way.`,

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
      'experience2.point5': 'Deployment setup with Docker, Nginx and Hetzner Cloud; CI/CD pipeline implemented with GitHub and GitHub Actions.',
    // Projects
    'project1.title': 'We3ve - Electromobility Platform',
      'project1.description': 'Worked on the extension of the We3ve mobile application (electromobility platform) and led the testing efforts (team of testers). Implemented Maestro-based mobile UI automation for Flutter while ensuring high-quality releases.',
      'project1.contribution1': 'Team Lead of the testing team (manual & automation), responsible for planning the test strategy, organising testing tasks and ensuring overall product quality.',
      'project1.contribution2': 'Implemented mobile UI automated tests using Maestro for the Flutter application.',
      'project1.contribution3': 'Collaborated with backend and frontend teams to validate API flows and debug mobile issues.',

    'project2.title': 'Never-have-I-Ever Website',
    'project2.description': 'Multiplayer game website with user registration, playlist creation, question management, and real-time multiplayer rooms using Socket.IO.',
    'project2.contribution1': 'Full-stack development with real-time communication using Socket.IO',
    'project2.contribution2': 'User registration and room management system',


      'project3.title': 'KI-basierter Testfall-Generator (Bachelorarbeit)',
      'project3.description': 'Prototype that automatically generates structured test cases from textual requirements using Large Language Models, RAG and a Python/Flask backend deployed on Hetzner.',
      'project3.contribution1': 'Entwurf und Implementierung der kompletten Backend-Architektur in Python (Flask) mit PostgreSQL, RAG und semantischer Suche.',
      'project3.contribution2': 'Entwicklung des Web-Frontends mit React, Vite und TypeScript und Integration mit dem KI-Backend.',
      'project3.contribution3': 'Deployed the full system using Docker, Nginx and Hetzner, with automated deployments via GitHub CI/CD (GitHub Actions).',

      'project4.title': 'Quiz Challenge – Java Spring Boot & Angular',
      'project4.description': 'Full-stack quiz web application built as a coding challenge, with a Java Spring Boot REST API, Angular frontend and MySQL database, deployed on quizz.guita.dev.',
      'project4.contribution1': 'Implemented the backend in Java Spring Boot: REST API design, domain model and persistence layer with MySQL.',
      'project4.contribution2': 'Developed the Angular frontend for the quiz flow, result display and integration with the backend API, and deployed the application using Docker, Nginx, Hetzner and GitHub Actions.',
      'project5.title': 'Events Management Platform',
      'project5.description': 'Full-stack web application for event and participant management, built with a TypeScript Node.js/Express backend, PostgreSQL database, and a React + Vite + TypeScript frontend. Fully containerised and deployed on Hetzner using Docker, Nginx and GitHub CI/CD.',

      'project5.contribution1': 'Developed the backend in TypeScript (Node.js/Express) with a clean REST API architecture and PostgreSQL database schema.',
      'project5.contribution2': 'Built the full frontend using React, Vite and TypeScript with modern reusable components and responsive UI.',
      'project5.contribution3': 'Set up complete containerisation (Docker), Nginx reverse proxy, Hetzner deployment and automated CI/CD with GitHub Actions.',
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
      'description': `Mein Name ist Guirauld Tayon. Ich bin ein leidenschaftlicher IT-Student und Entwickler. Ich lerne schnell und habe eine selbstlernende Einstellung. Ich liebe es, neue Technologien zu entdecken und habe eine Leidenschaft für Problemlösungen. Ich arbeite gerne mit modernen Web-Technologien, KI-gestützten Lösungen und Cloud Computing. Durch mehr als drei Jahre Erfahrung im IT-Support habe ich starke Kommunikationsfähigkeiten entwickelt, arbeite gerne direkt mit Anwendern und kann komplexe technische Themen verständlich und klar erklären.`,
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
      'experience2.point5': 'Deployment-Setup mit Docker, Nginx und Hetzner Cloud; CI/CD-Pipeline umgesetzt mit GitHub und GitHub Actions.',

    // Projects
    'project1.title': 'We3ve - Elektromobilitätsplattform',
      'project1.description': 'Erweiterung der We3ve-Mobile-App (Elektromobilitätsplattform) und Leitung aller Testaktivitäten. Aufbau von automatisierten Mobile-UI-Tests mit Maestro für Flutter sowie Sicherstellung hochwertiger Releases.',
      'project1.contribution1': 'Teamleiter des Testteams (manuell & automatisiert); verantwortlich für Teststrategie, Aufgabenplanung und Sicherstellung der Produktqualität.',
      'project1.contribution2': 'Implementierung von mobilen UI-Automationstests für die Flutter-App mit Maestro.',
      'project1.contribution3': 'Enge Zusammenarbeit mit Backend- und Frontend-Teams zur Validierung der API-Flows und Analyse von Mobilproblemen.',


    'project2.title': 'Never-have-I-Ever Website',
    'project2.description': 'Multiplayer-Spiel-Website mit Benutzerregistrierung, Playlist-Erstellung, Fragenmanagement und Echtzeit-Multiplayer-Räumen mit Socket.IO.',
    'project2.contribution1': 'Full-Stack-Entwicklung mit Echtzeit-Kommunikation über Socket.IO',
      'project2.contribution2': 'Benutzerregistrierungs-, Playlist- und Raumverwaltungssystem sowie Deployment mit Docker, Nginx auf Hetzner und CI/CD über GitHub Actions.',


      'project3.title': 'KI-basierter Testfall-Generator (Bachelorarbeit)',
      'project3.description': 'Prototyp, der strukturierte Testfälle automatisch aus textuellen Anforderungen generiert, basierend auf Large Language Models, RAG und einem Python/Flask-Backend, das auf Hetzner bereitgestellt wurde.',
      'project3.contribution1': 'Entwurf und Implementierung der kompletten Backend-Architektur in Python (Flask) mit PostgreSQL, RAG und semantischer Suche.',
      'project3.contribution2': 'Entwicklung des Web-Frontends mit React, Vite und TypeScript und Integration mit dem KI-Backend.',
      'project3.contribution3': 'Deployment des Gesamtsystems mit Docker, Nginx und Hetzner sowie automatisierten Deployments über GitHub CI/CD (GitHub Actions).',

      'project4.title': 'Quiz Challenge – Java Spring Boot & Angular',
      'project4.description': 'Full-Stack Quiz-Webanwendung, entwickelt als Coding-Challenge mit einem Java Spring Boot REST-Backend, Angular-Frontend und MySQL-Datenbank, bereitgestellt auf quizz.guita.dev.',
      'project4.contribution1': 'Implementierung des Backends in Java Spring Boot: REST-API-Design, Domänenmodell und Persistenzschicht mit MySQL.',
      'project4.contribution2': 'Entwicklung des Angular-Frontends für den Quizablauf, Ergebnisanzeige und Integration mit der Backend-API sowie Deployment mit Docker, Nginx, Hetzner und GitHub Actions.',
      // Project 5 – Events Platform
      'project5.title': 'Event-Management-Plattform',
      'project5.description': 'Full-Stack Webanwendung zur Verwaltung von Events und Teilnehmern, entwickelt mit einem TypeScript Node.js/Express Backend, PostgreSQL und einem React + Vite + TypeScript Frontend. Vollständig containerisiert und mit Docker, Nginx und GitHub CI/CD auf Hetzner bereitgestellt.',

      'project5.contribution1': 'Entwicklung des Backends in TypeScript (Node.js/Express) mit klarer REST-API-Architektur und PostgreSQL-Datenbankschema.',
      'project5.contribution2': 'Entwicklung des kompletten Frontends mit React, Vite und TypeScript sowie modernen, wiederverwendbaren Komponenten.',
      'project5.contribution3': 'Einrichtung der vollständigen Containerisierung (Docker), Nginx Reverse Proxy, Deployment auf Hetzner und automatisierte CI/CD-Pipelines mit GitHub Actions.',
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