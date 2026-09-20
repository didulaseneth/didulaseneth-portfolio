import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A modern web application with interactive 3D elements.",
    tech: ["React", "Three.js", "Tailwind"],
  },
  {
    title: "Project Two",
    description: "Full-stack application focused on performance and UX.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project Three",
    description: "Creative portfolio experiment with advanced animations.",
    tech: ["R3F", "GSAP", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 
                         hover:border-cyan-400/40 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/60 mb-5 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}