// import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const ProjectsGrid = ({ projects, getCardVariant, filter }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={filter}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            getCardVariant={getCardVariant}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectsGrid;