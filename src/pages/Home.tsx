import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Footer from "../components/common/Footer";
import QuickProof from "../components/home/QuickProof";
import WhatIBuild from "../components/home/WhatIBuild";
import CTA from "../components/common/CTA";
import FeaturedWork from "../components/home/FeaturedWork";
import EngineeringApproach from "../components/home/EngineeringApproach";
import Experience from "../components/home/Experience";
import EngineeringToolkit from "../components/home/EngineeringToolkit";
import About from "../components/sections/About";
// import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <QuickProof />
      <WhatIBuild />
      <FeaturedWork />
      <EngineeringApproach />
      <Experience/>
      <EngineeringToolkit/>
      <About/>
      {/* <Contact/> */}
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
