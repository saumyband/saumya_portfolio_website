import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import {
  CITY,
  HEADER_OPTIONS,
  MAIL_ID,
  MY_NAME,
  PHONE_NUMBER,
  PUBLIC_KEY,
  SERVICE_ID,
  TEMPLATE_ID,
} from "../../utils/Constants";

export const Contact = () => {
  const [fromMail, setFromMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert(`Message sent successfully.`);
      },
      (error) => {
        console.log(error.text);
        alert(`Something went wrong!`);
      }
    );
    event.target.reset();
  };

  return (
    <div className="contact-me" id={HEADER_OPTIONS[3].id}>
      <div className="contact-title">{HEADER_OPTIONS[3].label}.</div>
      <div className="contact-text">
        <div className="contact-details">
          <div>
            <span>E-mail:</span>
            <span>{MAIL_ID}</span>
          </div>
          <div>
            <span>Contact No.:</span>
            <span>{PHONE_NUMBER}</span>
          </div>
          <div>
            <span>Location:</span>
            <span>{CITY}</span>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email here..."
              id="from_email"
              name="from_email"
              value={fromMail}
              onChange={(e) => setFromMail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Your message here..."
              value={message}
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Send a Mail</button>
          </form>
        </div>
      </div>
    </div>
  );
};
