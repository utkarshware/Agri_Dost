import { FiGithub, FiLinkedin } from "react-icons/fi";

// Import images
import zubinImage from "../assets/zubin.jpg";
import DivImage from "../assets/divyansh.jpg";
import kashifImage from "../assets/kashif.jpg";
import utkarshImage from "../assets/utkarsh.jpg";
import groupImage from "../assets/group.jpg";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Zubin Patnaik",
      github: "https://github.com/zubinpatnaik",
      linkedin: "https://www.linkedin.com/in/zubin-patnaik-a595a4298/",
      image: zubinImage,
      role: "Robotics & Automation (1st Year) - Data scraping",
    },
    {
      name: "Utkarsh Singh",
      github: "https://github.com/Utkarzxhh",
      linkedin: "https://www.linkedin.com/in/profileofutkarshsingh/",
      image: utkarshImage,
      role: "Robotics & Automation (1st Year) - Website development ",
    },
    {
      name: "Kashif Kamran",
      github: "https://github.com/kashifkamran",
      linkedin: "https://linkedin.com/in/kashifkamran",
      image: kashifImage,
      role: "AI & ML (1st Year) - AI-powered chatbot",
    },
    {
      name: "Divyansh Agarwal",
      github: "https://github.com/divyanshAgarwal123",
      linkedin: "https://www.linkedin.com/in/divyansh-agarwal-875095345/",
      image: DivImage,
      role: "AI & ML (1st Year) - Machine Learning Model ",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex flex-col items-center py-12 px-4">
      {/* Introduction Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-green-800 mb-6">
          About the Team
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6 px-4 sm:px-8">
          We are team <strong>Coder Babass </strong>, a team of first-year
          students from <strong>Symbiosis Institute of Technology, Pune</strong>
          , united by our passion to bridge the gap between agriculture and
          technology. With diverse skills across Machine Learning, AI, and
          Robotics, we built Agri Dost to empower Indian farmers with
          data-driven insights and accessible tools.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6 px-4 sm:px-8">
          <strong>🚨 The Problem:</strong> Between 2020 to 2024, over 60% of
          Indian farmers reported financial losses due to the unpredictable
          nature of agricultural market prices. This volatility led to
          <strong> 16 million tons of crop wastage</strong> and contributed to
          more than <strong>12,000 farmer suicides annually</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-10 px-4 sm:px-8">
          <strong>💡 Our Solution:</strong> Agri Dost - Smart Krishi ka Smart
          Saathi!, uses AI-powered tools to provide crop price predictions,
          alternative crop suggestions, and a multilingual chatbot to guide
          farmers in making smarter, risk-free decisions.
        </p>

        <img
          src={groupImage}
          alt="Agri Dost Team"
          className="w-full object-contain rounded-xl shadow-md max-h-[550px]"
        />
      </div>

      {/* Team Section */}
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
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{member.role}</p>
              <div className="flex space-x-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
