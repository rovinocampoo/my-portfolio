import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-10"
    >
      <h1 className="text-4xl font-bold">Kharl Rovin Ocampo</h1>
      <p>Software Engineer | API Specialist | Cloud Enthusiast | Photography | Coffee Shop Owner</p>
    </motion.section>
  );
};

export default Profile;
