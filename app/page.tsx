
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best B2B Data Provider | Business Data Solutions India",
  description:
    "Discover business data solutions, B2B contact databases, lead generation and data enrichment services for businesses.",
};

const imageBase = "https://images.unsplash.com/";

export default function HomePage() {
  return (
    <main className="home-page">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="/" className="logo">
          Best<span>B2B</span>Data
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/b2b-contact-database">B2B Database</a>
          <a href="/lead-generation">Lead Generation</a>
          <a href="/data-enrichment">Data Enrichment</a>
          <a href="/industries">Industries</a>
          <a href="/pricing">Pricing</a>
          <a href="/blog">Blog</a>
           <a href="/contact">Contact Us</a>
        </div>

        <a href="/contact" className="nav-button">
          Let's Connect →
        </a>
      </nav>

      {/* HERO */}
      <section className="hero premium-hero">
        <div className="hero-content">
          <span className="tag">
            SMARTER BUSINESS DATA SOLUTIONS
          </span>

          <h1>
            Turn Business Data Into
            <span> Better Opportunities.</span>
          </h1>

          <p>
            Discover smarter ways to connect with businesses.
            Explore B2B data solutions designed to support
            your sales, marketing and business growth.
          </p>

          <div className="hero-buttons">
            <a href="/services" className="primary-button">
              Explore Our Services →
            </a>

            <a href="/about" className="secondary-button">
              Discover Our Company
            </a>
          </div>

          <div className="hero-trust">
            <span>✓ Business-focused solutions</span>
            <span>✓ Data-driven approach</span>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="hero-visual image-hero-visual">
          <div className="hero-image-wrap">
            <img
              src={`${imageBase}photo-1558494949-ef010cbdcc31?w=1100&auto=format&fit=crop&q=85`}
              alt="Modern server infrastructure supporting business data solutions"
              className="hero-server-image"
            />
            <div className="hero-image-overlay"></div>
          </div>

          <div className="floating-card main-dashboard">
            <div className="dashboard-top">
              <div>
                <span className="dashboard-label">
                  BUSINESS DATA WORKSPACE
                </span>
                <h3>Explore Your Data</h3>
              </div>
              <span className="dashboard-icon">✦</span>
            </div>

            <div className="dashboard-search">
              <span>⌕</span>
              Search business information...
            </div>

            <div className="dashboard-filters">
              <span>Industry</span>
              <span>Location</span>
              <span>Company Size</span>
            </div>

            <div className="dashboard-divider"></div>

            <div className="dashboard-row">
              <div className="dashboard-symbol">▦</div>
              <div>
                <strong>Company Profiles</strong>
                <small>Explore business information</small>
              </div>
              <span className="dashboard-arrow">↗</span>
            </div>

            <div className="dashboard-row">
              <div className="dashboard-symbol">◎</div>
              <div>
                <strong>Industry Insights</strong>
                <small>Discover relevant industries</small>
              </div>
              <span className="dashboard-arrow">↗</span>
            </div>

            <div className="dashboard-row">
              <div className="dashboard-symbol">⌘</div>
              <div>
                <strong>Data Enrichment</strong>
                <small>Improve your business data</small>
              </div>
              <span className="dashboard-arrow">↗</span>
            </div>
          </div>

          <div className="floating-card mini-card mini-card-top">
            <span className="mini-icon">✧</span>
            <div>
              <strong>Smart Discovery</strong>
              <small>Find relevant businesses</small>
            </div>
          </div>

          <div className="floating-card mini-card mini-card-bottom">
            <span className="mini-icon">↗</span>
            <div>
              <strong>Growth Insights</strong>
              <small>Make informed decisions</small>
            </div>
          </div>

          <div className="floating-dot dot-one"></div>
          <div className="floating-dot dot-two"></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services home-services">
        <div className="section-heading">
          <span className="tag">WHAT WE OFFER</span>
          <h2>Business Data Solutions That Move You Forward</h2>
          <p>
            Explore solutions designed to help businesses
            discover opportunities and build better connections.
          </p>
        </div>

        <div className="service-grid">
          <div className="service-card image-service-card">
            <img
              src={`${imageBase}photo-1460925895917-afdab827c52f?w=700&auto=format&fit=crop&q=85`}
              alt="Business analytics dashboard for company data research"
              className="service-image"
              loading="lazy"
            />
            <span className="service-number">01 / DATABASE</span>
            <h3>B2B Contact Database</h3>
            <p>
              Explore company and professional business
              information to support your business research.
            </p>
            <a href="/b2b-contact-database">
              Explore Database →
            </a>
          </div>

          <div className="service-card image-service-card">
            <img
              src={`${imageBase}photo-1521737711867-e3b97375f902?w=700&auto=format&fit=crop&q=85`}
              alt="Business professionals collaborating on growth opportunities"
              className="service-image"
              loading="lazy"
            />
            <span className="service-number">02 / GROWTH</span>
            <h3>Lead Generation</h3>
            <p>
              Discover relevant business audiences and
              opportunities for your sales activities.
            </p>
            <a href="/lead-generation">
              Explore Solutions →
            </a>
          </div>

          <div className="service-card image-service-card">
            <img
              src={`${imageBase}photo-1551288049-bebda4e38f71?w=700&auto=format&fit=crop&q=85`}
              alt="Data visualization and analytics for business data enrichment"
              className="service-image"
              loading="lazy"
            />
            <span className="service-number">03 / DATA</span>
            <h3>Data Enrichment</h3>
            <p>
              Improve and organize business information
              to support better data-driven decisions.
            </p>
            <a href="/data-enrichment">
              Explore Enrichment →
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about home-about home-about-image">
        <div className="about-image-box">
          <img
            src={`${imageBase}photo-1497366754035-f200968a6e72?w=1000&auto=format&fit=crop&q=85`}
            alt="Modern professional workspace representing business collaboration"
            loading="lazy"
          />
          <div className="about-image-caption">
            <span>BUSINESS CONNECTIONS</span>
            <strong>Better data. Better decisions.</strong>
          </div>
        </div>

        <div className="about-text">
          <span className="tag">ABOUT OUR COMPANY</span>
          <h2>Helping Businesses Make Better Connections</h2>
          <p>
            Best B2B Data Provider focuses on business data
            solutions that help organizations discover relevant
            information and make more informed decisions.
          </p>
          <a href="/about" className="primary-button">
            Learn More About Us →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta" id="contact">
        <span className="tag">LET'S CONNECT</span>
        <h2>Ready to Explore Better Business Data?</h2>
        <p>
          Discover how our business data solutions can
          support your organization's goals.
        </p>
        <a href="/services" className="primary-button">
          Explore Our Solutions →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <a href="/" className="footer-logo">
          Best<span>B2B</span>Data
        </a>

        <p>Business data solutions for better connections.</p>

        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/b2b-contact-database">B2B Database</a>
          <a href="/lead-generation">Lead Generation</a>
          <a href="/data-enrichment">Data Enrichment</a>
          <a href="/industries">Industries</a>
          <a href="/pricing">Pricing</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
        </div>

        <p className="copyright">
          ©  Best B2B Data Provider.
          All rights reserved.
        </p>
      </footer>
    </main>
  );
}
