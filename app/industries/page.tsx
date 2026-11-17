
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | B2B Data Provider India",
  description:
    "Explore B2B business data solutions for manufacturing, IT, healthcare, finance, real estate, logistics and other industries in India.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve | Best B2B Data Provider",
    description:
      "Discover industry-focused business data solutions for companies across India.",
    url: "/industries",
    type: "website",
  },
};

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    description:
      "Explore relevant company information to support supplier research, industrial prospecting and business development.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=85",
    alt: "Modern manufacturing facility and industrial production",
  },
  {
    number: "02",
    title: "IT & Technology",
    description:
      "Understand the technology business landscape and identify relevant companies for B2B research and outreach.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    alt: "Modern technology office workspace",
  },
  {
    number: "03",
    title: "Healthcare",
    description:
      "Organize business information related to healthcare providers, medical organizations and healthcare businesses.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    alt: "Healthcare professional working in a medical environment",
  },
  {
    number: "04",
    title: "Banking & Finance",
    description:
      "Support business research with structured company information across financial and professional service sectors.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    alt: "Modern financial district office buildings",
  },
  {
    number: "05",
    title: "Real Estate",
    description:
      "Explore relevant business information to support commercial property research and real estate prospecting.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    alt: "Commercial real estate office buildings",
  },
  {
    number: "06",
    title: "Logistics & Education",
    description:
      "Organize business research across logistics, transportation, education and related business sectors.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
    alt: "Logistics warehouse and supply chain operations",
  },
];

export default function IndustriesPage() {
  return (
    <main className="industries-page-premium">

      {/* HERO SECTION */}
      <section className="industries-hero">
        <div className="industries-hero-content">
          <span className="tag">INDUSTRIES WE SERVE</span>

          <h1>
            Business Data Solutions
            <br />
            <span>Across Multiple Industries</span>
          </h1>

          <p>
            Every industry has different business requirements.
            Explore how structured B2B data solutions can support
            company research, prospecting and business development
            across different sectors.
          </p>

          <a href="/#contact" className="services-btn">
            Discuss Your Industry Needs →
          </a>
        </div>

        <div className="industries-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            alt="Modern commercial business buildings representing different industries"
          />

          <div className="industries-floating-card">
            <strong>Industry Insights</strong>
            <span>Business research & data solutions</span>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="industries-intro">
        <div>
          <span className="tag">OUR INDUSTRY FOCUS</span>

          <h2>
            Understanding Different Business Markets
          </h2>

          <p>
            Business research becomes more useful when information
            is organized around the right industry and market.
            Our approach focuses on helping businesses explore
            relevant company information based on their objectives.
          </p>

          <p>
            From manufacturing and technology to finance and
            logistics, structured business data can support
            research and sales planning across different sectors.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85"
          alt="Global digital business network connecting industries"
          loading="lazy"
        />
      </section>

      {/* INDUSTRY CARDS */}
      <section className="industries-list-section">
        <span className="tag">EXPLORE INDUSTRIES</span>

        <h2>Industries We Support</h2>

        <p>
          Explore business sectors where organized company
          information can support research and business development.
        </p>

        <div className="industries-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.number}>
              <div className="industry-image">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  loading="lazy"
                />
                <span>{industry.number}</span>
              </div>

              <div className="industry-content">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>

                <a href="/#contact">
                  Discuss Your Requirements →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="industries-solutions">
        <div className="industries-solutions-image">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=85"
            alt="Business team collaborating on market research"
            loading="lazy"
          />
        </div>

        <div className="industries-solutions-content">
          <span className="tag">BUSINESS DATA SOLUTIONS</span>

          <h2>
            Data Solutions That Support Your Business Goals
          </h2>

          <p>
            Different industries need different types of business
            information. Explore our solutions to understand how
            structured data can support your requirements.
          </p>

          <ul>
            <li>B2B Contact Database</li>
            <li>Business Data Solutions</li>
            <li>Lead Generation</li>
            <li>Data Enrichment</li>
          </ul>

          <a href="/services" className="services-btn">
            Explore Our Services →
          </a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="industries-cta">
        <span className="tag">LET'S CONNECT</span>

        <h2>
          Looking for Industry-Specific Business Data?
        </h2>

        <p>
          Tell us about your industry and business requirements.
          Let's explore a suitable data solution for your team.
        </p>

        <a href="/#contact" className="services-btn">
          Talk to Our Team →
        </a>
      </section>

    </main>
  );
}
