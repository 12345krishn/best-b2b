
import type { Metadata } from "next";
import ContactForm from "./ContactFrom";

export const metadata: Metadata = {
  title: "Contact Us | Best B2B Data Provider India",
  description:
    "Get in touch with Best B2B Data Provider to discuss B2B contact database, lead generation and business data solutions.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Best B2B Data Provider",
    description:
      "Connect with us to discuss your business data requirements.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page-premium">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-tag">LET'S CONNECT</span>
          <h1>
            Let's Start a
            <span> Business Conversation.</span>
          </h1>
          <p>
            Have a business data requirement or want to explore our services?
            Share your requirements with us and let's discuss how we can help.
          </p>
          <a href="#contact-form" className="contact-primary-btn">
            Send an Enquiry <span>→</span>
          </a>
        </div>

        <div className="contact-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
            alt="Business professionals discussing a project"
          />
          <div className="contact-visual-card">
            <span>✦</span>
            <div>
              <strong>Let's Work Together</strong>
              <small>Better connections start here</small>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-options">
        <div className="contact-option-card">
          <div className="contact-option-icon">✉</div>
          <h3>Business Enquiries</h3>
          <p>
            Tell us about your business requirements and the solutions you are
            looking for.
          </p>
        </div>

        <div className="contact-option-card">
          <div className="contact-option-icon">⌘</div>
          <h3>Data Solutions</h3>
          <p>
            Explore B2B contact database, lead generation and data enrichment
            solutions.
          </p>
        </div>

        <div className="contact-option-card">
          <div className="contact-option-icon">↗</div>
          <h3>Project Discussion</h3>
          <p>
            Share your project goals so we can understand your requirements
            better.
          </p>
        </div>
      </section>

      <section className="contact-main-section" id="contact-form">
        <div className="contact-main-info">
          <span className="contact-tag">GET IN TOUCH</span>
          <h2>
            Tell Us What
            <span> You Need.</span>
          </h2>
          <p>
            Every business has different goals. Share a few details about your
            requirements, and we can take the conversation forward.
          </p>

          <div className="contact-info-item">
            <span>01</span>
            <div>
              <h3>Share Your Requirements</h3>
              <p>Tell us about your target audience and business needs.</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span>02</span>
            <div>
              <h3>Discuss the Right Solution</h3>
              <p>Explore the services that align with your objectives.</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span>03</span>
            <div>
              <h3>Plan Your Next Step</h3>
              <p>Move forward with a clearer understanding of your needs.</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-heading">
            <h2>Send Us an Enquiry</h2>
            <p>Fill in the details below.</p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="contact-bottom-cta">
        <span className="contact-tag">BUSINESS GROWTH STARTS HERE</span>
        <h2>
          Have a Business Goal
          <span> in Mind?</span>
        </h2>
        <p>
          Explore our business data solutions and find an approach that fits
          your requirements.
        </p>
        <a href="/services" className="contact-primary-btn">
          Explore Our Services <span>→</span>
        </a>
      </section>
    </main>
  );
}
