import profilePic from "../assets/dp.jpg"; // Adjust the path if needed

import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
      {/* Profile Image */}
      <img
        src={profilePic} // Replace with actual image
        alt="Your Name"
        className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-lg opacity-0 animate-fade-in delay-300"
      />

      {/* Text Content */}
      <div className="opacity-0 animate-fade-in delay-500">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Hi, I'm Rovin Ocampo
        </h1>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Web Developer | Graphic Designer | Photographer
        </p>

        {/* Social Icons */}
        <div className="mt-4 flex space-x-4 justify-center">
          <a href="https://www.linkedin.com/in/rovinocampo/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/_kuroshoots/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700 transition duration-300" />
          </a>
        </div>

        {/* Call to Action */}
        <a
          href="#contact"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in delay-700"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;

  
