import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo + Tagline */}
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

      {/* Navigation links */}
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
