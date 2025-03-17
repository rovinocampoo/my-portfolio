import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
