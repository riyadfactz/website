interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["TypeScript", "Redux", "Firebase"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-emerald-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block bg-emerald-900/50 rounded-3xl overflow-hidden shadow-lg
                hover:shadow-xl transition-shadow backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105
                    transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-emerald-100/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-emerald-800/40 px-4 py-1.5 rounded-2xl text-sm text-emerald-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}