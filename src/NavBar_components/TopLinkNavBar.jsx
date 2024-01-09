import React from 'react'
import { Link } from "react-router-dom";

export default function TopLinkNavBar() {
  return (
    
      <nav>
        <b className="logo">VILLA </b> 
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/Properties">Properties</Link>
          <Link to="/Property_detils">Property Details</Link>
          <Link to="/Contct">Contact</Link>
          <Link to="/Schedule_visit" id="visit">
            Schedule Visit
          </Link>
        </div>
      </nav>

  );
}
