import React from 'react'


export default function Props1(props) {
    return (
      <>
        <div>
          <div className="box1">
                    <b className='box1a'> {props.countingNum}</b>
            <b className='box1b'>{props.text}</b> <br /> <b className='box1c'>{props.text2}</b>
            <div className='box1e'>{ props.ball}</div>
                    
          </div>
        </div>
      </>
    );
}
