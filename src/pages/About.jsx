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
    },
    {
      name: "Utkarsh Singh",
      github: "https://github.com/Utkarzxhh",
      linkedin: "https://www.linkedin.com/in/profileofutkarshsingh/",
      image: utkarshImage,
    },
    {
      name: "Kashif Kamran",
      github: "https://github.com/kashifkamran",
      linkedin: "https://linkedin.com/in/kashifkamran",
      image: kashifImage,
    },
    {
      name: "Divyansh Agarwal",
      github: "https://github.com/divyanshAgarwal123",
      linkedin: "https://www.linkedin.com/in/divyansh-agarwal-875095345/",
      image:DivImage,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex flex-col items-center py-12 px-4">
      {/* Introduction Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl mb-12 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">About Agri Dost</h1>
        <p className="text-gray-600 mb-6">
          Agri Dost is a platform dedicated to empowering farmers with modern technology. Our flagship feature, the Sahayak chatbot, provides real-time agricultural advice to help farmers make informed decisions. Built with passion by a team of innovators, Agri Dost aims to bridge the gap between technology and agriculture.
        </p>
        {/* Group Photo */}
        <img
          src={groupImage}
          alt="Agri Dost Team"
          className="w-full max-h-25 object-contain rounded-lg"
        />
      </div>

      {/* Team Section */}
      <div className="w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center"
            >
              {/* Individual Photo or Placeholder */}
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
              ) : (
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gray-500 text-sm text-center">
                    Photo Placeholder
                  </span>
                </div>
              )}
              <h3 className="text-lg font-semibold text-green-600 mb-2">
                {member.name}
              </h3>
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