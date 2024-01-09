import React from "react";
import property5 from "../assets/images/property-05.jpg"
import { Link } from "react-router-dom";

export default function Home3() {
  return (
    <div className="best">
      <div className="best1">
        <div className="best1a">
          <p className="build1b">| BEST DEAL</p>
          <h1 className="best1b">
            <b>Find Your Best</b> <br />
            <b className="now1">Deal Right</b> <b className="now">Now!</b>
          </h1>
        </div>
        <div className="best1c">
          <div className="apartment">
            <span className="ment">Apartment</span>
          </div>
          <div className="best1d">
            <span className="men">Villa Agency</span>
          </div>
          <div className="best1e">
            <span className="ment">Pent house</span>
          </div>
        </div>
      </div>
      <div className="best2">
        <div className="best2a">
          <div className="best2a11">
            <span className="best2a2">Total Flat space</span>
            <b className="best2a3">185 m2</b>
          </div>
          <div className="best2a1">
            <span className="best2a2">Floor number</span>
            <b className="best2a3">26th</b>
          </div>
          <div className="best2a1">
            <span className="best2a2">Number of rooms</span>
            <b className="best2a3">4</b>
          </div>
          <div className="best2a1">
            <span className="best2a2">Packing Avaiable</span>
            <b className="best2a3">Yes</b>
          </div>
          <div className="best2a12">
            <span className="best2a2">Payment Process</span>
            <b className="best2a3">Bank</b>
          </div>
        </div>
        <div className="best2b">
          <div className="best2ba">
            <img src={property5}className="property5" />
          </div>
        </div>
        <div className="best2c">
          <div className="best2c1">
            <h3 className="best2c2">Extra Info About Property</h3>
            <p id="best2c3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              consequatur similique iusto qui autem quibusdam modi dignissimos
              provident doloribus debitis alias quidem sapiente voluptate beatae
              iure
            </p>
            <p id="best2c3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              consequatur similique iusto qui autem quibusdam
              
              modi dignissimos provident doloribus debitis alias quidem
              sapiente voluptate beatae iure
            </p>
          </div>
          <div className="best2c5">
            <Link to="/Schedule_visit" className="visit1">
              {" "}
              Schedule A visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
