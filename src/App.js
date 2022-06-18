import "./App.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/footer" element={} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Nav />
      <Hero />
      <Skills />
      <About />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;
