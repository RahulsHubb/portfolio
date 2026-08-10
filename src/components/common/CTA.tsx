import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { SOCIAL_MEDIA } from "../../data/projects";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-24 sm:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-brand-primary"
        >
          Have a project in mind?
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
        >
          Let's build something
          <span className="block bg-brand-gradient bg-clip-text text-transparent">
            meaningful.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-muted"
        >
          I'm open to frontend opportunities, challenging products, and
          engineering teams where I can build, learn, and make an impact.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href={`mailto:${SOCIAL_MEDIA.MAIL}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            <Mail size={18} />
            Let's Talk
          </motion.a>

          <motion.a
            href={SOCIAL_MEDIA.GIT}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary"
          >
            View GitHub
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;