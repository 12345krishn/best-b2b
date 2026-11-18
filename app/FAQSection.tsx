
"use client";

import { useState } from "react";

export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is a B2B Company Database?",
      a: "A B2B Company Database contains business information that helps companies find potential customers, suppliers and business partners.",
    },
    {
      q: "Which locations do you cover in India?",
      a: "We offer location-based database options across North, South, East and West India, subject to available coverage.",
    },
    {
      q: "In which formats can I receive the data?",
      a: "Data delivery options include Excel and CSV. Database or API delivery can be discussed separately.",
    },
    {
      q: "Do you provide industry-wise data?",
      a: "Yes, industry-wise and business-category requirements can be discussed with our team.",
    },
    {
      q: "Do you offer bulk data packages?",
      a: "Yes, customised bulk data packages can be discussed according to your requirements.",
    },
    {
      q: "How can I enquire about pricing?",
      a: "Visit our Contact Us page and share your data requirements to discuss pricing.",
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-heading">
          <span className="faq-tag">HELP & SUPPORT</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our B2B data solutions.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                type="button"
                className="faq-question"
                onClick={() =>
                  setActiveFAQ(activeFAQ === index ? null : index)
                }
              >
                {faq.q}
                <span>{activeFAQ === index ? "−" : "+"}</span>
              </button>

              {activeFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
