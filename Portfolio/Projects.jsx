// Projects.jsx
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/* ---------------------------
   Motion variants & constants
   --------------------------- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const buttonVariants = {
  inactive: { scale: 1, transition: { type: "spring", stiffness: 300 } },
  active: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  hover: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
};

const projects = [
  {
    id: 1,
    type: "fullstack",
    title: "PhiMart — eCommerce API",
    imgs: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
      "https://www.debutinfotech.com/_next/image?url=https%3A%2F%2Fblogs.debutinfotech.com%2Fwp-content%2Fuploads%2F2025%2F01%2FWeb-Development.jpg&w=1920&q=85",
    ],
    desc: "Django REST API for products, orders and JWT authentication — designed for scale and testability.",
    tech: "Django • DRF • Postgres",
    actions: ["Live", "Code"],
    links: ["https://www.amazon.com/", "https://about.gitlab.com/"],
  },
  {
    id: 2,
    type: "web",
    title: "Portfolio Website",
    imgs: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&q=80&w=800",
    ],
    desc: "This site — responsive, accessible and built to be extendable into a React/Next starter.",
    tech: "React • Tailwind",
    actions: ["Live", "Code"],
    links: ["https://www.amazon.com/", "https://about.gitlab.com/"],
  },
  {
    id: 3,
    type: "open",
    title: "Open-source Toolkit",
    imgs: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&q=80&w=800",
    ],
    desc: "Reusable components and utilities to accelerate frontend development.",
    tech: "JS • NPM",
    actions: ["Live", "Code"],
    links: ["https://www.amazon.com/", "https://about.gitlab.com/"],
  },
];

const filterLabels = { all: "All", web: "Web", fullstack: "Full-stack", open: "Open-source" };

/* --------------------------------
   Memoized ProjectCard (per-card)
   -------------------------------- */
const ProjectCard = React.memo(function ProjectCard({ project, index, getCardVariant }) {
  // local state for image index => isolating updates to card only
  const [imgIndex, setImgIndex] = useState(0);
  const imgsLength = project.imgs?.length ?? 0;

  const nextImage = useCallback(() => {
    if (!imgsLength) return;
    setImgIndex((i) => (i + 1) % imgsLength);
  }, [imgsLength]);

  const prevImage = useCallback(() => {
    if (!imgsLength) return;
    setImgIndex((i) => (i - 1 + imgsLength) % imgsLength);
  }, [imgsLength]);

  // memoize the variant object for stable references (optional but tidy)
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
      <div className="relative overflow-hidden h-44">
        <AnimatePresence mode="wait">
          <motion.img
            key={imgIndex}
            src={project.imgs?.[imgIndex] ?? project.img}
            alt={`${project.title} — screenshot ${imgIndex + 1}`}
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
              aria-label={`Previous image for ${project.title}`}
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/50 p-1 rounded-full hover:bg-slate-900/80 text-white"
            >
              <FaChevronLeft className="text-[#06b6d4]" />
            </button>
            <button
              type="button"
              aria-label={`Next image for ${project.title}`}
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/50 p-1 rounded-full hover:bg-slate-900/80 text-white"
            >
              <FaChevronRight className="text-[#06b6d4]" />
            </button>
          </>
        )}

        <div className="absolute left-3 top-3 inline-flex items-center gap-2 bg-slate-900/70 px-2 py-1 rounded-md text-xs capitalize">
          {project.type}
        </div>
      </div>

      <div className="h-full p-5 bg-slate-900">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-400">{project.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-slate-500">{project.tech}</div>
          <div className="flex items-center gap-4">
            {project.actions.map((action) => {
              const href = action === "Live" ? project.links[0] : project.links[1];
              return (
                <motion.a
                  key={`${project.id}-${action}`}
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
        </div>
      </div>
    </motion.article>
  );
});

/* -------------------------
   Main Projects Component
   ------------------------- */
const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  // debounce resize detection
  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMobile(window.innerWidth < 640), 100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredProjects = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.type === filter)),
    [filter]
  );

  // card variants factory (depends on isMobile)
  const getCardVariant = useCallback(
    (index) => {
      if (!isMobile) {
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
          exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
        };
      } else {
        const xOffset = index % 2 === 0 ? 20 : -20;
        return {
          hidden: { opacity: 0, x: xOffset },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
          exit: { opacity: 0, x: xOffset, transition: { duration: 0.3, ease: "easeIn" } },
        };
      }
    },
    [isMobile]
  );

  // avoid recreating click handlers inline for filter buttons
  const handleSetFilter = useCallback((type) => () => setFilter(type), []);

  return (
    <motion.section
      id="projects"
      className="max-w-[var(--container)] mx-auto px-6 md:px-8 lg:px-12 py-14 border-t border-slate-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
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

        <nav className="flex items-center gap-2 flex-wrap text-sm" aria-label="project filters">
          {Object.keys(filterLabels).map((type) => (
            <motion.button
              key={type}
              onClick={handleSetFilter(type)}
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
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              getCardVariant={getCardVariant}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA */}
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
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;


