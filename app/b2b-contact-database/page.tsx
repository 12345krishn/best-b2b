
import type { Metadata } from "next";
import "./database.css";

export const metadata: Metadata = {
  title: "B2B Contact Database India | Professional Contact Data",
  description:
    "Explore an India-focused B2B contact database with business roles, industry categories, company information and location-based research options.",
  alternates: { canonical: "/b2b-contact-database" },
};

const contactTypes = [
  {
    number: "01",
    title: "Business Owners & Founders",
    description:
      "Explore business profiles for owners, founders, partners and entrepreneurs across different company categories.",
    roles: "Founder, Owner, Co-Founder, Managing Partner",
  },
  {
    number: "02",
    title: "Senior Management",
    description:
      "Research senior business professionals involved in company strategy, operations and organizational decisions.",
    roles: "CEO, MD, Director, VP, General Manager",
  },
  {
    number: "03",
    title: "Sales & Marketing",
    description:
      "Identify relevant business roles for sales planning, marketing campaigns and B2B business development.",
    roles: "Sales Head, Marketing Manager, Business Development",
  },
  {
    number: "04",
    title: "Purchase & Procurement",
    description:
      "Explore procurement-related business roles across manufacturing, trading and service organizations.",
    roles: "Purchase Manager, Procurement Head, Sourcing Manager",
  },
  {
    number: "05",
    title: "HR & Administration",
    description:
      "Organize professional business information for HR services, recruitment solutions and workplace services.",
    roles: "HR Manager, HR Head, Admin Manager",
  },
  {
    number: "06",
    title: "IT & Technical Teams",
    description:
      "Research technology and technical decision-making roles across IT, software and industrial businesses.",
    roles: "IT Head, CTO, Technical Manager, IT Manager",
  },
];

const industries = [
  ["Manufacturing", "Production, engineering, industrial equipment"],
  ["Information Technology", "Software, IT services, digital solutions"],
  ["Healthcare", "Hospitals, medical equipment, healthcare services"],
  ["Automotive", "Auto components, dealers, vehicle manufacturing"],
  ["Textile & Garments", "Textile mills, apparel, fabric manufacturers"],
  ["Banking & Finance", "Financial services, insurance, consulting"],
  ["Real Estate", "Builders, developers, property services"],
  ["Logistics & Transport", "Transporters, freight, warehousing"],
  ["Education", "Institutions, training, education services"],
  ["Food & FMCG", "Food processing, distributors, consumer goods"],
  ["Construction", "Infrastructure, contractors, building materials"],
  ["Wholesale & Trading", "Distributors, dealers, importers, suppliers"],
];

const sampleContacts = [
  {
    company: "Northstar Engineering",
    person: "Aarav Sharma",
    designation: "Purchase Manager",
    industry: "Manufacturing",
    city: "Pune",
    state: "Maharashtra",
  },
  {
    company: "Vertex Digital Solutions",
    person: "Meera Kapoor",
    designation: "Business Development Manager",
    industry: "Information Technology",
    city: "Noida",
    state: "Uttar Pradesh",
  },
  {
    company: "Greenfield Healthcare",
    person: "Rohan Mehta",
    designation: "Operations Head",
    industry: "Healthcare",
    city: "Ahmedabad",
    state: "Gujarat",
  },
  {
    company: "Apex Auto Components",
    person: "Priya Nair",
    designation: "Procurement Executive",
    industry: "Automotive",
    city: "Chennai",
    state: "Tamil Nadu",
  },
  {
    company: "UrbanBuild Projects",
    person: "Karan Verma",
    designation: "Director",
    industry: "Construction",
    city: "New Delhi",
    state: "Delhi",
  },
  {
    company: "Eastern Trade Links",
    person: "Sana Khan",
    designation: "Sales Manager",
    industry: "Wholesale & Trading",
    city: "Kolkata",
    state: "West Bengal",
  },
];

const regions = [
  {
    name: "North India",
    states: "Delhi, Uttar Pradesh, Haryana, Punjab, Rajasthan, Himachal Pradesh",
    cities: "Delhi, Noida, Gurugram, Jaipur, Lucknow, Chandigarh",
  },
  {
    name: "South India",
    states: "Karnataka, Tamil Nadu, Telangana, Kerala, Andhra Pradesh",
    cities: "Bengaluru, Chennai, Hyderabad, Kochi, Coimbatore",
  },
  {
    name: "West India",
    states: "Maharashtra, Gujarat, Goa",
    cities: "Mumbai, Pune, Ahmedabad, Surat, Vadodara, Panaji",
  },
  {
    name: "East India",
    states: "West Bengal, Odisha, Bihar, Jharkhand, Assam",
    cities: "Kolkata, Bhubaneswar, Patna, Ranchi, Guwahati",
  },
];

const dataFields = [
  "Company Name",
  "Business Category",
  "Contact Person",
  "Designation",
  "Business Address",
  "City & State",
  "Industry Type",
  "Business Website",
  "Business Email, where available",
  "Business Phone, where available",
];

const useCases = [
  {
    title: "B2B Sales & Prospecting",
    text: "Build focused prospect lists based on business category, location and professional role.",
  },
  {
    title: "Business Development",
    text: "Research companies and relevant business functions before starting a business conversation.",
  },
  {
    title: "Market Research",
    text: "Organize company and professional information to understand target markets and industry segments.",
  },
  {
    title: "Channel & Partner Discovery",
    text: "Explore potential distributors, dealers, suppliers and service partners across business sectors.",
  },
];

const faqs = [
  {
    question: "What is a B2B Contact Database?",
    answer:
      "A B2B Contact Database is an organized collection of business-related company and professional information. It can help businesses research organizations and relevant professional roles for legitimate business communication.",
  },
  {
    question: "Can I request contacts from a particular industry?",
    answer:
      "Yes. You can share your target industry, business category and preferred professional designations so the requirement can be reviewed.",
  },
  {
    question: "Can I select a particular city or state?",
    answer:
      "You can discuss location-based requirements such as a particular city, state or region in India.",
  },
  {
    question: "What format can be discussed for data delivery?",
    answer:
      "Excel and CSV are common structured formats that can be discussed according to the project scope and available fields.",
  },
  {
    question: "Is every contact field available for every record?",
    answer:
      "No. Available fields can vary by source, company and record. Specific field availability should be confirmed before an order is finalized.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "Share your target industry, location, professional roles and approximate requirement through the contact page to discuss a suitable quote.",
  },
];

export default function B2BContactDatabasePage() {
  return (
    <main className="b2b-contact-page">
      <section className="b2b-contact-hero">
        <div className="b2b-contact-container">
          <span className="b2b-eyebrow">PROFESSIONAL CONTACT DATABASE</span>
          <h1>
            Connect with the
            <span> Right Business Professionals</span>
          </h1>
          <p>
            Explore structured B2B company and professional contact
            information across India. Organize your research by industry,
            designation, business category and location to support focused
            business development.
          </p>
          <div className="b2b-hero-actions">
            <a href="/contact" className="b2b-btn-primary">
              Request a Custom Quote →
            </a>
            <a href="#sample-records" className="b2b-btn-secondary">
              View Sample Records
            </a>
          </div>

          <div className="b2b-hero-points">
            <span>✓ Industry-based research</span>
            <span>✓ Designation-wise requirements</span>
            <span>✓ City & state coverage options</span>
          </div>
        </div>
      </section>

      <section className="b2b-overview-section">
        <div className="b2b-contact-container">
          <div className="b2b-section-heading">
            <span className="b2b-eyebrow">ABOUT THE DATABASE</span>
            <h2>Business Contacts Organized Around Your Requirements</h2>
            <p>
              Finding the right business audience starts with understanding
              the company, industry and professional role you want to reach.
              A structured contact database can make this research easier to
              organize and review.
            </p>
          </div>

          <div className="b2b-overview-grid">
            <article className="b2b-overview-card">
              <span>01</span>
              <h3>Company Information</h3>
              <p>
                Explore business names, industry categories, locations and
                other available company-level details.
              </p>
            </article>
            <article className="b2b-overview-card">
              <span>02</span>
              <h3>Professional Roles</h3>
              <p>
                Define the business functions and designations relevant to
                your sales or research objectives.
              </p>
            </article>
            <article className="b2b-overview-card">
              <span>03</span>
              <h3>Location-Based Research</h3>
              <p>
                Plan requirements around selected cities, states and regions
                across the Indian market.
              </p>
            </article>
            <article className="b2b-overview-card">
              <span>04</span>
              <h3>Structured Data Format</h3>
              <p>
                Discuss organized Excel or CSV delivery, subject to the
                available fields and agreed scope.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="b2b-contact-types">
        <div className="b2b-contact-container">
          <div className="b2b-section-heading">
            <span className="b2b-eyebrow">CONTACT CATEGORIES</span>
            <h2>Explore Professional Contact Categories</h2>
            <p>
              Different business teams have different responsibilities.
              Choose the professional categories that match your requirement.
            </p>
          </div>

          <div className="b2b-contact-type-grid">
            {contactTypes.map((item) => (
              <article className="b2b-type-card" key={item.number}>
                <span className="b2b-card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="b2b-role-detail">
                  <strong>Example roles</strong>
                  <span>{item.roles}</span>
                </div>
                <a href="/contact">Discuss This Category →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b2b-industries-section">
        <div className="b2b-contact-container">
          <div className="b2b-section-heading">
            <span className="b2b-eyebrow">INDUSTRY-WISE DATA</span>
            <h2>Business Contacts Across Multiple Industries</h2>
            <p>
              Select relevant business sectors to narrow down your research.
              The examples below show industry categories that can be used
              while discussing a database requirement.
            </p>
          </div>

          <div className="b2b-industry-grid">
            {industries.map(([name, detail], index) => (
              <div className="b2b-industry-item" key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{name}</h3>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="b2b-sample-section" id="sample-records">
        <div className="b2b-contact-container">
          <div className="b2b-section-heading">
            <span className="b2b-eyebrow">DATABASE PREVIEW</span>
            <h2>Sample B2B Contact Records</h2>
            <p>
              Below is an illustrative preview of how company and
              professional information may be organized in a structured
              database.
            </p>
          </div>

          <div className="b2b-table-summary">
            <div>
              <strong>06</strong>
              <span>Illustrative records</span>
            </div>
            <div>
              <strong>06</strong>
              <span>Industry examples</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Regional examples</span>
            </div>
          </div>

          <div className="b2b-table-wrap">
            <table className="b2b-contact-table">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Contact Person</th>
                  <th>Designation</th>
                  <th>Industry</th>
                  <th>City</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {sampleContacts.map((contact) => (
                  <tr key={contact.company}>
                    <td>{contact.company}</td>
                    <td>{contact.person}</td>
                    <td>{contact.designation}</td>
                    <td>{contact.industry}</td>
                    <td>{contact.city}</td>
                    <td>{contact.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="b2b-disclaimer">
            Demo content only. These names and records are fictional
            illustrations, not actual customer or contact records.
          </p>
        </div>
      </section>

      <section className="b2b-fields-section">
        <div className="b2b-contact-container b2b-fields-layout">
          <div>
            <span className="b2b-eyebrow">DATABASE INFORMATION</span>
            <h2>What Information Can Be Organized?</h2>
            <p>
              The exact fields depend on the selected database, available
              information and project scope. Discuss the fields you need
              before confirming your requirement.
            </p>
            <a href="/contact" className="b2b-btn-primary">
              Ask About Available Fields →
            </a>
          </div>
          <div className="b2b-fields-list">
            {dataFields.map((field) => (
              <div key={field}>
                <span>✓</span>
                {field}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="b2b-regions-section">
        <div className="b2b-contact-container">
          <div className="b2b-section-heading">
            <span className="b2b-eyebrow">PAN-INDIA RESEARCH OPTIONS</span>
            <h2>City & State Wise Contact Requirements</h2>
            <p>
              Plan your target audience by region, state or city. These are
              examples of locations that can be included in a requirement
              discussion.
            </p>
          </div>

          <div className="b2b-region-grid">
            {regions.map((region, index) => (
              <article className="b2b-region-card" key={region.name}>
                <span>REGION 0{index + 1}</span>
                <h3>{region.name}</h3>
                <p><strong>States:</strong> {region.states}</p>
                <p><strong>Major cities:</strong> {region.cities}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b2b-usecases-section">
        <div className="b2b-contact-container">
          <div className="b2b-section-heading">
            <span className="b2b-eyebrow">BUSINESS APPLICATIONS</span>
            <h2>How Businesses Can Use B2B Contact Data</h2>
            <p>
              Organized business information can support several
              business-to-business activities when used responsibly.
            </p>
          </div>
          <div className="b2b-usecase-grid">
            {useCases.map((item, index) => (
              <article className="b2b-usecase-card" key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b2b-process-section">
        <div className="b2b-contact-container">
          <div className="b2b-section-heading">
            <span className="b2b-eyebrow">HOW IT WORKS</span>
            <h2>Share Your Requirement in Four Simple Steps</h2>
          </div>
          <div className="b2b-process-grid">
            <div><span>01</span><h3>Choose Your Industry</h3><p>Tell us which business sectors you want to research.</p></div>
            <div><span>02</span><h3>Select Professional Roles</h3><p>Specify the designations or business functions you need.</p></div>
            <div><span>03</span><h3>Define Your Location</h3><p>Share your preferred states, cities or target regions.</p></div>
            <div><span>04</span><h3>Discuss the Data Scope</h3><p>Review available fields, format, scope and pricing with our team.</p></div>
          </div>
        </div>
      </section>

      <section className="b2b-faq-section">
        <div className="b2b-contact-container">
          <div className="b2b-section-heading">
            <span className="b2b-eyebrow">NEED MORE INFORMATION?</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="b2b-faq-grid">
            {faqs.map((faq, index) => (
              <article className="b2b-faq-card" key={faq.question}>
                <span>0{index + 1}</span>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b2b-final-cta">
        <div className="b2b-contact-container">
          <span className="b2b-eyebrow">LET'S DISCUSS YOUR REQUIREMENT</span>
          <h2>Looking for a Specific B2B Contact Database?</h2>
          <p>
            Share your target industry, professional designations and
            preferred locations. Our team can discuss the available data
            scope and a suitable quote for your business.
          </p>
          <a href="/contact" className="b2b-btn-primary">
            Request a Custom Quote →
          </a>
        </div>
      </section>
    </main>
  );
}
