import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  return (
    <div className="bg-slate-800 h-16 px-16 items-center flex">
      <h1 className="text-3xl font-bold text-green-500">
        EM Service Incharge
      </h1>
      <div className="space-x-4 ml-auto">
        <Link className="hover:text-blue-400 text-white" to="/">Home</Link>
        {isAuthenticated && (
          <Link className="hover:text-blue-400 text-white" to="/profile">Profile</Link>
        )}
        {!isAuthenticated ? (
          <Link className="hover:text-blue-400 text-white" to="/login">Login</Link>
        ) : (
          <Link className="hover:text-blue-400 text-white" to="/profile">Logout</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
