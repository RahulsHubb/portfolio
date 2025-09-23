import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <Link
                    to={project.demo}
                    target="_blank"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Live Demo
                  </Link>
                  {project.github && (
                    <Link
                      to={project.github}
                      target="_blank"
                      className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
