
import type { Metadata } from "next";
import "./industries.css";

export const metadata: Metadata = {
  title: "Industries We Serve | B2B Data Provider India",
  description:
    "Explore industry-wise B2B company information and business data solutions for manufacturing, IT, healthcare, finance, real estate, logistics and retail businesses across India.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve | Best B2B Data Provider",
    description:
      "Explore business data solutions and industry-wise company information across India.",
    url: "/industries",
    type: "website",
  },
};

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    description:
      "Explore business information across manufacturing, industrial production, machinery, engineering and related sectors. Useful for supplier research, industrial prospecting and B2B business development.",
    coverage:
      "Manufacturers, Industrial Suppliers, Machinery, Engineering",
  },
  {
    number: "02",
    title: "IT & Technology",
    description:
      "Understand the technology business landscape and explore relevant companies for software services, IT solutions, digital transformation and professional business outreach.",
    coverage:
      "IT Companies, Software Firms, Technology Services, Startups",
  },
  {
    number: "03",
    title: "Healthcare & Pharmaceuticals",
    description:
      "Explore business information related to healthcare providers, pharmaceutical companies, medical equipment suppliers and healthcare organizations.",
    coverage:
      "Hospitals, Pharma Companies, Medical Equipment, Healthcare Services",
  },
  {
    number: "04",
    title: "Banking & Finance",
    description:
      "Support business research with structured company information across financial institutions, banking services, insurance and professional financial organizations.",
    coverage:
      "Banking, Financial Services, Insurance, Investment Firms",
  },
  {
    number: "05",
    title: "Real Estate & Construction",
    description:
      "Explore business information to support commercial property research, construction industry prospecting and professional business development.",
    coverage:
      "Builders, Developers, Contractors, Construction Companies",
  },
  {
    number: "06",
    title: "Logistics & Transportation",
    description:
      "Find relevant business information across logistics, transportation, warehousing, freight and supply chain-related sectors.",
    coverage:
      "Transporters, Logistics Firms, Warehousing, Freight Services",
  },
  {
    number: "07",
    title: "Education",
    description:
      "Explore organizations across education, training, skill development and professional learning services for business research and outreach.",
    coverage:
      "Schools, Colleges, Universities, Training Institutes",
  },
  {
    number: "08",
    title: "Retail & E-commerce",
    description:
      "Understand retail and online business markets with company information that can support sales planning, distribution research and business development.",
    coverage:
      "Retailers, Distributors, E-commerce, Wholesale Businesses",
  },
];

const sampleIndustryData = [
  {
    company: "Aarav Industrial Systems",
    industry: "Manufacturing",
    city: "Pune",
    state: "Maharashtra",
    region: "West India",
    category: "Industrial Machinery",
    employees: "100-250",
  },
  {
    company: "Northstar Digital Solutions",
    industry: "IT & Technology",
    city: "Noida",
    state: "Uttar Pradesh",
    region: "North India",
    category: "Software Development",
    employees: "50-100",
  },
  {
    company: "Medicare Life Sciences",
    industry: "Healthcare",
    city: "Ahmedabad",
    state: "Gujarat",
    region: "West India",
    category: "Pharmaceuticals",
    employees: "100-250",
  },
  {
    company: "Pioneer Financial Services",
    industry: "Banking & Finance",
    city: "Mumbai",
    state: "Maharashtra",
    region: "West India",
    category: "Financial Services",
    employees: "50-100",
  },
  {
    company: "UrbanBuild Developers",
    industry: "Real Estate",
    city: "Gurugram",
    state: "Haryana",
    region: "North India",
    category: "Construction",
    employees: "100-250",
  },
  {
    company: "Eastline Logistics",
    industry: "Logistics",
    city: "Kolkata",
    state: "West Bengal",
    region: "East India",
    category: "Transportation",
    employees: "50-100",
  },
  {
    company: "BrightPath Learning",
    industry: "Education",
    city: "Jaipur",
    state: "Rajasthan",
    region: "North India",
    category: "Education & Training",
    employees: "25-50",
  },
  {
    company: "UrbanCart Retail",
    industry: "Retail & E-commerce",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South India",
    category: "Retail Distribution",
    employees: "100-250",
  },
  {
    company: "Southern Tech Systems",
    industry: "IT & Technology",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South India",
    category: "IT Services",
    employees: "50-100",
  },
  {
    company: "Eastern Agro Industries",
    industry: "Manufacturing",
    city: "Bhubaneswar",
    state: "Odisha",
    region: "East India",
    category: "Food Processing",
    employees: "25-50",
  },
  {
    company: "Greenway Healthcare",
    industry: "Healthcare",
    city: "Hyderabad",
    state: "Telangana",
    region: "South India",
    category: "Healthcare Services",
    employees: "100-250",
  },
  {
    company: "MetroLink Distribution",
    industry: "Retail & E-commerce",
    city: "Delhi",
    state: "Delhi",
    region: "North India",
    category: "Wholesale Distribution",
    employees: "50-100",
  },
];

const regions = [
  {
    name: "North India",
    states: "Delhi, Uttar Pradesh, Haryana, Punjab, Rajasthan",
  },
  {
    name: "South India",
    states: "Karnataka, Tamil Nadu, Telangana, Kerala, Andhra Pradesh",
  },
  {
    name: "East India",
    states: "West Bengal, Odisha, Bihar, Jharkhand, Assam",
  },
  {
    name: "West India",
    states: "Maharashtra, Gujarat, Goa, Madhya Pradesh",
  },
];

export default function IndustriesPage() {
  return (
    <main className="industries-page-premium">

      {/* HERO SECTION */}
      <section className="industries-hero">
        <div className="industries-hero-inner">
          <span className="industries-tag">
            INDUSTRIES WE SERVE
          </span>

          <h1>
            Business Data Solutions
            <br />
            <span>Across Multiple Industries</span>
          </h1>

          <p>
            Every industry has different business requirements.
            Explore industry-focused B2B company information to
            support business research, prospecting and sales
            planning across India.
          </p>

          <a href="/contact" className="industries-btn">
            Discuss Your Industry Needs →
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="industries-intro">
        <span className="industries-tag">
          OUR INDUSTRY FOCUS
        </span>

        <h2>
          Understanding Different Business Markets
        </h2>

        <p>
          Business research becomes more useful when information
          is organized around the right industry and market.
          Different businesses need different types of company
          and professional information.
        </p>

        <p>
          From manufacturing and technology to finance,
          healthcare and logistics, our B2B data solutions
          are designed to help businesses explore relevant
          market segments and plan their outreach.
        </p>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="industries-list-section">
        <div className="industries-section-heading">
          <span className="industries-tag">
            EXPLORE INDUSTRIES
          </span>

          <h2>Industries We Support</h2>

          <p>
            Explore business sectors where organized company
            information can support research and business
            development.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => (
            <article
              className="industry-card"
              key={industry.number}
            >
              <div className="industry-card-top">
                <span className="industry-number">
                  {industry.number}
                </span>
                <span className="industry-line"></span>
              </div>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>

              <div className="industry-focus">
                <strong>Industry Coverage</strong>
                <span>{industry.coverage}</span>
              </div>

              <a href="/contact">
                Discuss Your Requirements →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* INDUSTRY-WISE SAMPLE DATA */}
      <section className="industry-data-section">
        <div className="industry-data-heading">
          <span className="industries-tag">
            INDUSTRY-WISE DATA
          </span>

          <h2>
            Explore Business Data Across India
          </h2>

          <p>
            See how company information can be organized
            by industry, city, state, region and business
            category.
          </p>
        </div>

        <div className="industry-data-notice">
          Demonstration data only. All company names and
          records below are fictional and are not verified
          business listings.
        </div>

        <div className="industry-data-table-wrap">
          <table className="industry-data-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Industry</th>
                <th>City</th>
                <th>State</th>
                <th>Region</th>
                <th>Category</th>
                <th>Employees</th>
              </tr>
            </thead>

            <tbody>
              {sampleIndustryData.map((item, index) => (
                <tr key={index}>
                  <td>{item.company}</td>
                  <td>{item.industry}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.region}</td>
                  <td>{item.category}</td>
                  <td>{item.employees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <a href="/contact" className="industries-btn">
          Request Industry-Wise Data →
        </a>
      </section>

      {/* REGIONAL COVERAGE */}
      <section className="industries-region-section">
        <div className="industries-section-heading">
          <span className="industries-tag">
            INDIA-WIDE COVERAGE
          </span>

          <h2>Business Data by Region</h2>

          <p>
            Organize business research by geographical
            market and regional requirements.
          </p>
        </div>

        <div className="industries-region-grid">
          {regions.map((region, index) => (
            <article
              className="industry-region-card"
              key={region.name}
            >
              <span>
                0{index + 1}
              </span>

              <h3>{region.name}</h3>

              <p>{region.states}</p>

              <a href="/contact">
                Enquire About Data →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* BUSINESS DATA SOLUTIONS */}
      <section className="industries-solutions">
        <span className="industries-tag">
          BUSINESS DATA SOLUTIONS
        </span>

        <h2>
          Data Solutions That Support Your Business Goals
        </h2>

        <p>
          Different industries need different types of
          business information. Choose a suitable data
          solution based on your business objectives,
          target audience and research requirements.
        </p>

        <div className="industries-solution-list">
          <a href="/b2b-contact-database">
            B2B Contact Database
          </a>

          <a href="/company-database">
            Company Database
          </a>

          <a href="/lead-generation">
            Lead Generation
          </a>

          <a href="/data-enrichment">
            Data Enrichment
          </a>

          <a href="/exhibition-data">
            Exhibition Data
          </a>

          <a href="/pricing">
            Bulk Data Packages
          </a>
        </div>

        <a href="/services" className="industries-btn">
          Explore Our Services →
        </a>
      </section>

      {/* FINAL CONTACT SECTION */}
      <section className="industries-cta">
        <span className="industries-tag">
          LET'S CONNECT
        </span>

        <h2>
          Looking for Industry-Specific Business Data?
        </h2>

        <p>
          Tell us about your industry, target market and
          business requirements. Let's explore a suitable
          data solution for your team.
        </p>

        <a href="/contact" className="industries-btn">
          Talk to Our Team →
        </a>
      </section>

    </main>
  );
}
