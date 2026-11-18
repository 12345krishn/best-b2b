
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Contact Database India | Best B2B Data Provider",
  description:
    "Explore professional contact database solutions in India. Find business professionals by company, industry, designation and other available business details.",
  alternates: {
    canonical: "/b2b-contact-database",
  },
};

const contactFeatures = [
  {
    title: "Professional Information",
    description:
      "Explore available professional details such as names, job designations and company associations.",
  },
  {
    title: "Company Association",
    description:
      "Organize professional information according to relevant companies and business categories.",
  },
  {
    title: "Industry-Based Research",
    description:
      "Explore professional contact information across relevant industries and business segments.",
  },
  {
    title: "Business Contact Details",
    description:
      "Access available business contact fields according to your selected requirements.",
  },
];

const deliveryOptions = [
  {
    title: "Excel / CSV Format",
    description:
      "Receive structured professional contact information in spreadsheet formats for business research and analysis.",
  },
  {
    title: "Database / API",
    description:
      "Discuss database or API-based delivery options for your business data requirements.",
  },
];

const faqs = [
  {
    question: "What is a professional contact database?",
    answer:
      "A professional contact database is an organized collection of business professional information, such as names, designations, company associations and available business contact details.",
  },
  {
    question: "Does the database cover India?",
    answer:
      "Our website is focused on business data requirements in India. Share your target locations and requirements with us to discuss availability.",
  },
  {
    question: "Which delivery formats are available?",
    answer:
      "Excel, CSV and database or API-based delivery options can be discussed according to your requirements.",
  },
  {
    question: "Can I request specific industries or designations?",
    answer:
      "Yes. You can mention your target industry, location, company type and professional designations in your enquiry. Availability will need to be confirmed.",
  },
];

export default function ProfessionalContactDatabasePage() {
  return (
    <main className="product-page contact-database-page">
      <section className="product-hero">
        <div className="product-container product-hero-grid">
          <div className="product-hero-content">
            <span className="product-eyebrow">
              PROFESSIONAL BUSINESS INFORMATION · INDIA
            </span>

            <h1>
              Professional Contact Database
              <span> for Indian Businesses</span>
            </h1>

            <p>
              Explore organized professional information to support B2B
              research, target market identification and business development.
              Discuss your requirements by industry, location and designation.
            </p>

            <div className="product-actions">
              <a href="/contact" className="product-btn">
                Send an Enquiry →
              </a>
              <a href="/services" className="product-outline-btn">
                Explore Services
              </a>
            </div>

            <div className="product-highlights">
              <span>✓ India-focused requirements</span>
              <span>✓ Excel / CSV options</span>
              <span>✓ Database / API options</span>
            </div>
          </div>

          <div className="product-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Business professionals working together"
            />
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container product-intro">
          <span className="product-eyebrow">ABOUT THE DATABASE</span>
          <h2>
            Find Relevant <span>Business Professionals</span>
          </h2>
          <p>
            Professional contact information can help businesses understand
            their target audience and organize prospect research. Our
            professional contact database offering is designed around
            business-specific requirements in India.
          </p>
        </div>
      </section>

      <section className="product-section product-light">
        <div className="product-container">
          <div className="product-section-heading">
            <span className="product-eyebrow">DATABASE INFORMATION</span>
            <h2>Explore Available Information Categories</h2>
            <p>
              The information fields depend on the selected database and
              confirmed availability.
            </p>
          </div>

          <div className="product-card-grid">
            {contactFeatures.map((item, index) => (
              <article className="product-info-card" key={item.title}>
                <span className="product-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container">
          <div className="product-section-heading">
            <span className="product-eyebrow">DATA DELIVERY</span>
            <h2>Choose a Suitable Data Format</h2>
            <p>
              Discuss the most suitable delivery method for your business
              workflow.
            </p>
          </div>

          <div className="product-delivery-grid">
            {deliveryOptions.map((item) => (
              <article className="product-delivery-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="/contact">Discuss Your Requirements →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section product-light">
        <div className="product-container product-process">
          <div>
            <span className="product-eyebrow">HOW IT WORKS</span>
            <h2>Discuss Your Professional Data Requirements</h2>
            <p>
              Tell us what type of professionals you want to research.
              We can discuss the relevant requirements and available options.
            </p>
          </div>

          <div className="product-steps">
            <div>
              <span>01</span>
              <section>
                <h3>Share Your Requirements</h3>
                <p>Specify your target industry, location and designations.</p>
              </section>
            </div>
            <div>
              <span>02</span>
              <section>
                <h3>Discuss Data Availability</h3>
                <p>Review the requested information fields and availability.</p>
              </section>
            </div>
            <div>
              <span>03</span>
              <section>
                <h3>Confirm Delivery Options</h3>
                <p>Discuss Excel, CSV, database or API delivery requirements.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container">
          <div className="product-section-heading">
            <span className="product-eyebrow">COMMON QUESTIONS</span>
            <h2>Professional Contact Database FAQs</h2>
          </div>

          <div className="product-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="product-cta">
        <div className="product-container product-cta-inner">
          <div>
            <span className="product-eyebrow">LET'S CONNECT</span>
            <h2>Looking for Professional Contact Information?</h2>
            <p>
              Share your business requirements and discuss suitable database
              options with our team.
            </p>
          </div>
          <a href="/contact" className="product-btn product-btn-white">
            Contact Us →
          </a>
        </div>
      </section>
    </main>
  );
}
