import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
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
        "Find the best alternative crops to maximize yield & profit.",
      image: "https://cdn-icons-png.flaticon.com/512/4115/4115899.png",
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
        document.querySelector("button[title='Chat with Sahayak']")?.click();
      },
      buttonLabel: "Talk to Sahayak",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-100">
      {/* Spline 3D Background */}
      <iframe
        src="https://my.spline.design/dunes-23c6ed6b55185e4dea60ea129fa9fdb2/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full"
        title="3D Background"
      ></iframe>

      {/* Hero Section */}
      <section className="relative z-20 mx-auto max-w-5xl text-center p-12 space-y-8 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-green-900">
          Welcome to Agri Dost
        </h1>
        <p className="text-xl text-gray-800">
          Your trusted companion in modern farming, bridging tradition &
          technology. Smart solutions, AI insights & predictive analytics for a
          sustainable future.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/learn-more"
            className="px-6 py-3 border border-green-600 text-green-700 rounded-lg hover:bg-green-100 transition-transform hover:scale-105"
          >
            Learn More
          </Link>
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
      <section className="relative z-20 mx-auto max-w-6xl my-16 px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-green-700 text-white p-6 rounded-lg shadow-xl hover:scale-105 transition-transform flex flex-col"
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
                className="mt-auto bg-white text-green-900 font-semibold px-5 py-2 rounded-full hover:scale-105 transition-all"
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
              Why Choose Agri Dost?
            </h2>
            <p className="mt-4 text-gray-600">
              AI-powered insights for predictable & profitable farming.
            </p>
            <Link
              to="/learn-more"
              className="mt-6 inline-block px-6 py-3 bg-green-800 text-white font-semibold rounded-lg shadow-md transition hover:bg-green-900"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-green-900 text-white p-8 rounded-xl space-y-6">
            {[
              {
                title: "AI-Driven Insights",
                desc: "Make data-backed agricultural decisions.",
                icon: "https://cdn-icons-png.flaticon.com/128/1087/1087927.png",
              },
              {
                title: "Smart Crop Planning",
                desc: "Choose the best crops based on climate & market trends.",
                icon: "https://cdn-icons-png.flaticon.com/128/9923/9923298.png",
              },
              {
                title: "Market Intelligence",
                desc: "Price forecasts for maximizing profits.",
                icon: "https://cdn-icons-png.flaticon.com/128/3144/3144456.png",
              },
              {
                title: "Farmer-Friendly Platform",
                desc: "Accessible chatbots & guidance in local languages.",
                icon: "https://cdn-icons-png.flaticon.com/128/1189/1189175.png",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-8 h-8"
                />
                <div>
                  <h3 className="font-bold text-lg">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-green-900 text-white p-12 rounded-t-2xl text-center">
        <h1 className="text-3xl font-extrabold">Agri Dost</h1>
        <p className="mt-2 text-gray-300">Smart Krishi ka Smart Saathi!</p>

        <div className="mt-6 flex justify-center gap-6 text-sm">
          <Link to="/">Homepage</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/tos">Terms of Service</Link>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-700 transition"
        >
          ↑ Back to Top
        </button>

        <p className="text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
          © 2025 Agri Dost. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
