
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | B2B Data Provider India",
  description:
    "Discover Best B2B Data Provider, a business data solutions company focused on helping organizations explore relevant company and professional contact information.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Best B2B Data Provider",
    description:
      "Learn about our approach to business data solutions, B2B contact databases and business growth.",
    url: "/about",
    type: "website",
  },
};

const images = {
  server:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=85",
  office:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&auto=format&fit=crop&q=85",
  network:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=85",
  database:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=85",
  lead:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=85",
  enrichment:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=85",
};

export default function AboutPage() {
  return (
    <main className="about-page about-page-premium">

      {/* HERO SECTION */}
      <section className="about-hero about-hero-premium">
        <div className="about-hero-copy">
          <span className="tag">ABOUT OUR COMPANY</span>

          <h1>
            Helping Businesses Make
            <span> Better Connections</span>
          </h1>

          <p>
            We make business information easier to discover,
            understand and use through practical B2B data
            solutions designed to support smarter business
            research and meaningful connections.
          </p>

          <a href="#who-we-are" className="primary-button">
            Discover Our Story →
          </a>

          <div className="about-hero-note">
            <span>✓ Business-focused approach</span>
            <span>✓ Data-driven thinking</span>
            <span>✓ Better business connections</span>
          </div>
        </div>

        <div className="about-hero-visual">
          <img
            src={images.server}
            alt="Modern server infrastructure supporting business data solutions"
            className="about-hero-img"
          />

          <div className="about-image-glow"></div>

          <div className="about-floating-info">
            <span className="about-floating-icon">✦</span>
            <div>
              <strong>Business Data</strong>
              <small>Information that supports decisions</small>
            </div>
          </div>

          <div className="about-floating-chip">
            <span>◎</span> Smarter Connections
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        className="about-content about-who-section"
        id="who-we-are"
      >
        <div className="about-who-image">
          <img
            src={images.office}
            alt="Modern professional workspace representing business collaboration"
            loading="lazy"
          />
          <div className="about-photo-label">
            <span>OUR PURPOSE</span>
            <strong>Making business information more accessible</strong>
          </div>
        </div>

        <div className="about-who-copy">
          <div className="about-section-label">
            <span className="tag">WHO WE ARE</span>
            <span className="about-index">01 / ABOUT</span>
          </div>

          <h2>
            Making Business Information
            <span> More Accessible</span>
          </h2>

          <p>
            Best B2B Data Provider is focused on business data
            solutions that help organizations explore relevant
            company information and professional contact details.
            We aim to make business research more organized and
            useful for sales, marketing and business development
            activities.
          </p>

          <p>
            Our approach is centered on understanding business
            requirements and helping teams identify information
            that supports their research, planning and outreach
            efforts.
          </p>

          <a href="/services" className="about-text-link">
            Explore Our Solutions →
          </a>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="about-mission about-mission-premium">
        <div className="about-mission-copy">
          <span className="tag">OUR MISSION</span>

          <h2>
            Supporting Smarter
            <span> Business Decisions</span>
          </h2>

          <p>
            Our mission is to make business information easier
            to explore and understand. We want to support
            organizations with relevant business data solutions
            that help them research markets, identify opportunities
            and build meaningful professional connections.
          </p>
        </div>

        <div className="about-mission-visual">
          <img
            src={images.network}
            alt="Digital global network representing connected business information"
            loading="lazy"
          />
          <div className="mission-visual-overlay">
            <span>CONNECT</span>
            <strong>Information. Insights. Opportunities.</strong>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-what-we-do">
        <div className="section-heading">
          <span className="tag">WHAT WE DO</span>
          <h2>Business Data Solutions for Growing Teams</h2>
          <p>
            We focus on practical solutions that support
            different stages of business research and
            development.
          </p>
        </div>

        <div className="about-feature-grid">

          <article className="about-feature-card about-feature-image-card">
            <img
              src={images.database}
              alt="Business analytics dashboard for B2B contact database research"
              loading="lazy"
            />
            <div className="about-feature-body">
              <span className="about-feature-number">01 / DATABASE</span>
              <h3>B2B Contact Database</h3>
              <p>
                Explore company and professional contact
                information to support business research
                and audience discovery.
              </p>
              <a href="/b2b-contact-database">
                Explore Database →
              </a>
            </div>
          </article>

          <article className="about-feature-card about-feature-image-card">
            <img
              src={images.lead}
              alt="Business professionals collaborating on lead generation opportunities"
              loading="lazy"
            />
            <div className="about-feature-body">
              <span className="about-feature-number">02 / GROWTH</span>
              <h3>Lead Generation</h3>
              <p>
                Identify relevant business audiences and
                potential opportunities for sales and
                business development activities.
              </p>
              <a href="/lead-generation">
                Explore Lead Generation →
              </a>
            </div>
          </article>

          <article className="about-feature-card about-feature-image-card">
            <img
              src={images.enrichment}
              alt="Data visualization representing business data enrichment and analysis"
              loading="lazy"
            />
            <div className="about-feature-body">
              <span className="about-feature-number">03 / DATA</span>
              <h3>Data Enrichment</h3>
              <p>
                Improve and organize existing business
                information to support more informed
                decisions and research.
              </p>
              <a href="/data-enrichment">
                Explore Data Enrichment →
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="about-approach about-approach-premium">
        <span className="tag">OUR APPROACH</span>

        <h2>A Practical Approach to Business Data</h2>

        <p className="about-approach-intro">
          We focus on understanding business needs and making
          information easier to explore and use.
        </p>

        <div className="approach-grid">
          <div>
            <span>01</span>
            <h3>Understand</h3>
            <p>
              Understand business requirements and
              information needs.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Discover</h3>
            <p>
              Explore relevant company and professional
              business information.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Support</h3>
            <p>
              Help teams use organized information
              for research and business planning.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why">
        <span className="tag">WHY CHOOSE US</span>

        <h2>Focused on Your Business Information Needs</h2>

        <div className="about-why-grid">
          <div>
            <span className="why-icon">✦</span>
            <h3>Business-Focused Solutions</h3>
            <p>
              Solutions designed around practical business
              research and development requirements.
            </p>
          </div>

          <div>
            <span className="why-icon">◎</span>
            <h3>Relevant Information</h3>
            <p>
              A focus on useful company and professional
              information for business activities.
            </p>
          </div>

          <div>
            <span className="why-icon">⌘</span>
            <h3>Organized Approach</h3>
            <p>
              An approach that emphasizes clarity,
              organization and informed decisions.
            </p>
          </div>

          <div>
            <span className="why-icon">↗</span>
            <h3>Growth-Oriented Thinking</h3>
            <p>
              Supporting teams as they explore markets,
              audiences and business opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <span className="tag">LET'S CONNECT</span>

        <h2>
          Let's Explore Better Business Data Together
        </h2>

        <p>
          Looking for business data solutions for your
          organization? Explore our services and discover
          how we can support your business requirements.
        </p>

        <a href="/services" className="primary-button">
          Explore Our Services →
        </a>
      </section>

    </main>
  );
}
