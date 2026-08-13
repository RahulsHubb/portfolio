import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { NAV_LINKS, SOCIAL_MEDIA } from "../../data/projects";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className="
            flex h-16 items-center justify-between
            rounded-2xl
            border border-border-primary
            bg-bg-primary/80
            px-4
            shadow-lg
            backdrop-blur-xl
            sm:px-5
          "
        >
          {/* Logo */}
          <a
            href="#top"
            className="group flex items-center gap-2"
          >
            <div
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl
                border border-brand-primary/30
                bg-brand-primary/10
                font-mono text-sm font-bold
                text-brand-primary
                transition-all duration-300
                group-hover:border-brand-primary/60
                group-hover:shadow-[0_0_20px_var(--color-glow-primary)]
              "
            >
              RD
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-text-primary">
                Rahul Dewal
              </p>

              <p className="font-mono text-[10px] text-text-subtle">
                Frontend Engineer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  group relative
                  py-2
                  text-sm font-medium
                  text-text-muted
                  transition-colors duration-300
                  hover:text-text-primary
                "
              >
                {link.label}

                <span
                  className="
                    absolute bottom-0 left-0
                    h-px w-0
                    bg-brand-primary
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/Rahul_Dewal_Resume5Years.pdf"
              download
              className="
                inline-flex items-center gap-2
                rounded-xl
                border border-border-secondary
                px-4 py-2.5
                text-sm font-medium
                text-text-secondary
                transition-all duration-300
                hover:border-brand-primary/50
                hover:text-brand-primary
              "
            >
              <Download size={15} />
              Resume
            </a>

            <a
              href="#contact"
              className="
                inline-flex items-center gap-2
                rounded-xl
                bg-brand-primary
                px-4 py-2.5
                text-sm font-semibold
                text-slate-950
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_0_25px_var(--color-glow-primary)]
              "
            >
              Let's Talk
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              border border-border-primary
              bg-bg-secondary
              text-text-secondary
              transition-all duration-300
              hover:border-brand-primary/40
              hover:text-brand-primary
              md:hidden
            "
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25 }}
              className="
                mt-2 overflow-hidden
                rounded-2xl
                border border-border-primary
                bg-bg-primary/95
                p-3
                shadow-xl
                backdrop-blur-xl
                md:hidden
              "
            >
              <div className="space-y-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    onClick={() => setIsOpen(false)}
                    className="
                      block rounded-xl
                      px-4 py-3
                      text-sm font-medium
                      text-text-secondary
                      transition-colors
                      hover:bg-bg-secondary
                      hover:text-brand-primary
                    "
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-2 border-t border-border-primary pt-3">
                <a
                  href="/Rahul_Dewal_Resume5Years.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="
                    flex items-center justify-center gap-2
                    rounded-xl
                    border border-border-secondary
                    px-4 py-3
                    text-sm font-medium
                    text-text-secondary
                    transition-colors
                    hover:border-brand-primary/40
                    hover:text-brand-primary
                  "
                >
                  <Download size={16} />
                  Download Resume
                </a>

                <a
                  href={`tel:${SOCIAL_MEDIA.PHONE}`}
                  onClick={() => setIsOpen(false)}
                  className="
                    mt-2
                    flex items-center justify-center gap-2
                    rounded-xl
                    bg-brand-primary
                    px-4 py-3
                    text-sm font-semibold
                    text-slate-950
                    transition-all duration-300
                    hover:shadow-[0_0_25px_var(--color-glow-primary)]
                  "
                >
                  Let's Talk
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;