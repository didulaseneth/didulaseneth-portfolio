// src/sections/About.tsx
import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Sparkles, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end web & mobile apps with React, TypeScript, Java, and PHP/Laravel.",
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description: "Designing normalized MySQL schemas and clean REST APIs that scale with the product.",
  },
  {
    icon: Sparkles,
    title: "Interactive UX",
    description: "Prototyping in Figma, then shipping fluid, considered interfaces with Framer Motion.",
  },
  {
    icon: Terminal,
    title: "Founder's Discipline",
    description: "Security, code review, and clean architecture treated as part of the build, not an afterthought.",
  },
];

const ventures = [
  {
    name: "PerZeus Software Solutions",
    role: "Co-Founder",
    logo: "/assets/logos/PerZues%20logo.jpeg",
    description:
      "A software & design studio I co-founded — leading full-stack engineering and helping shape product and brand direction, from client architecture decisions down to the interfaces their customers use every day.",
  },
  {
    name: "LeoCart",
    role: "Founder",
    logo: "/assets/logos/LeoCart%20Reselling%20Company%20Logo.jpeg",
    description:
      "What started as a personal e-commerce web app became the foundation for LeoCart, a reselling business I founded — turning a coding project into a real, running venture.",
  },
  {
    name: "JIAT FOSS Community",
    role: "Founding Member",
    logo: "https://avatars.githubusercontent.com/u/326119128?s=200&v=4",
    description:
      "A student-led Free and Open Source Software community fostering collaboration, open-source contributions, knowledge sharing, and peer mentoring among developers.",
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
            Founder mindset, engineer's hands
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-base sm:text-lg">
            I'm Didula Seneth — Co-Founder of PerZeus, founder of LeoCart, and a
            full-stack engineer based in Colombo who's just as comfortable in a database
            schema as in a client meeting.
          </p>
        </motion.div>

        {/* Intro: profile picture + bio */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative mx-auto max-w-xs"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-from/30 via-accent-via/20 to-accent-to/30 blur-2xl" />
            <img
              src="/assets/profile-picture.jpg"
              alt="Didula Seneth"
              className="relative rounded-3xl border border-border object-cover w-full aspect-[4/5] shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-mist text-base sm:text-lg leading-relaxed">
              By day, I co-found and engineer <span className="text-fog font-medium">PerZeus</span>,
              taking client ideas from a whiteboard to production-ready software. Alongside
              that, I founded <span className="text-fog font-medium">LeoCart</span> — a
              reselling business built on top of an e-commerce platform I originally
              developed as a personal project.
            </p>
            <p className="text-mist text-base sm:text-lg leading-relaxed">
              That dual view — the person scoping what's needed, and the person who
              builds it — shapes how I work. I'd rather ship something smaller that's
              solid than something large that's fragile.
            </p>
            <a
              href="/assets/Didula_Seneth_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-via hover:text-accent-to transition-colors"
            >
              Download CV <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Ventures */}
        <div className="mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="block text-center text-xs uppercase tracking-widest text-accent-to font-mono font-semibold mb-8"
          >
            Ventures I've Built & Supported
          </motion.span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="p-6 sm:p-8 rounded-2xl bg-surface/50 border border-border hover:border-accent-via/40 hover:bg-surface/80 transition-all flex flex-col gap-5"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={v.logo}
                    alt={`${v.name} logo`}
                    className="w-14 h-14 rounded-xl object-cover border border-border shrink-0 bg-surface"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-fog">{v.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent-via/10 text-accent-via border border-accent-via/20">
                      {v.role}
                    </span>
                  </div>
                </div>
                <p className="text-mist text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-5 sm:p-8 rounded-2xl bg-surface/50 border border-border hover:border-accent-via/40 hover:bg-surface/80 transition-all group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent-via/10 border border-accent-via/20 flex items-center justify-center text-accent-via group-hover:scale-110 group-hover:bg-accent-via/20 transition-all mb-4 sm:mb-5">
                <h.icon size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-fog group-hover:text-white transition-colors mb-2">
                {h.title}
              </h3>
              <p className="text-mist text-sm leading-relaxed">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}