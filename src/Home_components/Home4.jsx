import React from 'react'
import Props2 from '../props2.jsx';
import { myArray2 } from '../Data/data2.js';

export default function Home4() {
    const book2 = myArray2.map((element) => {
        return (
            <Props2
                image = {element.image}
                Type={element.Type}
                Amount={element.Amount}
                Location={element.Location}
                Bedrooms={element.Bedrooms}
                Bathrooms={element.Bathrooms}
                Area={element.Area}
                Floor={element.Floor}
                Parking = {element.Parking}
            
            />
        )
    })
    return (
      <div className="likee">
        <div className="md">
          <div className="like">
            <div className="like1">
              <p className="build1l">| PROPERTIES</p>
              <h1 className="like1a">
                <b id="like1a3">We Provide The</b>
                <br /> <b id="like1a1"> Best</b>
                <br />
                <b id="like1a2">Property You Like </b>
              </h1>
            </div>
          </div>
        </div>
        <div className="sm">
          <p className="build1l">| PROPERTIES</p>
          <h1 className="like1a">
            <b id="like1a3">We Provide The </b> <br />
            <b id="like1a1">Best Property</b> <br /> <b id="like1a2">You Like</b>
          </h1>
        </div>
        <div className="type1"> {book2}</div>
      </div>
    );
}
