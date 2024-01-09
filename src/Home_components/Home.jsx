import React, { useState, useEffect } from "react";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home6 from "./Home6";
import Loader from "../loader";
import NvBar from "../NavBar_components/NvBar";
import Footer from "../Footer";
import Home8 from "./Home8";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <NvBar />
      {/* <div className="container">
    
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src={banner4} className="banner1" />
            </div>

            <div className="item">
              <img src={banner5} className="banner1" />
            </div>

            <div className="item">
              <img src={banner6} className="banner1" />
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div> */}
      <Home8 />
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home6 />
      <Footer />
    </>
  );
}
