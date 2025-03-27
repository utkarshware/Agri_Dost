export default function About() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">
          About Agri Dost 🌾
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Agri Dost empowers farmers with predictive analytics, crop
          suggestions, and market awareness — helping them grow smarter, not
          just harder.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="bg-green-50 p-6 rounded-xl shadow-md w-full max-w-sm">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              🔍 Data-Driven
            </h3>
            <p className="text-gray-600 text-sm">
              We use real-time agri data and ML to guide farmers.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl shadow-md w-full max-w-sm">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              🤝 Farmer First
            </h3>
            <p className="text-gray-600 text-sm">
              Built with empathy and tested in the fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
