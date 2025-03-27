export default function Dashboard() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-green-900 mb-6">
          📊 Welcome to Your Dashboard
        </h1>
        <p className="text-lg text-gray-800 mb-10">
          View your crop predictions, market insights, and agri-advice in
          real-time.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              📈 Crop Prediction
            </h3>
            <p className="text-gray-600 text-sm">
              ML-based price prediction at harvest time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              🌦 Weather Impact
            </h3>
            <p className="text-gray-600 text-sm">
              See how climate conditions affect yields.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              🧠 Crop Recommender
            </h3>
            <p className="text-gray-600 text-sm">
              Get smart suggestions based on region + demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
