import React, { useRef } from 'react';
import Socials from '../components/Socials';
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
      <div className="contact">
      <h1 className="title">Contact us</h1>
      <div className="contact-info">
        <h2>You can also reach us at:</h2>
        <p>Email: thegympod.bmc@gmail.com</p>
        <p>WhatsApp: 9*******</p>
        <div className="contact-socials">
          <Socials />
        </div>
      </div>
    <form ref={form} onSubmit={sendEmail} className="form">
        <div className="name">
            <label>Name:</label>
      <input type="text" name="user_name" autofocus />
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
    </div>
  );
};