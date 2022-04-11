import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c564hth', 'template_k0361pi', form.current, 'user_ByCqOpjx1J0RXvSzaSC8A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
        <div className="name">
            <label>Name:</label>
      <input type="text" name="user_name" />
        </div>
      <div className="email">
          <label>Email:</label>
      <input type="email" name="user_email" />
      </div>
      <div className="message">
          <label>Message:</label>
      <textarea name="message" />
      </div>
      <input type="submit" value="Send" className="submit" />
    </form>
  );
};