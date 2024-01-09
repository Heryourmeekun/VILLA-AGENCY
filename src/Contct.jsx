import { useState,useEffect } from "react";
import propertybg from "./assets/images/page-heading-bg.jpg"
import { Link } from 'react-router-dom';
import phone from "./assets/images/phone-icon.png"
import email from "./assets/images/email-icon.png"
import Form2 from './form2';
import Loader from './loader'
import NvBar from "./NavBar_components/NvBar";
import Footer from "./Footer";



export default function Contct() {
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
        <div className="us1">
          <Link to="/" id="prop1b">
            Home
          </Link>
          /
          <Link to="/Contct" id="prop1b">
            Contact Us
          </Link>
        </div>
        <div className="prop1c">
          <p>CONTACT US</p>
        </div>
      </div>
      <div className="us3">
        <div className="us2">
          <b className="us2a2">| CONTACT US</b>
          <h1 className="us2a">
            <b className="us2a1">Get In Touch</b> <br /> With Our <br /> Agents
          </h1>
          <div className="us5">
            <p className="us5a">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              vero fugit maiores voluptatem, expedita in tempore soluta dolores
              quas ratione at eos esse facere cupiditate labore suscipit officia
              fuga Saepe vero fugit maiores voluptatem, expedita in tempore
              soluta .
            </p>
          </div>
          <div className="us6">
            <div className="us6a">
              <img src={phone} style={{ height: "40px", width: "50px" }} />
              <div className="us8">
                <b className="us7">09011577868</b>
                <br />
                <span className="contact4b2">Phone number</span>
              </div>
            </div>
            <div className="us6b">
              <img src={email} style={{ height: "40px", width: "50px" }} />
              <div className="us8">
                <b className="us7">info@gmail.com</b>
                <br />
                <span className="contact4b2">Business Email</span>
              </div>
            </div>
          </div>
        </div>
        <div className="us4">
          <div className="us4a">
            <Form2 />
          </div>
        </div>
      </div>
      <div className="iframe">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" className='us9'></iframe>
          
      </div>
      
     <Footer/>
    </>
  );
}
