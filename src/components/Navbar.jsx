import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-80 transition duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide text-green-700 hover:text-green-900 transition duration-300"
        >
          Agri Dost
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700 text-lg">
          <li>
            <Link
              to="/"
              className="relative group hover:text-green-600 transition"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <button
              onClick={handleDashboardClick}
              className="relative group hover:text-green-600 transition"
            >
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <Link
              to="/about"
              className="relative group hover:text-green-600 transition"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex space-x-4 items-center">
          {/* Log In Button */}
          <Link
            to="/login"
            className="relative group px-4 py-2 text-green-700 border border-green-600 rounded-lg font-medium transition-transform duration-300 hover:scale-105 hover:bg-green-50 hover:shadow-md"
          >
            Log In
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Sign Up Button */}
          <Link
            to="/signup"
            className="relative px-4 py-2 bg-green-600 text-white rounded-lg font-semibold transition-all duration-300 shadow hover:bg-green-700 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">Sign Up</span>
            <div className="absolute inset-0 rounded-lg bg-green-800 opacity-0 group-hover:opacity-10 transition-all duration-300" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-green-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-4 bg-white shadow-inner space-y-4">
          <Link
            to="/"
            className="block text-lg text-gray-700 hover:text-green-600"
          >
            Home
          </Link>
          <button
            onClick={handleDashboardClick}
            className="block text-lg text-gray-700 hover:text-green-600"
          >
            Dashboard
          </button>
          <Link
            to="/about"
            className="block text-lg text-gray-700 hover:text-green-600"
          >
            About Us
          </Link>
          <hr />
          <Link to="/login" className="block text-green-700">
            Log In
          </Link>
          <Link
            to="/signup"
            className="block bg-green-600 text-white text-center py-2 rounded"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
