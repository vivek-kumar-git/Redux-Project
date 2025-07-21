import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // TODO: Add actual sign-up logic here
    toast.success("Account created successfully!");
    setTimeout(() => {
      navigate("/login");
    }, 1200); // Give user time to see the toast
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-emerald-100 to-blue-300 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-blue-100 relative overflow-hidden">
        {/* Decorative Gradient Circle */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400 via-emerald-300 to-cyan-400 opacity-30 rounded-full blur-2xl pointer-events-none"></div>
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-400 to-cyan-500 mb-2 tracking-tight drop-shadow">
          Create Account 🚀
        </h2>
        <p className="text-center text-gray-500 mb-8 text-base">
          Join <span className="font-bold text-blue-500">ShopNest</span> and start your journey!
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-50 transition placeholder:text-gray-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-50 transition placeholder:text-gray-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-50 transition placeholder:text-gray-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-50 transition placeholder:text-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-emerald-400 to-cyan-400 text-white py-3 rounded-xl font-extrabold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 text-lg tracking-wide"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-8 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline font-semibold transition bg-transparent border-none outline-none cursor-pointer"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};
export default Signup;