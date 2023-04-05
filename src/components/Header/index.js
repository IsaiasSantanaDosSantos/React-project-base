import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";

import { Nav } from "./styled";

export default function Header() {
  return (
    <Nav>
      <div className="navContainer">
        <a href="#">
          <FaHome size={24} />
          Home
        </a>
        <a href="#">
          <FaUserAlt size={20} />
          Login
        </a>
        <a href="#">
          <FaSignInAlt size={24} />
          Sigin
        </a>
      </div>
    </Nav>
  );
}
