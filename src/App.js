import React from "react";

import ReactCompareImage from "react-compare-image";

/**/
import cog from "./svg/cog.svg";
import chevron from "./svg/chevron.svg";
/**/
import folders from "./img/folders.png";
import lion from "./img/lion.png";
import lion2 from "./img/lion2.png";

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
        <div className="f3 mt3 text-center gray2">Convert any image to avif for free.</div>

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
              <div className="f1 mt2 gray3 s1">supports jpg · jpeg · png · webp</div>
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
      <div className="main p5">
        <h3 className="f4 blue1 bold text-center mb2">What is avif?</h3>
        <div className="f1 gray2 text-center mb7">and why you should care</div>
        <div id="explanation-container">
          <div id="image-text">
            <div className="f2 gray1 bold mb2">avif is the image format of the future</div>
            <div className="f1 gray2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore.
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Sounds awesome, right?
              </p>
            </div>
          </div>
          <div id="image-container" className="p5">
            <div>
              <ReactCompareImage
                leftImage={lion2}
                rightImage={lion}
                leftImageAlt="after"
                rightImageAlt="before"
                sliderLineWidth={8}
                handle={<div className="handle"></div>}
                sliderLineColor="#F5F5F5"
              />
            </div>
            <div id="slider-options">
              <div>
                <span id="jpg" class="white p1 border2 active">
                  jpg
                </span>
                <span id="webp" class="gray2 p1 border2">
                  webp
                </span>
                <span id="png" class="gray2 p1 border2">
                  png
                </span>
                <div className="gray3 mt3">120kb</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <span className="white p1 border2 active" id="avif">
                  avif
                </span>
                <div className="gray3 mt3">55kb · -60%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main p5">
        <h3 className="f4 blue1 bold text-center mb2">Supported by the best</h3>
        <div className="f1 gray2 text-center mb7">the big players love and use it</div>
      </div>
    </div>
  );
}

export default App;
