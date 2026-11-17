
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Lead Generation Solutions in India | Best B2B Data Provider",
  description:
    "Explore B2B lead generation data solutions in India to support business prospecting, sales research and customer acquisition.",
  alternates: {
    canonical: "/lead-generation",
  },
  openGraph: {
    title: "B2B Lead Generation Solutions in India",
    description:
      "Discover business prospecting, sales research and B2B lead generation data solutions.",
    url: "/lead-generation",
    type: "website",
  },
};

const leadFeatures = [
  {
    number: "01",
    title: "Identify Target Businesses",
    description:
      "Define the industries, company types and business segments that match your products or services.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Research Prospects",
    description:
      "Use relevant company and business information to support prospect research and market understanding.",
    icon: "🔎",
  },
  {
    number: "03",
    title: "Organize Lead Information",
    description:
      "Arrange prospect information into structured records to make sales research easier to manage.",
    icon: "📋",
  },
  {
    number: "04",
    title: "Support Sales Teams",
    description:
      "Help your team plan business outreach and prioritize potential opportunities.",
    icon: "📈",
  },
];

const leadProcess = [
  {
    number: "01",
    title: "Target Market",
    description:
      "Understand your ideal customer profile, industry and business requirements.",
  },
  {
    number: "02",
    title: "Prospect Research",
    description:
      "Explore relevant businesses and identify useful company information.",
  },
  {
    number: "03",
    title: "Sales Planning",
    description:
      "Organize prospect information and plan your next business development activities.",
  },
];

export default function LeadGenerationPage() {
  return (
    <main className="lead-page-premium">

      {/* HERO SECTION */}

      <section className="lead-hero">
        <div className="lead-hero-content">
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

          <div className="lead-hero-buttons">
            <a href="/#contact" className="services-btn">
              Discuss Your Requirements →
            </a>

            <a href="/b2b-contact-database" className="lead-secondary-btn">
              Explore B2B Database
            </a>
          </div>

          <div className="lead-hero-points">
            <span>✓ Business Prospect Research</span>
            <span>✓ Structured Sales Information</span>
          </div>
        </div>

        <div className="lead-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
            alt="Business analytics dashboard displaying sales and marketing data"
            fetchPriority="high"
          />

          <div className="lead-floating-card lead-card-top">
            <span className="lead-floating-icon">📊</span>
            <div>
              <small>SALES ANALYTICS</small>
              <strong>Lead Insights</strong>
            </div>
          </div>

          <div className="lead-floating-card lead-card-bottom">
            <span className="lead-floating-icon">🎯</span>
            <div>
              <small>PROSPECT RESEARCH</small>
              <strong>Target Business Segments</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}

      <section className="lead-intro">
        <div className="lead-intro-content">
          <span className="tag">OUR APPROACH</span>

          <h2>Build a Smarter Prospecting Strategy</h2>

          <p>
            Effective B2B prospecting starts with understanding
            your target market and identifying relevant businesses.
            Business data can help teams organize research,
            prioritize potential customers and plan outreach.
          </p>

          <p>
            With a structured approach to prospect information,
            sales and marketing teams can better understand
            their target audience and business opportunities.
          </p>

          <a href="/#contact" className="lead-text-link">
            Discuss Your Strategy →
          </a>
        </div>

        <div className="lead-intro-image">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
            alt="Professional business team collaborating on sales strategy"
            loading="lazy"
          />
          <div className="lead-image-caption">
            <span>BUSINESS DEVELOPMENT</span>
            <strong>Research. Connect. Grow.</strong>
          </div>
        </div>
      </section>

      {/* LEAD FEATURES */}

      <section className="lead-features-section">
        <div className="lead-section-heading">
          <span className="tag">LEAD GENERATION SOLUTIONS</span>

          <h2>Support Every Stage of Your Prospecting Journey</h2>

          <p>
            Explore business information solutions that help
            organize prospect research and support sales planning.
          </p>
        </div>

        <div className="lead-grid">
          {leadFeatures.map((feature) => (
            <article className="lead-card" key={feature.number}>
              <div className="lead-card-top">
                <span className="lead-feature-icon">
                  {feature.icon}
                </span>
                <span className="lead-feature-number">
                  {feature.number}
                </span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <div className="lead-card-line"></div>
            </article>
          ))}
        </div>
      </section>

      {/* SALES PIPELINE SECTION */}

      <section className="lead-pipeline">
        <div className="lead-pipeline-image">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
            alt="Sales and business analytics dashboard with data visualizations"
            loading="lazy"
          />
          <div className="lead-pipeline-overlay">
            <span>DATA-DRIVEN SALES PLANNING</span>
            <strong>Turn Research Into Business Opportunities</strong>
          </div>
        </div>

        <div className="lead-pipeline-content">
          <span className="tag">SALES PIPELINE</span>

          <h2>Organize Your Prospecting Workflow</h2>

          <p>
            A clear prospecting workflow helps teams move from
            understanding their target market to organizing
            business information for sales activities.
          </p>

          <ul>
            <li>Understand your target audience</li>
            <li>Research relevant businesses</li>
            <li>Organize prospect information</li>
            <li>Plan business outreach activities</li>
          </ul>

          <a href="/data-enrichment" className="services-btn">
            Explore Data Enrichment →
          </a>
        </div>
      </section>

      {/* PROCESS SECTION */}

      <section className="lead-process-section">
        <div className="lead-section-heading">
          <span className="tag">HOW IT WORKS</span>

          <h2>A Simple Approach to B2B Prospecting</h2>

          <p>
            A structured process can help your team organize
            research and focus on relevant business opportunities.
          </p>
        </div>

        <div className="lead-process-grid">
          {leadProcess.map((step) => (
            <article className="lead-process-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="lead-cta">
        <span className="tag">LET'S CONNECT</span>

        <h2>Let's Discuss Your Business Requirements</h2>

        <p>
          Connect with our team to explore suitable B2B data
          solutions for your prospecting and sales research needs.
        </p>

        <a href="/#contact" className="services-btn">
          Contact Us →
        </a>
      </section>

    </main>
  );
}
