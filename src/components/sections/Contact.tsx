import { Mail, Github, Linkedin, Twitter, GithubIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Let’s Connect 🚀
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I’m always open to discussing new opportunities, exciting
              projects, or collaborations. Drop me a message and I’ll get back
              to you as soon as possible!
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 pt-4">
              <Link
                to="mailto:your@email.com"
                className="text-indigo-600 hover:text-indigo-800"
              >
                <Mail size={28} />
              </Link>
              <Link
                to="https://github.com/yourusername"
                target="_blank"
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
              >
                <GithubIcon size={28} />
              </Link>
              <Link
                to="https://linkedin.com/in/yourusername"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                <Linkedin size={28} />
              </Link>
              <Link
                to="https://twitter.com/yourusername"
                target="_blank"
                className="text-sky-500 hover:text-sky-700"
              >
                <Twitter size={28} />
              </Link>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
