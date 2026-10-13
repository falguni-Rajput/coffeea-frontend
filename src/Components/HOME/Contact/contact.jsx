import React from 'react';
import "./contact.css";

function Contact() {
  return (
    <section className="contact-container">

      <h2>Get In Touch</h2>
      <p>Have a question or feedback? We'd love to hear from you.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Write your message..." rows="4"></textarea>

        <button>Send Message</button>
      </form>

    </section>
  );
}

export default Contact;
