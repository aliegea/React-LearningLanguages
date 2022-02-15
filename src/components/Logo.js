import React from "react";
import logo from "../images/logo.png";

function Logo() {
  return (
    <div className="logoDiv">
      <img
        src={logo}
        alt="kurukat logo"
        width="100px"
        height="100px"
        className="logo"
      ></img>
    </div>
  );
}

export default Logo;
