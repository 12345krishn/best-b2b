import "./services.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2B Data Services in India | Best B2B Data Provider",
  description:
    "Explore company databases, B2B contact data, exhibition data, lead generation and data enrichment solutions.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    number: "01",
    title: "Company Database",
    description:
      "Explore structured company information, business categories, locations and industry details for market research.",
    link: "/company-database",
    label: "COMPANY INFORMATION",
  },
  {
    number: "02",
    title: "B2B Contact Database",
    description:
      "Explore available professional and business contact information to support sales research and business outreach.",
    link: "/b2b-contact-database",
    label: "PROFESSIONAL CONTACTS",
  },
  {
    number: "03",
    title: "Lead Generation",
    description:
      "Identify relevant business audiences and potential prospects for sales and business development activities.",
    link: "/lead-generation",
    label: "BUSINESS OPPORTUNITIES",
  },
  {
    number: "04",
    title: "Exhibition Data",
    description:
      "Explore exhibitor and exhibition-related business information to research industries and participating companies.",
    link: "/exhibition-data",
    label: "EXHIBITOR INFORMATION",
  },
  {
    number: "05",
    title: "Data Enrichment",
    description:
      "Organize and improve existing business records by reviewing available company information.",
    link: "/data-enrichment",
    label: "DATA ORGANIZATION",
  },
  {
    number: "06",
    title: "City & State-wise Data",
    description:
      "Explore business information by location and region for geographical market research across India.",
    link: "/industries",
    label: "REGIONAL DATA",
  },
];

const regions = [
  {
    number: "01",
    title: "North India",
    states: "Delhi, Uttar Pradesh, Haryana, Punjab, Rajasthan",
  },
  {
    number: "02",
    title: "South India",
    states: "Tamil Nadu, Karnataka, Kerala, Telangana, Andhra Pradesh",
  },
  {
    number: "03",
    title: "West India",
    states: "Maharashtra, Gujarat, Goa, Madhya Pradesh",
  },
  {
    number: "04",
    title: "East India",
    states: "West Bengal, Bihar, Odisha, Jharkhand, Assam",
  },
];

const formats = [
  {
    number: "01",
    title: "Excel Format",
    description: "Organized spreadsheet data for easy review and filtering.",
  },
  {
    number: "02",
    title: "CSV Format",
    description: "Flexible tabular files for compatible business tools.",
  },
  {
    number: "03",
    title: "Database Requirements",
    description: "Discuss your preferred data structure and integration needs.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page-premium">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="tag">OUR SERVICES</span>

          <h1>
            Business Data Solutions
            <br />
            <span>For Growing Businesses</span>
          </h1>

          <p>
            Finding relevant business information is an important
            part of understanding your market. Explore our B2B data
            solutions for company research, professional contacts,
            lead generation and business development.
          </p>

          <Link href="/contact" className="services-btn">
            Discuss Your Requirements →
          </Link>

          <div className="services-hero-points">
            <span>✓ Company Information</span>
            <span>✓ Professional Contacts</span>
            <span>✓ Business Research</span>
          </div>
        </div>

        <div className="services-hero-side">
          <span className="services-side-label">BUSINESS DATA SOLUTIONS</span>
          <h2>Better Information. Clearer Direction.</h2>
          <p>
            Explore business information according to your
            industry, audience and research requirements.
          </p>
          <div className="services-side-line" />
          <span>COMPANY DATA · CONTACT DATA · MARKET RESEARCH</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-page-section">
        <div className="services-heading">
          <span className="tag">WHAT WE OFFER</span>
          <h2>Explore Our Data Services</h2>
          <p>
            Practical business data solutions based on different
            research, sales and marketing requirements.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-label">{service.label}</span>
              </div>

              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.link}>
                  Explore Service →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REGIONAL DATA */}
      <section className="services-regional">
        <div className="services-heading">
          <span className="tag">REGIONAL COVERAGE</span>
          <h2>Explore Business Data Across India</h2>
          <p>
            Organize your market research around geographical
            regions and business locations.
          </p>
        </div>

        <div className="services-regional-grid">
          {regions.map((region) => (
            <article key={region.number}>
              <span>{region.number}</span>
              <h3>{region.title}</h3>
              <p>{region.states}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DELIVERY FORMATS */}
      <section className="services-delivery">
        <div className="services-heading">
          <span className="tag">DATA DELIVERY</span>
          <h2>Formats That Fit Your Workflow</h2>
          <p>
            Discuss the most suitable way to organize and
            receive your required business information.
          </p>
        </div>

        <div className="services-delivery-grid">
          {formats.map((format) => (
            <article key={format.number}>
              <span>{format.number}</span>
              <h3>{format.title}</h3>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="services-process">
        <span className="tag">OUR APPROACH</span>
        <h2>Start With Your Business Requirements</h2>
        <p>
          Every business has different information needs.
          We focus on understanding your target audience,
          preferred categories and required data format
          before discussing a suitable solution.
        </p>
        <Link href="/contact" className="services-btn">
          Discuss Your Requirements →
        </Link>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <span className="tag">LET'S CONNECT</span>
        <h2>Looking for the Right Business Data Solution?</h2>
        <p>
          Tell us about your business requirements, target
          industries and preferred data format.
        </p>
        <Link href="/contact" className="services-btn">
          Contact Our Team →
        </Link>
      </section>

    </main>
  );
}
