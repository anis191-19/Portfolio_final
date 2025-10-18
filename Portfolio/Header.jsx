import { useState } from "react";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    setIsAnimatingOut(false);
  };

  const closeMenu = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsAnimatingOut(false);
    }, 300); // animation duration = 0.3s
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/60 md:backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10">
              <img src={logo} alt="Logo" className="object-cover rounded-full" />
            </div>
            <div className="hidden sm:block">
              <p className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 animate-pulse [text-shadow:_0_0_10px_#60a5fa,_0_0_20px_#6366f1,_0_0_40px_#06b6d4]">
                Anisul Alam
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Django • React • Full-stack
              </p>
            </div>
          </a>
 
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-[#06b6d4]">About</a>
            <a href="#timeline" className="hover:text-[#06b6d4]">Timeline</a>
            <a href="#projects" className="hover:text-[#06b6d4]">Projects</a>
            <a href="#skills" className="hover:text-[#06b6d4]">Skills</a>
            <a href="#achievements" className="hover:text-[#06b6d4]">Achievements</a>
            <a href="#contact" className="hover:text-[#06b6d4]">Contact</a>
            <a href="resume.pdf" className="px-3 py-2 rounded-md border border-slate-700 hover:bg-slate-800 hover:text-[#06b6d4]">Resume</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 rounded-md bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] text-white text-sm hidden lg:block">Hire Me</a>
            <button
              aria-controls="mobileMenu"
              aria-expanded={isMenuOpen}
              onClick={openMenu}
              className="md:hidden p-2 rounded-md focus-ring"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {(isMenuOpen || isAnimatingOut) && (
        <div id="mobileMenu" className="fixed inset-0 z-40">
          {/* Overlay */}
          <div
            onClick={closeMenu}
            className={`absolute inset-0 bg-black/30 transition-opacity ${isAnimatingOut ? "opacity-0" : "opacity-100"}`}
          ></div>

          {/* Sidebar */}
          <aside
            className={`absolute right-0 top-0 w-full max-w-xs h-full bg-slate-900 p-6 shadow-xl rounded-l-2xl
              ${isAnimatingOut ? "animate-slide-out" : "animate-slide-in"}`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">AA</div>
                <div>
                  <p className="text-sm font-medium text-white">Anisul Alam</p>
                  <p className="text-xs text-slate-400">Frontend & Django</p>
                </div>
              </div>
              <button onClick={closeMenu} className="p-2 rounded-md focus-ring text-white text-xl" aria-label="Close menu">✕</button>
            </div>

            <nav className="flex flex-col gap-3">
              <a onClick={closeMenu} href="#about" className="py-2 px-3 rounded-md hover:bg-slate-700 text-white">About</a>
              <a onClick={closeMenu} href="#timeline" className="py-2 px-3 rounded-md hover:bg-slate-700 text-white">Timeline</a>
              <a onClick={closeMenu} href="#projects" className="py-2 px-3 rounded-md hover:bg-slate-700 text-white">Projects</a>
              <a onClick={closeMenu} href="#skills" className="py-2 px-3 rounded-md hover:bg-slate-700 text-white">Skills</a>
              <a onClick={closeMenu} href="#achievements" className="py-2 px-3 rounded-md hover:bg-slate-700 text-white">Achievements</a>
              <a onClick={closeMenu} href="#contact" className="py-2 px-3 rounded-md hover:bg-slate-700 text-white">Contact</a>
              <a href="resume.pdf" className="py-2 px-3 rounded-md border border-slate-700 mt-2 text-white">Resume</a>
            </nav>

            <div className="mt-6 flex gap-3">
              <a href="https://github.com/" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-slate-700 text-white hover:bg-slate-700">GitHub</a>
              <a href="https://www.linkedin.com/" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-slate-700 text-white hover:bg-slate-700">LinkedIn</a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;

