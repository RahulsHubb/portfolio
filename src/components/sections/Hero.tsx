import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { typewriterStrings } from "../../data/projects"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Hi, I'm Rahul Dewal 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl mt-4"
      >
        <Typewriter words={typewriterStrings} loop={true} cursor />
      </motion.p>
    </section>
  );
}
