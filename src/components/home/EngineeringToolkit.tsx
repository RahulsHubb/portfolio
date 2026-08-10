import { motion } from "framer-motion";
import { TOOLKIT_CATEGORIES } from "../../data/projects";
import { GitBranch } from "lucide-react";
const EngineeringToolkit = () => {
  return (
    <section
      id="stack"
      className="relative bg-bg-primary py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
            Engineering Toolkit
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            The tools behind
            <span className="block text-text-muted">
              the work.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            A practical toolkit built around modern frontend
            development, scalable architecture, and reliable
            product experiences.
          </p>
        </motion.div>

        {/* Toolkit */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {TOOLKIT_CATEGORIES.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  rounded-3xl
                  border border-border-primary
                  bg-bg-card
                  p-7
                  transition-all duration-300
                  hover:border-brand-primary/40
                  sm:p-8
                "
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-text-muted">
                      {category.description}
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border border-border-primary
                      bg-bg-secondary
                      p-3
                      transition-all duration-300
                      group-hover:border-brand-primary/40
                    "
                  >
                    <Icon
                      size={20}
                      className="text-text-muted transition-colors group-hover:text-brand-primary"
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-lg
                        border border-border-primary
                        bg-bg-secondary
                        px-3 py-2
                        font-mono text-xs
                        text-text-secondary
                        transition-all duration-300
                        hover:border-brand-primary/40
                        hover:text-brand-primary
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            mt-10
            flex items-center gap-3
            border-t border-border-primary
            pt-8
          "
        >
          <GitBranch
            size={18}
            className="text-brand-primary"
          />

          <p className="text-sm text-text-muted">
            Always learning, experimenting, and improving the way I build.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringToolkit;