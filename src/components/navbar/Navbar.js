import "./Navbar.css";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";

export default function Navbar() {
  const [clickMenu, setClickMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <BsFillHouseFill /> Real
          </span>
          State
        </h1>
        <button className="btn">Sign In</button>
        <ul className={clickMenu ? "nav-menu" : "nav-menu active"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div
          onClick={() => {
            setClickMenu(!clickMenu);
          }}
          className="hamburger"
        >
          {!clickMenu ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}
