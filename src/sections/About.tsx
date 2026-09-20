// src/sections/About.tsx
import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building scalable web & mobile apps with modern React, TypeScript, Java, and Node.",
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description: "Designing robust databases and efficient REST/GraphQL APIs from the ground up.",
  },
  {
    icon: Sparkles,
    title: "Interactive UX & 3D",
    description: "Crafting fluid animations and engaging visual experiences with Three.js and Framer Motion.",
  },
  {
    icon: Terminal,
    title: "Software Engineering",
    description: "Applying clean architecture, SOLID principles, and CI/CD best practices.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-accent-via font-mono font-semibold">
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3 text-white">
            Engineering with passion & precision
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-base sm:text-lg">
            I'm Didula Seneth, a Software Engineering student and builder based in Colombo. 
            I love bridging the gap between elegant engineering and captivating digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-surface/50 border border-border hover:border-accent-via/40 hover:bg-surface/80 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-via/10 border border-accent-via/20 flex items-center justify-center text-accent-via group-hover:scale-110 group-hover:bg-accent-via/20 transition-all mb-5">
                <h.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-fog group-hover:text-white transition-colors mb-2">
                {h.title}
              </h3>
              <p className="text-mist text-sm leading-relaxed">
                {h.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
