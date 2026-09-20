import Scene from "./components/Scene";
import HeroOverlay from "./components/HeroOverlay";

export default function App() {
  return (
    <div className="relative bg-black min-h-screen">
      <Scene />
      <HeroOverlay />

      {/* Your About / Projects sections go below — scroll-trigger hooks come in the next step */}
      <section id="about" className="h-screen flex items-center justify-center text-white">
        <h2 className="text-3xl">About Section (placeholder)</h2>
      </section>
    </div>
  );
}