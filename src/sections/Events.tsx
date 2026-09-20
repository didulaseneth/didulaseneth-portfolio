// src/sections/Events.tsx
import { motion } from "framer-motion";
import { Award, Calendar, Users } from "lucide-react";

const events = [
  {
    role: "Hackathon Competitor & Builder",
    event: "National University Hackathon",
    period: "2024",
    description: "Collaborated in an agile team of 4 to design, build, and pitch a functioning IoT & Mobile prototype within 24 hours.",
    badge: "Hackathon",
    icon: Award,
  },
  {
    role: "Tech Workshop Speaker / Organizer",
    event: "Student Developer Community",
    period: "2023 - Present",
    description: "Mentoring junior students and organizing hands-on coding sessions on React, Git version control, and web fundamentals.",
    badge: "Community",
    icon: Users,
  },
  {
    role: "Competitive Programming & Problem Solving",
    event: "Inter-University Coding Challenges",
    period: "2023 - 2024",
    description: "Actively training in Data Structures & Algorithms, participating in algorithmic contests on LeetCode and HackerRank.",
    badge: "Coding",
    icon: Calendar,
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-accent-via font-mono font-semibold">
            Experience & Activities
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3 text-white">
            Events & Milestones
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-base sm:text-lg">
            Hackathons, technical leadership, and community involvement.
          </p>
        </motion.div>

        <div className="space-y-6">
          {events.map((e, index) => (
            <motion.div
              key={e.event}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-surface/40 border border-border hover:border-accent-via/40 hover:bg-surface/70 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-via/10 border border-accent-via/20 text-accent-via shrink-0">
                  <e.icon size={22} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-fog">
                      {e.event}
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent-via/10 text-accent-via border border-accent-via/20">
                      {e.badge}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-accent-to mb-2">
                    {e.role}
                  </p>
                  <p className="text-mist text-sm max-w-3xl leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="text-xs font-mono text-mist border border-border px-3 py-1 rounded-full bg-surface">
                  {e.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
