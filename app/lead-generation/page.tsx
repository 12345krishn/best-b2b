
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Lead Generation Solutions in India | Best B2B Data Provider",
  description:
    "Explore B2B lead generation data solutions in India to support business prospecting, sales research and customer acquisition.",
  alternates: {
    canonical: "/lead-generation",
  },
};

export default function LeadGenerationPage() {
  return (
    <main>
      <section className="lead-hero">
        <span className="tag">B2B LEAD GENERATION</span>

        <h1>
          Find Better Business
          <br />
          <span>Opportunities with B2B Data</span>
        </h1>

        <p>
          Support your sales and marketing activities with
          structured business information and prospecting
          data designed for your business requirements.
        </p>

        <a href="/#contact" className="services-btn">
          Discuss Your Requirements →
        </a>
      </section>

      <section className="lead-content">
        <span className="tag">OUR APPROACH</span>
        <h2>Build a Smarter Prospecting Strategy</h2>

        <p>
          Effective B2B prospecting starts with understanding
          your target market and identifying relevant businesses.
          Business data can help teams organize research,
          prioritize potential customers and plan outreach.
        </p>

        <div className="lead-grid">
          <article className="lead-card">
            <span>01</span>
            <h3>Identify Target Businesses</h3>
            <p>
              Define the industries and types of companies
              that match your business requirements.
            </p>
          </article>

          <article className="lead-card">
            <span>02</span>
            <h3>Research Prospects</h3>
            <p>
              Use relevant company and business information
              to support prospect research.
            </p>
          </article>

          <article className="lead-card">
            <span>03</span>
            <h3>Support Sales Teams</h3>
            <p>
              Organize prospect information to help your
              team plan its sales activities.
            </p>
          </article>
        </div>
      </section>

      <section className="lead-cta">
        <h2>Let's Discuss Your Business Requirements</h2>
        <p>
          Connect with our team to explore suitable B2B data solutions.
        </p>
        <a href="/#contact" className="services-btn">
          Contact Us →
        </a>
      </section>
    </main>
  );
}
