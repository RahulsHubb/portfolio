import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { DESIGNATION } from "../../data/projects";

export default function Hero() {
  return (
    <section
      className="p-3 pt-5 ßflex flex-col justify-center items-center text-center text-white border-gray-300 shadow-2xl"
      id="home"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
        {/* Left Section */}
        <div className="flex flex-col justify-center p-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-black"
          >
            Hi, I'm PM Publishers pvt ltd 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl mt-4 text-gray-600"
          >
            <Typewriter words={DESIGNATION} loop={true} cursor />
          </motion.p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-gray-600 mb-6">
            A short description or tagline goes here. Keep it engaging and
            concise.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src="./images/main.png"
            alt="Hero"
            className="w-full max-w-md md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
