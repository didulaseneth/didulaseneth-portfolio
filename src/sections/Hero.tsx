// src/sections/Hero.tsx
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import GradientOrbs from "../ui/GradientOrbs";

const stack = ["React Native", "TypeScript", "Java", "PHP", "MySQL", "UI/UX", "Three.js", "Tailwind CSS"];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-24 pb-16"
    >
      <GradientOrbs />

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-mist mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for work
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-semibold text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-white"
        >
          Hello, I'm{" "}
          <span className="text-gradient">Didula Seneth</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-lg sm:text-xl text-mist max-w-xl mx-auto"
        >
          A Full-Stack Engineer &amp; Co-Founder who ships real,
          working software — from database schema to pixel-perfect interface.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-from via-accent-via to-accent-to px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-via/20 transition-transform hover:scale-105"
          >
            View Projects
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fog hover:border-accent-via hover:text-accent-via transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-14 relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-3 w-max animate-marquee">
            {[...stack, ...stack].map((s, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs text-mist"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-mist hover:text-fog transition-colors"
      >
        <span className="text-xs">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}