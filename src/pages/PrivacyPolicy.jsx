import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl animate-fadeIn">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4 text-sm text-center">
          Last updated: March 28, 2025
        </p>

        <div className="space-y-6 text-gray-800 text-sm">
          <p>
            Welcome to Agri Dost! We value your privacy. This Privacy Policy
            explains how we collect, use, and protect your personal information.
          </p>
          <h3 className="font-semibold text-lg">1. Information We Collect</h3>
          <p>
            We collect data such as your name, email, location, and usage data
            to enhance our services.
          </p>
          <h3 className="font-semibold text-lg">2. How We Use Your Information</h3>
          <p>
            Your data is used to personalize recommendations, improve services,
            and enhance security.
          </p>
          <h3 className="font-semibold text-lg">3. Sharing and Security</h3>
          <p>
            We do not sell or share your data without your consent. Your
            information is encrypted and securely stored.
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
}