import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2
} from "lucide-react";
import { MY_RULES_WORK_WITH } from "../../data/projects";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-bg-secondary py-24 sm:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-brand-primary/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
            About
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            The engineer behind
            <span className="block text-text-muted">
              the interfaces.
            </span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="max-w-2xl text-xl leading-9 text-text-secondary sm:text-2xl">
              I enjoy turning complex product requirements into
              simple, maintainable experiences.
            </p>

            <p className="mt-6 max-w-2xl leading-8 text-text-muted">
              My work has primarily focused on building React
              applications, reusable UI systems, dynamic workflows,
              and data-driven interfaces. I enjoy working where
              product requirements, user experience, and engineering
              come together.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-text-muted">
              I'm also interested in going deeper into full-stack
              development, strengthening my understanding of backend
              systems, APIs, and application architecture.
            </p>

            {/* Small identity line */}
            <div className="mt-8 flex items-center gap-3 text-sm text-text-subtle">
              <Code2 size={17} className="text-brand-primary" />

              <span>
                React Developer · Frontend Engineer · Lifelong Learner
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div
              className="
                relative overflow-hidden rounded-3xl
                border border-border-primary
                bg-bg-card
              "
            >
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-border-primary px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />

                  <span className="font-mono text-xs text-text-subtle">
                    current-focus
                  </span>
                </div>

                <span className="font-mono text-xs text-text-subtle">
                  2026
                </span>
              </div>

              {/* Content */}
              <div className="p-7 sm:p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-text-subtle">
                  Currently
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-text-primary">
                  Building better frontend systems.
                </h3>

                <p className="mt-4 text-sm leading-7 text-text-muted">
                  Focused on scalable React applications,
                  maintainable architecture, and improving the
                  complete development experience.
                </p>

                {/* Stack */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Redux",
                    "Node.js",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-lg
                        border border-border-primary
                        bg-bg-secondary
                        px-3 py-1.5
                        font-mono text-xs
                        text-text-secondary
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Direction */}
                <div className="mt-8 border-t border-border-primary pt-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-text-subtle">
                    Next direction
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-4">
                    <span className="text-sm text-text-secondary">
                      Deeper full-stack engineering
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-brand-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Principles */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {MY_RULES_WORK_WITH.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  rounded-2xl
                  border border-border-primary
                  bg-bg-card
                  p-6
                  transition-all duration-300
                  hover:border-brand-primary/40
                  hover:bg-bg-elevated
                "
              >
                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-xl
                    border border-border-primary
                    bg-bg-secondary
                    transition-colors
                    group-hover:border-brand-primary/30
                  "
                >
                  <Icon
                    size={19}
                    className="
                      text-text-muted
                      transition-colors
                      group-hover:text-brand-primary
                    "
                  />
                </div>

                <h3 className="mt-5 font-semibold text-text-primary">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-muted">
                  {principle.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;