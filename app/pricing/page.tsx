
import type { Metadata } from "next";
import "./pricing.css";

export const metadata: Metadata = {
  title: "B2B Data Solutions Pricing | Best B2B Data Provider",
  description:
    "Explore sample pricing packages for B2B contact databases, company databases, exhibition data, bulk business data and lead generation solutions.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Best B2B Data Provider",
    description:
      "Explore flexible business data packages and custom pricing options.",
    url: "/pricing",
    type: "website",
  },
};

const plans = [
  {
    number: "01",
    name: "Starter",
    subtitle: "For small businesses",
    price: "₹4,999",
    quantity: "Up to 1,000 Records",
    description:
      "A practical starting package for businesses exploring B2B company and contact data.",
    features: [
      "Up to 1,000 business records",
      "Selected industry data",
      "Company name and business category",
      "City and state information",
      "Excel / CSV format",
      "Email support",
    ],
    featured: false,
  },
  {
    number: "02",
    name: "Growth",
    subtitle: "For growing sales teams",
    price: "₹12,999",
    quantity: "Up to 5,000 Records",
    description:
      "A flexible package for businesses looking to expand their prospecting and sales research.",
    features: [
      "Up to 5,000 business records",
      "Industry-wise data selection",
      "Company and contact information",
      "City and state-wise segmentation",
      "Excel / CSV delivery",
      "Priority enquiry support",
    ],
    featured: true,
  },
  {
    number: "03",
    name: "Business",
    subtitle: "For established businesses",
    price: "₹24,999",
    quantity: "Up to 10,000 Records",
    description:
      "A larger data package for teams with wider business research and outreach requirements.",
    features: [
      "Up to 10,000 business records",
      "Multiple industry categories",
      "Regional data segmentation",
      "Company and professional details",
      "Custom data requirements discussion",
      "Dedicated project coordination",
    ],
    featured: false,
  },
];

const dataPackages = [
  {
    number: "01",
    title: "B2B Contact Database",
    description:
      "Business contact information organized for industry research and professional outreach.",
    records: "Starting from 1,000 records",
    price: "₹4,999",
    fields: "Company, contact, designation, city and state",
  },
  {
    number: "02",
    title: "Company Database",
    description:
      "Structured company information for market research, supplier discovery and business development.",
    records: "Starting from 1,000 companies",
    price: "₹3,999",
    fields: "Company name, industry, address, city and state",
  },
  {
    number: "03",
    title: "Exhibition Data",
    description:
      "Exhibition-focused business information organized around events and participating industries.",
    records: "Starting from 500 records",
    price: "₹5,999",
    fields: "Exhibition, company, industry and location",
  },
  {
    number: "04",
    title: "City & State-wise Data",
    description:
      "Explore company information based on selected cities, states and geographical regions.",
    records: "Starting from 1,000 records",
    price: "₹4,499",
    fields: "Company, city, state, region and industry",
  },
];

const bulkPackages = [
  {
    quantity: "5,000",
    price: "₹12,999",
    label: "Growth Package",
    saving: "Sample bulk rate",
  },
  {
    quantity: "10,000",
    price: "₹22,999",
    label: "Business Package",
    saving: "Sample bulk rate",
  },
  {
    quantity: "25,000",
    price: "₹44,999",
    label: "Professional Package",
    saving: "Sample bulk rate",
  },
  {
    quantity: "50,000+",
    price: "Custom Quote",
    label: "Enterprise Package",
    saving: "Discuss volume pricing",
  },
];

const regions = [
  {
    name: "North India",
    locations: "Delhi, Haryana, Punjab, Uttar Pradesh, Rajasthan",
  },
  {
    name: "South India",
    locations: "Karnataka, Tamil Nadu, Telangana, Kerala, Andhra Pradesh",
  },
  {
    name: "East India",
    locations: "West Bengal, Odisha, Bihar, Jharkhand, Assam",
  },
  {
    name: "West India",
    locations: "Maharashtra, Gujarat, Goa, Madhya Pradesh",
  },
];

const pricingFaqs = [
  {
    question: "How is the final pricing calculated?",
    answer:
      "Pricing depends on record quantity, industry selection, geographical coverage, required fields and delivery requirements.",
  },
  {
    question: "Can I purchase industry-specific data?",
    answer:
      "Yes. You can discuss requirements for sectors such as manufacturing, IT, healthcare, finance, real estate, logistics and retail.",
  },
  {
    question: "What formats are available?",
    answer:
      "Data delivery can be discussed in Excel and CSV formats. Other requirements can be reviewed with the team.",
  },
  {
    question: "Do you offer bulk data packages?",
    answer:
      "Yes. Larger requirements can be discussed with the team for suitable volume-based pricing.",
  },
  {
    question: "Can I request a customized package?",
    answer:
      "Yes. Contact the team with your target industry, location, quantity and required data fields to discuss a custom quote.",
  },
];

export default function PricingPage() {
  return (
    <main className="pricing-page">

      {/* HERO */}
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <span className="pricing-tag">
            SIMPLE & FLEXIBLE PRICING
          </span>

          <h1>
            Business Data Packages
            <span> For Every Business Need.</span>
          </h1>

          <p>
            Explore flexible packages for company databases,
            professional contact information, exhibition data
            and bulk business data requirements across India.
          </p>

          <div className="pricing-hero-buttons">
            <a href="#plans" className="pricing-primary-btn">
              Explore Packages →
            </a>

            <a href="/contact" className="pricing-secondary-btn">
              Request Custom Quote
            </a>
          </div>

          <div className="pricing-hero-points">
            <span>✓ Industry-wise Data</span>
            <span>✓ City & State-wise Options</span>
            <span>✓ Flexible Data Packages</span>
          </div>
        </div>
      </section>

      {/* MAIN PLANS */}
      <section className="pricing-plans-section" id="plans">
        <div className="pricing-section-heading">
          <span className="pricing-tag">OUR PACKAGES</span>

          <h2>Choose Your Business Data Plan</h2>

          <p>
            Start with a suitable package and discuss
            additional requirements with our team.
          </p>
        </div>

        <div className="pricing-demo-note">
          Sample pricing for website demonstration. Final prices
          depend on data availability and confirmed requirements.
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.featured ? "pricing-featured" : ""
              }`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="pricing-popular">
                  POPULAR PACKAGE
                </span>
              )}

              <span className="pricing-number">
                PACKAGE {plan.number}
              </span>

              <h3>{plan.name}</h3>
              <h4>{plan.subtitle}</h4>

              <p className="pricing-description">
                {plan.description}
              </p>

              <div className="pricing-price">
                <strong>{plan.price}</strong>
                <span>{plan.quantity}</span>
              </div>

              <a href="/contact" className="pricing-plan-btn">
                Get This Package →
              </a>

              <div className="pricing-divider"></div>

              <h5>PACKAGE INCLUDES</h5>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* DATA-WISE PRICING */}
      <section className="pricing-database-section">
        <div className="pricing-section-heading">
          <span className="pricing-tag">DATA-WISE PACKAGES</span>

          <h2>Choose Data According to Your Requirements</h2>

          <p>
            Select the type of business information that
            matches your target audience and business goals.
          </p>
        </div>

        <div className="pricing-database-grid">
          {dataPackages.map((item) => (
            <article className="pricing-database-card" key={item.number}>
              <span className="database-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="database-detail">
                <span>Package Size</span>
                <strong>{item.records}</strong>
              </div>

              <div className="database-detail">
                <span>Included Fields</span>
                <strong>{item.fields}</strong>
              </div>

              <div className="database-price">
                <span>Sample Starting Price</span>
                <strong>{item.price}</strong>
              </div>

              <a href="/contact">
                Enquire Now →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* BULK PACKAGES */}
      <section className="pricing-bulk-section">
        <div className="pricing-section-heading">
          <span className="pricing-tag">SPECIAL BULK PACKAGES</span>

          <h2>More Data. Better Volume Pricing.</h2>

          <p>
            Explore sample bulk data package options for
            businesses with larger data requirements.
          </p>
        </div>

        <div className="pricing-bulk-note">
          Bulk prices shown are illustrative examples, not confirmed offers.
        </div>

        <div className="pricing-bulk-grid">
          {bulkPackages.map((item) => (
            <article className="pricing-bulk-card" key={item.quantity}>
              <span>{item.label}</span>

              <h3>{item.quantity}</h3>

              <small>Records</small>

              <strong className="bulk-price">
                {item.price}
              </strong>

              <p>{item.saving}</p>

              <a href="/contact">
                Get Bulk Quote →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* REGIONAL DATA */}
      <section className="pricing-region-section">
        <div className="pricing-section-heading">
          <span className="pricing-tag">INDIA-WIDE COVERAGE</span>

          <h2>Choose Data by Region</h2>

          <p>
            Discuss your geographical requirements for
            region-wise company and business data.
          </p>
        </div>

        <div className="pricing-region-grid">
          {regions.map((region, index) => (
            <article className="pricing-region-card" key={region.name}>
              <span>0{index + 1}</span>

              <h3>{region.name}</h3>

              <p>{region.locations}</p>

              <a href="/contact">
                Request Regional Data →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* DELIVERY */}
      <section className="pricing-delivery-section">
        <span className="pricing-tag">DATA DELIVERY OPTIONS</span>

        <h2>Simple Data Delivery for Your Team</h2>

        <p>
          Discuss the preferred format and data fields
          before confirming your business data package.
        </p>

        <div className="pricing-delivery-grid">
          <article>
            <strong>Excel Format</strong>
            <p>
              Organized spreadsheet data for sorting,
              filtering and internal business research.
            </p>
          </article>

          <article>
            <strong>CSV Format</strong>
            <p>
              Structured records suitable for data
              management and compatible business tools.
            </p>
          </article>

          <article>
            <strong>Custom Requirements</strong>
            <p>
              Discuss selected industries, regions,
              record quantities and required fields.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="pricing-faq-section">
        <div className="pricing-section-heading">
          <span className="pricing-tag">COMMON QUESTIONS</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Find answers to common questions about
            business data packages and pricing.
          </p>
        </div>

        <div className="pricing-faq-grid">
          {pricingFaqs.map((faq, index) => (
            <article className="pricing-faq-card" key={faq.question}>
              <span>0{index + 1}</span>

              <h3>{faq.question}</h3>

              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-cta">
        <span className="pricing-tag">LET'S DISCUSS</span>

        <h2>Need a Customized Business Data Package?</h2>

        <p>
          Tell us about your target industry, location,
          required records and budget. Our team can
          discuss a suitable package with you.
        </p>

        <a href="/contact" className="pricing-primary-btn">
          Request a Custom Quote →
        </a>
      </section>

    </main>
  );
}
