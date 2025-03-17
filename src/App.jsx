import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      {/* Navbar */}
      <nav className="p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Kharl Rovin Ocampo</h1>
        <button 
          className="p-2 bg-gray-700 text-white rounded" 
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-10">
        <motion.h2 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Kharl Rovin Ocampo
        </motion.h2>
        <p className="text-lg">Web Developer | Graphic Designer | Photographer</p>
      </section>

      {/* About Section */}
      <section className="p-10">
        <motion.h2 
          className="text-3xl font-bold text-center mb-6"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <p className="text-center max-w-2xl mx-auto">
          Detail-oriented and highly organized Tech Support with a strong background in administrative support and customer service.
        </p>
      </section>

      {/* Contact Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-2xl"><FaGithub /></a>
          <a href="#" className="text-2xl"><FaLinkedin /></a>
          <a href="#" className="text-2xl"><FaEnvelope /></a>
        </div>
      </section>
    </div>
  );
}
