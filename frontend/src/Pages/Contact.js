import React from "react";
import "./../Styles/Contact.css"; 

const Contact = () => {
  return (
    <div className="home">
      <section className="about">
        <h2>Contact Us</h2>
        <p>
          Have questions, suggestions, or feedback? We’d love to hear from you. 
          Please fill out the form below and our team will get back to you as soon 
          as possible.
        </p>

        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your Name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="Your Email" required />
          </label>

          <label>
            Subject
            <input type="text" name="subject" placeholder="Subject" required />
          </label>

          <label>
            Message
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;