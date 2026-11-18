
"use client";

import { useState } from "react";

const clients = [
  { name: "Thermax", image: "/clients/thermax.jpg" },
  { name: "ITC Limited", image: "/clients/itc.jpg" },
  { name: "Organic India", image: "/clients/organic-india.jpg" },
  { name: "Amul", image: "/clients/amul.jpg" },
  { name: "UltraTech", image: "/clients/ultratech.jpg" },
  { name: "Ola", image: "/clients/ola.jpg" },
];

const faqs = [
  {
    question: "Why should I purchase data from you?",
    answer:
      "We provide business-focused database solutions to help companies connect with relevant businesses and potential customers.",
  },
  {
    question: "Is my payment and data purchase secure?",
    answer:
      "We follow secure processes for handling customer enquiries and purchase information. Contact our team for payment assistance.",
  },
  {
    question: "Do you provide a verified and updated database?",
    answer:
      "We work to maintain and update our database. Please contact our team for the latest verification details.",
  },
  {
    question: "What if I need support after purchase?",
    answer:
      "Our support team can assist you with database-related questions and post-purchase queries.",
  },
  {
    question: "How much validity does your data have?",
    answer:
      "Data validity depends on the selected database and its category. Please confirm the validity before placing an order.",
  },
  {
    question: "Who can use this database?",
    answer:
      "Businesses, startups, marketing teams, sales professionals and organizations can use relevant business databases.",
  },
  {
    question: "What kind of details are included in this database?",
    answer:
      "Depending on the database, details may include company names, contact information, industry, location and other business-related fields.",
  },
  {
    question: "How can this database help grow my business?",
    answer:
      "It can help your team discover potential customers, identify business opportunities and organize sales outreach.",
  },
  {
    question: "Which data categories do you have?",
    answer:
      "We offer different B2B database categories across industries. Contact us to explore available categories.",
  },
  {
    question: "Can this database increase my sales?",
    answer:
      "A relevant database can support lead generation and sales outreach. Results depend on your targeting and sales strategy.",
  },
];

export default function ClientFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      {/* CLIENT SECTION */}
      <section className="client-section">
        <div className="client-heading">
          <span>Biggest B2B Data Provider in India</span>
          <span>Some List of Our Reputed Clients - Since 2011</span>
          <span>+825 Titles</span>
        </div>

        <div className="client-logos">
          {clients.map((client) => (
            <div className="client-logo" key={client.name}>
              <img src={client.image} alt={client.name} />
            </div>
          ))}
        </div>

        <div className="client-more">
          <a href="/clients">More</a>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                onClick={() =>
                  setOpenFAQ(openFAQ === index ? null : index)
                }
                aria-expanded={openFAQ === index}
              >
                <span>{faq.question}</span>
                <span className="faq-plus">
                  {openFAQ === index ? "−" : "+"}
                </span>
              </button>

              {openFAQ === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
