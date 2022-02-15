import React from "react";
import Listen from "./Listen";
import Title from "./Title";
import User from "./User";

function DesktopTop() {
  return (
    <div className="topDiv">
      <Title />
      <User />
      <Listen />
    </div>
  );
}

export default DesktopTop;
