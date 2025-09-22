import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          🚀 Projects
        </h2>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              {/* Project Image */}
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {proj.title}
                </h3>
                <p className="text-gray-600 mt-2 flex-grow">
                  {proj.description}
                </p>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow hover:opacity-90 transition"
                  >
                    Live
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
