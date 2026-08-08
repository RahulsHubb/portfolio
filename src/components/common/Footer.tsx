import {
  Mail,
  ArrowUp,
  LineSquiggle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-primary bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <a
              href="https://linkedin.com/in/rahuldewal33"
              className="text-lg font-bold tracking-tight text-text-primary"
            >
              Rahul<span className="text-brand-primary">.</span>
            </a>

            <p className="mt-2 text-sm text-text-muted">
              Frontend Engineer building scalable web experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                rounded-lg
                border border-border-primary
                bg-bg-card
                p-2.5
                text-text-muted
                transition-all duration-300
                hover:border-brand-primary
                hover:text-brand-primary
              "
            >
              <Github size={18} />
            </a> */}

            <a
              href="https://linkedin.com/in/rahuldewal33"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                rounded-lg
                border border-border-primary
                bg-bg-card
                p-2.5
                text-text-muted
                transition-all duration-300
                hover:border-brand-primary
                hover:text-brand-primary
              "
            >
              <LineSquiggle size={18} />
            </a>

            <a
              href="mailto:dewalsuccess@gmail.com"
              aria-label="Email"
              className="
                rounded-lg
                border border-border-primary
                bg-bg-card
                p-2.5
                text-text-muted
                transition-all duration-300
                hover:border-brand-primary
                hover:text-brand-primary
              "
            >
              <Mail size={18} />
            </a>

            <a
              href="#"
              aria-label="Back to top"
              className="
                ml-2
                rounded-lg
                border border-border-primary
                bg-bg-card
                p-2.5
                text-text-muted
                transition-all duration-300
                hover:border-brand-primary
                hover:text-brand-primary
              "
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border-primary pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-text-subtle">
            © {currentYear} Rahul Dewal. All rights reserved.
          </p>

          <p className="text-text-subtle">
            Built with{" "}
            <span className="text-text-secondary">
              React
            </span>{" "}
            +{" "}
            <span className="text-text-secondary">
              TypeScript
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;