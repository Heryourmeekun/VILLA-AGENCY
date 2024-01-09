import React, { useState,useEffect } from 'react'
import propertybg from "./assets/images/page-heading-bg.jpg"
import { Link } from 'react-router-dom';
import { myArray3 } from "./Data/data3"
import Props2 from './props2';
import Loader from './loader';
import NvBar from "./NavBar_components/NvBar";
import Footer from "./Footer";


export default function Properties() {
  const [filter, setFilter] = useState("");
  const filteredArray = myArray3.filter((element) => {
    return element.Type === filter
  })
  const book3 = () => {
     
  if (!filter?.length) {
    return myArray3.map((element) => {
      return (
        <Props2
          image={element.image}
          Type={element.Type}
          Amount={element.Amount}
          Location={element.Location}
          Bedrooms={element.Bedrooms}
          Bathrooms={element.Bathrooms}
          Area={element.Area}
          Floor={element.Floor}
          Parking={element.Parking}
        />
      );
    });
  } else {
    return filteredArray.map((element) => {
      return (
        <Props2
          image={element.image}
          Type={element.Type}
          Amount={element.Amount}
          Location={element.Location}
          Bedrooms={element.Bedrooms}
          Bathrooms={element.Bathrooms}
          Area={element.Area}
          Floor={element.Floor}
          Parking={element.Parking}
        />
      );
    });
  }
  }
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     // Simulate an API call
     setTimeout(() => {
       setIsLoading(false);
     }, 2000);
   }, []);

   if (isLoading) {
     return <Loader />;
   }
  return (
    <>
      <NvBar/>
      <div className="prop">
        <img src={propertybg} style={{ width: "100%", height: "450px" }} />
      </div>
      <div className="prop1">
        <div className="prop1a">
          <Link to="/" id="prop1b">
            Home
          </Link>
          /
          <Link to="/Properties" id="prop1b">
            Properties
          </Link>
        </div>
        <div className="prop1c">
          <p>PROPERTIES</p>
        </div>
      </div>
      <div className="prop2">
        <div className="prop2a">
          <div className="prop2b">
            <span className="2b1" onClick={() => setFilter("")}>
              Show All
            </span>
          </div>
          <div className="prop2c">
            <span className="prop2c1" onClick={() => setFilter("Apartment")}>
              Apartment
            </span>
          </div>
          <div className="prop2d">
            <span className="prop2d1" onClick={() => setFilter("Luxury Villa")}>
              Villa Agency
            </span>
          </div>
          <div className="prop2e">
            <span className="prop2e1" onClick={() => setFilter("Penthouse")}>
              Pent house
            </span>
          </div>
        </div>
        <div className="type1">{book3()}</div>
        <div className="prop3">
          <div className="prop3a"><span>1</span></div>
          <div className="prop3b"><span>2</span></div>
          <div className="prop3a"><span>3</span></div>
          <div className="prop3a"><span>=</span></div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
