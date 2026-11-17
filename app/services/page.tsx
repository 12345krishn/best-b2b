
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Data Services in India | Best B2B Data Provider",
  description:
    "Explore B2B contact database, business data and data enrichment solutions for businesses in India.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "B2B Data Services in India | Best B2B Data Provider",
    description:
      "Explore business data solutions, B2B contact databases and data enrichment services.",
    url: "/services",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "B2B Contact Database",
    description:
      "Access business contact information to help your sales and marketing teams identify and connect with relevant decision-makers.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional working on business contact data using a laptop",
    link: "/b2b-contact-database",
  },
  {
    number: "02",
    title: "Business Data Solutions",
    description:
      "Explore structured company information to support market research, prospecting and business development activities.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    alt: "Business professionals discussing company data and strategy",
    link: "/#contact",
  },
  {
    number: "03",
    title: "Data Enrichment",
    description:
      "Improve your existing business records by organizing and enriching available company information.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
    alt: "Business data analytics dashboard with charts and visualizations",
    link: "/data-enrichment",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page-premium">
      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="tag">OUR SERVICES</span>

          <h1>
            Smarter B2B Data Solutions
            <br />
            <span>For Business Growth</span>
          </h1>

          <p>
            Discover business data solutions designed to support
            your sales, marketing and research teams. Make better
            business decisions with structured and relevant data.
          </p>

          <a href="/#contact" className="services-btn">
            Talk to Our Team →
          </a>
        </div>

        <div className="services-hero-image">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
            alt="Business team collaborating on digital projects"
            fetchPriority="high"
          />
          <div className="services-image-caption">
            <span>DATA-DRIVEN APPROACH</span>
            <strong>Better Insights. Better Opportunities.</strong>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
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
              <div className="service-card-image">
                <img src={service.image} alt={service.alt} loading="lazy" />
                <span className="service-number">
                  {service.number}
                </span>
              </div>

              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.link}>
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="services-process">
        <div className="services-process-content">
          <span className="tag">OUR APPROACH</span>
          <h2>Turning Business Data Into Meaningful Opportunities</h2>
          <p>
            Every business has different data requirements. We focus
            on understanding your goals and exploring suitable data
            solutions that support your business activities.
          </p>

          <a href="/#contact" className="services-btn">
            Discuss Your Requirements →
          </a>
        </div>

        <div className="services-process-image">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1100&q=85"
            alt="Digital global network representing connected business information"
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="services-cta">
        <span className="tag">LET'S CONNECT</span>
        <h2>Looking for the Right Business Data Solution?</h2>
        <p>
          Let's discuss your business requirements and explore
          how our data solutions can support your goals.
        </p>
        <a href="/contact" className="services-btn">
          Contact Us →
        </a>
      </section>
    </main>
  );
}
