import { motion } from "framer-motion";

export default function HeroOverlay() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center pointer-events-none">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center"
      >
        Didula Seneth
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="mt-4 text-lg md:text-2xl text-gray-300 font-light text-center"
      >
        Software Engineering Student
      </motion.p>
    </section>
  );
}