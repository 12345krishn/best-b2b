
import type { Metadata } from "next";
import "./globals.css";
import "./homepage.css";
import FAQSection from "./FAQSection";
import SiteFooter from "./SiteFooter";

export const metadata: Metadata = {
  title: "Best B2B Data Provider | Company & Professional Database India",
  description:
    "Explore company databases, professional contacts, industry data and B2B business information across India.",
};

const categories = [
  {
    icon: "▥",
    title: <>B2B Companies<br />Data</>,
    href: "/company-database",
  },
  {
    icon: "⌖",
    title: <>City / State Wise<br />Companies</>,
    href: "/company-database",
  },
  {
    icon: "▣",
    title: <>Exhibitors<br />Data</>,
    href: "/industries",
  },
  {
    icon: "▤",
    title: <>Industries / Trades<br />Wise Data</>,
    href: "/industries",
  },
  {
    icon: "♙",
    title: <>Professional &<br />Services Data</>,
    href: "/b2b-contact-database",
  },
  {
    icon: "◎",
    title: <>International Buyers &<br />Sellers</>,
    href: "/company-database",
  },
];

export default function HomePage() {
  return (
    <main className="ref-home">

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

      {/* MAIN DATA SECTION */}
      <section className="ref-data-section">
        <div className="ref-data-layout">

          {/* SIX CATEGORY CARDS */}
          <div className="ref-category-grid">
            {categories.map((item, index) => (
              <a
                href={item.href}
                className="ref-category-card"
                key={index}
              >
                <div className="ref-category-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
              </a>
            ))}
          </div>

          {/* FREE SAMPLE FORM */}
          <div className="ref-sample-panel">
            <div className="ref-sample-title">
              Get Your Free Sample Data
            </div>

            <form
              className="ref-sample-form"
              action="/contact"
              method="get"
            >
              <div className="ref-form-row">
                <label htmlFor="sample-name">
                  Person Name<span>*</span>
                </label>
                <input
                  id="sample-name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="ref-form-row">
                <label htmlFor="sample-mobile">
                  Mobile No.<span>*</span>
                </label>
                <input
                  id="sample-mobile"
                  name="phone"
                  type="tel"
                  placeholder="Mobile No."
                  required
                />
              </div>

              <div className="ref-form-row">
                <label htmlFor="sample-email">
                  E-mail<span>*</span>
                </label>
                <input
                  id="sample-email"
                  name="email"
                  type="email"
                  placeholder="E-mail id"
                  required
                />
              </div>

              <div className="ref-form-row">
                <label htmlFor="sample-requirement">
                  Enquiry About<br />Data Only<span>*</span>
                </label>
                <input
                  id="sample-requirement"
                  name="requirement"
                  type="text"
                  placeholder="Enquiry About Data Only"
                  required
                />
              </div>

              <div className="ref-form-row">
                <label htmlFor="sample-code">
                  Verification<br />code<span>*</span>
                </label>
                <input
                  id="sample-code"
                  name="verification"
                  type="text"
                  placeholder="Code"
                  required
                />
              </div>

              <div className="ref-form-notice">
                <p>• Incomplete Queries will not be Answered.</p>
                <p>
                  • Please Submit your Queries with Correct Information & Full Details.
                </p>
              </div>

              <div className="ref-form-actions">
                <button type="submit">SUBMIT</button>
                <button type="reset">RESET</button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="ref-quick-links">
        <a href="/about">Our Reputed Clients</a>
        <a href="/contact">Free Sample Data</a>
        <a href="/pricing">Super Discounted Bulk Data</a>
        <a href="/company-database">Full Data List</a>
      </section>

      {/* DATA PRIVACY NOTICE */}
      <section className="ref-privacy-section">
        <h2>
          Buying & Selling of any person's personal information is totally illegal.
          <br />
          So, we honor personal data privacy, and we don't provide/offer/sale any
          personal data (Individual's Data) to anyone.
        </h2>

        <div className="ref-copyright-notice">
          Reselling / Selling of our purchased data is a serious / punishable
          offence against Indian Copyright Law under Section – 2(O)
        </div>
      </section>

      {/* BUSINESS DATA CONTENT */}
      <section className="ref-business-content">
        <h2>Business 2 Business Companies Data</h2>

        <div className="ref-business-description">
          <p>
            Be ready to expand your business opportunities with us.
            Best B2B Data stands among the largest and most reliable B2B
            database providers in India. We are an exclusive database
            supplier that helps businesses and trades in lead generation.
            Our company is a leading provider of B2B company lists in India
            in Excel format, covering all sectors, including trade/industry
            and city/state. As a premium data provider, we are known for
            providing updated, verified, and cost-effective business
            databases to our clients.
          </p>

          <a href="/company-database" className="ref-read-more">
            + READ MORE
          </a>
        </div>
      </section>

      {/* PROFESSIONAL & SERVICES DATA */}
      <section className="ref-business-content ref-extra-section">
        <h2>Professional & Services Providers Data</h2>

        <div className="ref-business-description">
          <p>
            Connect with professionals, consultants, service providers and
            business experts across India. Our Professional & Services Data
            section helps businesses explore relevant service categories,
            identify potential business partners and discover opportunities
            for B2B networking and business development.
          </p>

          <h3 className="ref-sample-heading">Professional Services – Sample Records</h3>

          <div className="ref-sample-table-wrap">
            <table className="ref-sample-table">
              <thead>
                <tr>
                  <th>Business Category</th>
                  <th>Service Type</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>IT Services</td><td>Software Development</td><td>Bengaluru</td></tr>
                <tr><td>Consultancy</td><td>Business Consulting</td><td>Delhi</td></tr>
                <tr><td>Digital Agency</td><td>Digital Marketing</td><td>Mumbai</td></tr>
                <tr><td>Financial Services</td><td>Accounting</td><td>Pune</td></tr>
                <tr><td>Design Services</td><td>Graphic Design</td><td>Jaipur</td></tr>
              </tbody>
            </table>
          </div>

          <small className="ref-sample-disclaimer">
            Illustrative sample records for website demonstration only.
          </small>

          <a href="/b2b-contact-database" className="ref-read-more">
            + READ MORE
          </a>
        </div>
      </section>

      {/* INTERNATIONAL BUYERS & SELLERS DATA */}
      <section className="ref-business-content ref-extra-section">
        <h2>International Buyers & Sellers Data</h2>

        <div className="ref-business-description">
          <p>
            Explore international business opportunities with our Buyers
            & Sellers Data section. Businesses can discover potential
            importers, exporters, distributors, wholesalers and suppliers
            across different markets. This information can support market
            research, trade development and international business
            networking.
          </p>

          <h3 className="ref-sample-heading">International Trade – Sample Records</h3>

          <div className="ref-sample-table-wrap">
            <table className="ref-sample-table">
              <thead>
                <tr>
                  <th>Business Type</th>
                  <th>Product Category</th>
                  <th>Market</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Importer</td><td>Textiles</td><td>UAE</td></tr>
                <tr><td>Exporter</td><td>Engineering Goods</td><td>Germany</td></tr>
                <tr><td>Distributor</td><td>Food Products</td><td>Singapore</td></tr>
                <tr><td>Wholesaler</td><td>Home Furnishing</td><td>United Kingdom</td></tr>
                <tr><td>Supplier</td><td>Auto Components</td><td>USA</td></tr>
              </tbody>
            </table>
          </div>

          <small className="ref-sample-disclaimer">
            Illustrative sample records for website demonstration only.
          </small>

          <a href="/company-database" className="ref-read-more">
            + READ MORE
          </a>
        </div>
      </section>

      {/* INDUSTRIES & TRADES DATA */}
      <section className="ref-business-content ref-extra-section">
        <h2>Industries / Trades Wise Data</h2>

        <div className="ref-business-description">
          <p>
            Find business information across multiple industries and trade
            categories in India. Our Industries & Trades Data section helps
            businesses explore relevant sectors, understand market segments
            and identify potential companies for sales, marketing and
            business expansion activities.
          </p>

          <h3 className="ref-sample-heading">Industry Categories – Sample Records</h3>

          <div className="ref-sample-table-wrap">
            <table className="ref-sample-table">
              <thead>
                <tr>
                  <th>Industry</th>
                  <th>Business Segment</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Manufacturing</td><td>Industrial Equipment</td><td>Ahmedabad</td></tr>
                <tr><td>Healthcare</td><td>Medical Supplies</td><td>Hyderabad</td></tr>
                <tr><td>Automotive</td><td>Auto Parts</td><td>Pune</td></tr>
                <tr><td>Textile</td><td>Fabric & Garments</td><td>Surat</td></tr>
                <tr><td>Food Processing</td><td>Packaged Foods</td><td>Indore</td></tr>
              </tbody>
            </table>
          </div>

          <small className="ref-sample-disclaimer">
            Illustrative sample records for website demonstration only.
          </small>

          <a href="/industries" className="ref-read-more">
            + READ MORE
          </a>
        </div>
      </section>
      
      {/* NORTH SOUTH EAST WEST STATE & CITY DATA */}
      <section className="ref-business-content ref-extra-section">
        <h2>State & City Wise B2B Companies Data – India</h2>

        <div className="ref-business-description">
          <p>
            Explore state-wise and city-wise B2B company information
            across India. Our location-based data coverage helps businesses
            identify potential customers, manufacturers, distributors,
            dealers, exporters and suppliers across different regions.
            Whether you are targeting North, South, East or West India,
            location-specific business data can support your sales,
            marketing and lead generation activities.
          </p>

          <h3 className="ref-sample-heading">
            Region Wise State & City Coverage – Sample Records
          </h3>

          <div className="ref-sample-table-wrap">
            <table className="ref-sample-table">
              <thead>
                <tr>
                  <th>Region</th>
                  <th>State</th>
                  <th>Major City</th>
                </tr>
              </thead>

              <tbody>
                {/* NORTH INDIA */}
                <tr>
                  <td rowSpan={4}>North India</td>
                  <td>Delhi</td>
                  <td>New Delhi</td>
                </tr>
                <tr>
                  <td>Uttar Pradesh</td>
                  <td>Noida, Lucknow, Kanpur</td>
                </tr>
                <tr>
                  <td>Haryana</td>
                  <td>Gurugram, Faridabad</td>
                </tr>
                <tr>
                  <td>Punjab</td>
                  <td>Ludhiana, Amritsar</td>
                </tr>

                {/* SOUTH INDIA */}
                <tr>
                  <td rowSpan={4}>South India</td>
                  <td>Tamil Nadu</td>
                  <td>Chennai, Coimbatore</td>
                </tr>
                <tr>
                  <td>Karnataka</td>
                  <td>Bengaluru, Mysuru</td>
                </tr>
                <tr>
                  <td>Telangana</td>
                  <td>Hyderabad, Warangal</td>
                </tr>
                <tr>
                  <td>Kerala</td>
                  <td>Kochi, Kozhikode</td>
                </tr>

                {/* WEST INDIA */}
                <tr>
                  <td rowSpan={4}>West India</td>
                  <td>Maharashtra</td>
                  <td>Mumbai, Pune, Nagpur</td>
                </tr>
                <tr>
                  <td>Gujarat</td>
                  <td>Ahmedabad, Surat, Vadodara</td>
                </tr>
                <tr>
                  <td>Rajasthan</td>
                  <td>Jaipur, Jodhpur</td>
                </tr>
                <tr>
                  <td>Goa</td>
                  <td>Panaji, Margao</td>
                </tr>

                {/* EAST INDIA */}
                <tr>
                  <td rowSpan={4}>East India</td>
                  <td>West Bengal</td>
                  <td>Kolkata, Howrah</td>
                </tr>
                <tr>
                  <td>Odisha</td>
                  <td>Bhubaneswar, Cuttack</td>
                </tr>
                <tr>
                  <td>Bihar</td>
                  <td>Patna, Gaya</td>
                </tr>
                <tr>
                  <td>Jharkhand</td>
                  <td>Ranchi, Jamshedpur</td>
                </tr>
              </tbody>
            </table>
          </div>

          <small className="ref-sample-disclaimer">
            Illustrative regional coverage examples. Actual database coverage
            and available records may vary by location and requirement.
          </small>

          <a href="/company-database" className="ref-read-more">
            + READ MORE
          </a>
        </div>
      </section>
       
      {/* SUPER DISCOUNTED BULK DATA PACKAGES */}
      <section className="ref-business-content ref-extra-section ref-bulk-packages">
        <h2>Super Discounted Bulk Data Packages</h2>

        <p className="ref-bulk-intro">
          Looking for business data in bulk? Choose a suitable data package
          for your business requirements. Get company databases, professional
          contacts and industry-wise business information with flexible
          delivery options.
        </p>

        <div className="ref-package-grid">

          {/* STARTER PACKAGE */}
          <div className="ref-package-card">
            <div className="ref-package-label">STARTER</div>
            <h3>Business Starter</h3>
            <p className="ref-package-description">
              Suitable for small businesses and focused sales campaigns.
            </p>

            <ul>
              <li>Company Database</li>
              <li>Selected Industry Data</li>
              <li>City / State Wise Options</li>
              <li>Excel / CSV Delivery</li>
              <li>Custom Data Requirements</li>
            </ul>

            <a href="/contact">GET A QUOTE</a>
          </div>

          {/* GROWTH PACKAGE */}
          <div className="ref-package-card ref-package-featured">
            <div className="ref-package-label">POPULAR CHOICE</div>
            <h3>Business Growth</h3>
            <p className="ref-package-description">
              For growing companies looking to expand their business reach.
            </p>

            <ul>
              <li>Company & Professional Data</li>
              <li>Multiple Industry Categories</li>
              <li>Pan-India Location Options</li>
              <li>Excel / CSV Delivery</li>
              <li>Custom Database Requirements</li>
            </ul>

            <a href="/contact">GET A QUOTE</a>
          </div>

          {/* ENTERPRISE PACKAGE */}
          <div className="ref-package-card">
            <div className="ref-package-label">ENTERPRISE</div>
            <h3>Bulk Data Solution</h3>
            <p className="ref-package-description">
              Designed for larger organisations with extensive data needs.
            </p>

            <ul>
              <li>Large-Scale Company Data</li>
              <li>Industry & Region-Based Data</li>
              <li>Professional Contact Options</li>
              <li>Excel / CSV / API Discussion</li>
              <li>Custom Data Delivery</li>
            </ul>

            <a href="/contact">GET A QUOTE</a>
          </div>

        </div>

        <div className="ref-bulk-bottom">
          <strong>Need a Custom Bulk Data Package?</strong>
          <p>
            Tell us your industry, target location and data requirements.
            Our team can discuss a suitable data solution for your business.
          </p>
          <a href="/contact">CONTACT OUR TEAM →</a>
        </div>
      </section>
       
      {/* OUR DATABASE SECTION */}
      <section className="ref-business-content ref-extra-section ref-our-database">
        <h2>Explore Our Database Solutions</h2>

        <p className="ref-database-intro">
          Discover business information and data solutions designed to
          support your sales, marketing and business development goals.
          Explore our range of company databases, professional contacts,
          industry-wise information and location-based business data
          across India.
        </p>

        <div className="ref-database-grid">

          <a href="/company-database" className="ref-database-card">
            <span className="ref-database-number">01</span>
            <div className="ref-database-icon">▥</div>
            <h3>Company Database</h3>
            <p>
              Explore company information across industries, business
              categories and locations in India.
            </p>
            <strong>EXPLORE DATABASE →</strong>
          </a>

          <a href="/b2b-contact-database" className="ref-database-card">
            <span className="ref-database-number">02</span>
            <div className="ref-database-icon">♙</div>
            <h3>Professional Contact Database</h3>
            <p>
              Discover business professional and decision-maker contact
              data for relevant B2B outreach.
            </p>
            <strong>EXPLORE DATABASE →</strong>
          </a>

          <a href="/industries" className="ref-database-card">
            <span className="ref-database-number">03</span>
            <div className="ref-database-icon">▤</div>
            <h3>Industry Wise Database</h3>
            <p>
              Find business information across manufacturing, healthcare,
              technology, automotive and other sectors.
            </p>
            <strong>EXPLORE DATABASE →</strong>
          </a>

          <a href="/company-database" className="ref-database-card">
            <span className="ref-database-number">04</span>
            <div className="ref-database-icon">⌖</div>
            <h3>State & City Wise Database</h3>
            <p>
              Explore location-based company information across North,
              South, East and West India.
            </p>
            <strong>EXPLORE DATABASE →</strong>
          </a>

          <a href="/industries" className="ref-database-card">
            <span className="ref-database-number">05</span>
            <div className="ref-database-icon">▣</div>
            <h3>Exhibition & Exhibitor Database</h3>
            <p>
              Explore exhibition-related business categories and
              exhibitor information for trade research.
            </p>
            <strong>EXPLORE DATABASE →</strong>
          </a>

          <a href="/lead-generation" className="ref-database-card">
            <span className="ref-database-number">06</span>
            <div className="ref-database-icon">◎</div>
            <h3>B2B Lead Generation Data</h3>
            <p>
              Support targeted business prospecting with relevant
              company and professional data requirements.
            </p>
            <strong>EXPLORE DATABASE →</strong>
          </a>

        </div>

        <div className="ref-database-bottom">
          <h3>Looking for a Specific Business Database?</h3>
          <p>
            Share your target industry, location and data requirements.
            We can discuss a suitable database solution for your business.
          </p>
          <a href="/contact">DISCUSS YOUR REQUIREMENTS →</a>
        </div>
      </section>
      <section className="clients-section">
  <div className="clients-container">
    <span className="clients-tag">OUR CLIENT NETWORK</span>

    <h2>Some of Our Reputed Clients</h2>

    <p className="clients-description">
      We aim to support businesses across different industries with
      reliable B2B data solutions.
    </p>

    <div className="clients-grid">
      <div className="client-card">
        <div className="client-logo">NT</div>
        <h3>NovaTech</h3>
        <span>Technology</span>
      </div>

      <div className="client-card">
        <div className="client-logo">UC</div>
        <h3>UrbanCart</h3>
        <span>Retail & E-commerce</span>
      </div>

      <div className="client-card">
        <div className="client-logo">AM</div>
        <h3>Apex Manufacturing</h3>
        <span>Manufacturing</span>
      </div>

      <div className="client-card">
        <div className="client-logo">GF</div>
        <h3>GreenLeaf Foods</h3>
        <span>Food & FMCG</span>
      </div>

      <div className="client-card">
        <div className="client-logo">BE</div>
        <h3>BrightEdge</h3>
        <span>Business Services</span>
      </div>
    </div>
  </div>
</section>
{/* WEBSITE FOOTER */}
<SiteFooter />

{/* FLOATING SIDE LINKS */}
<div className="ref-floating-tabs">
  <a href="/contact">Free Sample</a>
  <a href="/company-database">Full Data List</a>
  <a href="/pricing">Discounted Bulk Data</a>
</div>
     


      {/* FLOATING SIDE LINKS */}
      <div className="ref-floating-tabs">
        <a href="/contact">Free Sample</a>
        <a href="/company-database">Full Data List</a>
        <a href="/pricing">Discounted Bulk Data</a>
      </div>

    </main>
  );
}
