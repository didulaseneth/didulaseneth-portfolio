import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/yourusername", icon: Twitter },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
          href="#top"
          className="text-lg font-semibold tracking-tight text-slate-100"
        >
          Jane Doe
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-slate-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop social icons */}
        <div className="hidden items-center gap-4 md:flex">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-slate-400 transition-colors hover:text-indigo-400"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="text-slate-200 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-6 backdrop-blur-lg">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base text-slate-300 hover:text-slate-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-5 border-t border-white/10 pt-6">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-slate-400 hover:text-indigo-400"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}