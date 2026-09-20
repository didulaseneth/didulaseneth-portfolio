import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-lg text-white/70 leading-relaxed"
        >
          <p>
            I'm a passionate Software Engineering student who loves building
            beautiful, interactive digital experiences. I specialize in modern
            web technologies and enjoy bringing ideas to life with code and 3D.
          </p>
          <p>
            Currently focused on React, Three.js, and creating immersive user
            interfaces. Always learning, always building.
          </p>
        </motion.div>
      </div>
    </section>
  );
}