
import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState({});

  const faqs = [
    {
      id: 1,
      question:
        "1. In how many cities does Orange Health Labs provide diagnostic services?",
      answer: (
        <strong>
          Orange Health Labs currently provides diagnostic services in six
          cities: Bangalore, Mumbai, Delhi, Gurugram, Noida, and Hyderabad.
        </strong>
      ),
    },
    {
      id: 2,
      question:
        "2. Does Orange Health Labs have physical diagnostic centres?",
      answer: (
        <strong>
          Yes. You can either book online for home collection or walk into
          one of our collection centres near you for testing.
        </strong>
      ),
    },
    {
      id: 3,
      question:
        "3. What are the service hours for at-home collection?",
      answer: (
        <strong>
          At-home collection is available between 6:00 AM and 10:00 PM via
          our website or the Orange Health Labs app. If you prefer visiting
          in person, our collection centres are open from 7:00 AM to 9:30 PM.
        </strong>
      ),
    },
    {
      id: 4,
      question:
        "4. Can I cancel or reschedule a booking?",
      answer: (
        <strong>
          Yes. Simply connect with us on WhatsApp at 9008111144 and our
          support team will assist you with cancellation or rescheduling.
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
