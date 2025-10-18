import { useTimelineLine } from "../../hooks/useTimelineLine";

const Timeline = () => {
  const { ref: timelineRef } = useTimelineLine();

  return (
    <section
      id="timeline"
      className="border-t border-slate-700">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Career Timeline</h2>
            <p className="mt-3 text-slate-400">
              A snapshot of my journey as a passionate Computer Science
              undergraduate — from learning the fundamentals to building
              real-world projects and growing into a full-stack developer.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="md:col-span-2">
            <div className="timeline" ref={timelineRef}>
              
              {/* 2025 */}
              <div className="timeline-item" data-date="2025" data-id="t1">
                <div className="dot"></div>
                <p className="text-sm text-slate-500">2025 — Present</p>
                <h3 className="font-semibold">Building Full-Stack Skills</h3>
                <p className="mt-2 text-slate-300">
                  Currently pursuing my <strong>B.Sc. in Computer Science and Engineering</strong> at Premier University, Chittagong.
                  This year, I’ve focused on building real-world full-stack projects using <strong>Django, DRF, React, PostgreSQL</strong> and more.
                  I am also exploring backend architecture, API design, and deployment while improving my problem-solving and algorithmic thinking.
                </p>
              </div>

              {/* 2024 */}
              <div className="timeline-item" data-date="2024" data-id="t2">
                <div className="dot"></div>
                <p className="text-sm text-slate-500">2024</p>
                <h3 className="font-semibold">Data Structures & Algorithms</h3>
                <p className="mt-2 text-slate-300">
                  Focused on improving problem-solving and algorithmic skills using <strong>C++</strong> on platforms like <strong>LeetCode, HackerRank, and Codeforces</strong>.
                  Studied key <strong>data structures, algorithms, and computational concepts</strong> and applied them in small projects and coding challenges,
                  building a strong foundation for backend development and efficient system design.
                </p>
              </div>

              {/* 2023 */}
              <div className="timeline-item" data-date="2023" data-id="t3">
                <div className="dot"></div>
                <p className="text-sm text-slate-500">2023</p>
                <h3 className="font-semibold">Frontend Development & Projects</h3>
                <p className="mt-2 text-slate-300">
                  Expanded my frontend skills by learning <strong>React.js, Tailwind CSS, JavaScript ES6</strong>,
                  and building dynamic, responsive web interfaces.
                  I created several UI-focused projects, learned state management, routing, component architecture,
                  and improved performance optimization techniques.
                </p>
              </div>

              {/* 2022 */}
              <div className="timeline-item" data-date="2022" data-id="t4">
                <div className="dot"></div>
                <p className="text-sm text-slate-500">2022</p>
                <h3 className="font-semibold">Journey into Web Development</h3>
                <p className="mt-2 text-slate-300">
                  Started my programming journey by mastering the fundamentals of <strong>HTML, CSS, and JavaScript</strong>.
                  I built static websites, explored how the web works, and developed a strong foundation in problem-solving.
                  This was the year I discovered my passion for creating interactive and user-centric web applications.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

