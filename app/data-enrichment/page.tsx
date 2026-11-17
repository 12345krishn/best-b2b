
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Data Enrichment Services in India | Best B2B Data Provider",
  description:
    "Explore B2B data enrichment solutions to organize, improve and maintain business information for better sales research.",
  alternates: {
    canonical: "/data-enrichment",
  },
  openGraph: {
    title: "B2B Data Enrichment Services | Best B2B Data Provider",
    description:
      "Improve and organize business information with structured B2B data enrichment solutions.",
    url: "/data-enrichment",
    type: "website",
  },
};

const enrichmentFeatures = [
  {
    number: "01",
    title: "Data Organization",
    description:
      "Organize business records into a consistent and structured format that makes information easier to understand and use.",
  },
  {
    number: "02",
    title: "Data Enhancement",
    description:
      "Review available company information and identify opportunities to improve the usefulness of existing records.",
  },
  {
    number: "03",
    title: "Data Maintenance",
    description:
      "Support regular reviews of business information to help maintain organized and relevant records.",
  },
  {
    number: "04",
    title: "Data Consistency",
    description:
      "Bring business information into a more consistent format to support research, reporting and sales activities.",
  },
];

const enrichmentProcess = [
  {
    number: "01",
    title: "Review Existing Data",
    description:
      "Understand your current business records and identify areas that need attention.",
  },
  {
    number: "02",
    title: "Organize Information",
    description:
      "Structure available information into a clear and consistent format.",
  },
  {
    number: "03",
    title: "Improve Data Quality",
    description:
      "Review the organized records and identify opportunities for ongoing improvement.",
  },
];

export default function DataEnrichmentPage() {
  return (
    <main className="enrichment-page-premium">

      {/* HERO SECTION */}
      <section className="enrichment-hero">
        <div className="enrichment-hero-content">
          <span className="tag">DATA ENRICHMENT SOLUTIONS</span>

          <h1>
            Make Your Business Data
            <br />
            <span>More Useful and Organized</span>
          </h1>

          <p>
            Improve the usefulness of your business information
            with structured data enrichment solutions designed
            to support your sales and research teams.
          </p>

          <a href="/#contact" className="services-btn">
            Discuss Your Requirements →
          </a>
        </div>

        <div className="enrichment-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
            alt="Business data analytics and enrichment dashboard"
          />

          <div className="enrichment-floating-card enrichment-card-one">
            <strong>Data Organization</strong>
            <span>Structured business records</span>
          </div>

          <div className="enrichment-floating-card enrichment-card-two">
            <strong>Data Quality</strong>
            <span>Review and improve information</span>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="enrichment-intro">
        <div className="enrichment-intro-image">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
            alt="Technology infrastructure supporting business data management"
            loading="lazy"
          />
        </div>

        <div className="enrichment-intro-content">
          <span className="tag">OUR APPROACH</span>

          <h2>Organize Your Business Information</h2>

          <p>
            Business data can become incomplete or outdated over
            time. A structured enrichment process can help
            businesses review, organize and improve their
            existing company records.
          </p>

          <p>
            Our approach focuses on making business information
            easier to understand, manage and use for sales
            research and business development activities.
          </p>

          <a href="/#contact" className="services-btn">
            Explore Your Requirements →
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="enrichment-features-section">
        <span className="tag">WHAT WE OFFER</span>

        <h2>Business Data Enrichment Solutions</h2>

        <p>
          Build a more organized approach to business information
          with solutions focused on improving the structure and
          usefulness of your data.
        </p>

        <div className="enrichment-grid">
          {enrichmentFeatures.map((feature) => (
            <article className="enrichment-card" key={feature.number}>
              <span className="enrichment-number">
                {feature.number}
              </span>

              <div className="enrichment-card-icon">
                <span>✦</span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="enrichment-tech-section">
        <div className="enrichment-tech-content">
          <span className="tag">BETTER DATA. BETTER DECISIONS.</span>

          <h2>
            Turn Business Information Into
            <span> Useful Insights</span>
          </h2>

          <p>
            Organized business information can help teams
            understand their target market, conduct sales
            research and plan business development activities
            with greater clarity.
          </p>

          <a href="/#contact" className="services-btn">
            Talk to Our Team →
          </a>
        </div>

        <div className="enrichment-tech-image">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85"
            alt="Digital technology network representing connected business information"
            loading="lazy"
          />
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="enrichment-process-section">
        <span className="tag">HOW IT WORKS</span>

        <h2>Our Data Enrichment Approach</h2>

        <p>
          A structured approach helps businesses review and
          improve their existing information step by step.
        </p>

        <div className="enrichment-process-grid">
          {enrichmentProcess.map((step) => (
            <article key={step.number}>
              <span className="enrichment-process-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="enrichment-cta">
        <span className="tag">LET'S CONNECT</span>

        <h2>Need Help Improving Your Business Data?</h2>

        <p>
          Tell us about your data requirements and explore
          business data enrichment solutions for your team.
        </p>

        <a href="/#contact" className="services-btn">
          Contact Our Team →
        </a>
      </section>

    </main>
  );
}
