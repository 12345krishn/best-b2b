
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Contact Database India | Best B2B Data Provider",
  description:
    "Explore B2B contact database solutions in India. Find relevant business information to support sales, marketing and business research.",
  alternates: {
    canonical: "/b2b-contact-database",
  },
  openGraph: {
    title: "B2B Contact Database India | Best B2B Data Provider",
    description:
      "Explore structured business contact and company information solutions for sales, marketing and business research.",
    url: "/b2b-contact-database",
    type: "website",
  },
};

const databaseFeatures = [
  {
    number: "01",
    title: "Company Information",
    description:
      "Explore company-level information to support business research, market understanding and prospect identification.",
    icon: "🏢",
  },
  {
    number: "02",
    title: "Business Contacts",
    description:
      "Find relevant business contact information for your prospecting and professional outreach requirements.",
    icon: "👥",
  },
  {
    number: "03",
    title: "Sales Research",
    description:
      "Support your sales team with organized business information and structured research workflows.",
    icon: "📊",
  },
  {
    number: "04",
    title: "Structured Data",
    description:
      "Work with organized business records that make information easier to review, manage and understand.",
    icon: "🗄️",
  },
];

const dataProcess = [
  {
    number: "01",
    title: "Data Collection",
    description:
      "Identify relevant business information according to your research requirements.",
  },
  {
    number: "02",
    title: "Data Organization",
    description:
      "Arrange available information into structured and understandable business records.",
  },
  {
    number: "03",
    title: "Data Enrichment",
    description:
      "Improve existing records by organizing and adding relevant available company information.",
  },
];

export default function B2BContactDatabasePage() {
  return (
    <main className="database-page-premium">

      {/* HERO SECTION */}

      <section className="database-hero">
        <div className="database-hero-content">
          <span className="tag">B2B DATA SOLUTIONS</span>

          <h1>
            B2B Contact Database
            <br />
            <span>Built for Better Business Insights</span>
          </h1>

          <p>
            Discover business contact and company information
            to support your sales, marketing and business
            development activities across India.
          </p>

          <div className="database-hero-buttons">
            <a href="/#contact" className="services-btn">
              Get in Touch →
            </a>
            <a href="/services" className="database-secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="database-hero-points">
            <span>✓ Structured Business Information</span>
            <span>✓ Research-Focused Solutions</span>
          </div>
        </div>

        <div className="database-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85"
            alt="Enterprise server racks inside a modern data center"
            fetchPriority="high"
          />

          <div className="database-floating-card database-server-card">
            <span className="database-status-dot"></span>
            <div>
              <small>DATA INFRASTRUCTURE</small>
              <strong>Connected Systems</strong>
            </div>
          </div>

          <div className="database-floating-card database-network-card">
            <span className="database-network-icon">⌘</span>
            <div>
              <small>BUSINESS DATA</small>
              <strong>Organized Information</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}

      <section className="database-intro">
        <div className="database-intro-image">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85"
            alt="Electronic circuit board representing digital data technology"
            loading="lazy"
          />
          <div className="database-image-label">
            <span>DATA TECHNOLOGY</span>
            <strong>Information. Structure. Insights.</strong>
          </div>
        </div>

        <div className="database-intro-content">
          <span className="tag">OUR SOLUTION</span>

          <h2>Find the Right Business Information</h2>

          <p>
            A structured B2B contact database can help businesses
            research potential customers, identify relevant
            companies and organize their prospecting activities.
          </p>

          <p>
            Our solutions are designed to support business teams
            looking for useful company and contact information
            through organized business data.
          </p>

          <a href="/#contact" className="database-text-link">
            Discuss Your Requirements →
          </a>
        </div>
      </section>

      {/* DATABASE FEATURES */}

      <section className="database-features-section">
        <div className="database-section-heading">
          <span className="tag">DATABASE CAPABILITIES</span>
          <h2>Business Information That Supports Your Workflow</h2>
          <p>
            Explore different types of business information
            that can support your research and prospecting activities.
          </p>
        </div>

        <div className="database-grid">
          {databaseFeatures.map((feature) => (
            <article className="database-card" key={feature.number}>
              <div className="database-card-top">
                <span className="database-feature-icon">
                  {feature.icon}
                </span>
                <span className="database-feature-number">
                  {feature.number}
                </span>
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>

              <div className="database-card-line"></div>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}

      <section className="database-tech-section">
        <div className="database-tech-content">
          <span className="tag">TECHNOLOGY & DATA</span>

          <h2>
            Organized Data for Smarter Business Decisions
          </h2>

          <p>
            Business information becomes more useful when it is
            organized, accessible and aligned with your objectives.
            A structured data approach can help teams understand
            information and manage their research more effectively.
          </p>

          <ul>
            <li>Structured business records</li>
            <li>Organized company information</li>
            <li>Business research support</li>
            <li>Data enrichment workflows</li>
          </ul>

          <a href="/data-enrichment" className="services-btn">
            Explore Data Enrichment →
          </a>
        </div>

        <div className="database-tech-visual">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85"
            alt="Global digital network representing connected business data systems"
            loading="lazy"
          />

          <div className="database-tech-overlay">
            <span>DATA CONNECTIVITY</span>
            <strong>Connecting Business Information</strong>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}

      <section className="database-process-section">
        <div className="database-section-heading">
          <span className="tag">HOW IT WORKS</span>
          <h2>A Structured Approach to Business Data</h2>
          <p>
            Explore a simple approach to organizing business
            information around your requirements.
          </p>
        </div>

        <div className="database-process-grid">
          {dataProcess.map((step) => (
            <article className="database-process-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="database-cta">
        <span className="tag">LET'S CONNECT</span>

        <h2>Looking for the Right Business Data Solutions?</h2>

        <p>
          Tell us about your requirements and connect with our team
          to explore suitable B2B data solutions.
        </p>

        <a href="/#contact" className="services-btn">
          Contact Our Team →
        </a>
      </section>

    </main>
  );
}
