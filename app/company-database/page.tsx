
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Database India | B2B Business Database Provider",
  description:
    "Explore company database solutions in India with business names, industry information, locations and available company details.",
  alternates: {
    canonical: "/company-database",
  },
};

const companyFeatures = [
  {
    title: "Company Name & Profile",
    description:
      "Explore available company names and business profile information for market research.",
  },
  {
    title: "Industry Classification",
    description:
      "Organize company information according to relevant industries and business categories.",
  },
  {
    title: "Business Location",
    description:
      "Explore available company location details based on your target Indian markets.",
  },
  {
    title: "Business Information",
    description:
      "Review available company details and other relevant business information according to your requirements.",
  },
];

const industries = [
  "Manufacturing",
  "Information Technology",
  "Healthcare",
  "Banking & Finance",
  "Real Estate",
  "Logistics & Transportation",
  "Education",
  "Retail & E-commerce",
];

const faqs = [
  {
    question: "What is a company database?",
    answer:
      "A company database is an organized collection of business information that may include company names, industry categories, locations, websites and other available business details.",
  },
  {
    question: "Does the company database cover Indian businesses?",
    answer:
      "Our website focuses on Indian business data requirements. Specific industries, locations and company coverage should be confirmed based on your enquiry.",
  },
  {
    question: "Can I request industry-specific company information?",
    answer:
      "Yes. You can mention your preferred industries, business categories and target locations when submitting an enquiry. We can discuss the available coverage.",
  },
  {
    question: "How can I receive company database information?",
    answer:
      "Excel, CSV and database or API-based delivery options can be discussed according to your business requirements.",
  },
];

export default function CompanyDatabasePage() {
  return (
    <main className="product-page company-database-page">
      <section className="product-hero">
        <div className="product-container product-hero-grid">
          <div className="product-hero-content">
            <span className="product-eyebrow">
              B2B COMPANY INFORMATION · INDIA
            </span>

            <h1>
              Company Database
              <span> for Indian Businesses</span>
            </h1>

            <p>
              Explore organized company information to understand business
              markets, research industries and identify relevant organizations
              across India.
            </p>

            <div className="product-actions">
              <a href="/contact" className="product-btn">
                Request a Quote →
              </a>
              <a href="/industries" className="product-outline-btn">
                Explore Industries
              </a>
            </div>

            <div className="product-highlights">
              <span>✓ India-focused business data</span>
              <span>✓ Industry-based research</span>
              <span>✓ Excel / CSV and API options</span>
            </div>
          </div>

          <div className="product-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85"
              alt="Modern commercial business buildings"
            />
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container product-intro">
          <span className="product-eyebrow">COMPANY DATABASE SOLUTIONS</span>
          <h2>
            Explore <span>Business Information</span> Across India
          </h2>
          <p>
            A structured company database can support market research,
            industry analysis and business development planning. Our company
            database offering is designed around your target industries,
            locations and business information requirements.
          </p>
        </div>
      </section>

      <section className="product-section product-light">
        <div className="product-container">
          <div className="product-section-heading">
            <span className="product-eyebrow">DATABASE CATEGORIES</span>
            <h2>What Company Information Can You Explore?</h2>
            <p>
              Available information fields depend on the selected database
              and confirmed coverage.
            </p>
          </div>

          <div className="product-card-grid">
            {companyFeatures.map((item, index) => (
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
            <span className="product-eyebrow">INDUSTRY COVERAGE</span>
            <h2>Explore Different Business Industries</h2>
            <p>
              Tell us which industry and business segment you want to research.
            </p>
          </div>

          <div className="product-industry-grid">
            {industries.map((industry) => (
              <a href="/industries" key={industry}>
                <span>▣</span>
                {industry}
                <strong>→</strong>
              </a>
            ))}
          </div>

          <div className="product-center-link">
            <a href="/industries">Explore All Industries →</a>
          </div>
        </div>
      </section>

      <section className="product-section product-light">
        <div className="product-container">
          <div className="product-section-heading">
            <span className="product-eyebrow">DATA DELIVERY OPTIONS</span>
            <h2>Receive Business Information in Your Preferred Format</h2>
          </div>

          <div className="product-delivery-grid">
            <article className="product-delivery-card">
              <h3>Excel / CSV</h3>
              <p>
                Spreadsheet-based data delivery options for business research,
                analysis and record management.
              </p>
              <a href="/contact">Discuss Excel / CSV Requirements →</a>
            </article>

            <article className="product-delivery-card">
              <h3>Database / API</h3>
              <p>
                Discuss database or API-based delivery options for your
                business systems and workflows.
              </p>
              <a href="/contact">Discuss Database / API Requirements →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container product-process">
          <div>
            <span className="product-eyebrow">OUR PROCESS</span>
            <h2>Find the Right Company Data for Your Requirements</h2>
            <p>
              Tell us about the businesses you want to research so we can
              discuss suitable data categories and availability.
            </p>
          </div>

          <div className="product-steps">
            <div>
              <span>01</span>
              <section>
                <h3>Define Your Target Market</h3>
                <p>Share your preferred industry, location and company type.</p>
              </section>
            </div>
            <div>
              <span>02</span>
              <section>
                <h3>Review Available Information</h3>
                <p>Discuss the company information fields and coverage.</p>
              </section>
            </div>
            <div>
              <span>03</span>
              <section>
                <h3>Choose a Delivery Format</h3>
                <p>Discuss Excel, CSV, database or API-based delivery.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container">
          <div className="product-section-heading">
            <span className="product-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2>Company Database FAQs</h2>
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
            <span className="product-eyebrow">GET IN TOUCH</span>
            <h2>Looking for an Indian Company Database?</h2>
            <p>
              Share your target market and company information requirements
              with our team.
            </p>
          </div>

          <a href="/contact" className="product-btn product-btn-white">
            Send an Enquiry →
          </a>
        </div>
      </section>
    </main>
  );
}
