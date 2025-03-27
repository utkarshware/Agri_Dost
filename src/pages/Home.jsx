import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/farming-animation.json";

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-green-100 to-green-200 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        {/* Animated Lottie */}
        <div>
          <Player
            autoplay
            loop
            src={animationData}
            className="w-full h-full max-w-md mx-auto"
          />
        </div>

        {/* Hero Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 animate-fadeIn">
            Welcome to Agri Dost 🌱
          </h1>
          <p className="text-lg text-gray-700 mb-6 animate-fadeIn delay-100">
            Empowering farmers with AI-driven crop predictions and smart
            decisions.
          </p>
          <div className="space-x-4">
            <a
              href="/signup"
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="px-6 py-3 border border-green-600 text-green-700 rounded-lg hover:bg-green-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
