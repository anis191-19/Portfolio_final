import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  // FaGitAlt,
  FaPython,
  // FaBootstrap,
  FaGithub,
  FaLaravel,
  // FaLinux,
  // FaCode,
  // FaCloud,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiDjango,
  // SiJest,
  // SiDaisyui,
  SiMysql,
  // SiCplusplus,
  // SiFramer,
  // SiPostman,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import SkillsAnimation from "./SkillAnimation";
// import { MdOutlineDataObject } from "react-icons/md";
// import { TbApi } from "react-icons/tb";
// import { VscDebug } from "react-icons/vsc";
// import { RiLayout2Fill } from "react-icons/ri";

// Enhanced skills data with categories, level, short description and example projects
const ALL_SKILLS = [
  { id: "html", name: "HTML5", icon: <FaHtml5 className="w-7 h-7 sm:w-9 sm:h-9" />, level: 92, category: "Frontend", desc: "Semantic markup, accessibility, SEO-friendly structure.", projects: [
    { title: "Portfolio Markup", url: "#" },
  ] },
  { id: "css", name: "CSS3", icon: <FaCss3Alt className="w-7 h-7 sm:w-9 sm:h-9" />, level: 90, category: "Frontend", desc: "Responsive layouts, Flexbox & Grid, modern patterns.", projects: [{ title: "Landing Page", url: "#" }] },
  { id: "js", name: "JavaScript (ES6+)", icon: <FaJs className="w-7 h-7 sm:w-9 sm:h-9" />, level: 85, category: "Frontend", desc: "Modern JS, async, DOM, functional patterns.", projects: [{ title: "Interactive UI", url: "#" }] },
  { id: "react", name: "React", icon: <FaReact className="w-7 h-7 sm:w-9 sm:h-9" />, level: 86, category: "Frontend", desc: "Hooks, component design, state management.", projects: [{ title: "PhiMart (frontend)", url: "#" }] },
  { id: "tailwind", name: "Tailwind CSS", icon: <SiTailwindcss className="w-7 h-7 sm:w-9 sm:h-9" />, level: 87, category: "Frontend", desc: "Utility-first styling with responsive helpers.", projects: [{ title: "EventZone UI", url: "#" }] },
  { id: "python", name: "Python", icon: <FaPython className="w-7 h-7 sm:w-9 sm:h-9" />, level: 84, category: "Backend", desc: "Clean code, scripting, automation.", projects: [{ title: "NLP Mini-Project", url: "#" }] },
  { id: "django", name: "Django", icon: <SiDjango className="w-7 h-7 sm:w-9 sm:h-9" />, level: 83, category: "Backend", desc: "DRF, auth, ORM, migrations.", projects: [{ title: "PhiMart (API)", url: "#" }] },
  { id: "laravel", name: "Laravel", icon: <FaLaravel className="w-7 h-7 sm:w-9 sm:h-9" />, level: 75, category: "Backend", desc: "MVC, Eloquent, routing and blade templates.", projects: [{ title: "Online Bidding System", url: "#" }] },
  { id: "postgres", name: "PostgreSQL", icon: <SiPostgresql className="w-7 h-7 sm:w-9 sm:h-9" />, level: 80, category: "Database", desc: "Relational modeling, indices, queries.", projects: [{ title: "Render DB Setup", url: "#" }] },
  { id: "mysql", name: "MySQL", icon: <SiMysql className="w-7 h-7 sm:w-9 sm:h-9" />, level: 78, category: "Database", desc: "Traditional LAMP DB experience.", projects: [{ title: "Blog Platform DB", url: "#" }] },
  // { id: "git", name: "Git", icon: <FaGitAlt className="w-7 h-7 sm:w-9 sm:h-9" />, level: 88, category: "Tools", desc: "Branching, PRs, releases.", projects: [{ title: "Open-source contribution", url: "#" }] },
  { id: "github", name: "GitHub", icon: <FaGithub className="w-7 h-7 sm:w-9 sm:h-9" />, level: 86, category: "Other", desc: "Repos, Actions, Pages.", projects: [{ title: "Learn-Python-Programming", url: "#" }] },
  // { id: "docker", name: "Docker (concept)", icon: <FaCloud className="w-7 h-7 sm:w-9 sm:h-9" />, level: 60, category: "Tools", desc: "Containerization basics.", projects: [{ title: "Dev Containers", url: "#" }] },
  { id: "dsa", name: "DSA", icon: <GiBrain className="w-7 h-7 sm:w-9 sm:h-9" />, level: 82, category: "Other", desc: "Problem solving, complexity analysis.", projects: [{ title: "LeetCode progress", url: "#" }] },
  // { id: "jest", name: "Jest", icon: <SiJest className="w-7 h-7 sm:w-9 sm:h-9" />, level: 65, category: "Tools", desc: "Unit testing for JS/React.", projects: [{ title: "Component tests", url: "#" }] },
  // { id: "c++", name: "C++", icon: <SiCplusplus className="w-7 h-7 sm:w-9 sm:h-9" />, level: 70, category: "Other", desc: "Competitive programming and system level coding.", projects: [{ title: "Algorithms", url: "#" }] },
  // add more as needed
];

const categories = ["All", "Frontend", "Backend", "Database", "Other"];

export default function SkillsEnhanced() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [visibleMap, setVisibleMap] = useState({}); // track which skill bars have animated
  const [selectedSkill, setSelectedSkill] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // observe visible cards and animate their progress bars when they enter view
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            setVisibleMap((m) => ({ ...m, [id]: true }));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    const cards = containerRef.current?.querySelectorAll("[data-id]") || [];
    cards.forEach((c) => io.observe(c));

    return () => io.disconnect();
  }, [activeCategory, query]);

  const filtered = ALL_SKILLS.filter((s) => {
    if (activeCategory !== "All" && s.category !== activeCategory) return false;
    if (query && !s.name.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <section id="skills" className="py-12 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Skills & Tools</h2>
        <p className="text-center text-slate-400 mt-2 max-w-2xl mx-auto text-sm sm:text-base">A quick overview of my core skills — tap a card to see projects and examples.</p>

        {/* Controls */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 justify-between">
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 ${activeCategory === c ? 'bg-slate-700 shadow' : 'bg-slate-800/40'}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills..."
              className="px-3 py-2 rounded-md bg-slate-800/50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 w-full sm:w-auto"
              aria-label="Search skills"/>
            <button onClick={() => { setQuery(''); }} className="px-3 py-2 rounded-md bg-slate-700/60 text-sm">Clear</button>
          </div>
        </div>

      <SkillsAnimation />

        {/* Skills grid */}
        <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
          {filtered.map((skill) => (
            <motion.article
              key={skill.id}
              data-id={skill.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-800/60 p-2 sm:p-3 rounded-lg hover:scale-[1.02] transform transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl sm:text-4xl">{skill.icon}</div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base truncate">{skill.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-400">{skill.category}</p>
                </div>
                {/* <div className="hiddin md:block ml-auto text-sm font-semibold">{skill.level}%</div> */}
                <div className="hidden md:block ml-auto text-sm font-semibold">{skill.level}%</div>
              </div>

              {/* Animated progress bar with accessible attributes */}
              <div className="mt-3 h-2 bg-slate-700 rounded-full overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={skill.level} aria-label={`${skill.name} proficiency`}>
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400"
                  style={{
                    width: visibleMap[skill.id] ? `${skill.level}%` : `4%`,
                    transition: 'width 900ms cubic-bezier(.2,.9,.2,1)'
                  }}
                />
              </div>

              <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2">{skill.desc}</p>
            </motion.article>
          ))}
        </div>

        {/* Footer / actions */}
        <div className="mt-4 text-center">
          <a href="#projects" className="inline-block px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm">See related projects</a>
        </div>
      </div>

      {/* Modal for skill details */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedSkill(null)} />

            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 10, scale: 0.98 }}
              className="relative bg-slate-900 max-w-lg w-full rounded-lg p-4 sm:p-6 shadow-2xl z-10 overflow-auto"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{selectedSkill.icon}</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{selectedSkill.name} <span className="text-sm text-slate-400">· {selectedSkill.level}%</span></h3>
                  <p className="text-sm text-slate-300 mt-2">{selectedSkill.desc}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-slate-300">Example projects</h4>
                    <ul className="mt-2 space-y-2 text-sm">
                      {selectedSkill.projects.map((p, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <a href={p.url} className="underline">{p.title}</a>
                          <span className="text-xs text-slate-500">(demo / repo)</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button aria-label="Close" onClick={() => setSelectedSkill(null)} className="ml-auto text-slate-400 hover:text-white">✕</button>
              </div>

              <div className="mt-4 flex gap-2">
                <button onClick={() => { navigator.clipboard?.writeText(selectedSkill.name); }} className="px-3 py-2 bg-slate-700 rounded-md text-sm">Copy skill</button>
                <a href="#contact" className="px-3 py-2 bg-indigo-600 rounded-md text-sm">Hire me</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <SkillsAnimation /> */}
    </section>
  );
}

