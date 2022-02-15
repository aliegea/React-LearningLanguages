import React from "react";
import reset from "../images/Icono3.png";

function ResetBtn(props) {
  return (
    <div className="listenDiv">
      <img
        src={reset}
        alt="reset icon"
        className="listenIcon"
        onClick={props.onClicked}
        role="button"
      ></img>
    </div>
  );
}

export default ResetBtn;
