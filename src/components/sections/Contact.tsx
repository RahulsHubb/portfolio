import { GitBranch, Link2Icon, Mail, PhoneCall, X } from "lucide-react";
import { SOCIAL_MEDIA } from "../../data/projects";

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-border-primary bg-bg-primary py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Let&apos;s build something
            <span className="block bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              worth shipping.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Whether you&apos;re hiring a React developer, looking for
            frontend expertise, or have an interesting product idea,
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-wider text-text-muted">
              Have a project in mind?
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-text-primary">
              Let&apos;s start a conversation.
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-text-secondary">
              I&apos;m open to frontend opportunities, freelance projects,
              product collaborations, and interesting engineering challenges.
            </p>
            <div className="flex gap-3">

              {/* Email */}
              <a
                href={`mailto:${SOCIAL_MEDIA.MAIL}`}
                className="portfolio-card portfolio-card-hover mt-8 flex items-center gap-4 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow-primary text-brand-primary">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-text-primary">
                    {SOCIAL_MEDIA.MAIL}
                  </p>
                </div>
              </a>

              {/* Contact No. */}
              <a
                href={`tel:${SOCIAL_MEDIA.PHONE}`}
                className="portfolio-card portfolio-card-hover mt-8 flex items-center gap-4 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow-primary text-brand-primary">
                  <PhoneCall size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    Contact No.
                  </p>

                  <p className="mt-1 text-sm font-medium text-text-primary">
                    {SOCIAL_MEDIA.PHONE}
                  </p>
                </div>
              </a>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              <a
                href={SOCIAL_MEDIA.GIT}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-primary bg-bg-secondary text-text-secondary transition hover:border-brand-primary hover:text-brand-primary"
              >
                <GitBranch size={20} />
              </a>

              <a
                href={SOCIAL_MEDIA.LINKED_IN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-primary bg-bg-secondary text-text-secondary transition hover:border-brand-primary hover:text-brand-primary"
              >
                <Link2Icon size={20} />
              </a>

              <a
                href={SOCIAL_MEDIA.X}
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-primary bg-bg-secondary text-text-secondary transition hover:border-brand-primary hover:text-brand-primary"
              >
                <X size={20} />
              </a>
            </div>
          </div>

          {/* Right */}
          <form className="portfolio-card bg-bg-card p-6 shadow-xl sm:p-8">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border-primary bg-bg-secondary px-4 py-3.5 text-text-primary outline-none transition placeholder:text-text-subtle focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border-primary bg-bg-secondary px-4 py-3.5 text-text-primary outline-none transition placeholder:text-text-subtle focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  Project / Opportunity
                </label>

                <input
                  type="text"
                  placeholder="What can I help you with?"
                  className="w-full rounded-xl border border-border-primary bg-bg-secondary px-4 py-3.5 text-text-primary outline-none transition placeholder:text-text-subtle focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell me a little about your project..."
                  className="w-full resize-none rounded-xl border border-border-primary bg-bg-secondary px-4 py-3.5 text-text-primary outline-none transition placeholder:text-text-subtle focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
