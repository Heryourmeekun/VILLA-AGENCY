import React from "react";
import featured from "../assets/images/featured.jpg";
import featuredIcon from "../assets/images/featured-icon.png";
import infoicon1 from "../assets/images/info-icon-01.png";
import infoicon2 from "../assets/images/info-icon-02.png";
import infoicon3 from "../assets/images/info-icon-03.png";
import infoicon4 from "../assets/images/info-icon-04.png";
import Toggle from "../Toggle";

export default function Home1() {
  return (
    <>
      <div className="home1">
        <div className="home1a">
          <img src={featured} alt="" className="featured" />
          <div className="featuredicon">
            <img src={featuredIcon} alt="" className="" />
          </div>
        </div>
        <div className="home2">
          <div className="home2a">
            <b id="home2a1"> |FEATURED </b>
            <h1 id="home2a2"> Best <br /> Appartment & <br /> Sea View </h1>
          </div>
          <div className="home2b">
            {/* <p id="home2b1">Best useful links?</p> */}
            <p id="home2b2">
              <Toggle/>
            </p>
           
          </div>
        </div>
        <div className="home3">
          <div className="home3a5">
            <div className="home3a1">
              <img src={infoicon1} />
            </div>
            <div className="home3a2">
              <b className="home3a1">250 m2</b> <br />
              <span>Total flat space</span>
            </div>
          </div>
          <div className="home3a">
            <div className="home3a1">
              <img src={infoicon2} />
            </div>
            <div className="home3a2">
              <b className="home3a1">Contract</b> <br />
              <span>Contract Ready</span>
            </div>
          </div>
          <div className="home3a">
            <div className="home3a1">
              <img src={infoicon3} />
            </div>
            <div className="home3a2">
              <b className="home3a1">Payment</b> <br />
              <span>Payment</span>
            </div>
          </div>
          <div className="home3a8">
            <div className="home3a1">
              <img src={infoicon4} />
            </div>
            <div className="home3a2">
              <b className="home3a1">Safaty</b> <br />
              <span>Total flat space</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
