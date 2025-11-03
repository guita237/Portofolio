import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">Guirauld Tayon</div>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Guirauld Tayon</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            IT Student & Full-Stack Developer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Specializing in AI-driven solutions, Cloud Computing, and modern web technologies. 
            Currently pursuing Bachelor&apos;s in Computer Science at Hochschule Darmstadt.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="https://www.linkedin.com/in/guirauld-nounboussi-tayon-625687175/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                IT Student at Hochschule Darmstadt with experience in full-stack development, 
                AI-driven automation, and cloud technologies. Fluent in French, German, English, and Ukrainian.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-medium w-32">Location:</span>
                  <span className="text-gray-600 dark:text-gray-300">Dieburg, Hessen</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-32">Education:</span>
                  <span className="text-gray-600 dark:text-gray-300">Hochschule Darmstadt (2020-2025)</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-32">Languages:</span>
                  <span className="text-gray-600 dark:text-gray-300">French, German, English, Ukrainian</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center card-hover">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Study</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center card-hover">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center card-hover">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">4</div>
                <div className="text-gray-600 dark:text-gray-300">Languages</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg text-center card-hover">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">2</div>
                <div className="text-gray-600 dark:text-gray-300">Years Work Exp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Experience</h2>
          <div className="space-y-8">
            {/* Current Job */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg card-hover">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Studentische Aushilfe (m/w/d) IT Operations</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">StandardLife</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Jan 2023 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>First and second level support in client environment</li>
                <li>Error analysis and rectification of hardware and software problems</li>
                <li>Installation and configuration of computer systems with Windows 7/10</li>
                <li>Creation of reports and statistics with MS Excel and MS Access</li>
                <li>Processing user enquiries with ticket system</li>
              </ul>
            </div>

            {/* Bachelor Thesis */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg card-hover">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Bachelor Thesis – AI-driven Automation of Software Testing</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Hochschule Darmstadt</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Feb 2025 – Mai 2025</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Developed prototype for automatic test case generation using GPT-4o and semantic similarity</li>
                <li>Combined RAG, OpenAI GPT-4o API, and SentenceTransformer models</li>
                <li>Implemented backend with Python (Flask) and PostgreSQL</li>
                <li>Designed modern UI using React, Vite, and TypeScript</li>
                <li>Deployment with Docker and Azure Cloud; CI/CD with GitLab and Terraform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* We3ve Project */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-3">We3ve - Electromobility Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Extension of mobile app for car sharing and booking with additional features and refactoring.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Flutter</span>
                <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Express</span>
                <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">MySQL</span>
                <span className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Automation Testing</span>
              </div>
              <a href="https://we3ve.de/" className="text-blue-600 dark:text-blue-400 hover:underline">View Project →</a>
            </div>

            {/* Never-have-I-Ever Project */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-bold mb-3">Never-have-I-Ever Website</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Multiplayer game website with real-time communication, user registration, and room management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Socket.IO</span>
                <span className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h2>
          
          {/* Programming Languages */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Programming Languages & Frameworks</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'PHP', 'Flutter', 'React', 'Express.js', 'Flask'].map((skill) => (
                <span key={skill} className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md card-hover border border-gray-200 dark:border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases & Cloud */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Databases & Cloud</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['PostgreSQL', 'MySQL', 'MongoDB', 'Azure Cloud', 'Docker', 'RESTful API', 'GitLab CI/CD'].map((skill) => (
                <span key={skill} className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md card-hover border border-gray-200 dark:border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Testing */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Tools & Testing</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Git', 'OpenCV', 'LLM', 'RAG', 'Prompt Engineering', 'JEST', 'Maestro Test', 'Android Studio', 'VS Code'].map((skill) => (
                <span key={skill} className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md card-hover border border-gray-200 dark:border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 gradient-text">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">guirauld.tayon@stud.h-da.de</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">017629053181</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Dieburg, Hessen</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/guirauld-nounboussi-tayon-625687175/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/Guirauld" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>© {new Date().getFullYear()} Guirauld Tayon. All rights reserved.</p>
      </footer>
    </div>
  );
}