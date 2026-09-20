// src/components/ui/GradientOrbs.tsx
export default function GradientOrbs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-10%] left-[10%] w-72 h-72 bg-accent-from/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-[20%] right-[5%] w-72 h-72 bg-accent-via/30 rounded-full blur-3xl animate-blob [animation-delay:2s]" />
      <div className="absolute bottom-[-10%] left-[30%] w-72 h-72 bg-accent-to/20 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
    </div>
  );
}