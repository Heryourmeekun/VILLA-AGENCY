import React from 'react'
import email from "./assets/images/Mail.svg"
import phone from "./assets/images/phone-icon.png"
import facebook from "./assets/images/Facebook Icon.png"
import twitter from "./assets/images/Twitter Icon.svg"
import instagram from "./assets/images/Instagram Icon.png"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <b>Villa</b> <br />
        <p>Branches</p>
      </div>
      <div className="footer2">
        <li>
          <b>Resources</b>
        </li>
        <br />
        <li>Blog</li> <br />
        <li>Help center</li> <br />
        <li>Release Notes</li> <br />
        <li>Status</li>
      </div>
      <div className="footer3">
        <li>
          <b>Community</b>
        </li>
        <br />
        <li>
          <img src={twitter} /> Twitter
        </li><br />
        <li>
          <img src={facebook} /> Facebook
        </li><br />
        <li>
          <img src={instagram} /> Instagram
        </li> <br />
       
        <li>
          <img src={email}  style={{height:"25px",backgroundColor:"gray",borderRadius:"5px"}}/> Podcast
        </li>
      </div>
      <div className="footer4">
        <li>
          <b>Useful Links</b>
        </li>
        <br />
        <Link to="/Properties" id='footer5'>Properties</Link> <br />
        <Link to="/Property_detils" id='footer5'>Property Details</Link> <br />
        <Link to="/Contct" id='footer5'>Contact</Link> <br />
        <Link to="/Schedule_visit" id="footer5">
          Schedule Visit
        </Link>
      </div>
    </div>
  );
}
