import "./Footerlinks.css";

function Footerlinks() {
  return (
    <section className="footer-links">
      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="https://www.orangehealth.in/about" target="_blank" rel="noreferrer">
            About Us
          </a>

          <a href="https://www.orangehealth.in/stores" target="_blank" rel="noreferrer">
            Centres
          </a>

          <a href="https://www.orangehealth.in/jobs" target="_blank" rel="noreferrer">
            Careers
          </a>

          <a href="https://www.orangehealth.in/emedic-career" target="_blank" rel="noreferrer">
            Emedic Career
          </a>

          <a href="https://www.orangehealth.in/blog" target="_blank" rel="noreferrer">
            Blogs
          </a>

          <a href="https://www.orangehealth.in/contact" target="_blank" rel="noreferrer">
            Contact Us
          </a>
        </div>

        {/* Partners */}
        <div className="footer-column">
          <h3>Partners</h3>

          <a href="https://www.orangehealth.in/doctors" target="_blank" rel="noreferrer">
            For Doctors
          </a>

          <a href="https://www.orangehealth.in/corporate-partners" target="_blank" rel="noreferrer">
            For Corporates
          </a>

          <a href="https://www.orangehealth.in/rent-your-property" target="_blank" rel="noreferrer">
            Rent Your Property
          </a>
        </div>

        {/* Policy */}
        <div className="footer-column">
          <h3>Policy</h3>

          <a href="https://www.orangehealth.in/oh-nabl-data" target="_blank" rel="noreferrer">
            NABL Data
          </a>

          <a href="https://www.orangehealth.in/responsible-disclosure-policy" target="_blank" rel="noreferrer">
            Responsible Disclosure
          </a>

          <a href="https://www.orangehealth.in/vendor-code-of-conduct" target="_blank" rel="noreferrer">
            Vendor Code of Conduct
          </a>

          <a
            href="https://drive.google.com/drive/folders/1zH5q9TShhgKDpVbZ4L4hGrMmgaYnWxja?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Biomedical Waste Disclosure
          </a>
        </div>

      </div>
    </section>
  );
}

export default Footerlinks;