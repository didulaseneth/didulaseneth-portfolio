// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-mist text-center md:text-left">
        <p>© {new Date().getFullYear()} Didula Seneth — built with React &amp; Tailwind CSS</p>
        <p>Colombo, Sri Lanka</p>
      </div>
    </footer>
  );
}