import { motion } from "framer-motion";
import { ENGINEER_APPROACHES } from "../../data/projects";

const EngineeringApproach = () => {
    return (
        <section className="relative bg-bg-primary py-24 sm:py-32">
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
                        Engineering Approach
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
                        I don't just write code.
                        <span className="block text-text-muted">
                            I think about the system behind it.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                        My approach focuses on solving the right problem first,
                        then building software that remains reliable as the
                        product grows.
                    </p>
                </motion.div>

                {/* Approach Grid */}
                <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border-primary bg-border-primary md:grid-cols-2">
                    {ENGINEER_APPROACHES.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="
                  group
                  bg-bg-card
                  p-8
                  transition-colors duration-300
                  hover:bg-bg-elevated
                  sm:p-10
                "
                            >
                                <div className="flex items-start justify-between">
                                    <span className="font-mono text-sm text-text-subtle">
                                        {item.number}
                                    </span>

                                    <Icon
                                        size={22}
                                        className="
                      text-text-subtle
                      transition-colors duration-300
                      group-hover:text-brand-primary
                    "
                                    />
                                </div>

                                <h3 className="mt-12 text-xl font-semibold text-text-primary">
                                    {item.title}
                                </h3>

                                <p className="mt-4 max-w-md leading-7 text-text-muted">
                                    {item.description}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Engineering Principles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border-primary pt-8"
                >
                    {[
                        "Clean Architecture",
                        "Reusable Components",
                        "Predictable State",
                        "Performance",
                        "Responsive UX",
                        "Code Quality",
                    ].map((principle) => (
                        <span
                            key={principle}
                            className="text-sm text-text-subtle"
                        >
                            {principle}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EngineeringApproach;