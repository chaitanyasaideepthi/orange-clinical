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

        {/* Copyright */}
        <p className="copyright">
          © 2026 BlueLineMD. All
          <br />
          rights reserved. Powered by OneEHR
        </p>

      </div>
    </footer>
  );
}

export default Footer;