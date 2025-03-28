import React from "react";

export default function LearnMore() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-green-800 text-center mb-10">
          Learn More About Agri-Dost
        </h1>

        {/* Introduction Section */}
        <section className="mb-12 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-green-700">
            What is Agri-Dost?
          </h2>
          <p className="mt-4 text-gray-700">
            Agri-Dost is an AI-powered agricultural platform that helps farmers
            with data-driven insights for smart farming decisions. The platform
            provides crop price predictions, alternative crop recommendations,
            and weather suitability analysis to improve efficiency and
            profitability.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-12 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-green-700">
            Key Features
          </h2>
          <ul className="mt-4 space-y-4 text-gray-700">
            <li>
              <strong>🌱 Crop Price Prediction:</strong> AI-based analysis to
              forecast market trends.
            </li>
            <li>
              <strong>🌾 Alternative Crop Selection:</strong> Smart
              recommendations based on soil, climate, and demand.
            </li>
            <li>
              <strong>☁️ Weather Suitability Analysis:</strong> Checks climate
              conditions for crop viability.
            </li>
            <li>
              <strong>💻 Local Hosting:</strong> Runs on a local server without
              external databases.
            </li>
          </ul>
        </section>

        {/* How to Use Section */}
        <section className="mb-12 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-green-700">
            How to Use Agri-Dost
          </h2>
          <ol className="mt-4 space-y-4 list-decimal pl-6 text-gray-700">
            <li>Clone the repository from your local system.</li>
            <li>
              Install dependencies using:{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">npm install</code>
            </li>
            <li>
              Start the local server with:{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">npm start</code>
            </li>
            <li>
              Access the app in your browser at{" "}
              <strong>http://localhost:3000/</strong>
            </li>
          </ol>
        </section>

        {/* Future Enhancements Section */}
        <section className="mb-12 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-green-700">
            Future Enhancements
          </h2>
          <ul className="mt-4 space-y-4 text-gray-700">
            <li>📱 Mobile App Version (Android & iOS)</li>
            <li>🔬 AI-Based Advanced Crop Optimization</li>
            <li>🌍 Enhanced Weather Data Integration</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 text-sm">
          &copy; 2025 Agri-Dost. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
