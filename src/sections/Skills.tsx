// src/sections/Skills.tsx
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend & Mobile",
    skills: ["React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Three.js / R3F", "Framer Motion", "HTML5 / CSS3"],
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Java", "PHP", "Express", "RESTful APIs", "Spring Boot (Basics)", "C / C++"],
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Git / GitHub", "Docker", "Postman", "Figma", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-accent-to font-mono font-semibold">
            Tech Stack
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3 text-white">
            Skills & Capabilities
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-base sm:text-lg">
            Technologies and tools I work with to bring products to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, duration: 0.6 }}
              className="p-8 rounded-2xl bg-surface/40 border border-border flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-fog mb-6 pb-3 border-b border-border">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg bg-surface border border-border text-sm text-mist hover:text-white hover:border-accent-via/50 hover:bg-accent-via/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
