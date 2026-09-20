// src/App.tsx
import Layout from "./components/Layout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Events from "./sections/Events";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Events />
      <Contact />
    </Layout>
  );
}