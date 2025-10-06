import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login check (replace with API later)
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true);
      localStorage.setItem("auth", "true"); // persist login
      navigate("/profile");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="max-w-md mx-auto my-20  text-white rounded shadow-lg p-6 bg-slate-600">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 text-black rounded bg-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 text-black rounded bg-white"
        />
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
