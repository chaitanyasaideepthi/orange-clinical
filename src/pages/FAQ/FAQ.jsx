import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState({});

  const faqs = [
    {
      id: 1,
      question: "1. How can I book a diagnostic test?",
      answer: (
        <strong>
          You can book a diagnostic test through the BluelineMD website by
          searching for your required test, adding it to your cart, selecting
          your location, and booking a convenient appointment.
        </strong>
      ),
    },
    {
      id: 2,
      question: "2. Does BluelineMD offer home sample collection?",
      answer: (
        <strong>
          Yes, BluelineMD offers home sample collection in selected
          serviceable locations. You can check your location availability
          on our website while booking your test.
        </strong>
      ),
    },
    {
      id: 3,
      question: "3. How long does it take to receive my reports?",
      answer: (
        <strong>
          Report delivery time depends on the type of diagnostic test.
          Most routine test reports are available within 24–48 hours.
          Some specialized tests may take longer.
        </strong>
      ),
    },
    {
      id: 4,
      question: "4. How can I contact customer support?",
      answer: (
        <strong>
          You can contact BluelineMD customer support by calling
          +91 78999 16434 or emailing info@bluelinemd.com for
          assistance with bookings, reports, and other queries.
        </strong>
      ),
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="faq-page">
      <div className="faq-layout">

        {/* Left FAQ Heading */}
        <div className="faq-title">
          <span>GOT QUESTIONS?</span>
          <h2>FAQs</h2>
        </div>

        {/* Right FAQ Questions */}
        <div className="faq-content">
          {faqs.map((faq) => (
            <div className="faq-item" key={faq.id}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span>{faq.question}</span>

                <span className="faq-arrow">
                  {openFAQ[faq.id] ? "⌃" : "⌄"}
                </span>
              </button>

              {openFAQ[faq.id] && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
