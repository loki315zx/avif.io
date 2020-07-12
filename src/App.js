import React from "react";
import folders from "./img/folders.png";
import cog from "./svg/cog.svg";
import chevron from "./svg/chevron.svg";

function App() {
  return (
    <div className="app">
      <div className="main">
        <div className="menu">
          <div>what is avif?</div>
          <div>examples</div>
          <div>tutorial</div>
          <div className="blue1">go pro</div>
        </div>

        <div className="f5 bold blue1 text-center mt4">avif.io</div>
        <div className="f3 mt3 text-center gray2">
          Convert any image to avif for free.
        </div>

        <div className="main_container">
          <div className="panel" id="faq">
            <div className="icon f3 gray3 bold">?</div>
          </div>

          <div className="box mt4">
            <div className="box-inside">
              <img alt="drop avif image here" src={folders} />
              <div className="f2 mt3 bold gray1">
                Drop your images or <span className="blue1">browse</span>
              </div>
              <div className="f1 mt2 gray3 s1">
                supports jpg · jpeg · png · webp
              </div>
            </div>
          </div>

          <div className="panel" id="settings">
            <div className="icon">
              <img src={cog} alt="settings"></img>
            </div>
          </div>
        </div>
        <img class="scroll-indicator" src={chevron} alt="scroll down"></img>
      </div>
    </div>
  );
}

export default App;
