// import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  inactive: { scale: 1, transition: { type: "spring", stiffness: 300 } },
  active: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  hover: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
};

const filterLabels = { 
  all: "All", 
  web: "Web", 
  fullstack: "Full-stack", 
  open: "Open-source" 
};

const ProjectsFilter = ({ filter, onFilterChange }) => {
  return (
    <nav className="flex items-center gap-2 flex-wrap text-sm" aria-label="project filters">
      {Object.keys(filterLabels).map((type) => (
        <motion.button
          key={type}
          onClick={() => onFilterChange(type)}
          variants={buttonVariants}
          initial="inactive"
          animate={filter === type ? "active" : "inactive"}
          whileHover="hover"
          className={`px-4 py-2 rounded-lg border border-slate-700 font-medium transition-colors ${
            filter === type ? "text-white shadow-lg bg-primary" : "text-slate-200 hover:bg-slate-800/50"
          }`}
        >
          {filterLabels[type]}
        </motion.button>
      ))}
    </nav>
  );
};

export default ProjectsFilter;