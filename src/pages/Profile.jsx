import React from "react";
import { useNavigate, Navigate } from "react-router-dom"; // Import Navigate
import useAuth from "../hooks/useAuth";

export default function Profile() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // Get authentication status
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />; // Redirect if not logged in
  }

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Welcome, {storedUser?.fullName}!</h2>
        <p>Email: {storedUser?.email}</p>

        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Sign Out
        </button>
      </div>
    </section>
  );
}
