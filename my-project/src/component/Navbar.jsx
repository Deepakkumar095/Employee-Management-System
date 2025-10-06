import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  return (
    <div className="bg-slate-800 h-16 px-16 items-center flex">
      <h1 className="text-3xl font-bold text-green-500">
        EM Service Incharge
      </h1>
      
    </div>
  );
};

export default Navbar;
