import React, { useState } from "react";

function Word(props) {
  return <div onClick={props.onClicked}>{props.text}</div>;
}

export default Word;
