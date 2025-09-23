import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left: Branding */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Rahul Dewal. All rights reserved.
        </p>

        {/* Middle: Quick Links */}
        <ul className="flex space-x-6 text-gray-600 dark:text-gray-300 text-sm">
          <li>
            <Link to="#home" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="#about" className="hover:text-indigo-600">
              About
            </Link>
          </li>
          <li>
            <Link to="#projects" className="hover:text-indigo-600">
              Projects
            </Link>
          </li>
          <li>
            <Link to="#contact" className="hover:text-indigo-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Social Icons */}
        <div className="flex space-x-6">
          <Link
            to="mailto:your@email.com"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600"
          >
            <Mail size={20} />
          </Link>
          <Link
            to="https://github.com/yourusername"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600"
          >
            <Github size={20} />
          </Link>
          <Link
            to="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            to="https://twitter.com/yourusername"
            target="_blank"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600"
          >
            <Twitter size={20} />
          </Link>
        </div>
      </div>

      {/* Bottom: Tagline */}
      <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        Built with ❤️ using React + TailwindCSS
      </div>
    </footer>
  );
};

export default Footer;
