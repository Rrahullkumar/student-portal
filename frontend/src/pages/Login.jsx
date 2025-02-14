import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config.js";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${API_BASE_URL}/api/auth/login`, form);
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-purple-400">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>
        <input className="border p-2 w-full mb-2" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="border p-2 w-full mb-2" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="bg-blue-600 text-white p-2 w-full rounded cursor-pointer">Login</button>
      </form>
    </div>
  );
}

export default Login;
