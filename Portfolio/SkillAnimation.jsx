import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPython,
  FaBootstrap,
  FaGithub,
  FaLaravel,
  FaLinux,
  FaCode,
  FaCloud,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPostgresql,
  SiDjango,
  SiJest,
  SiDaisyui,
  SiMysql,
  SiCplusplus,
  SiFramer,
  SiPostman,
} from "react-icons/si";

import { GiBrain } from "react-icons/gi";
import { MdOutlineDataObject } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { VscDebug } from "react-icons/vsc";
import { RiLayout2Fill } from "react-icons/ri";

const skillsData = [
  //Frontend
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JS (ES6+)", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-pink-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },

  //Backend
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-600" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
  { name: "RESTful API", icon: <TbApi className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "JWT Auth", icon: <RiLayout2Fill className="text-orange-500" /> },

  //Tools & DevOps
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
  { name: "Linux", icon: <FaLinux className="text-green-600" /> },
  { name: "Vercel", icon: <FaCloud className="text-black" /> },
  { name: "Render", icon: <FaCloud className="text-purple-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "OOP", icon: <MdOutlineDataObject className="text-indigo-500" /> },
  { name: "DSA", icon: <GiBrain className="text-purple-500" /> },
  { name: "System Design", icon: <MdOutlineDataObject className="text-teal-500" /> },
  { name: "Debugging", icon: <VscDebug className="text-orange-400" /> },
  { name: "Jest", icon: <SiJest className="text-red-600" /> },
];

const SkillsAnimation = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return; // Only run on mobile

    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    
    if (!scrollContainer1 || !scrollContainer2) return;

    let animationFrame;
    let scrollAmount1 = 0;
    let scrollAmount2 = scrollContainer2.scrollWidth / 2; // Start from the middle for reverse scroll

    const animateScroll = () => {
      // First row - left to right
      scrollAmount1 += 0.5;
      if (scrollAmount1 >= scrollContainer1.scrollWidth / 2) {
        scrollAmount1 = 0;
      }
      scrollContainer1.scrollLeft = scrollAmount1;

      // Second row - right to left
      scrollAmount2 -= 0.5;
      if (scrollAmount2 <= 0) {
        scrollAmount2 = scrollContainer2.scrollWidth / 2;
      }
      scrollContainer2.scrollLeft = scrollAmount2;

      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isMobile]);

  // Split skills into two groups for two rows
  const midIndex = Math.ceil(skillsData.length / 2);
  const firstRowSkills = skillsData.slice(0, midIndex);
  const secondRowSkills = skillsData.slice(midIndex);

  return (
    // <section id="skills" className="border-t border-slate-700 py-16 relative overflow-hidden">
    <section id="skills" className="relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-1 md:px-8 lg:px-12">
        {/* Desktop - Single row with CSS animation */}
        <div className="hidden md:block">
          <div className="flex gap-10 mt-6 mb-2 animate-smooth-scroll will-change-transform cursor-grab">
            {skillsData.concat(skillsData).map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center min-w-[120px] text-center transform transition-transform duration-500 hover:scale-125 hover:rotate-y-12"
                style={{ perspective: "800px" }}>
                <div className="text-4xl mb-2 drop-shadow-lg">{skill.icon}</div>
                <span className="font-semibold text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile - Two rows with JS animation */}
        <div className="md:hidden space-y-4 mt-5">
          {/* First row - left to right */}
          <div
            ref={scrollRef1}
            className="flex gap-1 will-change-transform cursor-grab overflow-hidden"
            style={{ 
              scrollBehavior: "auto",
            }}>
            {firstRowSkills.concat(firstRowSkills).map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center min-w-[100px] text-center transform transition-transform duration-500 hover:scale-125 hover:rotate-y-12 flex-shrink-0"
                style={{ perspective: "800px" }}>
                <div className="text-3xl mb-2 drop-shadow-lg">{skill.icon}</div>
                <span className="font-semibold text-xs">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Second row - right to left */}
          <div
            ref={scrollRef2}
            className="flex gap-1 will-change-transform cursor-grab overflow-hidden"
            style={{ 
              scrollBehavior: "auto",
            }}>
            {secondRowSkills.concat(secondRowSkills).map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center min-w-[100px] text-center transform transition-transform duration-500 hover:scale-125 hover:rotate-y-12 flex-shrink-0"
                style={{ perspective: "800px" }}>
                <div className="text-3xl mb-2 drop-shadow-lg">{skill.icon}</div>
                <span className="font-semibold text-xs">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAnimation;