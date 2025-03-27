import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({ user, onLogout }) {
  const navigate = useNavigate();
  const storedUser = user || JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    if (onLogout) onLogout();
    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
          👤 Welcome, {storedUser?.fullName || "User"}!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Email: <strong>{storedUser?.email}</strong>
        </p>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition"
        >
          Sign Out
        </button>
      </div>
    </section>
  );
}
