import React, { useState, useEffect } from "react";
import "./App.css";
import desktopBg from "./images/DesktopBg.png";
import mobileBg from "./images/MobileBg.png";
import DesktopTop from "./components/DesktopTop";
import MobileTop from "./components/MobileTop";

import MainContent from "./components/MainContent";

const App = () => {
  //check size of the scree to display background Image and header accordingly.
  const [winWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = winWidth >= 1200 ? desktopBg : mobileBg;
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="bgDiv" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="contentDiv">
        {winWidth >= 1200 ? <DesktopTop /> : <MobileTop />}
        <MainContent />
      </div>
    </div>
  );
};

export default App;
