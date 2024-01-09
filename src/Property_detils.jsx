import { useState,useEffect } from "react";
import propertybg from "./assets/images/page-heading-bg.jpg"
import { Link } from 'react-router-dom';
import singleproperty from "./assets/images/single-property.jpg"
import infoicon1 from "./assets/images/info-icon-01.png"
import infoicon2 from "./assets/images/info-icon-02.png"
import infoicon3 from "./assets/images/info-icon-03.png"
import infoicon4 from "./assets/images/info-icon-04.png"
import Toggle from './Toggle';
import Home3 from './Home_components/Home3';

import Loader from "./loader"
import NvBar from "./NavBar_components/NvBar";
import Footer from "./Footer";


export default function Property_detils() {
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
      <NvBar/>
      <div className="prop">
        <img src={propertybg} style={{ width: "100%", height: "450px" }} />
      </div>
      <div className="prop1">
        <div className="detail1">
          <Link to="/" id="prop1b">
            Home
          </Link>
          /
          <Link to="/Property_detils" id="prop1b">
            Single Properties
          </Link>
        </div>
        <div className="prop1c">
          <p>SINGLE PROPERTIES</p>
        </div>
      </div>
      <div className="detail2">
        <div className="detail2a">
          <img src={singleproperty} className="singleproperty" />
          
          <div className="detil9">
            <div className="detail3">
              <div className="detail3a">
                <span className="detail3a1">Apartment</span>
              </div>
              <div className="detail3b">
                <b className="detail3b1">24 New Street Miami, OR 24560</b>
              </div>
            </div>
            <div className="detail4">
              <p className="detail4a">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita consequatur similique iusto qui autem quibusdam modi
                dignissimos provident doloribus debitis alias quidem sapiente
                voluptate beatae iure modi dignissimos provident doloribus
                debitis alias quidem sapiente voluptate beatae iure
              </p>
              <br />
              <p className="detail4a">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita consequatur similique iusto qui autem quibusdam modi
                dignissimos provident doloribus debitis alias quidem sapiente
                voluptate beatae modi dignissimos provident doloribus debitis
                alias quidem sapiente voluptate beatae iure iure
              </p>
            </div>
            <div className="detail5">
              <Toggle />
            </div>
          </div>
        </div>
        <div className="homee3">
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

      <div className="detail6">
        <Home3 />
      </div>
      <Footer/>
    </>
  );
}
