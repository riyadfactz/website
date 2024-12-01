interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    name: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"]
  },
  {
    name: "Tools",
    skills: ["Git", "VS Code", "Jira", "Figma", "Postman"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-emerald-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-emerald-800/30 p-6 rounded-3xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-emerald-900/50 px-4 py-1.5 rounded-2xl text-sm text-emerald-100
                      border border-emerald-700/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}