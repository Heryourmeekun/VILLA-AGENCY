import React, { useState } from "react";
import { Link } from "react-router-dom";
const Hamburger_btn = () => {
   const [toggle, setToggle] = useState(false);
   const handleClick = () => {
     setToggle(!toggle);
   };
   const [visible, setVisible] = useState(true);
   const isVisible = () => {
     setVisible(!visible);
   };

   return (
    
       <div
         className={`hamburger-menu ${toggle ? "open" : ""}`}
         onClick={handleClick}
       >
         <div className="bar1"></div>
         <div className="bar2"></div>
         <div className="bar3"></div>
         <div className={`menu ${!toggle ? "ope" : ""}`} onClick={handleClick}>
           <ul>
             <li className="li">
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/Properties">Properties</Link>
             </li>
             <li>
               <Link to="/Property_detils">Property Details</Link>
             </li>
             <li>
               <Link to="/Contct">Contact</Link>
             </li>
           </ul>
         </div>
       </div>
    
   );
    
}
export default Hamburger_btn;
