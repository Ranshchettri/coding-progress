import React from "react";
// import { Link, Links, NavLink, Outlet } from "react-router";
import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About" 
             className={({ isActive }) => (isActive ? "active" : "")}>
About</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
