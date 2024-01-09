import React from 'react'
import { useState } from 'react';
export default function Form() {
    const [form, setForm] = useState({});
   const handleSubmit = () => {
       setForm(prevState => {
           return {
               ...prevState,
               [ev.target.name]: ev.target.value
           };
       });
    }
  return (
    <>
      <form>
        <label htmlFor="firstname" className='firstname'>Firstname</label><br />
        <input
          type="text"
          placeholder="Your Name..."
          //   onChange={handleSubmit}
          id="firstname"
          name="firstname"
        />
        <br />
        <label htmlFor="email">Email Address</label> <br />
        <input
          type="email"
          placeholder="Your E-mail..."
          //   onChange={handleSubmit}
          id="email"
          name="email"
        /> <br />
        <label htmlFor="Subject">Subject</label> <br />
        <input
          type="text"
          placeholder="Subject..."
          //   onChange={handleSubmit}
          id="Subject"
          name="Subject"
              /> <br />
              <label htmlFor="message">Message</label> <br />
              <input type="text" 
                  name="message"
                  id="message"
              placeholder='Your message'/>
           
              <button className='send1'>Send Message</button>
      </form>
    </>
  );
}
