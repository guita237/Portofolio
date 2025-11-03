'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeProvider';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo('.hero-title', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    
    gsap.fromTo('.hero-subtitle', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    gsap.fromTo('.hero-buttons', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: 'power3.out' }
    );

    // Skills animation
    gsap.fromTo('.skill-item', 
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top 80%',
        }
      }
    );

    // Experience animation
    gsap.fromTo('.experience-item', 
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.experience-section',
          start: 'top 80%',
        }
      }
    );

  }, []);

  const skills = [
    { name: 'Azure Cloud', icon: '☁️' },
    { name: 'Python', icon: '🐍' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚀' },
    { name: 'Flask', icon: '🍶' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📚' },
    { name: 'RESTful API', icon: '🔗' },
    { name: 'OpenCV', icon: '👁️' },
    { name: 'LLM', icon: '🧠' },
    { name: 'RAG', icon: '📖' },
    { name: 'Prompt Engineering', icon: '💬' },
    { name: 'CI/CD', icon: '🔄' },
    { name: 'C++', icon: '⚙️' },
    { name: 'Java', icon: '☕' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Chakra UI', icon: '🎨' },
    { name: 'Tailwind', icon: '💨' }
  ];

  const experiences = [
    {
      title: "Studentische Aushilfe (m/w/d) IT Operations",
      company: "StandardLife",
      period: "Jan 2023 – heute",
      location: "Frankfurt am Main",
      description: [
        "First and second level support in the client environment",
        "Extended second level support incl.: Error analysis and rectification of hardware and software problems, on-site or remote user support",
        "Installation and configuration of computer systems and peripheral devices with Windows 7 / Windows 10",
        "Creation of reports and statistics with MS Excel and MS Access",
        "Processing user enquiries with a ticket system"
      ]
    },
    {
      title: "Bachelor Thesis – AI-driven Automation of Software Testing",
      company: "Hochschule Darmstadt",
      period: "Feb 2025 – Mai 2025",
      location: "Darmstadt",
      description: [
        "Developed a prototype for automatic generation of test cases from software requirements using GPT-4o and semantic similarity techniques",
        "Combined Retrieval-Augmented Generation (RAG), OpenAI GPT-4o API, and SentenceTransformer models to enrich context and generate structured test cases",
        "Implemented a backend with Python (Flask) and PostgreSQL; designed a modern UI using React, Vite, and TypeScript",
        "Key components: requirement clarity check (Q&A system), semantic search with embeddings, prompt engineering, and format validation",
        "Deployment setup with Docker and Azure Cloud; CI/CD pipeline planned using GitLab and Terraform"
      ]
    }
  ];

  const projects = [
    {
      title: "We3ve - Electromobility Platform",
      description: "Extension of an existing mobile app (we3ve) on the topic of electromobility (car sharing and booking) with additional functions and refactoring.",
      technologies: ["Flutter", "Express", "MySQL", "Automation Testing", "PlayStore Deployment"],
      link: "https://we3ve.de/",
      contributions: [
        "Team leader of the automation test team (Backend, Frontend)",
        "PlayStore deployment"
      ]
    },
    {
      title: "Never-have-I-Ever Website",
      description: "Multiplayer game website with user registration, playlist creation, question management, and real-time multiplayer rooms.",
      technologies: ["React", "Vite", "TypeScript", "Tailwind", "Chakra UI", "Express", "Socket.IO", "PostgreSQL"],
      link: "#",
      contributions: [
        "Full-stack development with real-time communication using Socket.IO",
        "User registration and room management system"
      ]
    }
  ];

  const education = [
    {
      degree: "Allgemein Informatik (Bachelor)",
      school: "Hochschule Darmstadt",
      period: "Oct 2020 - Juni 2025",
      location: "Darmstadt"
    },
    {
      degree: "Software Engineering",
      school: "National University of Life and Environmental Sciences of Ukraine",
      period: "Oct 2018 – Juli 2019",
      location: "Ukraine"
    }
  ];

  const languages = ["French", "German", "English", "Ukrainian"];
  const extracurricular = [
    "Football Player",
    "Music",
    "Videogame",
    "Prometheus Certification - Data visualisation - 2019",
    "Word and Excel: tools and life hacks - 2019",
    "Openclassrooms Courses"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">GUIRAULD TAYON</div>
          
          <div className="flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('de')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'de' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                DE
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['about', 'experience', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  {t(item)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="hero-title text-6xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">{t('hello')}</span><br />
                <span className="text-gray-800 dark:text-white">I&apos;m Guirauld Tayon</span>
              </h1>
              <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                {t('professional')}
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                >
                  {t('contact')}
                </a>
                <a 
                  href="/Lebenslauf.pdf"
                  download
                  className="border border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium text-center"
                >
                  {t('downloadCV')}
                </a>
              </div>
            </div>

            {/* Code Block */}
            <div className="code-block text-white p-8 rounded-2xl">
              <div className="flex space-x-2 mb-6">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <pre className="text-sm md:text-base">
{`const developer = {
  name: 'Guirauld Tayon',
  role: 'IT Student & Full-Stack Developer',
  location: 'Dieburg, Germany',
  education: 'Hochschule Darmstadt',
  languages: ['FR', 'DE', 'EN', 'UA'],
  currentRole: 'Working Student IT Operations',
  skills: {
    frontend: ['React', 'Next.js', 'Flutter'],
    backend: ['Node.js', 'Python', 'Express'],
    database: ['PostgreSQL', 'MySQL', 'MongoDB'],
    cloud: ['Azure', 'Docker', 'CI/CD'],
    ai: ['LLM', 'RAG', 'Prompt Engineering']
  },
  availability: 'Open to new opportunities',
  contact: 'guirauld.tayon@stud.h-da.de'
};`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t('whoami')}</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section - Placeholder for now */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                Photo
              </div>
            </div>
            
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('description')}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Location</div>
                      <div className="text-gray-600 dark:text-gray-300">{t('location')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Education</div>
                      <div className="text-gray-600 dark:text-gray-300">{t('educationHDA')}</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💼</span>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Current Role</div>
                      <div className="text-gray-600 dark:text-gray-300">{t('currentJob')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Languages</div>
                      <div className="text-gray-600 dark:text-gray-300">{t('languages')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="skills-section py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t('skills')}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="skill-item bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-lg hover-lift group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="font-medium text-gray-800 dark:text-white">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="experience-section py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t('experience')}</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-1">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                  </div>
                  <span className="mt-4 lg:mt-0 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t('projects')}</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {project.contributions.map((contribution, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-600 dark:text-gray-300">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    {t('viewProject')} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t('education')}</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{edu.school}</p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.location}</p>
                  </div>
                  <span className="mt-4 md:mt-0 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Extracurricular */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Languages */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-2xl">🌐</span>
                    <span className="font-medium text-gray-800 dark:text-white">{lang}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Extracurricular</h3>
              <div className="space-y-3">
                {extracurricular.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-blue-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 gradient-text">{t('contact')}</h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">{t('email')}</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">{t('phone')}</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/guirauld-nounboussi-tayon-625687175/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <span className="text-xl">💼</span>
              </a>
              <a href="https://github.com/Guirauld" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-900 transition-colors">
                <span className="sr-only">GitHub</span>
                <span className="text-xl">🐙</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>© {new Date().getFullYear()} Guirauld Tayon. All rights reserved.</p>
      </footer>
    </div>
  );
}