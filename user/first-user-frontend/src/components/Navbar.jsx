import React from "react";
import "../style/navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="buttons">
        <button>About</button>
        <button>Donate</button>
        <button>My Profile</button>
      </div>
    </div>
  );
};

export default Navbar;