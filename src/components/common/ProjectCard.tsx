import { motion } from "framer-motion";
import type { ProjectCardProps } from "../../types/projectTypes";
import { ArrowUpRight, GitBranch } from "lucide-react";


export const ProjectCard = ({
  project,
  index,
}: ProjectCardProps) => {
  const reversed = index % 2 !== 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`
        grid items-center gap-10
        lg:grid-cols-2
        ${reversed ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Image */}
      <div className="group relative">
        <div className="absolute -inset-3 rounded-3xl bg-brand-primary/5 blur-2xl transition-opacity duration-500 group-hover:bg-brand-primary/10" />

        <div className="relative overflow-hidden rounded-3xl border border-border-primary bg-bg-card">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} project`}
              className="
                h-full w-full object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <p className="text-sm font-medium text-brand-primary">
          {project.category}
        </p>

        <h3 className="mt-3 text-3xl font-bold text-text-primary">
          {project.title}
        </h3>

        <p className="mt-5 leading-7 text-text-muted">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="mt-6 space-y-3">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 text-sm text-text-secondary"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />

              {highlight}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-md
                border border-border-primary
                bg-bg-card
                px-2.5 py-1
                text-xs text-text-subtle
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              text-sm font-medium
              text-text-primary
              transition-colors
              hover:text-brand-primary
            "
          >
            View Project
            <ArrowUpRight size={16} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              text-sm font-medium
              text-text-muted
              transition-colors
              hover:text-brand-primary
            "
          >
            <GitBranch size={16} />
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
};