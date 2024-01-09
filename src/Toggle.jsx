import React, { useState } from 'react'

export default function Toggle() {
  const [best, setBest] = useState(false);
  const handleClick = () => {
    setBest(!best)
  }
  const [how, setHow] = useState(false);
   const handleShow = () => {
     setHow(!how);
   };
  const [villa, setVilla] = useState(false);
   const handleClicking = () => {
     setVilla(!villa);
   };
  return (
    <>
      <div>
        <p className="detail5a1" onClick={handleClick}>
          Best Link?
        </p>
        <p className={` ${!best ? "opn" : ""}`}>
          Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
          tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights
          keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt
          ut labore consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div>
        <p className="detail5a2" onClick={handleShow}>
          How Does It Works?
        </p>
        <p className={` ${!how ? "opn" : ""}`}>
          Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
          tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights
          keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt
          ut labore consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div>
        <p className="detail5a2" onClick={handleClicking}>
          More Links?
        </p>
        <p className={` ${!villa ? "opn" : ""}`}>
          Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
          tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights
          keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt
          ut labore consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua
        </p>
      </div>
    </>
  );
}
