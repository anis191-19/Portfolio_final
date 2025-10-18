import profileImage from "../../assets/images/img11.png"
import profileImage2 from "../../assets/images/img8.png"

const Hero = () => {
  return (
    <section id="hero" className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 py-1 rounded-full text-xs text-slate-200 mb-4">✨ Open to opportunities — Remote / Freelance</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Anisul Alam —{" "}
            <p className="text-[#0ea5a4]">
              Full
              <span className="inline-block animate-blink">-</span>
              Stack Django Developer
            </p>
          </h1>

          <p className="text-lg text-slate-300 max-w-xl">
            {/* I build beautiful, accessible web applications using React, Tailwind CSS and Django. I enjoy turning ideas into polished products that people love. */}
            I develop powerful, accessible web applications with a strong Django backend and smooth, responsive UIs using React and Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#0ea5a4] text-white px-4 py-2 rounded-md font-medium shadow hover:opacity-95">
              See my work
            </a>
            <a
              href="mailto:youremail@example.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-700">
              Contact me
            </a>
          </div>

          <div className="mt-6">
            <p className="text-xs text-slate-400">Featured on</p>
            <div className="flex items-center gap-4 mt-3">
              <div className="text-sm px-3 py-1 rounded-md border border-slate-700">Tech Blog</div>
              <div className="text-sm px-3 py-1 rounded-md border border-slate-700">Open Source</div>
              <div className="text-sm px-3 py-1 rounded-md border border-slate-700">Livestreams</div>
            </div>
          </div>
        </div>

        {/* Right image card */}
        <div className="w-full float-slow">
          {/* <div className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-900 p-6 animate-fadeIn"> */}
          <div className="rounded-2xl overflow-hidden shadow-lg glass p-6">
            <picture>
              {/* For large screens (lg and above) */}
              <source srcSet={profileImage} media="(min-width: 1024px)" />

              {/* Default (for xs to md) */}
              <img
                src={profileImage2}
                alt="Developer workspace"
                className="w-full h-64 lg:h-68 object-cover rounded-lg mb-4"
              />
            </picture>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-700">Location</p>
                <p className="font-medium">Chittagong, Bangladesh</p>
              </div>
              <div>
                <p className="text-xs text-slate-700">Availability</p>
                <p className="font-medium">Open to work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
