import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const resumePdfUrl = "./src/Component/Bishnupada Kamila(CV).pdf";

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Side: Logo or Title */}
          <div className="flex items-center">
            <h1 className="text-white text-lg font-bold">Portfolio</h1>
          </div>

          {/* Right Side: Desktop Links */}
          <div className="ml-[-700px] hidden sm:flex sm:space-x-4">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Resume
            </Link>
            <Link
              to="/Project"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Project
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Profile Image */}
          <div className="hidden sm:block">
            <Link to="/profile">
              <img
                className="h-10 w-10 rounded-full"
                src="./ItsMe-removebg-preview.png"
                alt="Profile"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
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
                    d="M3 6h18M3 12h18m-18 6h18"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Resume
            </Link>
            <Link
              to="/Project"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Project
            </Link>
            <Link
              to="/contact"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              to="/profile"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
