
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Data Services in India | Best B2B Data Provider",
  description:
    "Explore B2B contact database, business data and data enrichment solutions for businesses in India.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    number: "01",
    title: "B2B Contact Database",
    description:
      "Access business contact information to help your sales and marketing teams identify and connect with relevant decision-makers.",
  },
  {
    number: "02",
    title: "Business Data Solutions",
    description:
      "Explore structured company information to support market research, prospecting and business development activities.",
  },
  {
    number: "03",
    title: "Data Enrichment",
    description:
      "Improve your existing business records by organizing and enriching available company information.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="services-hero">
        <span className="tag">OUR SERVICES</span>
        <h1>
          Smarter B2B Data Solutions
          <br />
          <span>For Business Growth</span>
        </h1>
        <p>
          Discover business data solutions designed to support
          your sales, marketing and research teams.
        </p>
        <a href="/#contact" className="services-btn">
          Talk to Our Team →
        </a>
      </section>

      <section className="services-page-section">
        <div className="services-heading">
          <span className="tag">WHAT WE OFFER</span>
          <h2>Explore Our Services</h2>
          <p>
            Business data solutions to help your team find
            opportunities and make informed decisions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/#contact">Learn More →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <h2>Looking for the Right Business Data Solution?</h2>
        <p>Let's discuss your business requirements.</p>
        <a href="/#contact" className="services-btn">
          Contact Us →
        </a>
      </section>
    </main>
  );
}
