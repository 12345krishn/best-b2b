
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Data Solutions Pricing | Best B2B Data Provider",
  description:
    "Explore flexible pricing options for B2B contact database, lead generation and data enrichment solutions. Contact us for a custom business data quote.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Best B2B Data Provider",
    description:
      "Find flexible business data solutions designed around your business requirements.",
    url: "/pricing",
    type: "website",
  },
};

const plans = [
  {
    number: "01",
    name: "Starter",
    subtitle: "For businesses getting started",
    description:
      "A practical starting point for businesses exploring structured B2B data solutions.",
    features: [
      "Business data requirements discussion",
      "Industry and audience research",
      "Basic data organization support",
      "Requirement-based recommendations",
      "Email support",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    number: "02",
    name: "Growth",
    subtitle: "For growing businesses",
    description:
      "Flexible solutions for teams looking to strengthen their sales research and business outreach.",
    features: [
      "Everything in Starter",
      "B2B contact database solutions",
      "Lead generation support",
      "Data enrichment assistance",
      "Customized business requirements",
      "Priority communication",
    ],
    button: "Explore Growth Plan",
    featured: true,
  },
  {
    number: "03",
    name: "Enterprise",
    subtitle: "For larger business requirements",
    description:
      "Customized business data solutions designed around specific organizational needs.",
    features: [
      "Everything in Growth",
      "Customized data requirements",
      "Industry-focused research",
      "Advanced data organization",
      "Dedicated project discussion",
      "Custom engagement options",
    ],
    button: "Contact Sales",
    featured: false,
  },
];

const pricingFaqs = [
  {
    question: "How is pricing determined?",
    answer:
      "Pricing depends on your requirements, target industries, data scope and the services you need. Contact our team to discuss a suitable quote.",
  },
  {
    question: "Can I request a customized plan?",
    answer:
      "Yes. Businesses can discuss their specific requirements with our team to explore a customized solution.",
  },
  {
    question: "Do you offer B2B contact database solutions?",
    answer:
      "Yes. We offer business contact database solutions based on your industry, audience and business research requirements.",
  },
  {
    question: "How can I get a pricing quote?",
    answer:
      "You can reach out through our contact section with your requirements. Our team can discuss the scope and relevant pricing options.",
  },
];

export default function PricingPage() {
  return (
    <main className="pricing-page">

      {/* HERO */}
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <span className="pricing-tag">
            SIMPLE & FLEXIBLE PRICING
          </span>

          <h1>
            Business Data Solutions
            <span> Built Around Your Needs.</span>
          </h1>

          <p>
            Every business has different data requirements.
            Explore our service plans and find a solution
            that aligns with your goals and business needs.
          </p>

          <div className="pricing-hero-buttons">
            <a href="#plans" className="pricing-primary-btn">
              Explore Plans →
            </a>
            <a href="/contact" className="pricing-secondary-btn">
              Talk to Our Team
            </a>
          </div>
        </div>

        <div className="pricing-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1100&auto=format&fit=crop&q=85"
            alt="Business analytics dashboard showing data insights"
          />

          <div className="pricing-floating-card">
            <span className="pricing-floating-icon">✦</span>
            <div>
              <strong>Flexible Solutions</strong>
              <small>Designed around your needs</small>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="pricing-plans-section" id="plans">
        <div className="pricing-section-heading">
          <span className="pricing-tag">OUR PLANS</span>
          <h2>Choose Your Business Solution</h2>
          <p>
            Explore our service options and connect with
            our team for pricing based on your requirements.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              className={`pricing-card ${
                plan.featured ? "pricing-featured" : ""
              }`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="pricing-popular">
                  RECOMMENDED OPTION
                </span>
              )}

              <span className="pricing-number">
                PLAN {plan.number}
              </span>

              <h3>{plan.name}</h3>
              <h4>{plan.subtitle}</h4>

              <p className="pricing-description">
                {plan.description}
              </p>

              <div className="pricing-quote">
                <strong>Custom Quote</strong>
                <small>Based on your requirements</small>
              </div>

              <a
                href="/contact"
                className={
                  plan.featured
                    ? "pricing-plan-btn featured-btn"
                    : "pricing-plan-btn"
                }
              >
                {plan.button} →
              </a>

              <div className="pricing-divider"></div>

              <h5>WHAT'S INCLUDED</h5>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="pricing-services">
        <div className="pricing-services-image">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&auto=format&fit=crop&q=85"
            alt="Business team discussing data and growth strategies"
            loading="lazy"
          />
        </div>

        <div className="pricing-services-content">
          <span className="pricing-tag">
            WHAT WE CAN HELP WITH
          </span>

          <h2>Solutions That Support Your Business Goals</h2>

          <p>
            From business contact research to lead generation
            and data enrichment, explore solutions that can
            support your business development activities.
          </p>

          <div className="pricing-service-list">
            <a href="/b2b-contact-database">
              <span>01</span>
              <div>
                <strong>B2B Contact Database</strong>
                <small>Explore business contact information</small>
              </div>
              <b>↗</b>
            </a>

            <a href="/lead-generation">
              <span>02</span>
              <div>
                <strong>Lead Generation</strong>
                <small>Discover relevant business prospects</small>
              </div>
              <b>↗</b>
            </a>

            <a href="/data-enrichment">
              <span>03</span>
              <div>
                <strong>Data Enrichment</strong>
                <small>Improve and organize business data</small>
              </div>
              <b>↗</b>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pricing-faq-section">
        <div className="pricing-section-heading">
          <span className="pricing-tag">COMMON QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common questions about our
            business data solutions and pricing.
          </p>
        </div>

        <div className="pricing-faq-grid">
          {pricingFaqs.map((faq, index) => (
            <div className="pricing-faq-card" key={faq.question}>
              <span>0{index + 1}</span>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-cta">
        <span className="pricing-tag">LET'S DISCUSS</span>

        <h2>
          Looking for the Right Data Solution?
        </h2>

        <p>
          Tell us about your business requirements.
          Let's discuss a suitable solution for your goals.
        </p>

        <a href="/contact" className="pricing-primary-btn">
          Request a Custom Quote →
        </a>
      </section>

    </main>
  );
}
