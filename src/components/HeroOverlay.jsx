import { motion } from "framer-motion";

export default function HeroOverlay() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center pointer-events-none select-none">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter text-center"
      >
        Didula Seneth
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 text-lg md:text-2xl text-white/70 font-light tracking-wide text-center"
      >
        Software Engineering Student
      </motion.p>
    </section>
  );
}