import { Player } from "@lottiefiles/react-lottie-player";
import useAuth from "../hooks/useAuth";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Spline 3D Background */}
      <iframe
        src="https://my.spline.design/dunes-23c6ed6b55185e4dea60ea129fa9fdb2/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full"
      ></iframe>

      {/* Hero Section */}
      <section className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-8 py-12 space-y-8 bg-white bg-opacity-50 backdrop-blur-md rounded-xl shadow-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-green-900">
          Welcome to Agri Dost
        </h1>
        <p className="text-xl text-gray-800">Smart Krishi ka Smart Saathi!</p>

        <div className="flex justify-center gap-4">
          <a
            href="/signup"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="px-6 py-3 border border-green-600 text-green-700 rounded-lg hover:bg-green-100 transition-transform hover:scale-105"
          >
            Learn More
          </a>
        </div>

        <div className="w-full max-w-xs mx-auto">
          <Player
            autoplay
            loop
            src={require("../assets/farming-animation.json")}
            className="w-full"
          />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="relative z-20 max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Price Prediction",
              description: "Accurate AI-driven crop price forecasts.",
              image: "https://cdn-icons-png.flaticon.com/512/1170/1170627.png",
              action: () => {
                window.location.href =
                  localStorage.getItem("isLoggedIn") === "true"
                    ? "/dashboard"
                    : "/login";
              },
              buttonLabel: "Try Prediction",
            },
            {
              title: "Alternative Crop Selection",
              description:
                "Find the best alternative crops to maximize yield and profit.",
              image: "https://cdn-icons-png.flaticon.com/512/4115/4115899.png", // Black crop icon
              action: () => {
                window.location.href =
                  localStorage.getItem("isLoggedIn") === "true"
                    ? "/dashboard"
                    : "/signup";
              },
              buttonLabel: "Select Crops",
            },
            {
              title: "AI-Powered Chatbot",
              description: "Real-time assistance in your local language.",
              image: "https://cdn-icons-png.flaticon.com/512/4712/4712036.png",
              action: () => {
                const chatbotBtn = document.querySelector(
                  "button[title='Chat with Sahayak']"
                );
                if (chatbotBtn) chatbotBtn.click();
              },
              buttonLabel: "Talk to Sahayak",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-green-700 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform text-center flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <button
                onClick={service.action}
                className="mt-auto bg-white text-green-900 font-semibold px-5 py-2 rounded-full hover:from-green-400 hover:to-green-700 hover:scale-105 transition-all duration-300"
              >
                {service.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-20 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              The Benefits of Choosing Agri Dost
            </h2>
            <p className="mt-4 text-gray-600">
              Empowering farmers with technology for predictable and profitable
              farming.
            </p>
            <a
              href="/about"
              className="mt-6 inline-flex items-center px-6 py-3 bg-green-800 text-white font-semibold rounded-lg shadow-md transition hover:bg-green-900"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-green-900 text-white p-8 rounded-xl space-y-6">
            {[
              {
                title: "Innovative Approach",
                desc: "AI-driven predictions in agriculture.",
              },
              {
                title: "Smart Crop Planning",
                desc: "Right crops, right time.",
              },
              {
                title: "Market Insights",
                desc: "Maximize profits with price forecasts.",
              },
              {
                title: "Farmer-Friendly Platform",
                desc: "Chatbots accessible in local languages.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-bold text-lg">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-green-900 text-white px-6 py-12 rounded-t-2xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold">Agri-Dost</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Smart Krishi ka Smart Saathi!
            </p>
          </div>

          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">Market Insights</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/tos">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-700 transition"
          >
            ↑ Back to Top
          </button>
        </div>

        <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
          © 2025 Agri Dost. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
