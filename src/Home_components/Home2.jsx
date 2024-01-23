import React from "react";
import videoBg from "../assets/images/video-bg.jpg";
import video from "../assets/images/video-frame.jpg";
import play from "../assets/images/play_arrow_FILL0_wght400_GRAD0_opsz24 (1).png";
import Props1 from "../Props1";
import { myArray } from "../Data/data.js";
// import { myArray } from "./data.js";

export default function Home2() {
 const book = myArray.map((element) => {
    return (
    
      <Props1 countingNum={element.countingNum}
        text={element.text}
        text2={element.text2}
        ball = {element.ball}
       />
   ) })
  return (
    <div className="build">
      <div className="build1a">
        <p className="build1b">| VIDEO VIEW</p>
        <h1 className="build1c">
          Get Closer View <br /> <b className="build1d">& Different</b> <br />
          <b className="build1e">Feeling</b>
        </h1>
      </div>
      <div className="build1">
        <img src={videoBg}  style={{width:"400px",height:"500px"}} />
      </div>
      <div className="build2">
        <img src={video} className="build2a" />
        <div className="play1">
          <div className="play2">
            <img
              src={play}
              alt=""
              style={{
                height: "40px",
                width: "40px",
                
              }}
            />
          </div>
        </div>
        {/* <div className="build3">
          <div className="build3a"></div>
          <div className="build3b"></div>
          <div className="build3c"></div>
        </div> */}
      </div>
      <div className="book">{book}</div>
    </div>
  );
}
