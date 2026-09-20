import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
          Didula Seneth
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-white/60 font-light tracking-wide">
          Software Engineering Student
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}