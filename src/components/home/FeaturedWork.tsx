import { motion } from "framer-motion";
import { ProjectCard } from "../common/ProjectCard";
import { PROJECTS } from "../../data/projects";

const FeaturedWork = () => {
  return (
    <section
      id="work"
      className="relative bg-bg-secondary py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
            Featured Work
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Projects built for
            <span className="block text-text-muted">
              real-world problems.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            A selection of products and systems I've worked on,
            focusing on architecture, usability, and maintainability.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-16 space-y-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;