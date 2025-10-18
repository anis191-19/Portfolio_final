import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 pt-12 pb-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">About This Portfolio</h3>
          <p className="text-sm leading-relaxed">
            A personal portfolio showcasing my work, skills, and projects as a full-stack developer.  
            Built with <span className="text-sky-400 font-medium">Django - React</span> and <span className="text-sky-400 font-medium">Tailwind CSS</span>.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#projects" className="hover:text-sky-400 transition-colors duration-200">Projects</a>
            </li>
            <li>
              <a href="#about" className="hover:text-sky-400 transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sky-400 transition-colors duration-200">Contact</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-sky-400 transition-colors duration-200">Skills</a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Get In Touch</h3>
          <p className="text-sm mb-3">Have a project in mind or want to collaborate?</p>
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center gap-2 text-sm hover:text-sky-400 transition-colors duration-200">
            <FaEnvelope /> anisulalam2003@gmail.com
          </a>

          <div className="flex items-center gap-5 mt-5 text-lg">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors duration-200">
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors duration-200">
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors duration-200">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 mt-2 pt-6 text-center text-xs text-slate-500">
        © {year} <span className="font-medium text-white">Anisul Alam</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
