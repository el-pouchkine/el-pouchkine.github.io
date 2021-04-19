import React from "react";
import BottomButtons from "../components/BottomButtons";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <main>
      <motion.div
        className="skills"
        initial={{ opacity: 1, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        exit={{ opacity: 1, scaleX: 0 }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <BottomButtons left={"/experience"} right={"/contact"} />
    </main>
  );
};

export default Skills;
