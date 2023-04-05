import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Nav } from "./styled";

export default function Header() {
  return (
    <Nav>
      <div className="navContainer">
        <Link to="/">
          <FaHome size={24} />
          Home
        </Link>
        <Link to="/login">
          <FaUserAlt size={20} />
          Login
        </Link>
        <Link to="/sigin">
          <FaSignInAlt size={24} />
          Sigin
        </Link>
      </div>
    </Nav>
  );
}
