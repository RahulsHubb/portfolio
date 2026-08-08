import Navbar from "../components/common/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Footer from "../components/common/Footer";
import QuickProof from "../components/common/QuickProof";
import WhatIBuild from "../components/common/WhatIBuild";
import CTA from "../components/common/CTA";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <CTA/>
      <Footer />
    </div>
  );
};

export default Home;
