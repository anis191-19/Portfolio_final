// import React from "react";
import { motion } from "framer-motion";

const ProjectsCTA = () => {
  return (
    <motion.div
      className="flex justify-center mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <motion.a
        href="#"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-slate-200 font-medium transition-colors group"
        whileHover={{ scale: 1.05, x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        View All Projects
        <motion.span 
          animate={{ x: [0, 5, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.div>
  );
};

export default ProjectsCTA;