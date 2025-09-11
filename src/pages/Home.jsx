import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import farmingAnimation from "../assets/farming-animation.json";

export default function Home() {
  const services = useMemo(
    () => [
      {
        title: "Price Prediction",
        description: "Accurate AI-driven crop price forecasts.",
        image: "https://cdn-icons-png.flaticon.com/512/1170/1170627.png",
        link:
          localStorage.getItem("isLoggedIn") === "true"
            ? "/dashboard"
            : "/login",
        buttonLabel: "Try Prediction",
      },
      {
        title: "Alternative Crop Selection",
        description:
          "Find the best alternative crops to maximize yield & profit.",
        image: "https://cdn-icons-png.flaticon.com/512/4115/4115899.png",
        link:
          localStorage.getItem("isLoggedIn") === "true"
            ? "/dashboard"
            : "/signup",
        buttonLabel: "Select Crops",
      },
      {
        title: "AI-Powered Chatbot",
        description: "Real-time assistance in your local language.",
        image: "https://cdn-icons-png.flaticon.com/512/4712/4712036.png",
        buttonLabel: "Talk to Sahayak",
        action: () => document.querySelector("#chatbot")?.click(),
      },
    ],
    []
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-100">
      {/* Background */}
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
          technology.
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
          <Player autoplay loop src={farmingAnimation} className="w-full" />
        </div>
      </section>

      {/* Our Services */}
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
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              {service.link ? (
                <Link
                  to={service.link}
                  className="mt-auto bg-white text-green-900 font-semibold px-5 py-2 rounded-full hover:scale-105 transition-all"
                >
                  {service.buttonLabel}
                </Link>
              ) : (
                <button
                  onClick={service.action}
                  className="mt-auto bg-white text-green-900 font-semibold px-5 py-2 rounded-full hover:scale-105 transition-all"
                >
                  {service.buttonLabel}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-green-900 text-white p-12 rounded-t-2xl text-center">
        <h1 className="text-3xl font-extrabold">Agri Dost</h1>
        <p className="mt-2 text-gray-300">Smart Krishi ka Smart Saathi!</p>

        {/* Navigation Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/" className="hover:text-green-300 transition">
            Homepage
          </Link>
          <Link to="/contact" className="hover:text-green-300 transition">
            Contact Us
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-green-300 transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="hover:text-green-300 transition"
          >
            Terms of Service
          </Link>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300"
          aria-label="Back to Top"
        >
          ↑ Back to Top
        </button>

        {/* Copyright Section */}
        <p className="text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Agri Dost. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
