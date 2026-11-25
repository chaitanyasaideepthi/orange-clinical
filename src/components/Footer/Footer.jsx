import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">

        {/* Orange Health Logo */}
        <div className="footer-logo">
          <div className="logo-inner"></div>
          <div className="logo-leaf"></div>
        </div>

        {/* Tagline */}
        <h2 className="footer-tagline">
          India's leading on-demand
          <br />
          Diagnostic Lab
        </h2>

        {/* Copyright */}
        <p className="copyright">
          © Copyright 2026 Orchard Healthcare Private Limited. All
          <br />
          rights reserved. | CIN: U85110HR2020PTC124467
        </p>

      </div>
    </footer>
  );
}

export default Footer;