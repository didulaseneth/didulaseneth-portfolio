import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "Three.js", "R3F",
  "Tailwind CSS", "GSAP", "Framer Motion",
  "Node.js", "Git", "Figma"
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 
                         text-white/80 hover:bg-white/10 hover:border-cyan-400/50 
                         transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}