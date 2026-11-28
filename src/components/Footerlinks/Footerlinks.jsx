import "./Footerlinks.css";

function Footerlinks() {
  return (
    <section className="footer-links">
      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="https://bluelinemd.com/">Home</a>
          <a href="https://bluelinemd.com/features">Features</a>
          <a href="https://bluelinemd.com/pricing">Pricing</a>
          <a href="https://bluelinemd.com/testimonials">Testimonials</a>
          <a href="https://bluelinemd.com/about">About</a>
          <a href="https://bluelinemd.com/contact">Contact</a>
        </div>

        {/* Partners */}
        <div className="footer-column">
          <h3>Partners</h3>

          <a href="https://bluelinemd.com/features">Platform</a>
          <a href="https://bluelinemd.com/">Services</a>
          <a href="https://bluelinemd.com/">Specialties</a>
        </div>

        {/* Policy */}
        <div className="footer-column">
          <h3>Policy</h3>

          <a href="https://bluelinemd.com/">Privacy Policy</a>
          <a href="https://bluelinemd.com/">Terms &amp; Services</a>
        </div>

      </div>
    </section>
  );
}

export default Footerlinks;