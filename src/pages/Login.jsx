export default function Login() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md animate-fadeIn">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Log In to Agri Dost
        </h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}
