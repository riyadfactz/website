interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored junior developers and implemented code review processes",
      "Reduced server costs by 40% through optimization initiatives"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2018 - 2020",
    description: [
      "Developed and maintained multiple client projects using React and Node.js",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with design team to improve UX across platforms"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Work Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-emerald-900/20 p-8 rounded-3xl shadow-lg backdrop-blur-sm
                border border-emerald-500/10 hover:border-emerald-500/20 transition-colors
                group relative overflow-hidden glow-effect"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-emerald-300 mb-2">{exp.title}</h3>
                <p className="text-emerald-200/80 font-medium mb-1">{exp.company}</p>
                <p className="text-emerald-100/60 mb-4">{exp.period}</p>
                <ul className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start space-x-2 text-emerald-100/70">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}