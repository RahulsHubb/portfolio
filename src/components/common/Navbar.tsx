import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <nav className="w-full bg-gray-100 dark:bg-gray-900 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white drop-shadow">PMP</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="relative cursor-pointer transition-colors duration-300 
                         hover:text-green-400 after:content-[''] after:absolute after:left-0 
                         after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-green-400 
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              <Link to={`/${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <Link
          to="/resume.pdf"
          className="hidden md:inline-block bg-black text-white font-semibold px-4 py-2 rounded-lg
                     shadow-[0_0_20px_rgba(255,255,255,0.6)] 
                     hover:shadow-[0_0_25px_rgba(0,255,128,0.8)]
                     hover:opacity-90 
                     transition duration-300"
        >
          Let&apos;s Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 px-6 py-6 space-y-4 text-center">
          {navLinks.map((link) => (
            <p
              key={link}
              className="text-white font-medium cursor-pointer transition-colors duration-300 hover:text-green-400"
            >
              {link}
            </p>
          ))}
          <Link
            to="/resume.pdf"
            className="block bg-black text-white font-semibold px-4 py-2 rounded-lg 
                       shadow-[0_0_20px_rgba(255,255,255,0.6)] 
                       hover:shadow-[0_0_25px_rgba(0,255,128,0.8)]
                       hover:opacity-90 
                       transition duration-300"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
