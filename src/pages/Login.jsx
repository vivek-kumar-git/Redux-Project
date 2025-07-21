import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Handle login logic here
    toast.success("Logged in successfully!");
    setTimeout(() => {
      navigate("/");
    }, 1200); // Give user time to see the toast
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-emerald-100 to-blue-300 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-blue-100 relative overflow-hidden">
        {/* Decorative Gradient Circle */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 via-emerald-300 to-cyan-400 opacity-30 rounded-full blur-2xl pointer-events-none"></div>
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-400 to-cyan-500 mb-2 tracking-tight drop-shadow">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-8 text-base">
          Sign in to your <span className="font-bold text-blue-500">ShopNest</span> account
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-50 transition placeholder:text-gray-400"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-50 transition placeholder:text-gray-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="accent-blue-500 rounded" />
              <label htmlFor="remember" className="text-sm text-gray-600 select-none">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline font-medium">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-emerald-400 to-cyan-400 text-white py-3 rounded-xl font-extrabold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 text-lg tracking-wide"
          >
            Login
          </button>
        </form>
        <p className="mt-8 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-blue-500 hover:underline font-semibold transition bg-transparent border-none outline-none cursor-pointer"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};
export default Login;