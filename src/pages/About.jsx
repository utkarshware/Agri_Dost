import { FiGithub, FiLinkedin } from "react-icons/fi";

// Import images
import zubinImage from "../assets/zubin.jpg";
import DivImage from "../assets/divyansh.jpg";
import kashifImage from "../assets/kashif.jpg";
import utkarshImage from "../assets/utkarsh.jpg";
import coderBabassOG from "../assets/coderBabassOG.jpg"; // ✅ Team photo

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Zubin Patnaik",
      github: "https://github.com/zubinpatnaik",
      linkedin: "https://www.linkedin.com/in/zubin-patnaik-a595a4298/",
      image: zubinImage,
      role: (
        <>
          <p>Robotics & Automation (1st Year)</p>
          <p>Data scraping & chatbot integration</p>
        </>
      ),
    },
    {
      name: "Utkarsh Singh",
      github: "https://github.com/Utkarzxhh",
      linkedin: "https://www.linkedin.com/in/profileofutkarshsingh/",
      image: utkarshImage,
      role: (
        <>
          <p>Robotics & Automation (1st Year)</p>
          <p>Website development & UI/UX</p>
        </>
      ),
    },
    {
      name: "Kashif Kamran",
      github: "https://github.com/kashifkamran",
      linkedin: "https://linkedin.com/in/kashifkamran",
      image: kashifImage,
      role: (
        <>
          <p>AI & ML (1st Year)</p>
          <p>AI-powered Chatbot</p>
        </>
      ),
    },
    {
      name: "Divyansh Agarwal",
      github: "https://github.com/divyanshAgarwal123",
      linkedin: "https://www.linkedin.com/in/divyansh-agarwal-875095345/",
      image: DivImage,
      role: (
        <>
          <p>AI & ML (1st Year)</p>
          <p>Price Prediction ML Model</p>
        </>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex flex-col items-center py-12 px-4">
      {/* Intro Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-green-800 mb-6">
          About the Team
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4 px-4 sm:px-8">
          We are <strong>Team Coder Babass</strong>, first-year B.Tech students
          from <strong>Symbiosis Institute of Technology, Pune</strong>. With a
          shared passion for innovation, we aim to bridge the gap between
          agriculture and technology through Agri Dost.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4 px-4 sm:px-8">
          <strong>🚨 The Problem:</strong> Between 2020 and 2024, over 60% of
          Indian farmers suffered financial losses due to unpredictable market
          prices. This volatility caused <strong>16 million tons</strong> of
          crop wastage and contributed to{" "}
          <strong>12,000+ farmer suicides</strong> annually.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8 px-4 sm:px-8">
          <strong>💡 Our Solution:</strong> Agri Dost provides AI-powered tools
          for price prediction, alternative crop suggestions, and real-time
          chatbot support — empowering farmers with knowledge and confidence.
        </p>

        <img
          src={coderBabassOG}
          alt="Team Coder Babass"
          className="w-full object-cover rounded-xl shadow-lg max-h-[500px]"
        />
      </div>

      {/* Team Cards */}
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-green-700 mb-1">
                {member.name}
              </h3>
              <div className="text-sm text-gray-600 mb-4">{member.role}</div>
              <div className="flex space-x-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  <FiGithub size={22} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  <FiLinkedin size={22} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
