import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to check active route
  const isActive = (path) => location.pathname === path;

  // Common class generator
  const navLinkClass = (path) =>
    `relative transition-colors ${
      isActive(path)
        ? "text-brand-red after:w-full"
        : "text-gray-700 hover:text-brand-red after:w-0 hover:after:w-full"
    } after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-brand-red after:transition-all`;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-brand-gold-light">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-3 group"
        >
          <img
            src={logo}
            className="w-16 h-16 md:w-18 md:h-20 transform group-hover:scale-105 transition"
            alt="Kartavya IAS Logo"
          />
          <h1 className="font-extrabold text-xl md:text-2xl">
            <span className="text-brand-red">Kartavya</span>{" "}
            <span className="text-brand-blue">IAS</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 font-semibold">
          <Link to="/demo" className={navLinkClass("/demo")}>Demo Lectures</Link>
          <Link to="/demo-pdfs" className={navLinkClass("/demo-pdfs")}>Free PDFs</Link>
          <Link to="/quiz" className={navLinkClass("/quiz")}>Practice Quiz</Link>
          <Link to="/courses" className={navLinkClass("/courses")}>Courses</Link>
          <Link to="/about" className={navLinkClass("/about")}>About Us</Link>
          <Link to="/contact" className={navLinkClass("/contact")}>Contact</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link
            to="/courses"
            className="hidden sm:inline-block bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white font-bold px-5 py-2 rounded-full shadow-lg hover:-translate-y-0.5 transition"
          >
            Enroll Now
          </Link>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-brand-blue p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor">
              {isOpen ? (
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <div className="flex flex-col px-6 py-4 gap-4 font-bold text-lg">

            {[
              { name: "Home", path: "/" },
              { name: "Demo Lectures", path: "/demo" },
              { name: "Free PDFs", path: "/demo-pdfs" },
              { name: "Practice Quiz", path: "/quiz" },
              { name: "Courses", path: "/courses" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`border-b pb-2 ${
                  isActive(item.path)
                    ? "text-brand-red font-extrabold"
                    : "text-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="sm:hidden text-center mt-2 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white px-6 py-3 rounded-full"
            >
              Enroll Now
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;