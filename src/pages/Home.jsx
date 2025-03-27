import { Player } from "@lottiefiles/react-lottie-player";

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden flex justify-center items-center">
      {/* Spline 3D Background (fullscreen) */}
      <iframe
        src="https://my.spline.design/dunes-23c6ed6b55185e4dea60ea129fa9fdb2/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full"
      ></iframe>

      {/* Overlay content (centered) */}
      <div className="relative z-20 max-w-3xl px-4 md:px-8 py-8 bg-white bg-opacity-50 backdrop-blur-md rounded-xl shadow-xl text-center space-y-6 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-bold text-green-900">
          Welcome to Agri-Dost
        </h1>

        <p className="text-xl text-gray-800">Smart Krishi ka Smart Saathi!</p>

        {/* Buttons */}
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

        {/* Lottie animation */}
        <div className="w-full max-w-xs mx-auto">
          <Player
            autoplay
            loop
            src={require("../assets/farming-animation.json")}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
