
type AboutContentProps = {
  compact?: boolean;
};

const services = [
  {
    number: "01",
    title: "B2B Contact Database",
    description:
      "Explore company and professional contact information to support business research and audience discovery.",
    link: "/b2b-contact-database",
  },
  {
    number: "02",
    title: "Lead Generation",
    description:
      "Identify relevant business audiences and potential opportunities for sales and business development.",
    link: "/lead-generation",
  },
  {
    number: "03",
    title: "Data Enrichment",
    description:
      "Improve and organize existing business information to support informed decisions and research.",
    link: "/data-enrichment",
  },
];

const approaches = [
  {
    number: "01",
    title: "Understand",
    description: "Understand business requirements and information needs.",
  },
  {
    number: "02",
    title: "Discover",
    description: "Explore relevant company and professional business information.",
  },
  {
    number: "03",
    title: "Support",
    description: "Help teams use organized information for research and planning.",
  },
];

const reasons = [
  {
    icon: "✦",
    title: "Business-Focused Solutions",
    description:
      "Solutions designed around practical business research and development requirements.",
  },
  {
    icon: "◎",
    title: "Relevant Information",
    description:
      "A focus on useful company and professional information for business activities.",
  },
  {
    icon: "⌘",
    title: "Organized Approach",
    description:
      "An approach that emphasizes clarity, organization and informed decisions.",
  },
  {
    icon: "↗",
    title: "Growth-Oriented Thinking",
    description:
      "Supporting teams as they explore markets, audiences and business opportunities.",
  },
];

export default function AboutContent({
  compact = false,
}: AboutContentProps) {
  return (
    <main className={`about-page ${compact ? "about-compact" : ""}`}>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="about-tag">ABOUT OUR COMPANY</span>

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

          {!compact && (
            <a href="#who-we-are" className="about-button">
              Discover Our Story →
            </a>
          )}

          <div className="about-hero-points">
            <span>✓ Business-focused approach</span>
            <span>✓ Data-driven thinking</span>
            <span>✓ Better business connections</span>
          </div>
        </div>

        {!compact && (
          <div className="about-hero-visual">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=85"
              alt="Server infrastructure"
            />
            <div className="about-image-label">
              <strong>Business Data</strong>
              <span>Information that supports decisions</span>
            </div>
          </div>
        )}
      </section>

      {/* WHO WE ARE */}
      <section className="about-who" id="who-we-are">
        <div className="about-who-image">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&auto=format&fit=crop&q=85"
            alt="Professional workspace"
          />
        </div>

        <div className="about-who-copy">
          <span className="about-tag">WHO WE ARE</span>

          <h2>
            Making Business Information
            <span> More Accessible</span>
          </h2>

          <p>
            Best B2B Data Provider is focused on business data
            solutions that help organizations explore relevant
            company information and professional contact details.
            We aim to make business research more organized and
            useful for sales, marketing and business development.
          </p>

          <p>
            Our approach is centered on understanding business
            requirements and helping teams identify information
            that supports their research, planning and outreach
            efforts.
          </p>

          {!compact && (
            <a href="/services" className="about-text-link">
              Explore Our Solutions →
            </a>
          )}
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div>
          <span className="about-tag">OUR MISSION</span>

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

        {!compact && (
          <div className="about-mission-image">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=85"
              alt="Global digital business network"
            />
          </div>
        )}
      </section>

      {/* WHAT WE DO */}
      <section className="about-services">
        <div className="about-heading">
          <span className="about-tag">WHAT WE DO</span>
          <h2>Business Data Solutions for Growing Teams</h2>
          <p>
            We focus on practical solutions that support
            different stages of business research and development.
          </p>
        </div>

        <div className="about-service-grid">
          {services.map((service) => (
            <article key={service.number}>
              <span className="about-number">
                {service.number} / SOLUTIONS
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {!compact && (
                <a href={service.link}>Explore More →</a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="about-approach">
        <div className="about-heading">
          <span className="about-tag">OUR APPROACH</span>
          <h2>A Practical Approach to Business Data</h2>
          <p>
            We focus on understanding business needs and making
            information easier to explore and use.
          </p>
        </div>

        <div className="about-approach-grid">
          {approaches.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why">
        <div className="about-heading">
          <span className="about-tag">WHY CHOOSE US</span>
          <h2>Focused on Your Business Information Needs</h2>
        </div>

        <div className="about-why-grid">
          {reasons.map((reason) => (
            <article key={reason.title}>
              <span className="about-why-icon">{reason.icon}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <span className="about-tag">LET'S CONNECT</span>

        <h2>
          Let's Explore Better Business Data Together
        </h2>

        <p>
          Looking for business data solutions for your
          organization? Explore our services and discover
          how we can support your business requirements.
        </p>

        <a href="/contact" className="about-button">
          Contact Our Team →
        </a>
      </section>

      {compact && (
        <div className="about-read-more">
          <a href="/about" className="about-button">
            Read Complete About Us →
          </a>
        </div>
      )}
    </main>
  );
}
