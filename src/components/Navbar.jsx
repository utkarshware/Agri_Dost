import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

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
            <Link to="/" className="hover:text-green-600 transition">
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={handleDashboardClick}
              className="hover:text-green-600 transition"
            >
              Dashboard
            </button>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600 transition">
              About Us
            </Link>
          </li>
        </ul>

        {/* Auth or Profile */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <span className="text-green-700 font-semibold">👤 User</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-green-700 font-medium hover:underline"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-green-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Nav */}
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
          {isLoggedIn ? (
            <>
              <span className="block text-green-700">👤 User</span>
              <button
                onClick={handleLogout}
                className="block w-full bg-red-500 text-white text-center py-2 rounded"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block text-green-700">
                Log In
              </Link>
              <Link
                to="/signup"
                className="block bg-green-600 text-white text-center py-2 rounded"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
