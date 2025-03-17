import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center min-h-screen px-8 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white opacity-0 animate-fade-in">
        Contact Me
      </h2>

      <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
        Let's connect! Feel free to reach out via email or social media.
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

      <a
        href="mailto:your-email@example.com"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in delay-700"
      >
        Email Me
      </a>
    </section>
  );
};

export default Contact;
