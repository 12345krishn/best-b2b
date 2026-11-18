import type { Metadata } from "next";
import ContactForm from "./ContactFrom";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Us | Best B2B Data Provider India",
  description:
    "Contact Best B2B Data Provider for B2B contact databases, company data and business data requirements.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page-premium">
      <div className="contact-title-bar">
        <h1>Contact Us</h1>
      </div>

      <section className="contact-layout">
        {/* LEFT SIDE - COMPANY DETAILS */}
        <div className="contact-company-info">
          <div className="contact-anniversary">
            <span className="anniversary-stars">✦ ✦ ✦ ✦ ✦</span>
            <strong>16<sup>th</sup></strong>
            <span className="anniversary-year">YEAR</span>
            <span className="anniversary-success">SUCCESS</span>
          </div>

          <h2>Best B2B Data Provider</h2>
          <h3>Business Data Solutions Across India</h3>

          <div className="contact-details">
            <p>
              <span>▣</span>
              <strong>Head Office:</strong> India
            </p>

            <p>
              <span>☎</span>
              <strong>Sales:</strong>{" "}
              <a href="tel:8587804924">8587804924</a>
            </p>

            <p>
              <span>✉</span>
              <strong>Email:</strong>{" "}
              <a href="mailto:sales@bestb2bdata.com">
                sales@bestb2bdata.com
              </a>
            </p>

            <p>
              <span>◎</span>
              <strong>Web:</strong>{" "}
              <a href="https://bestb2bdata.com" target="_blank">
                www.bestb2bdata.com
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - ENQUIRY FORM */}
        <div className="contact-form-area">
          <h2>Enquiry Related to Data</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}