import { motion } from "framer-motion";
import {
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";
import { EXPERIENCE } from "../../data/projects";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-bg-secondary py-24 sm:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-brand-secondary/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
            Experience & Growth
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Growing through
            <span className="block text-text-muted">
              increasingly complex problems.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            My experience has evolved from building interfaces to
            owning complex frontend workflows and contributing to
            production systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Timeline line */}
          <div className="absolute left-[7px] top-3 hidden h-[calc(100%-24px)] w-px bg-border-secondary sm:block" />

          <div className="space-y-12">
            {EXPERIENCE.map((experience, index) => (
              <motion.article
                key={experience.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative sm:pl-12"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-1 hidden sm:block">
                  <div
                    className="
                      h-4 w-4 rounded-full
                      border-4 border-bg-secondary
                      bg-brand-primary
                      shadow-[0_0_0_1px_var(--color-brand-primary)]
                    "
                  />
                </div>

                <div
                  className="
                    rounded-3xl
                    border border-border-primary
                    bg-bg-card
                    p-7
                    transition-all duration-300
                    hover:border-brand-primary/40
                    sm:p-9
                  "
                >
                  {/* Top */}
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary">
                          {experience.type}
                        </span>

                        {experience.current && (
                          <span className="flex items-center gap-2 text-xs text-text-subtle">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Currently
                          </span>
                        )}
                      </div>

                      <h3 className="mt-5 text-2xl font-bold text-text-primary">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-text-secondary">
                        {experience.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-text-subtle">
                      <CalendarDays size={16} />
                      {experience.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-7 max-w-3xl leading-7 text-text-muted">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {experience.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="
                          flex items-start gap-3
                          rounded-xl
                          border border-border-primary
                          bg-bg-secondary
                          p-4
                        "
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />

                        <span className="text-sm leading-6 text-text-secondary">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-md
                          bg-bg-elevated
                          px-2.5 py-1
                          text-xs text-text-subtle
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Resume */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:pl-12"
        >
          <a
            href="/resume.pdf"
            download
            className="
              inline-flex items-center gap-2
              text-sm font-medium
              text-text-secondary
              transition-colors
              hover:text-brand-primary
            "
          >
            View full resume
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;