import React from 'react'


export default function Props2(props) {
  return (
    <div className="type2">
  
        <div className="type5">
          <img src={props.image} className="type3" />
       

        <div className="type4">
          <div className="type4a">
            <b className="type4a1">{props.Type}</b>
          </div>
          <div className="type4b">
            <b className="type4b1">{props.Amount}</b>
          </div>
        </div>
        <h4 className="type4c">{props.Location}</h4>
        <div className="type4d">
          <div className="type4d1">
            <span>
              Bedrooms: <b>{props.Bedrooms}</b>
            </span>
            <span>
              Bathrooms: <b> {props.Bathrooms}</b>
            </span>
          </div>
          <div className="type4d3">
            <span>
              Area: <b>{props.Area}</b>
            </span>
            <span>
              Floor : <b>{props.Floor}</b>
            </span>
          </div>
          <span className="type4d2">
            Parking: <b>{props.Parking}</b>
          </span>
        </div>
      </div>
    </div>
  );
}

