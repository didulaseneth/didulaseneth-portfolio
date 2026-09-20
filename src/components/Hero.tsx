import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Status badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to new opportunities
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
          Building fast, thoughtful software
          <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            from database to pixel.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-slate-400 sm:text-lg">
          I'm Jane Doe, a full-stack software engineer and UI/UX designer.
          I design and ship products end-to-end — clean interfaces backed
          by reliable, well-tested systems.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400 sm:w-auto"
          >
            Get in touch
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>

          
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 sm:w-auto"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}