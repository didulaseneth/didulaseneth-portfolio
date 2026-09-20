import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/60 text-lg mb-12"
        >
          I'm currently open to new opportunities and collaborations.
        </motion.p>

        <motion.a
          href="mailto:your.email@example.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-10 py-4 rounded-full bg-cyan-500 text-black 
                     font-medium hover:bg-cyan-400 transition-colors"
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}