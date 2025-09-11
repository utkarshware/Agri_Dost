import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    document.addEventListener("visibilitychange", checkLoginStatus);

    return () =>
      document.removeEventListener("visibilitychange", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Brand Logo */}
      <Link to="/" className="relative block leading-tight">
        <h1 className="text-4xl font-extrabold text-green-900 tracking-tight">
          Agri<span className="mx-1">-</span>
          <span className="text-green-900">Dost</span>
        </h1>
        <span
          className="absolute left-[3.0rem] top-[2.2rem] text-sm font-semibold text-gray-700"
          style={{ whiteSpace: "nowrap" }}
        >
          Smart Krishi ka Smart Saathi!
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-green-700 hover:text-green-900 font-medium transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-green-700 hover:text-green-900 font-medium transition"
        >
          About Us
        </Link>
        {isLoggedIn && (
          <Link
            to="/dashboard"
            className="text-green-700 hover:text-green-900 font-medium transition"
          >
            Dashboard
          </Link>
        )}

        {/* Authentication Buttons */}
        {isLoggedIn ? (
          <>
            <Link
              to="/user-info"
              className="text-green-700 hover:text-green-900 font-semibold hover:underline transition"
              aria-label="Go to Profile"
            >
              👤 Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              type="button"
              aria-label="Sign out"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-green-700 font-medium hover:underline"
              aria-label="Log In"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              aria-label="Sign Up"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
