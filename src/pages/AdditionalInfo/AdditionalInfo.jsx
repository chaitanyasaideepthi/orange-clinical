import { useState } from "react";
import "./AdditionalInfo.css";

function AdditionalInfo() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sections = [
    {
      id: "about",
      title: "BlueLineMD - Your Trusted Diagnostic Partner",
      content: (
        <div className="orange-text">
          <p>
            <strong>BlueLineMD</strong> is a smart, modern healthcare
            platform designed to make diagnostic services convenient
            and accessible. We help patients explore diagnostic tests,
            health checkups, and convenient booking options.
          </p>

          <p>
            Our goal is to simplify healthcare through reliable services,
            convenient booking, and a seamless patient experience.
          </p>
        </div>
      ),
    },

    {
      id: "prescription",
      title: "Do I need a doctor's prescription to book a test?",
      content: (
        <div className="orange-text">
          <p>
            A doctor's prescription is not required for most routine
            diagnostic tests. However, certain specialized tests may
            require a prescription. Please check the test requirements
            before booking.
          </p>
        </div>
      ),
    },

    {
      id: "booking",
      title: "How to Book a Diagnostic Test",
      content: (
        <div className="orange-text">
          <p>
            <strong>Step 1:</strong> Browse and search for your required
            diagnostic test on the BlueLineMD website.
          </p>

          <p>
            <strong>Step 2:</strong> Select your test and add it to
            your cart.
          </p>

          <p>
            <strong>Step 3:</strong> Enter your location and check
            service availability.
          </p>

          <p>
            <strong>Step 4:</strong> Choose your preferred booking
            option and complete the booking process.
          </p>
        </div>
      ),
    },

    {
      id: "why",
      title: "Why Choose BlueLineMD?",
      content: (
        <div className="orange-text">
          <p>
            <strong>Convenient Booking:</strong> Easily explore and book
            diagnostic tests online.
          </p>

          <p>
            <strong>Home Collection:</strong> Convenient sample collection
            options in selected serviceable locations.
          </p>

          <p>
            <strong>Wide Range of Tests:</strong> Explore various
            diagnostic tests and health checkup packages.
          </p>

          <p>
            <strong>Easy Access:</strong> A simple and user-friendly
            platform to help manage your diagnostic bookings.
          </p>

          <p>
            <strong>Customer Support:</strong> Get assistance with
            bookings and other queries.
          </p>
        </div>
      ),
    },

    {
      id: "popular",
      title: "Popular Diagnostic Tests",
      content: (
        <p className="orange-text popular-tests">
          Complete Blood Count (CBC), HbA1c, Thyroid Function Test,
          Lipid Profile, Liver Function Test, Kidney Function Test,
          Vitamin D, Vitamin B12, Calcium, Fasting Blood Sugar (FBS),
          Complete Urine Examination, CRP, ESR, Ferritin, Iron Profile,
          Dengue Test, TSH, Creatinine, Uric Acid, Electrolytes,
          Testosterone, Prolactin, Insulin, HBsAg, HIV, Widal Test,
          D-Dimer, and other diagnostic tests.
        </p>
      ),
    },
  ];

  return (
    <div className="additional-info-page">
      <div className="additional-info-layout">

        {/* Heading */}
        <div className="additional-info-title">
          <h2>Additional Info</h2>
        </div>

        {/* Accordion Content */}
        <div className="additional-info-content">
          {sections.map((section) => (
            <div className="info-section" key={section.id}>
              <button
                className="info-heading"
                onClick={() => toggleSection(section.id)}
              >
                <span>{section.title}</span>

                <span className="arrow">
                  {openSections[section.id] ? "⌃" : "⌄"}
                </span>
              </button>

              {openSections[section.id] && (
                <div className="info-content">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AdditionalInfo;