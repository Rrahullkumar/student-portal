import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config.js";

function Register() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Password Confirmation Check
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    
    await axios.post(`${API_BASE_URL}/api/auth/register`, form);
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-purple-300">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>

        <div className="space-y-4">
          <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" placeholder="Full Name" required
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
          />
          
          <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" placeholder="Username" required
            onChange={(e) => setForm({ ...form, username: e.target.value })} 
          />
          
          <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email" placeholder="Email Address" required
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
          />
          
          <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel" placeholder="Phone Number" required
            onChange={(e) => setForm({ ...form, phone: e.target.value })} 
          />

          <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password" placeholder="Password" required
            onChange={(e) => setForm({ ...form, password: e.target.value })} 
          />

          <input className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password" placeholder="Confirm Password" required
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} 
          />

          <button className="w-full bg-blue-600 text-white p-3 rounded font-bold text-lg cursor-pointer hover:bg-blue-700 transition duration-300">
            Register
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Register;

