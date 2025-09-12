import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-xl p-4">
            <img src={proj.image} alt={proj.title} className="rounded-lg" />
            <h3 className="mt-2 text-xl font-semibold">{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="flex gap-4 mt-3">
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                Live
              </a>
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
