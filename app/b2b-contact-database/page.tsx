
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Contact Database India | Best B2B Data Provider",
  description:
    "Explore B2B contact database solutions in India. Find relevant business information to support sales, marketing and business research.",
  alternates: {
    canonical: "/b2b-contact-database",
  },
};

export default function B2BContactDatabasePage() {
  return (
    <main>
      <section className="database-hero">
        <span className="tag">B2B DATA SOLUTIONS</span>

        <h1>
          B2B Contact Database
          <br />
          <span>For Business Growth</span>
        </h1>

        <p>
          Discover business contact and company information
          to support your sales, marketing and business
          development activities across India.
        </p>

        <a href="/#contact" className="services-btn">
          Get in Touch →
        </a>
      </section>

      <section className="database-content">
        <span className="tag">OUR SOLUTION</span>

        <h2>Find the Right Business Information</h2>

        <p>
          A structured B2B contact database can help businesses
          research potential customers, identify relevant
          companies and organize their prospecting activities.
          Our solutions are designed to support business teams
          looking for useful company and contact information.
        </p>

        <div className="database-grid">
          <article className="database-card">
            <h3>Company Information</h3>
            <p>
              Explore company-level information to support
              business research and market understanding.
            </p>
          </article>

          <article className="database-card">
            <h3>Business Contacts</h3>
            <p>
              Find relevant business contact information
              for your prospecting requirements.
            </p>
          </article>

          <article className="database-card">
            <h3>Sales Research</h3>
            <p>
              Support your sales team with organized
              business information and research.
            </p>
          </article>
        </div>
      </section>

      <section className="database-cta">
        <h2>Looking for Business Data Solutions?</h2>
        <p>
          Tell us about your requirements and connect with our team.
        </p>
        <a href="/#contact" className="services-btn">
          Contact Us →
        </a>
      </section>
    </main>
  );
}
