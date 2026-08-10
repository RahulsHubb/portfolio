import { motion } from "framer-motion";
import { SERVICES } from "../../data/projects";

const WhatIBuild = () => {
  return (
    <section className="relative bg-bg-primary py-24 sm:py-32">
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
            What I Build
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Not just interfaces.
            <span className="block text-text-muted">
              Production-ready frontend systems.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            I focus on building frontend systems that are scalable,
            maintainable, and designed around real product requirements.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="
                  group
                  rounded-3xl
                  border border-border-primary
                  bg-bg-card
                  p-7
                  transition-colors duration-300
                  hover:border-brand-primary/40
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-text-subtle">
                    {service.number}
                  </span>

                  <div
                    className="
                      rounded-xl
                      border border-border-primary
                      bg-bg-secondary
                      p-3
                      transition-colors duration-300
                      group-hover:border-brand-primary
                    "
                  >
                    <Icon
                      size={21}
                      className="text-text-muted transition-colors duration-300 group-hover:text-brand-primary"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-10 text-xl font-semibold text-text-primary">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-lg leading-7 text-text-muted">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-md
                        bg-bg-secondary
                        px-2.5 py-1
                        text-xs
                        text-text-subtle
                        transition-colors duration-300
                        group-hover:text-text-secondary
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;