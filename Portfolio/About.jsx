// import profile from "../../assets/images/img2.jpg"
import profile from "../../assets/images/anis4.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="border-t border-slate-700">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-14">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m <strong className="text-[#06b6d4]">Anis</strong>, a product-minded developer with a strong Django backend and React frontend expertise. I focus on building fast, accessible, and maintainable interfaces. My workflow emphasizes API-first design, component-driven UIs, rapid prototyping, and automated testing to deliver reliable, scalable products.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-slate-700 bg-slate-900">
                <p className="text-sm text-slate-500">Experience</p>
                <p className="font-medium text-lg">2+ years</p>
                <p className="text-xs text-slate-500 mt-1">API design, Front-end development, testing.</p>
              </div>
              <div className="p-4 rounded-lg border border-slate-700 bg-slate-900">
                <p className="text-sm text-slate-500">Education</p>
                <p className="font-medium text-lg">BSc. Computer Science</p>
                <p className="text-xs text-slate-500 mt-1">Focus on software engineering principles.</p>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium">What I build</h3>
                <ul className="mt-3 list-inside space-y-2 text-slate-300">
                  <li>• Scalable frontend architectures (component libraries, design systems)</li>
                  <li>• REST APIs and integrations using Django/DRF</li>
                  <li>• Production workflows with Docker, CI and monitoring</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium">Impact-driven work</h3>
                <p className="mt-3 text-slate-300">
                  I prioritize measurable outcomes—faster load times, reduced error rates, and clearer user journeys. When possible I include metrics and before/after comparisons in case studies.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="resume.pdf" className="inline-flex items-center gap-2 bg-[#0ea5a4] text-white px-4 py-2 rounded-md font-medium shadow">
                Download resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-700">
                Message me
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-700">
                See projects
              </a>
            </div>
          </div>

          {/* RIGHT: profile card + values */}
          <aside className="p-4 rounded-lg border border-slate-700 bg-slate-900">
            <div className="flex flex-col items-center text-center">
              <img
                src={profile}
                alt="Anisul"
                className="w-28 h-28 rounded-full object-cover shadow-md mb-3"
              />
              <h3 className="font-semibold">Anisul Alam</h3>
              <p className="text-sm text-slate-500">Django • React • Full-stack</p> 

              <div className="mt-4 w-full">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Availability</span>
                  <span className="font-medium">Open to work</span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="text-center p-2 rounded-md border border-slate-700">
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-sm font-medium">Chittagong</p>
                  </div>
                  <div className="text-center p-2 rounded-md border border-slate-700">
                    <p className="text-xs text-slate-500">Response time</p>
                    <p className="text-sm font-medium">1-3 days</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 w-full">
                <h4 className="text-sm text-slate-500">Working style</h4>
                <p className="text-xs text-slate-500 mt-2">
                  Fast prototyping, iterative feedback, and production-ready code with tests and docs.
                </p>
              </div>
              <div className="mt-4 w-full flex gap-2 justify-center">
                <a href="https://www.linkedin.com/in/your-profile" className="flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-700 hover:bg-blue-600 hover:text-white transition-colors">
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href="https://github.com/" className="flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-700 hover:bg-white hover:text-black transition-colors">
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
