
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
      title: "Orange Health Labs - Your Trusted Diagnostic Lab",
      content: (
        <div className="orange-text">
          <p>
            <strong>Orange Health Labs</strong> brings the accuracy of a
            world-class diagnostic lab straight to your home. With certified
            advanced labs, every test is delivered with reliability and
            precision.
          </p>
          <p>
            From routine blood tests to specialised health panels, our mission
            is simple: make premium healthcare accessible, convenient, and
            fast. With over <strong>1 million tests completed across Bangalore,
            Mumbai, Delhi, Gurugram, Noida, and Hyderabad</strong>, we're
            trusted for our speed, accuracy, and care.
          </p>
          <p>
            Whether you're searching for a diagnostic centre near you or need
            quick results without stepping out, Orange Health Labs ensures
            quality healthcare is always within reach.
          </p>
        </div>
      ),
    },
    {
      id: "centres",
      title: "Find Orange Health Diagnostic Centres Near You",
      content: (
        <div className="orange-text">
          <table className="centres-table">
            <thead>
              <tr>
                <th>Diagnostic Centres</th>
                <th>Areas We Serve</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="https://www.orangehealth.in/lab-tests-hyderabad" target="_blank" rel="noreferrer">
                    Diagnostic Centre for Lab Tests in Hyderabad
                  </a>
                </td>
                <td>Covers Central, West, South, and North-East zones, including Banjara Hills, Jubilee Hills, Gachibowli, Kukatpally, Manikonda, and Mehdipatnam.</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.orangehealth.in/lab-test-bangalore" target="_blank" rel="noreferrer">
                    Diagnostic Centre for Lab Tests in Bangalore
                  </a>
                </td>
                <td>Covers South & East, North, and Central zones, including Koramangala, Indiranagar, HSR Layout, Whitefield, Hebbal, and Electronic City.</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.orangehealth.in/lab-tests-mumbai" target="_blank" rel="noreferrer">
                    Diagnostic Centre for Lab Tests in Mumbai
                  </a>
                </td>
                <td>Covers Western Suburbs, Eastern Suburbs, and South Mumbai, including Andheri, Bandra, Juhu, Powai, Churchgate, and Marine Drive.</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.orangehealth.in/lab-tests-delhi" target="_blank" rel="noreferrer">
                    Diagnostic Centre for Lab Tests in Delhi
                  </a>
                </td>
                <td>Covers Central, South, North-West, and East zones, including Connaught Place, Saket, Vasant Kunj, Rohini, and Dwarka.</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.orangehealth.in/lab-tests-gurgaon" target="_blank" rel="noreferrer">
                    Diagnostic Centre for Lab Tests in Gurgaon
                  </a>
                </td>
                <td>Covers Central, Southern, and Peripheral Sectors, including DLF Phases 1–5, Sector 43, Sector 60–69, and Palam Vihar.</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.orangehealth.in/lab-tests-noida" target="_blank" rel="noreferrer">
                    Diagnostic Centre for Lab Tests in Noida
                  </a>
                </td>
                <td>Covers Central, Mid, and Outer Sectors, including Sector 18, Sector 62, Sector 100, Sector 128, and Sector 150.</td>
              </tr>
            </tbody>
          </table>
          <p>
            We are not limited to the above areas only. Our services extend
            to major parts of these cities.
          </p>
        </div>
      ),
    },
    {
      id: "booking",
      title: "How to Book a Test or Health Package",
      content: (
        <div className="orange-text">
          <p>
            <strong>Step 1: Book Online or via App</strong> – Visit{" "}
            <a href="https://www.orangehealth.in/" target="_blank" rel="noreferrer">
              Orange Health Labs Website
            </a>{" "}
            or download the Orange Health Labs app. Select your test or health
            package and add your details.
          </p>
          <p>
            <strong>Step 2: Choose a Time Slot</strong> – Pick a convenient
            time, and our trained eMedic will reach you within 60 minutes of
            booking or at your preferred slot.
          </p>
          <p>
            <strong>Step 3: Prepare for Sample Collection</strong> – At your
            chosen time, our trained eMedic will arrive at your doorstep for
            a painless, single-prick sample collection. Your samples are
            carefully stored and securely transported to certified labs.
          </p>
          <p>
            <strong>Step 4: Get Your Reports</strong> – Receive
            doctor-verified reports via WhatsApp, email, and the Orange Health
            app. You can also access them anytime from your account.
          </p>
        </div>
      ),
    },
    {
      id: "why",
      title: "Why Choose Orange Health Labs Over Diagnostic Labs?",
      content: (
        <div className="orange-text">
          <p>
            <strong>Fastest Turnaround:</strong> Reports delivered in as little
            as 6 hours.
          </p>
          <p>
            <strong>At-Home Comfort:</strong> Skilled eMedics with 100+ hours
            of training, ensuring safe, painless collection with a single prick.
          </p>
          <p>
            <strong>Trusted Quality:</strong> ISO Certified, ICMR approved
            labs, and advanced diagnostic technology.
          </p>
          <p>
            <strong>Rated 4.5★:</strong> Recommended by 1,000+ doctors and
            trusted by 1M+ customers.
          </p>
          <p>
            <strong>Flexible Payments:</strong> UPI, debit/credit cards,
            and more.
          </p>
        </div>
      ),
    },
    {
      id: "tests",
      title: "Popular Blood Tests",
      content: (
        <p className="orange-text popular-tests">
          AEC Test Price, Anti CCP Test Price, Anti Mullerian Hormone Test
          Price, Anti TPO Test Price, APTT Test Price, AST Test Price, Beta
          HCG Test Price, Blood Culture Test Price, Calcium Test Price,
          Chlamydia Test Price, Complete Blood Count Test Price, Creatinine
          Test Price, CRP Test Price, CT Test Price, D Dimer Test Price,
          Dengue Test Price, Electrolytes Test Price, ESR Test Price,
          Estradiol Test Price, FBS Test Price, Ferritin Test Price,
          Free T4 Test Price, FSH Test Price, Free T3 Test Price, HbA1c
          Test Price, HBsAg Test Price, HIV Test Price, Homocysteine Test
          Price, hsCRP Test Price, IL6 Test Price, Immunoglobulin IgE Test
          Price, Insulin Fasting Test Price, Iron Profile Test Price,
          Kidney Function Test Price, Lactate Dehydrogenase LDH Test Price,
          LDL Cholesterol Test Price, Lipid Profile Test Price, Liver
          Function Test Price, Malarial Antigen Test Price, Packed Cell
          Volume Test Price, Peripheral Blood Smear Test Price, Platelet
          Count Test Price, Potassium Test Price, PPBS Test Price,
          Prolactin Test Price, RBS Test Price, Rheumatoid Factor Test
          Price, RT PCR Test Price, SGPT Test Price, Tax Saver Health
          Checkup Price, Testosterone Total Test Price, Thyroid Function
          Test Price, Total Bilirubin Test Price, Triglyceride Test Price,
          TSH Test Price, Uric Acid Test Price, Urine Culture Test Price,
          Urine Routine Test Price, VDRL Test Price, Vitamin B12 Test
          Price, Vitamin D Test Price, Widal Test Price, BUN Test Price,
          CA 125 Test Price, Cholesterol Test Price, PCOD Test Price,
          Prothrombin Time Test Price, PSA Test Price, Serum Iron Test
          Price, and Typhidot Test Price.
        </p>
      ),
    },
  ];

  return (
    <div className="additional-info-page">
      <div className="additional-info-layout">
        <div className="additional-info-title">
          <h2>Additional Info</h2>
        </div>

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
