import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/sections/About";
import Projects from "../components/home/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Footer from "../components/common/Footer";
import QuickProof from "../components/home/QuickProof";
import WhatIBuild from "../components/home/WhatIBuild";
import CTA from "../components/common/CTA";
import FeaturedWork from "../components/home/FeaturedWork";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <QuickProof/>
      <WhatIBuild/>
      <FeaturedWork/>
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
