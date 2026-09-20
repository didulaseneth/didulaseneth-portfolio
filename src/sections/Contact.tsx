// src/sections/Contact.tsx
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-accent-to font-mono font-semibold">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-3 text-white">
            Let's build something <span className="text-gradient">extraordinary</span> together.
          </h2>
          <p className="mt-6 text-mist max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Whether you have an opportunity, a project idea, or just want to connect — my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Button
            href="mailto:didulaseneth@example.com"
            size="lg"
            variant="primary"
          >
            <Mail size={18} />
            Say Hello
          </Button>

          <Button
            href="https://github.com/didulaseneth"
            target="_blank"
            rel="noreferrer"
            size="lg"
            variant="secondary"
          >
            <GithubIcon size={18} />
            GitHub
          </Button>

          <Button
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            size="lg"
            variant="secondary"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-surface/30 border border-border max-w-xl mx-auto"
        >
          <p className="text-sm text-mist mb-3 font-mono">Quick Note</p>
          <p className="text-sm text-fog">
            Open for internships, freelance contracts, and collaborative open-source projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
