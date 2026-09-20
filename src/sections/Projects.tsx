// src/sections/Projects.tsx
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../ui/Icons";

const projects = [
  {
    title: "Interactive 3D Web Portfolio",
    description: "Personal portfolio featuring WebGL 3D rendering with Three.js / React Three Fiber and fluid animations.",
    tech: ["React", "Three.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    live: "https://github.com/didulaseneth",
    github: "https://github.com/didulaseneth",
  },
  {
    title: "Mobile App & Ecosystem",
    description: "Cross-platform mobile solution with sleek UI, offline-first sync, and secure backend integration.",
    tech: ["React Native", "TypeScript", "Node.js", "MySQL"],
    live: "https://github.com/didulaseneth",
    github: "https://github.com/didulaseneth",
  },
  {
    title: "Enterprise Management System",
    description: "Full-stack administrative platform with role-based access control, analytics dashboards, and automated reporting.",
    tech: ["Java", "Spring", "MySQL", "React", "REST API"],
    live: "https://github.com/didulaseneth",
    github: "https://github.com/didulaseneth",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-accent-from font-mono font-semibold">
            Featured Work
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3 text-white">
            Recent Projects
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-base sm:text-lg">
            A selection of projects exploring web development, mobile applications, and software systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group p-8 rounded-2xl bg-surface/50 border border-border hover:border-accent-via/50 hover:bg-surface/80 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-accent-via">
                    0{index + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border border-border text-mist hover:text-white hover:border-fog transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border border-border text-mist hover:text-white hover:border-accent-via transition-colors"
                      aria-label="Live Project"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-fog group-hover:text-white transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-mist text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface text-mist border border-border"
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
