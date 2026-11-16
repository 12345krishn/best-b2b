
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Data Enrichment Services in India | Best B2B Data Provider",
  description:
    "Explore B2B data enrichment solutions to organize, improve and maintain business information for better sales research.",
  alternates: {
    canonical: "/data-enrichment",
  },
};

export default function DataEnrichmentPage() {
  return (
    <main>
      <section className="enrichment-hero">
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
      </section>

      <section className="enrichment-content">
        <span className="tag">OUR SOLUTIONS</span>
        <h2>Organize Your Business Information</h2>

        <p>
          Business data can become incomplete or outdated over
          time. A structured enrichment process can help
          businesses review, organize and improve their
          existing company records.
        </p>

        <div className="enrichment-grid">
          <article className="enrichment-card">
            <h3>Data Organization</h3>
            <p>
              Organize business records into a consistent
              and structured format.
            </p>
          </article>

          <article className="enrichment-card">
            <h3>Data Enhancement</h3>
            <p>
              Review available company information and
              identify opportunities to improve records.
            </p>
          </article>

          <article className="enrichment-card">
            <h3>Data Maintenance</h3>
            <p>
              Support regular review of business information
              to help maintain useful records.
            </p>
          </article>
        </div>
      </section>

      <section className="enrichment-cta">
        <h2>Need Help Improving Your Business Data?</h2>
        <p>
          Tell us about your data requirements.
        </p>
        <a href="/#contact" className="services-btn">
          Contact Our Team →
        </a>
      </section>
    </main>
  );
}
