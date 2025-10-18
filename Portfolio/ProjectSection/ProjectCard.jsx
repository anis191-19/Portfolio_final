import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel = ({ images, title, type }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const imgsLength = images?.length ?? 0;

  const nextImage = useCallback(() => {
    if (!imgsLength) return;
    setImgIndex((i) => (i + 1) % imgsLength);
  }, [imgsLength]);

  const prevImage = useCallback(() => {
    if (!imgsLength) return;
    setImgIndex((i) => (i - 1 + imgsLength) % imgsLength);
  }, [imgsLength]);

  return (
    <div className="relative overflow-hidden h-44">
      <AnimatePresence mode="wait">
        <motion.img
          key={imgIndex}
          src={images?.[imgIndex]}
          alt={`${title} — screenshot ${imgIndex + 1}`}
          className="w-full h-44 object-cover absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.45 }}
          loading="lazy"
          decoding="async"
        />
      </AnimatePresence>

      {imgsLength > 1 && (
        <>
          <button
            type="button"
            aria-label={`Previous image for ${title}`}
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/50 p-1 rounded-full hover:bg-slate-900/80 text-white"
          >
            <FaChevronLeft className="text-[#06b6d4]" />
          </button>
          <button
            type="button"
            aria-label={`Next image for ${title}`}
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/50 p-1 rounded-full hover:bg-slate-900/80 text-white"
          >
            <FaChevronRight className="text-[#06b6d4]" />
          </button>
        </>
      )}

      <div className="absolute left-3 top-3 inline-flex items-center gap-2 bg-slate-900/70 px-2 py-1 rounded-md text-xs capitalize">
        {type}
      </div>
    </div>
  );
};

const ProjectActions = ({ actions, links, title }) => {
  return (
    <div className="flex items-center gap-4">
      {actions.map((action) => {
        const href = action === "Live" ? links[0] : links[1];
        return (
          <motion.a
            key={`${title}-${action}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm flex items-center ${
              action === "Live" ? "text-[#06b6d4] hover:underline" : "hover:text-[#06b6d4] transition-colors"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {action === "Live" ? (
              <>
                <FaExternalLinkAlt className="mr-1 inline" /> {action}
              </>
            ) : (
              <>
                <FaGithub className="mr-1 inline" /> {action}
              </>
            )}
          </motion.a>
        );
      })}
    </div>
  );
};

const ProjectCard = React.memo(function ProjectCard({ project, index, getCardVariant }) {
  const cardVariant = useMemo(() => getCardVariant(index), [getCardVariant, index]);

  return (
    <motion.article
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="project-card group rounded-2xl overflow-hidden border border-slate-700 shadow-sm"
    >
      <ImageCarousel images={project.imgs} title={project.title} type={project.type}/>
      
      <div className="h-full p-5 bg-slate-900">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-400">{project.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-slate-500">{project.tech}</div>
          <ProjectActions actions={project.actions} links={project.links} title={project.title} />
        </div>
      </div>
    </motion.article>
  );
});

export default ProjectCard;