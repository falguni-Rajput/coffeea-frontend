import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-section">
          <h3>Coffeea</h3>
          <p>
            Freshly brewed coffee made with premium beans,
            crafted to make every cup memorable.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Customers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon - Fri : 8:00 AM - 10:00 PM</p>
          <p>Saturday : 9:00 AM - 11:00 PM</p>
          <p>Sunday : 10:00 AM - 9:00 PM</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 New Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@Coffeea.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Coffeea. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;