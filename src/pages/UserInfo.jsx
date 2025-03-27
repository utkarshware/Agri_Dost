import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import stateDistrictData from "../data/stateDistrictData"; // 👈 put the JSON in this file

export default function UserInfo() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    age: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    landSize: "",
    landUnit: "acre",
  });

  useEffect(() => {
    const savedInfo = JSON.parse(localStorage.getItem("userProfile"));
    if (savedInfo) setProfile(savedInfo);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "state") {
      setProfile({ ...profile, state: value, district: "" });
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("✅ Profile updated!");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  if (!storedUser) {
    return (
      <div className="text-center mt-20 text-red-600 text-xl font-semibold">
        User not found. Please log in again.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">
          👋 Hello, {storedUser.fullName}!
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Email: <strong>{storedUser.email}</strong>
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={profile.age}
            onChange={handleChange}
            className="p-3 border rounded"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={profile.pincode}
            onChange={handleChange}
            className="p-3 border rounded"
          />

          <select
            name="state"
            value={profile.state}
            onChange={handleChange}
            className="p-3 border rounded"
          >
            <option value="">Select State</option>
            {Object.keys(stateDistrictData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            name="district"
            value={profile.district}
            onChange={handleChange}
            className="p-3 border rounded"
            disabled={!profile.state}
          >
            <option value="">Select District</option>
            {stateDistrictData[profile.state]?.map((dist) => (
              <option key={dist} value={dist}>
                {dist}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="city"
            placeholder="City / Town / Village"
            value={profile.city}
            onChange={handleChange}
            className="p-3 border rounded"
          />

          <div className="flex gap-2">
            <input
              type="number"
              name="landSize"
              placeholder="Land Area"
              value={profile.landSize}
              onChange={handleChange}
              className="p-3 border rounded w-full"
            />
            <select
              name="landUnit"
              value={profile.landUnit}
              onChange={handleChange}
              className="p-3 border rounded"
            >
              <option value="acre">Acre</option>
              <option value="hectare">Hectare</option>
              <option value="bigha">Bigha</option>
              <option value="guntha">Guntha</option>
              <option value="sqm">Sq. Meter</option>
              <option value="sqft">Sq. Feet</option>
            </select>
          </div>
        </form>

        <div className="mt-6 flex justify-between">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Save Info
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </section>
  );
}
