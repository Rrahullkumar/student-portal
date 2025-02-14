import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config.js";

function Login({ onLogin }) {  // Accept onLogin prop
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, form);
      
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        onLogin(res.data.token);  // Update authentication state
        navigate("/dashboard");   // Redirect after login
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-purple-400">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>
        <input 
          className="border p-2 w-full mb-2" 
          placeholder="Email" 
          value={form.email} 
          onChange={(e) => setForm({ ...form, email: e.target.value })} 
        />
        <input 
          className="border p-2 w-full mb-2" 
          type="password" 
          placeholder="Password" 
          value={form.password} 
          onChange={(e) => setForm({ ...form, password: e.target.value })} 
        />
        <button className="bg-blue-600 text-white p-2 w-full rounded cursor-pointer">Login</button>
      </form>
    </div>
  );
}

export default Login;
