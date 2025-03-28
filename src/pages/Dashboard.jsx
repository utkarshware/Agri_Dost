import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [formData, setFormData] = useState({
    crop: "",
    city: "",
    sowing_date: "",
    harvesting_date: "",
  });

  const [options, setOptions] = useState({ crops: [], cities: [] });
  const [prediction, setPrediction] = useState(null);
  const [advice, setAdvice] = useState("");
  const [graphUrl, setGraphUrl] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3004/options").then((res) => {
      setOptions(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", formData);
      setPrediction(res.data.predicted_price?.toFixed(2));
      setAdvice(res.data.weather_advice || "");
      setGraphUrl(res.data.graph_url || "");
    } catch (err) {
      console.error("Prediction failed:", err);
      setPrediction(null);
      setAdvice("Something went wrong while predicting.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-green-900 mb-6">
          📊 Welcome to Your Dashboard
        </h1>
        <p className="text-lg text-gray-800 mb-10">
          View your crop predictions, market insights, and AI-powered guidance.
        </p>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Crop Price Prediction
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <select
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Select Crop</option>
              {options.crops.map((crop, idx) => (
                <option key={idx} value={crop}>
                  {crop}
                </option>
              ))}
            </select>

            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Select City</option>
              {options.cities.map((city, idx) => (
                <option key={idx} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <input
              type="date"
              name="sowing_date"
              value={formData.sowing_date}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="date"
              name="harvesting_date"
              value={formData.harvesting_date}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition"
            >
              Predict Price
            </button>
          </form>

          {prediction && (
            <div className="mt-6 text-left">
              <p className="text-xl text-green-800 font-semibold">
                📉 Predicted Price: ₹ {prediction}
              </p>
              {advice && (
                <p className="text-md text-gray-700 mt-2">🌦 {advice}</p>
              )}
              {graphUrl && (
                <img
                  src={`http://127.0.0.1:5000${graphUrl}`}
                  alt="Price Trend"
                  className="mt-4 rounded-lg shadow-md"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
