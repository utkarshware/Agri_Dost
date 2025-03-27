import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-green-700">
        Agri-Dost
      </Link>

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
          About
        </Link>

        <Link
          to="/dashboard"
          className="text-green-700 hover:text-green-900 font-medium transition"
        >
          Dashboard
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              to="/userinfo"
              className="text-green-700 hover:text-green-900 font-semibold hover:underline transition"
            >
              👤 Profile
            </Link>
            <button
              onClick={onLogout}
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
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
