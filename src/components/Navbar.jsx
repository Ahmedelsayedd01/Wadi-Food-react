import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="wrap">
        <li>
          <NavLink className="nav-list" to={"/aboutus"}>About Us</NavLink>
        </li>
        <li>
          <NavLink className="nav-list" to={"/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink className="nav-list" to={"/contactus"}>Content Us</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
