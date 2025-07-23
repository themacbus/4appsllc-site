import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "./4appsllc.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);

  const navItems = [
    { to: "hero", label: "Home" },
    { to: "who-we-are", label: "Who We Are" },
    { to: "what-we-do", label: "What We Do" },
    { to: "what-sets-us-apart", label: "Why Us" },
    { to: "core-offerings", label: "Services" },
    { to: "contact", label: "Contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      setAnimateIcon(true);
      const timer = setTimeout(() => setAnimateIcon(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer flex items-center gap-2"
        >
          <img src={logo} alt="4APPS LLC Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm md:text-base">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-black hover:text-primary transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden focus:outline-none transform ${
            animateIcon ? "animate-bounce" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-opacity duration-300 ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-4 py-2 gap-4">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-black hover:text-primary transition"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
