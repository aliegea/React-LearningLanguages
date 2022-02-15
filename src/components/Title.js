import React from "react";
import MainTitle from "./MainTitle";
import Subtitle from "./Subtitle";

function Title() {
  let Title = "Ordena la frase";
  let exercise = "Exercici 1";
  return (
    <div className="title">
      <MainTitle text={Title} />
      <Subtitle text={exercise} />
    </div>
  );
}

export default Title;
