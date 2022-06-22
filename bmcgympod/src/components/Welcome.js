import './Welcome.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const form = useRef();

  const [show, setShow] = useState(false);
  const handlePromo = () => setShow(!show)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c564hth', 'template_h4h4z4o', form.current, 'user_ByCqOpjx1J0RXvSzaSC8A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className="welcome">
      <h1 className="welcome-title">Welcome Gift</h1>
      <h2>Enter your name and email to receive $4 off your first session!</h2>
        <form ref={form} onSubmit={sendEmail} className="welcome-form">
        <div>
        <span className="welcome-name">
          <label>Name:</label>
          <input type="text" name="user_name" required />
        </span>
        <span className="welcome-email">
          <label>Email:</label>
          <input type="email" name="user_email" required />
        </span>
      </div><br /><br />
      <input type="submit" value="Join the BMC community!" className="welcome-submit" onClick={handlePromo} />
    </form>
    <div className={show ? "promo-code active" : "promo-code"}>Your promotion code is: TGPHAPPYNESS</div>
    </div>
  );
};