import { useState } from "react";
import Hamburger_btn from "./Hamburger_btn";
import { Link } from "react-router-dom";

export const SideLinkNavBar = () => {


    return (
      <div className="btn2">
        <b className = "logo2">Villa</b>
        <div className="btn" >
          <Hamburger_btn />
        </div>
      </div>
    );
}
export default SideLinkNavBar;