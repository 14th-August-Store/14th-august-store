import { useState } from "react";
import "../css/contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("🇵🇰 Thank you! Your message has been sent successfully.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <div className="contact-page">
        <div className="contact-header">
          <h1>📞 Contact Pakistan Store 🇵🇰</h1>
          <p>We are here to help you with your orders and questions.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <p>📍 Address: Karachi, Pakistan</p>
            <p>📱 Phone: +92 3312465075</p>
            <p>✉️ Email: rizwanchandna6@gmail.com</p>
            <p>🕒 Hours: 9:00 AM - 9:00 PM</p>

            <h3>Follow Us</h3>
            <p>🇵🇰 Facebook</p>
            <p>📷 Instagram</p>
            <p>▶️ YouTube</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Message</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;