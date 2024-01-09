import React from 'react'
import videobg from "../assets/images/video-bg.jpg"
import phone from "../assets/images/phone-icon.png"
import email from "../assets/images/email-icon.png"
import Form from '../Form';


export default function Home6() {
  return (
    <>
      <div className="md1">
        <div className="con">
          <b className="con4">| CONTACT US</b>
          <h1 className="con1">
            <b className="con2">Get In Touch</b> <br /> With Our Agents
          </h1>
        </div>
      </div>
      <div className="sm2">
         <div className="con">
          <b className="con4">| CONTACT US</b>
          <h1 className="con1">
            <b className="con2">Get In Touch</b> <br /> With Our Agents
          </h1>
        </div>
      </div>

      <div className="contac">
        <img src={videobg} className="videobg" />
      </div>
      <div className="contact">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
            className="contact1"
          ></iframe>
          <div className="contact3">
            <div className="contact4">
              <img src={phone} style={{ height: "40px", width: "50px" }} />
              <div className="contact4b">
                <b className="contact4b1">09011577868</b>
                <br />
                <span className="contact4b2">Phone number</span>
              </div>
            </div>
            <div className="contact4">
              <img src={email} style={{ height: "40px", width: "50px" }} />
              <div className="contact4b">
                <b className="contact4b1">info@gmail.com</b>
                <br />
                <span className="contact4b2">Business Email</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact2">
          <Form />
        </div>
      </div>
    </>
  );
}
