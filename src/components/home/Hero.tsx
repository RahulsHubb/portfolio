import { motion } from "framer-motion";
import { SKILLS, CODE_LINES } from "../../data/projects";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-primary text-text-primary">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-brand-secondary/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-brand-primary/10 blur-[120px]" />

      {/* Main Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* ========================================
              LEFT CONTENT
          ======================================== */}

          <div>
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full
                border border-border-primary
                bg-bg-secondary/70
                px-4 py-2
                text-sm text-text-secondary
                backdrop-blur
              "
            >
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-brand-success
                  shadow-[0_0_10px_var(--color-brand-success)]
                "
              />

              Available for frontend opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="
                text-5xl font-bold leading-tight tracking-tight
                sm:text-6xl
                lg:text-7xl
              "
            >
              Frontend

              <span className="block bg-brand-gradient bg-clip-text text-transparent">
                Engineer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                mt-6 max-w-xl
                text-lg leading-8
                text-text-muted
                sm:text-xl
              "
            >
              I'm Rahul Dewal, a React developer with 5 years building production-grade web apps. I've shipped 20+ features used by 4k+ users. Currently open to Frontend Developer roles with React.
            </motion.p>

            {/* ========================================
                EXPERIENCE
            ======================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center gap-8"
            >
              <div>
                <p className="text-3xl font-bold text-text-primary">5+</p>

                <p className="mt-1 text-sm text-text-subtle">
                  Years Experience
                </p>
              </div>

              <div className="h-10 w-px bg-border-primary" />

              <div>
                <p className="text-3xl font-bold text-text-primary">React</p>

                <p className="mt-1 text-sm text-text-subtle">
                  Primary Stack
                </p>
              </div>
            </motion.div>

            {/* ========================================
                BUTTONS
            ======================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a
                href="#work"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                View My Work
                <span className="ml-2">→</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* ========================================
                SKILLS
            ======================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-lg
                    border border-border-primary
                    bg-bg-secondary/50
                    px-3 py-1.5
                    text-sm text-text-muted
                    transition-colors duration-300
                    hover:border-brand-primary
                    hover:text-brand-primary
                  "
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ========================================
              RIGHT CONTENT
          ======================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto max-w-lg"
            >
              {/* Glow */}
              <div
                className="
                  absolute -inset-4
                  rounded-3xl
                  bg-brand-secondary/10
                  blur-2xl
                "
              />

              {/* Code Card */}
              <div
                className="
                  relative overflow-hidden
                  rounded-3xl
                  border border-border-primary
                  bg-bg-card/90
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                {/* Header */}
                <div
                  className="
                    flex items-center gap-2
                    border-b border-border-primary
                    px-5 py-4
                  "
                >
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-brand-success/80" />

                  <span className="ml-3 text-xs text-text-subtle">
                    developer.ts
                  </span>
                </div>

                {/* Code */}
                <div className="p-6 font-mono text-sm leading-7">
                  {CODE_LINES.map((line, index) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.8 + index * 0.12,
                      }}
                      className="text-text-secondary"
                    >
                      <span className="mr-5 select-none text-text-subtle">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {line}
                    </motion.div>
                  ))}
                </div>

                {/* Status */}
                <div className="border-t border-border-primary px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-brand-success" />

                      <span className="text-sm text-text-muted">
                        Building production systems
                      </span>
                    </div>

                    <span className="text-xs text-text-subtle">v2026</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ========================================
                FLOATING BADGE
            ======================================== */}

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute -bottom-6 -left-6
                hidden
                rounded-2xl
                border border-border-primary
                bg-bg-card
                px-5 py-4
                shadow-xl
                sm:block
              "
            >
              <p className="text-xs text-text-subtle">Current focus</p>

              <p className="mt-1 font-medium text-text-primary">
                Scalable Frontends
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ========================================
          SCROLL INDICATOR
      ======================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          absolute bottom-8 left-1/2
          hidden -translate-x-1/2
          flex-col items-center gap-2
          text-xs text-text-subtle
          md:flex
        "
      >
        <span>Scroll to explore</span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="h-8 w-px bg-border-secondary"
        />
      </motion.div>
    </section>
  );
};

export default Hero;