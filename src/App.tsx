import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import CodeSnippet from "./components/CodeSnippet";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubCerts from "./components/GithubCerts";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <Stats />

        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <About />
          <CodeSnippet />
        </section>

        <section id="skills-experience" className="grid md:grid-cols-2 gap-6 mb-12">
          <Experience />
          <Skills />
        </section>

        <div className="mb-12">
          <Projects />
        </div>

        <GithubCerts />

        <Testimonials />
        <Contact />
      </div>

      <Footer />
    </>
  );
}
