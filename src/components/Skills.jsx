import { FaJava, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiGooglecloud, SiSalesforce } from "react-icons/si";

const Skills = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-semibold mb-4">Skills & Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <FaJava className="text-4xl text-orange-500" />
          <p>Java</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-4xl text-green-500" />
          <p>Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <FaDatabase className="text-4xl text-blue-500" />
          <p>SQL & Databases</p>
        </div>
        <div className="flex flex-col items-center">
          <SiGooglecloud className="text-4xl text-yellow-500" />
          <p>Google Cloud</p>
        </div>
        <div className="flex flex-col items-center">
          <SiSalesforce className="text-4xl text-blue-500" />
          <p>Salesforce</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
