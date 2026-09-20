// src/sections/Events.tsx
import { motion } from "framer-motion";
import { Flame, Users, PartyPopper, Image as ImageIcon } from "lucide-react";

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
            Events &amp; Activities
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3 text-white">
            Moments outside the code
          </h2>
          <p className="mt-4 text-mist max-w-2xl mx-auto text-base sm:text-lg">
            A few memories from meetups, trips, and celebrations along the way.
          </p>
        </motion.div>

        {/* Mobile: single column. md+: 3-col × 2-row explicit grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 sm:gap-6">
          {/* Large tile — spans 2 cols & 2 rows on md+ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden border border-border group min-h-[260px] sm:min-h-[320px] md:min-h-[480px]"
          >
            <video
              src="/assets/video/campfire-night.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 sm:p-6">
              <div className="inline-flex items-center gap-2 mb-2 text-xs px-3 py-1 rounded-full bg-accent-via/20 text-accent-via border border-accent-via/30 backdrop-blur-sm">
                <Flame size={14} /> Camping Trip
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
                Campfire Night
              </h3>
            </div>
          </motion.div>

          {/* Smaller tile: campus outing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden border border-border group min-h-[200px] sm:min-h-[220px]"
          >
            <video
              src="/assets/video/campus-outing.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-5">
              <div className="inline-flex items-center gap-2 mb-2 text-xs px-2.5 py-1 rounded-full bg-accent-to/20 text-accent-to border border-accent-to/30 backdrop-blur-sm">
                <Users size={13} /> Camping Trip
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                Campus Outing
              </h3>
            </div>
          </motion.div>

          {/* Placeholder tile: New Year 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden border border-dashed border-border bg-surface/40 min-h-[200px] sm:min-h-[220px] flex flex-col items-center justify-center text-center p-6"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-via/10 border border-accent-via/20 flex items-center justify-center text-accent-via mb-4">
              <PartyPopper size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold text-fog mb-1">
              Happy New Year 2026
            </h3>
            <p className="text-mist text-sm flex items-center gap-1.5">
              <ImageIcon size={14} /> Photos coming soon
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}