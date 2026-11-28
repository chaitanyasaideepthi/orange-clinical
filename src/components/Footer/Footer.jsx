import "./Footer.css";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-bottom">

        {/* BlueLineMD Logo */}
        <div className="footer-logo">
          <img src={logo} alt="BlueLineMD Logo" />
        </div>

        {/* Tagline */}
        <h2 className="footer-tagline">
          India's leading on-demand
          <br />
          Diagnostic Lab
        </h2>

        {/* Description */}
        <p className="footer-description">
          Smart, modern hospital management platform streamlining
          operations, billing, and patient care for healthcare facilities.
        </p>

        {/* Contact Information */}
        <div className="footer-contact">
          <p>📞 +91 78999 16434</p>
          <p>✉️ info@bluelinemd.com</p>
          <p>
            📍 Plot No. 134/2/3, Bellandur, Bangalore 560035
          </p>
        </div>

        {/* Copyright */}
        <p className="copyright">
          © 2025 BluelineMD. All rights reserved. Powered by OneEHR
        </p>

      </div>

    </footer>
  );
}

export default Footer;