import { useNavigate } from "react-router-dom";

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-green-800">Terms of Service</h1>
        <p className="text-sm text-gray-500">Last updated: March 28, 2025</p>
        <p className="mt-4">
          Welcome to <strong>Agri Dost</strong>! By using our services, you agree to the following terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. User Responsibilities</h2>
        <p>Users must provide accurate information and follow ethical guidelines while using Agri Dost.</p>

        <h2 className="text-2xl font-semibold mt-6">2. Service Limitations</h2>
        <p>We strive for accuracy, but we do not guarantee 100% precision in predictions and insights.</p>

        <h2 className="text-2xl font-semibold mt-6">3. Changes to Terms</h2>
        <p>We may update these terms periodically. Continued use of our platform constitutes agreement to updated terms.</p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          Back to Home
        </button>
      </section>
    </main>
  );
}