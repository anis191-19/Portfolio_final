import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
// import Projects from "./Projects";
import Projects from "./ProjectSection/MainProjects";
import Skills from "./Skills";
import Timeline from "./Timeline";
import CertificatesSection from "./CertificatesSection";
// import Test from "./Test.jsx"

const PortfolioPage = () => {
    return (
        // <div className ="antialiased bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100">
        <div className ="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
            <Header />
            <main className="flex-grow">
                <Hero />
                <About />
                <Timeline />
                <Projects />
                <Skills />
                <CertificatesSection />
                {/* <Test /> */}
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioPage;