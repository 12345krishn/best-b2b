
export default function SiteHeader() {
  return (
    <>
      {/* TOP PURPLE BAR */}
      <div className="ref-topbar">
        <div className="ref-topbar-inner">
          <strong className="ref-tagline">
            Leads, Branding, Publicity For Your Business Growth.
          </strong>

          <div className="ref-topbar-right">
            <div className="ref-social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="X">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>

            <div className="ref-top-links">
              <a href="/">Home</a>
              <a href="/about">About Data</a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN WHITE HEADER */}
      <header className="ref-main-header">
        <div className="ref-header-inner">
          <a href="/" className="ref-brand">
            <div className="ref-anniversary">
              <span className="ref-anniversary-small">YEAR OF</span>
              <strong>16</strong>
              <span className="ref-anniversary-th">th</span>
              <span className="ref-anniversary-bottom">SUCCESS</span>
            </div>

            <div className="ref-brand-text">
              <span className="ref-brand-caption">
                India’s No. 1 B2B Data Provider
              </span>
              <strong>Best B2B DATA Provider</strong>
              <small>(An ISO 9001-2015 Certified Co.)</small>
            </div>
          </a>

          <div className="ref-data-titles">
            <strong>+8</strong>
            <span>Data Titles</span>
          </div>

          <div className="ref-trusted">
            <div>
              <strong>TRUSTED BY</strong>
              <b>+8K CLIENTS</b>
              <span>SINCE-2019</span>
            </div>
            <div className="ref-trusted-badge">✓</div>
          </div>

          <div className="ref-contact-info">
            <strong className="ref-contact-heading">
              FOR ANY DATA BUY / FREE SAMPLE
            </strong>
            <a href="tel:8587804924">☎ 858782398, 825611614451</a>
            <a href="mailto:sales@bestb2bdata.com">
              ✉ sales@bestb2bdata.com
            </a>
          </div>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="ref-navigation">
        <div className="ref-navigation-inner">
          <a className="ref-home-icon" href="/">⌂</a>
          <a href="/company-database">B2B Companies <span>▼</span></a>
          <a href="/industries">Industries / Companies <span>▼</span></a>
          <a href="/company-database">City / State Wise Companies <span>▼</span></a>
          <a href="/b2b-contact-database">Professional / Services Providers <span>▼</span></a>
          <a href="/company-database">International Buyers & Sellers <span>▼</span></a>
          <a href="/industries">Exhibitors Data <span>▼</span></a>
          <a href="/pricing">Super Discounted Bulk Data</a>
          <a href="/contact">Free Sample Data</a>
          <a href="/contact">FAQ's</a>
          <a className="ref-full-data" href="/company-database">Full Data List</a>
        </div>
      </nav>

      {/* SPECIAL OFFER */}
      <section className="ref-offer">
        <div className="ref-offer-track">
          <span>
            SPL. DISCOUNT OFFER - FLAT 30% DISCOUNT ON EVERY DATA PURCHASE - OFFER END SOON
          </span>
          <span aria-hidden="true">
            SPL. DISCOUNT OFFER - FLAT 30% DISCOUNT ON EVERY DATA PURCHASE - OFFER END SOON
          </span>
        </div>
      </section>
    </>
  );
}
