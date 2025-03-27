import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // replace with real auth later
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login"); // or navigate("/signup");
    }
  };

  return (
    <nav className="bg-white shadow-md px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-green-700 tracking-wide">
        Agri Dost
      </div>

      <ul className="flex items-center space-x-8 text-gray-700 font-medium">
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

      <div className="space-x-3">
        <Link
          to="/login"
          className="text-green-600 font-semibold hover:underline"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
