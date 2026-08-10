import { motion } from "framer-motion";
import { CORE_TECHNOLOGIES, STATS } from "../../data/projects";


const QuickProof = () => {
  return (
    <section className="relative bg-bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
            Quick Proof
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Experience that translates
            <span className="block text-text-muted">
              into production-ready work.
            </span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="portfolio-card portfolio-card-hover group p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl font-bold text-text-primary">
                    {stat.value}
                  </span>

                  <Icon
                    size={20}
                    className="text-text-subtle transition-colors duration-300 group-hover:text-brand-primary"
                  />
                </div>

                <h3 className="mt-5 font-medium text-text-primary">
                  {stat.label}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 border-t border-border-primary pt-8"
        >
          <p className="mb-5 text-sm text-text-subtle">
            Core technologies I work with
          </p>

          <div className="flex flex-wrap gap-3">
            {CORE_TECHNOLOGIES.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-lg
                  border border-border-primary
                  bg-bg-card
                  px-4 py-2
                  text-sm text-text-secondary
                  transition-all duration-300
                  hover:border-brand-primary
                  hover:text-brand-primary
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickProof;