import React, { useState } from "react";
import Word from "./word";
import ResetBtn from "./ResetBtn";
import swithClass from "./SwitchClass";

const sentence = "Avui la Maria va a l'escola.";
// convert sentence in array of words & rearrenge array randomly. Out of the main function to avoid rearrange with window resize.
const words = sentence.split(" ").sort((a, b) => 0.5 - Math.random());
function WordsBtns() {
  const [clickedWords, setClickedWords] = useState([]);

  function handleClick(event) {
    let newInput = event.target.innerText;
    event.target.classList.add("opacity");
    //to avoid repetition
    if (!clickedWords.includes(newInput)) {
      setClickedWords((prevWords) => {
        return [...prevWords, newInput];
      });
    }
  }
  //empty array and remove opacity of previous clicked buttons
  function reset() {
    setClickedWords([]);
    let buttons = document.querySelectorAll(".buttons div");
    swithClass(buttons, "opacity");
  }

  return (
    <div>
      <ResetBtn onClicked={reset} />
      <div className="listenDiv">
        <div className="sentence">
          <p className="sentenceText">{clickedWords.join(" ")}</p>
        </div>
      </div>

      <div className="buttons">
        {words.map((word, index) => (
          <Word key={index} id={index} text={word} onClicked={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default WordsBtns;
