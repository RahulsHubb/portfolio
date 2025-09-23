import { SKILLS } from "../../data/projects";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 shadow-2xl"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left: Profile Image */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE4dJbko_Dxlw/profile-displayphoto-shrink_200_200/B56ZZB7_pKH0AY-/0/1744862968885?e=2147483647&v=beta&t=bIjcPoOAOpugrS3-DylWcH6BW8ns9VD8TeuIbYgrxXE"
            alt="Rahul"
            className="rounded-2xl shadow-lg w-72 md:w-96 object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I'm <span className="font-semibold text-indigo-600">Rahul</span>
            , a passionate <strong>React Developer</strong> with 3.5 years of
            experience in building responsive, scalable, and high-performance
            web applications. I love solving complex problems and crafting
            efficient, user-friendly solutions.
          </p>

          {/* Skills Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
