import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        {/* Skills, Projects, Contact sections will go here */}
      </main>
    </div>
  );
}

export default App;