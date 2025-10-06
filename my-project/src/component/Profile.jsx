import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="max-w-lg mx-auto my-20 bg-slate-700 text-white rounded shadow-lg p-6">
      <h2 className="text-3xl font-bold text-green-400 mb-4">User Profile</h2>
      <p className="mb-2">👤 Username: <span className="font-semibold">admin</span></p>
      <p className="mb-2">📧 Email: <span className="font-semibold">admin@example.com</span></p>
      <p className="mb-6">📱 Phone: <span className="font-semibold">+91 9876543210</span></p>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 py-2 px-6 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
