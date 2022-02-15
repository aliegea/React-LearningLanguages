import React from "react";
import avatar from "../images/avatar.png";

function Avatar() {
  return (
    <div>
      <img src={avatar} alt="dog avatar" className="avatar"></img>
    </div>
  );
}

export default Avatar;
