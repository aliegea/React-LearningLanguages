import React from "react";

import Exercise from "./Exercise";

import WordsBtns from "./WordsBtns";

function MainContent() {
  const exercise = "Ordena la frase amb les paraules correctes";

  return (
    <div className="mainContent">
      <div className="leftContent">
        <Exercise text={exercise} />
      </div>
      <div className="rightContent">
        <WordsBtns />
      </div>
    </div>
  );
}

export default MainContent;
