import React, { useRef, useState } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [phone, setPhone] = useState();

  // Function to format phone number
  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, ""); // Remove non-numeric characters
    if (digits.length <= 3) {
      return `(${digits}`;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  };

  // Handle phone input change
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    setPhone(formatPhoneNumber(input));
  };

  // Handle form submission
  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pzfpbhp", // Replace with your EmailJS Service ID
        "template_h18tnmb", // Replace with your EmailJS Template ID
        form.current,
        "Yot3Kikj-UVDFzu3a" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );

    e.target.reset();
    setPhone(""); // Reset phone field
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Have questions or want to work with us? Fill out the form below, or use
        our contact details to reach us directly.
      </p>

      <div className="contact-details">
        <div className="contact-detail">
          <h3>Email</h3>
          <a href="mailto:info@tekmadev.com">info@tekmadev.com</a>
          <h3>Phone</h3>
          <a href="tel:+11234567890">+1 (123) 456-7890</a>
        </div>
        <div className="contact-detail">
          <h3>Address</h3>
          <p>1234 Elm Street, Suite 567</p>
          <p>Montreal, QC, H3Z 2K1, Canada</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15167.680008449048!2d-73.64611801537629!3d45.52708846584939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9185570564d73%3A0xef4d457cac67c567!2sCentre%20Rockland!5e0!3m2!1sen!2sca!4v1735360713023!5m2!1sen!2sca"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

      <form ref={form} onSubmit={handleSendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            maxLength="14" // Limit input length to formatted phone number
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="form-submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
