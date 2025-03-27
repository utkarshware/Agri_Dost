import { useState } from "react";
import { FiX } from "react-icons/fi";
import { BsRobot } from "react-icons/bs";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user's message to the chat
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Call the Gemini API directly with the API key
    try {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY; // Access the API key from .env
      if (!apiKey) {
        throw new Error("Gemini API key is not defined in .env");
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are Sahayak, a helpful assistant for farmers. A farmer asks: "${input}". Provide a concise, helpful response in 1-2 sentences, focusing on agriculture-related advice or information.`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error?.message || "Failed to fetch response from Gemini API");
      }

      // Extract the generated response from the Gemini API
      const botResponse = data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't generate a response.";

      // Add the bot's response to the chat
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botResponse },
      ]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I encountered an error. Please try again!" },
      ]);
    }
  };

  return (
    <>
      {/* Floating Animated Chat Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-600 text-white rounded-full shadow-xl animate-pulse hover:animate-none hover:bg-green-700 transition"
        title="Chat with Sahayak"
      >
        <BsRobot size={24} />
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-[500px] bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-green-600">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h2 className="font-bold text-lg">Sahayak</h2>
            <button onClick={() => setIsOpen(false)}>
              <FiX size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg w-fit max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-green-100 self-end ml-auto"
                    : "bg-gray-100 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center space-x-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={sendMessage}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}