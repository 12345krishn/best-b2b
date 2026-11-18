
export default function SiteFooter() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        {/* BRAND COLUMN */}
        <div className="footer-brand-column">
          <a href="/" className="footer-brand-logo">
            <span className="footer-brand-small">BEST B2B</span>
            <strong>DATA</strong>
            <span className="footer-brand-bottom">PROVIDER</span>
          </a>

          <h3>Best B2B Data Provider</h3>
          <p>
            Business Data Solutions for Sales, Marketing
            and Business Growth Across India.
          </p>
        </div>

        {/* DATABASE LINKS */}
        <div className="footer-links-column">
          <h3>Our Database</h3>
          <a href="/company-database">Full Data List</a>
          <a href="/company-database">B2B Companies Data</a>
          <a href="/company-database">City / State Wise Companies</a>
          <a href="/industries">Exhibition & Exhibitors Data</a>
          <a href="/b2b-contact-database">Professional / Service Providers</a>
          <a href="/industries">Trade / Industry Wise Data</a>
          <a href="/company-database">International Buyers & Sellers</a>
          <a href="/pricing">Discounted Bulk Data Packages</a>
          <a href="/contact">Free Sample Data</a>
          <a href="/about">Our Reputed Clients</a>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links-column">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Our Data</a>
          <a href="/services">Our Services</a>
          <a href="/industries">Industries</a>
          <a href="/lead-generation">Lead Generation</a>
          <a href="/pricing">Pricing</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
          <a href="/contact#faq">FAQs</a>
          <a href="/contact">Privacy & Data Enquiries</a>
        </div>

        {/* CONTACT COLUMN */}
        <div className="footer-contact-column">
          <span className="footer-since">BUSINESS DATA SOLUTIONS</span>
          <h2>Best B2B Data</h2>
          <h4>Your Business Growth Partner</h4>

          <a href="mailto:sales@bestb2bdata.com">
            ✉ sales@bestb2bdata.com
          </a>

          <a href="/contact">
            ☎ Contact Our Sales Team
          </a>

          <a href="/contact">
            ◎ www.bestb2bdata.com
          </a>

          <div className="footer-socials">
            <a href="/contact" aria-label="Facebook">f</a>
            <a href="/contact" aria-label="X">𝕏</a>
            <a href="/contact" aria-label="LinkedIn">in</a>
            <a href="/contact" aria-label="Instagram">◎</a>
            <a href="/contact" aria-label="YouTube">▶</a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="footer-copyright">
        © Copyright 2026. Best B2B Data Provider. All Rights Reserved.
      </div>

    </footer>
  );
}
