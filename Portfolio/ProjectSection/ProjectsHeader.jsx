// import React from "react";
import { motion } from "framer-motion";
import ProjectsFilter from "./ProjectsFilter";

const ProjectsHeader = ({ filter, onFilterChange }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 sm:gap-0">
      <motion.h2
        className="text-2xl font-semibold"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Selected Projects
      </motion.h2>

      <ProjectsFilter filter={filter} onFilterChange={onFilterChange} />
    </div>
  );
};

export default ProjectsHeader;