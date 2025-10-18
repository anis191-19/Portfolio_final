import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsCTA from "./ProjectsCTA";

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
      "https://bairesdev.mo.cloudinary.net/blog/2022/01/web-development-tools-3.jpg?tx=w_1920,q_auto",
      "https://s3-cdn.cmlabs.co/page/2023/09/15/web-developer-1-1694737014.webp",
    ],
    desc: "Reusable components and utilities to accelerate frontend development.",
    tech: "JS • NPM",
    actions: ["Live", "Code"],
    links: ["https://www.amazon.com/", "https://about.gitlab.com/"],
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

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

  const handleFilterChange = useCallback((type) => setFilter(type), []);

  return (
    <motion.section
      id="projects"
      className="max-w-[var(--container)] mx-auto px-6 md:px-8 lg:px-12 py-14 border-t border-slate-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <ProjectsHeader filter={filter} onFilterChange={handleFilterChange} />
      
      <ProjectsGrid 
        projects={filteredProjects} 
        getCardVariant={getCardVariant} 
        filter={filter}
      />

      <ProjectsCTA />
    </motion.section>
  );
};

export default Projects;