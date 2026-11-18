
import type { Metadata } from "next";
import Link from "next/link";
import "./lead-generation.css";

export const metadata: Metadata = {
  title: "B2B Lead Generation Solutions in India | Best B2B Data Provider",
  description:
    "Explore B2B lead generation data solutions in India for business prospecting, sales research and customer acquisition.",
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
    icon: "🎯",
    title: "Identify the Right Audience",
    description:
      "Narrow down your target market by industry, company size, location and business category.",
  },
  {
    number: "02",
    icon: "🔎",
    title: "Discover Business Prospects",
    description:
      "Explore relevant company information to support market research and identify potential opportunities.",
  },
  {
    number: "03",
    icon: "📋",
    title: "Organize Lead Information",
    description:
      "Bring useful prospect details together in a structured format that is easier for your team to manage.",
  },
  {
    number: "04",
    icon: "📈",
    title: "Plan Better Outreach",
    description:
      "Give your sales team a clearer starting point for prioritizing prospects and planning business conversations.",
  },
];

const industries = [
  {
    icon: "💻",
    title: "Information Technology",
    details: "Software Development, SaaS, IT Consulting, Cloud Services",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    details: "Automobile, Machinery, Electronics, Industrial Equipment",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    details: "Hospitals, Clinics, Diagnostics, Medical Equipment",
  },
  {
    icon: "🎓",
    title: "Education",
    details: "Schools, Universities, EdTech, Training Institutes",
  },
  {
    icon: "🏢",
    title: "Real Estate",
    details: "Builders, Developers, Property Consultants, Commercial Spaces",
  },
  {
    icon: "💰",
    title: "Financial Services",
    details: "Fintech, Insurance, NBFCs, Financial Consultants",
  },
  {
    icon: "🛒",
    title: "Retail & E-commerce",
    details: "Online Stores, Distributors, Retail Chains, D2C Brands",
  },
  {
    icon: "🚚",
    title: "Logistics & Supply Chain",
    details: "Transport, Warehousing, Freight, Courier Services",
  },
  {
    icon: "🏨",
    title: "Hospitality & Tourism",
    details: "Hotels, Resorts, Travel Agencies, Event Management",
  },
  {
    icon: "📢",
    title: "Marketing & Advertising",
    details: "Digital Agencies, Branding, PR, Market Research",
  },
  {
    icon: "⚡",
    title: "Energy & Utilities",
    details: "Solar, Renewable Energy, Electrical, Power Solutions",
  },
  {
    icon: "🌾",
    title: "Agriculture",
    details: "AgriTech, Food Processing, Seeds, Farm Equipment",
  },
  {
    icon: "🏗️",
    title: "Construction",
    details: "Infrastructure, Contractors, Building Materials, Engineering",
  },
  {
    icon: "📡",
    title: "Telecommunications",
    details: "Internet Providers, Telecom, Networking, Communication",
  },
  {
    icon: "🧪",
    title: "Pharmaceuticals",
    details: "Drug Manufacturers, Labs, Distributors, Biotech",
  },
  {
    icon: "⚖️",
    title: "Professional Services",
    details: "Legal Firms, Accounting, HR Consulting, Business Advisory",
  },
];

const process = [
  {
    number: "01",
    title: "Understand Your Market",
    description:
      "Tell us about your ideal customers, preferred industries, business categories and target locations.",
  },
  {
    number: "02",
    title: "Define Your Requirements",
    description:
      "Set the type of company and professional information that fits your prospecting requirements.",
  },
  {
    number: "03",
    title: "Organize Business Data",
    description:
      "Structure relevant business information into a practical format for research and sales planning.",
  },
  {
    number: "04",
    title: "Move Forward with Clarity",
    description:
      "Use organized prospect information to guide your team's next business development activities.",
  },
];

const sampleLeads = [
  {
    company: "Northstar Technologies",
    industry: "Information Technology",
    location: "Bengaluru, Karnataka",
    category: "IT Services",
  },
  {
    company: "Aarav Manufacturing Co.",
    industry: "Manufacturing",
    location: "Pune, Maharashtra",
    category: "Industrial Products",
  },
  {
    company: "BluePeak Healthcare",
    industry: "Healthcare",
    location: "New Delhi, Delhi",
    category: "Healthcare Services",
  },
  {
    company: "BrightPath Learning",
    industry: "Education",
    location: "Jaipur, Rajasthan",
    category: "Education Services",
  },
  {
    company: "Westline Retail Solutions",
    industry: "Retail & E-commerce",
    location: "Mumbai, Maharashtra",
    category: "Retail Distribution",
  },
  {
    company: "GreenRoute Logistics",
    industry: "Logistics & Supply Chain",
    location: "Hyderabad, Telangana",
    category: "Logistics Services",
  },
];

export default function LeadGenerationPage() {
  return (
    <main className="lead-page-premium">

      {/* HERO SECTION */}

      <section className="lead-hero">
        <div className="lead-hero-content">
          <span className="lead-tag">B2B LEAD GENERATION</span>

          <h1>
            Find the Right Businesses.
            <span> Build Better Opportunities.</span>
          </h1>

          <p>
            Good sales conversations start with understanding the right
            audience. Explore structured B2B business information that helps
            your team research prospects, understand markets and plan outreach
            with greater clarity.
          </p>

          <div className="lead-hero-buttons">
            <Link href="/#contact" className="lead-primary-btn">
              Discuss Your Requirements <span>→</span>
            </Link>

            <Link
              href="/b2b-contact-database"
              className="lead-outline-btn"
            >
              Explore B2B Database
            </Link>
          </div>

          <div className="lead-hero-points">
            <span>✓ Industry-based research</span>
            <span>✓ Location-specific prospects</span>
            <span>✓ Structured business information</span>
          </div>
        </div>

        <div className="lead-hero-visual">
          <div className="lead-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
              alt="Business analytics and sales research dashboard"
              fetchPriority="high"
            />
          </div>

          <div className="lead-floating-card lead-floating-top">
            <span className="lead-floating-icon">📊</span>
            <div>
              <small>BUSINESS RESEARCH</small>
              <strong>Market Insights</strong>
            </div>
          </div>

          <div className="lead-floating-card lead-floating-bottom">
            <span className="lead-floating-icon">🎯</span>
            <div>
              <small>SALES PLANNING</small>
              <strong>Target Prospects</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}

      <section className="lead-intro section-space">
        <div className="lead-intro-image">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
            alt="Business professionals discussing their sales strategy"
            loading="lazy"
          />

          <div className="lead-image-caption">
            <span>SMARTER BUSINESS DEVELOPMENT</span>
            <strong>Research with a clear direction.</strong>
          </div>
        </div>

        <div className="lead-intro-content">
          <span className="lead-tag">OUR APPROACH</span>

          <h2>Lead Generation Begins with Knowing Your Market</h2>

          <p>
            Finding potential customers is not just about collecting a long
            list of names. It is about understanding which businesses are
            relevant to what you offer and where your next opportunity may
            come from.
          </p>

          <p>
            Our B2B data solutions support this process with organized company
            information, industry insights and business prospect research.
            This gives sales and marketing teams a useful foundation for
            planning their next steps.
          </p>

          <Link href="/#contact" className="lead-text-link">
            Talk to Our Team →
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}

      <section className="lead-features-section section-space">
        <div className="lead-section-heading">
          <span className="lead-tag">WHAT WE HELP WITH</span>

          <h2>Make Every Step of Prospecting More Organized</h2>

          <p>
            From identifying your audience to preparing for outreach, a
            structured approach makes business research easier to manage.
          </p>
        </div>

        <div className="lead-grid">
          {leadFeatures.map((feature) => (
            <article
              className="lead-feature-card"
              key={feature.number}
            >
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

              <div className="lead-card-line" />
            </article>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SECTION */}

      <section className="lead-industries section-space">
        <div className="lead-section-heading">
          <span className="lead-tag">INDUSTRY COVERAGE</span>

          <h2>Explore Business Opportunities Across Industries</h2>

          <p>
            Every industry has its own business ecosystem. Explore different
            sectors and their business segments to identify relevant markets
            and plan your B2B prospecting strategy.
          </p>
        </div>

        <div className="lead-industry-grid">
          {industries.map((industry, index) => (
            <article
              className="lead-industry-item"
              key={industry.title}
            >
              <div className="lead-industry-top">
                <span className="lead-industry-icon">
                  {industry.icon}
                </span>

                <span className="lead-industry-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{industry.title}</h3>

              <p>{industry.details}</p>

              <div className="lead-industry-bottom">
                <span>Business segments</span>
                <span>↗</span>
              </div>
            </article>
          ))}
        </div>

        <div className="lead-industry-footer">
          <p>
            Looking for business prospects in a specific industry?
            Let's discuss your target market and data requirements.
          </p>

          <Link
            href="/#contact"
            className="lead-industry-contact"
          >
            Discuss Your Requirements →
          </Link>
        </div>
      </section>

      {/* SAMPLE DATA SECTION */}

      <section className="lead-sample-section section-space">
        <div className="lead-sample-heading">
          <div>
            <span className="lead-tag">SAMPLE BUSINESS RECORDS</span>

            <h2>See How Organized Prospect Data Can Look</h2>

            <p>
              Below is illustrative sample data showing how business records
              can be arranged for research and sales planning.
            </p>
          </div>

          <Link
            href="/b2b-contact-database"
            className="lead-text-link"
          >
            View Database Solutions →
          </Link>
        </div>

        <div className="lead-table-wrap">
          <table className="lead-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Industry</th>
                <th>Location</th>
                <th>Business Category</th>
              </tr>
            </thead>

            <tbody>
              {sampleLeads.map((lead) => (
                <tr key={lead.company}>
                  <td>
                    <strong>{lead.company}</strong>
                  </td>

                  <td>{lead.industry}</td>

                  <td>{lead.location}</td>

                  <td>
                    <span className="lead-category-pill">
                      {lead.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="lead-sample-note">
          Note: These are fictional sample records for layout demonstration,
          not actual customer or prospect data.
        </p>
      </section>

      {/* PROCESS SECTION */}

      <section className="lead-process-section section-space">
        <div className="lead-section-heading">
          <span className="lead-tag">HOW IT WORKS</span>

          <h2>A Practical Process for B2B Prospect Research</h2>

          <p>
            A simple workflow helps turn business requirements into organized
            research that your team can use.
          </p>
        </div>

        <div className="lead-process-grid">
          {process.map((step) => (
            <article
              className="lead-process-card"
              key={step.number}
            >
              <span className="lead-process-number">
                {step.number}
              </span>

              <div className="lead-process-marker" />

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES */}

      <section className="lead-related-section section-space">
        <div className="lead-section-heading">
          <span className="lead-tag">EXPLORE MORE SOLUTIONS</span>

          <h2>Build on Your Business Data Strategy</h2>

          <p>
            Explore related solutions that can support different parts of
            your business research and sales workflow.
          </p>
        </div>

        <div className="lead-related-grid">
          <Link
            href="/b2b-contact-database"
            className="lead-related-card"
          >
            <span>01 / DATABASE</span>

            <h3>B2B Contact Database</h3>

            <p>
              Explore company and professional information for business
              research.
            </p>

            <strong>Explore Solution →</strong>
          </Link>

          <Link
            href="/company-database"
            className="lead-related-card"
          >
            <span>02 / COMPANY DATA</span>

            <h3>Company Database</h3>

            <p>
              Discover business records across industries and locations.
            </p>

            <strong>Explore Solution →</strong>
          </Link>

          <Link
            href="/data-enrichment"
            className="lead-related-card"
          >
            <span>03 / DATA QUALITY</span>

            <h3>Data Enrichment</h3>

            <p>
              Support better organized business information and data research.
            </p>

            <strong>Explore Solution →</strong>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="lead-cta">
        <span className="lead-tag">LET'S TALK BUSINESS</span>

        <h2>Looking for the Right B2B Data Solution?</h2>

        <p>
          Share your target industries, locations and business requirements.
          Our team can help you explore a suitable approach for your prospect
          research needs.
        </p>

        <Link href="/#contact" className="lead-primary-btn">
          Discuss Your Requirements <span>→</span>
        </Link>
      </section>

    </main>
  );
}
