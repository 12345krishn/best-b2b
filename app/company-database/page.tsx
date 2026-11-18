
import type { Metadata } from "next";
import Link from "next/link";
import "./company-database.css";

export const metadata: Metadata = {
  title: "Company Database India | B2B Business Database Provider",
  description:
    "Explore India-focused company database solutions with business names, industries, locations and company information.",
  alternates: {
    canonical: "/company-database",
  },
};

const companyFeatures = [
  {
    number: "01",
    title: "Company Name & Profile",
    description:
      "Explore business names, company profiles, websites and available organization details for market research.",
    icon: "▤",
  },
  {
    number: "02",
    title: "Industry Classification",
    description:
      "Organize business information by industry, sector and company category to understand your target market.",
    icon: "▦",
  },
  {
    number: "03",
    title: "Business Location",
    description:
      "Explore company locations across Indian states, cities and major business hubs.",
    icon: "⌖",
  },
  {
    number: "04",
    title: "Business Information",
    description:
      "Review available company details and relevant business information based on your requirements.",
    icon: "▧",
  },
];

const industries = [
  "Manufacturing",
  "Information Technology",
  "Healthcare",
  "Banking & Finance",
  "Real Estate",
  "Logistics & Transportation",
  "Education",
  "Retail & E-commerce",
  "Automotive",
  "Telecommunications",
  "Hospitality",
  "Construction",
];

const regions = [
  {
    name: "North India",
    states: "Delhi, Uttar Pradesh, Haryana, Punjab, Rajasthan",
    cities: "Delhi NCR, Noida, Gurugram, Jaipur, Lucknow",
  },
  {
    name: "South India",
    states: "Karnataka, Tamil Nadu, Telangana, Kerala, Andhra Pradesh",
    cities: "Bengaluru, Chennai, Hyderabad, Kochi, Coimbatore",
  },
  {
    name: "West India",
    states: "Maharashtra, Gujarat, Goa, Madhya Pradesh",
    cities: "Mumbai, Pune, Ahmedabad, Surat, Indore",
  },
  {
    name: "East India",
    states: "West Bengal, Odisha, Bihar, Jharkhand, Assam",
    cities: "Kolkata, Bhubaneswar, Patna, Ranchi, Guwahati",
  },
];

const useCases = [
  {
    title: "Market Research",
    description:
      "Understand business segments, industry presence and potential markets before planning your next move.",
  },
  {
    title: "Business Development",
    description:
      "Identify relevant organizations and explore new opportunities for business expansion.",
  },
  {
    title: "Sales Planning",
    description:
      "Build a structured view of target companies based on your preferred industry and location.",
  },
  {
    title: "Industry Analysis",
    description:
      "Study business categories and compare market segments for better-informed planning.",
  },
];

const faqs = [
  {
    question: "What is a company database?",
    answer:
      "A company database is an organized collection of business information. It may include company names, industry categories, locations, websites and other available business details.",
  },
  {
    question: "Does the database cover Indian businesses?",
    answer:
      "Our offering focuses on Indian business data requirements. Specific industries, locations and company coverage can be discussed and confirmed during your enquiry.",
  },
  {
    question: "Can I request industry-specific company information?",
    answer:
      "Yes. You can share your preferred industries, business categories and target locations so that suitable available coverage can be discussed.",
  },
  {
    question: "Can I request state-wise or city-wise information?",
    answer:
      "Yes. You can mention your preferred states, cities or regions when submitting an enquiry. Availability will depend on the selected coverage.",
  },
  {
    question: "What delivery formats are available?",
    answer:
      "Excel and CSV formats can be discussed. Database or API-based delivery options may also be considered according to your requirements.",
  },
  {
    question: "How can I get pricing details?",
    answer:
      "Share your target industry, location, company categories and approximate data requirements through the contact form to discuss a suitable quote.",
  },
];

export default function CompanyDatabasePage() {
  return (
    <main className="company-database-page">
      {/* HERO */}
      <section className="company-hero">
        <div className="company-container company-hero-layout">
          <div className="company-hero-content">
            <span className="company-eyebrow">
              BUSINESS DATA SOLUTIONS / INDIA
            </span>

            <h1>
              India Company Database
              <span> Built Around Your Business Needs</span>
            </h1>

            <p>
              Explore organized company information across industries,
              business categories and locations in India. Find relevant
              business segments and plan your next market opportunity with
              structured data.
            </p>

            <div className="company-hero-actions">
              <Link href="/contact" className="company-btn">
                Request a Quote <span>→</span>
              </Link>
              <Link href="/industries" className="company-btn-outline">
                Explore Industries
              </Link>
            </div>

            <div className="company-hero-points">
              <span>✓ Industry-focused information</span>
              <span>✓ Location-based requirements</span>
              <span>✓ Flexible delivery discussions</span>
            </div>
          </div>

          <div className="company-hero-panel">
            <div className="company-panel-top">
              <span className="company-panel-dot" />
              COMPANY DATA OVERVIEW
              <span className="company-panel-live">INDIA</span>
            </div>

            <div className="company-panel-main">
              <span className="company-panel-label">
                EXPLORE BUSINESS INFORMATION
              </span>
              <h2>Find your market. Understand your audience.</h2>
              <p>
                Start with the business categories and locations that matter
                to your organization.
              </p>
            </div>

            <div className="company-panel-stats">
              <div>
                <strong>Industry</strong>
                <span>Based research</span>
              </div>
              <div>
                <strong>State & City</strong>
                <span>Focused coverage</span>
              </div>
              <div>
                <strong>Flexible</strong>
                <span>Data formats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="company-intro company-container">
        <span className="company-eyebrow">A CLEARER VIEW OF THE MARKET</span>
        <h2>
          Company Information That Helps You
          <span> Make Better Business Decisions</span>
        </h2>
        <p>
          Finding the right businesses to research can take time. A structured
          company database helps bring relevant organization details together,
          making it easier to explore industries, understand locations and
          plan business development activities.
        </p>
      </section>

      {/* FEATURES */}
      <section className="company-section company-section-soft">
        <div className="company-container">
          <div className="company-section-heading">
            <span className="company-eyebrow">DATABASE CATEGORIES</span>
            <h2>What Company Information Can You Explore?</h2>
            <p>
              Choose the information categories that match your business
              research and market requirements.
            </p>
          </div>

          <div className="company-feature-grid">
            {companyFeatures.map((item) => (
              <article className="company-feature-card" key={item.number}>
                <div className="company-feature-top">
                  <span className="company-feature-icon">{item.icon}</span>
                  <span className="company-feature-number">{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href="/contact">Discuss your requirements →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="company-section">
        <div className="company-container">
          <div className="company-section-heading">
            <span className="company-eyebrow">INDUSTRY COVERAGE</span>
            <h2>Explore Companies Across Different Industries</h2>
            <p>
              Tell us which business segment you want to understand. We can
              discuss available information for your selected industry.
            </p>
          </div>

          <div className="company-industry-grid">
            {industries.map((industry, index) => (
              <Link
                href="/industries"
                className="company-industry-item"
                key={industry}
              >
                <span className="company-industry-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{industry}</strong>
                <span className="company-industry-arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section className="company-section company-section-soft">
        <div className="company-container">
          <div className="company-section-heading">
            <span className="company-eyebrow">PAN-INDIA REQUIREMENTS</span>
            <h2>Explore Business Locations Across India</h2>
            <p>
              Define your target geography by region, state or city to discuss
              the company information available for your market.
            </p>
          </div>

          <div className="company-region-grid">
            {regions.map((region, index) => (
              <article className="company-region-card" key={region.name}>
                <span className="company-region-number">
                  REGION 0{index + 1}
                </span>
                <h3>{region.name}</h3>
                <div>
                  <span>STATES</span>
                  <p>{region.states}</p>
                </div>
                <div>
                  <span>KEY BUSINESS CITIES</span>
                  <p>{region.cities}</p>
                </div>
                <Link href="/contact">Enquire about this region →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE DATA */}
      <section className="company-section">
        <div className="company-container">
          <div className="company-sample-layout">
            <div className="company-sample-copy">
              <span className="company-eyebrow">SAMPLE DATA STRUCTURE</span>
              <h2>See How Business Information Can Be Organized</h2>
              <p>
                The sample below is illustrative only. Actual company records,
                available fields and coverage should be confirmed before
                delivery.
              </p>
              <Link href="/contact" className="company-text-link">
                Ask about available fields →
              </Link>
            </div>

            <div className="company-table-card">
              <div className="company-table-heading">
                <div>
                  <strong>Company Database Preview</strong>
                  <span>Illustrative sample records</span>
                </div>
                <span className="company-sample-tag">SAMPLE</span>
              </div>

              <div className="company-table-scroll">
                <table className="company-table">
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Industry</th>
                      <th>City</th>
                      <th>Region</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Northstar Components</td>
                      <td>Manufacturing</td>
                      <td>Pune</td>
                      <td>West</td>
                    </tr>
                    <tr>
                      <td>Bluepeak Technologies</td>
                      <td>Information Technology</td>
                      <td>Bengaluru</td>
                      <td>South</td>
                    </tr>
                    <tr>
                      <td>Urbanfield Realty</td>
                      <td>Real Estate</td>
                      <td>Gurugram</td>
                      <td>North</td>
                    </tr>
                    <tr>
                      <td>Eastbridge Logistics</td>
                      <td>Logistics</td>
                      <td>Kolkata</td>
                      <td>East</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="company-table-note">
                *Names shown are fictional examples, not verified company
                records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="company-section company-section-soft">
        <div className="company-container">
          <div className="company-section-heading">
            <span className="company-eyebrow">BUSINESS APPLICATIONS</span>
            <h2>How Can a Company Database Support Your Work?</h2>
            <p>
              Structured business information can support different teams
              across research, planning and business development.
            </p>
          </div>

          <div className="company-usecase-grid">
            {useCases.map((item, index) => (
              <article className="company-usecase-card" key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="company-section">
        <div className="company-container">
          <div className="company-section-heading">
            <span className="company-eyebrow">DATA DELIVERY OPTIONS</span>
            <h2>Choose a Format That Fits Your Workflow</h2>
            <p>
              Discuss the most suitable way to receive and work with your
              requested company information.
            </p>
          </div>

          <div className="company-delivery-grid">
            <article className="company-delivery-card">
              <span className="company-delivery-icon">XLS</span>
              <h3>Excel / CSV</h3>
              <p>
                Spreadsheet-based formats for business research, filtering,
                analysis and internal record management.
              </p>
              <Link href="/contact">Discuss spreadsheet requirements →</Link>
            </article>

            <article className="company-delivery-card">
              <span className="company-delivery-icon">API</span>
              <h3>Database / API</h3>
              <p>
                Discuss structured database or API-based delivery for
                compatible business systems and workflows.
              </p>
              <Link href="/contact">Discuss integration requirements →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="company-section company-process-section">
        <div className="company-container company-process-layout">
          <div className="company-process-intro">
            <span className="company-eyebrow">HOW IT WORKS</span>
            <h2>From Your Requirements to a Suitable Data Plan</h2>
            <p>
              A straightforward process helps us understand what kind of
              company information you are looking for.
            </p>
            <Link href="/contact" className="company-btn">
              Start an Enquiry →
            </Link>
          </div>

          <div className="company-process-steps">
            <div className="company-process-step">
              <span>01</span>
              <div>
                <h3>Share Your Requirements</h3>
                <p>
                  Tell us your target industry, location and company category.
                </p>
              </div>
            </div>
            <div className="company-process-step">
              <span>02</span>
              <div>
                <h3>Discuss Available Coverage</h3>
                <p>
                  Review the relevant information fields and geographic
                  coverage.
                </p>
              </div>
            </div>
            <div className="company-process-step">
              <span>03</span>
              <div>
                <h3>Confirm Format & Scope</h3>
                <p>
                  Discuss the delivery format, requirements and suitable
                  quotation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="company-section">
        <div className="company-container">
          <div className="company-section-heading">
            <span className="company-eyebrow">NEED MORE INFORMATION?</span>
            <h2>Company Database FAQs</h2>
            <p>
              A few useful answers before you discuss your requirements with
              our team.
            </p>
          </div>

          <div className="company-faq-grid">
            {faqs.map((faq, index) => (
              <details className="company-faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <strong>+</strong>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="company-final-cta">
        <div className="company-container company-cta-inner">
          <div>
            <span className="company-eyebrow">LET'S DISCUSS YOUR REQUIREMENTS</span>
            <h2>Looking for Company Information in India?</h2>
            <p>
              Share your preferred industry, target location and data
              requirements. Let's discuss the available options for your
              business.
            </p>
          </div>
          <Link href="/contact" className="company-btn company-btn-light">
            Send an Enquiry <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
