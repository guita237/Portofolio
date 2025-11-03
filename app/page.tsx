'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeProvider';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const heroRef = useRef(null);

  useEffect(() => {
    // Hero animations
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

    // Section animations
    gsap.utils.toArray('.animate-section').forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      );
    });

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
      title: t('experience1.title'),
      company: t('experience1.company'),
      period: t('experience1.period'),
      location: t('experience1.location'),
      description: [
        t('experience1.point1'),
        t('experience1.point2'),
        t('experience1.point3'),
        t('experience1.point4'),
        t('experience1.point5')
      ]
    },
    {
      title: t('experience2.title'),
      company: t('experience2.company'),
      period: t('experience2.period'),
      location: t('experience2.location'),
      description: [
        t('experience2.point1'),
        t('experience2.point2'),
        t('experience2.point3'),
        t('experience2.point4'),
        t('experience2.point5')
      ]
    }
  ];

  const projects = [
    {
      title: t('project1.title'),
      description: t('project1.description'),
      technologies: ["Flutter", "Express", "MySQL", "Automation Testing", "PlayStore Deployment"],
      link: "https://we3ve.de/",
      contributions: [
        t('project1.contribution1'),
        t('project1.contribution2')
      ]
    },
    {
      title: t('project2.title'),
      description: t('project2.description'),
      technologies: ["React", "Vite", "TypeScript", "Tailwind", "Chakra UI", "Express", "Socket.IO", "PostgreSQL"],
      link: "#",
      contributions: [
        t('project2.contribution1'),
        t('project2.contribution2')
      ]
    }
  ];

  const education = [
    {
      degree: t('education1.degree'),
      school: t('education1.school'),
      period: t('education1.period'),
      location: "Darmstadt"
    },
    {
      degree: t('education2.degree'),
      school: t('education2.school'),
      period: t('education2.period'),
      location: "Ukraine"
    }
  ];

  const languages = ["French", "German", "English", "Ukrainian"];
  const extracurricular = [
    t('extracurricular.football'),
    t('extracurricular.music'),
    t('extracurricular.videogame'),
    t('extracurricular.prometheus'),
    t('extracurricular.office'),
    t('extracurricular.courses')
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold gradient-text">GUIRAULD TAYON</div>
          
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Language Switcher */}
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('de')}
                className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors ${
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
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
              <span className="text-gray-600 dark:text-gray-300">☰</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                <span className="gradient-text block">{t('hello')}</span>
                <span className="text-gray-800 dark:text-white block mt-2">I&apos;m Guirauld Tayon</span>
              </h1>
              <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                {t('professional')}
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base text-center"
                >
                  {t('contact')}
                </a>
                <a 
                  href="/Lebenslauf.pdf"
                  download
                  className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium text-sm sm:text-base text-center"
                >
                  {t('downloadCV')}
                </a>
              </div>
            </div>

            {/* Code Block */}
            <div className="code-block text-white p-6 sm:p-8 rounded-2xl mt-8 lg:mt-0">
              <div className="flex space-x-2 mb-4 sm:mb-6">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
              </div>
              <pre className="text-xs sm:text-sm md:text-base overflow-x-auto">
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
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800 animate-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">{t('whoami')}</h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Photo Section */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                Photo
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {t('description')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Location</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{t('location')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Education</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{t('educationHDA')}</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💼</span>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Current Role</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{t('currentJob')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Languages</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{t('languages')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 animate-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">{t('skills')}</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="skill-item bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center shadow-lg hover-lift group"
              >
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="font-medium text-gray-800 dark:text-white text-xs sm:text-sm">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800 animate-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">{t('experience')}</h2>
          
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover-lift">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 sm:mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-1">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">{exp.location}</p>
                  </div>
                  <span className="mt-4 lg:mt-0 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium text-sm sm:text-base">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2 sm:space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 animate-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">{t('projects')}</h2>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover-lift">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm sm:text-base">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {project.contributions.map((contribution, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
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
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base"
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
      <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800 animate-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">{t('education')}</h2>
          
          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover-lift">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1 text-sm sm:text-base">{edu.school}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">{edu.location}</p>
                  </div>
                  <span className="mt-4 md:mt-0 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium text-sm sm:text-base">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Extracurricular */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Languages */}
            <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 gradient-text">Languages</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-xl sm:text-2xl">🌐</span>
                    <span className="font-medium text-gray-800 dark:text-white text-sm sm:text-base">{lang}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular */}
            <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 gradient-text">Extracurricular</h3>
              <div className="space-y-3">
                {extracurricular.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-blue-500">•</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800 animate-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 gradient-text">{t('contactSection')}</h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white text-sm sm:text-base">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{t('email')}</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white text-sm sm:text-base">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{t('phone')}</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 sm:space-x-8">
              <a href="https://www.linkedin.com/in/guirauld-nounboussi-tayon-625687175/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-sm sm:text-base">LinkedIn</span>
              </a>
              <a href="https://github.com/Guirauld" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm sm:text-base">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 text-sm sm:text-base">
        <p>© {new Date().getFullYear()} Guirauld Tayon. All rights reserved.</p>
      </footer>
    </div>
  );
}