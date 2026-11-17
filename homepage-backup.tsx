
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Best B2B Data Provider India",
  description:
    "Learn about Best B2B Data Provider and our business contact database solutions for companies in India.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
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
          <a href="/#contact">Contact</a>
        </div>

        <a href="/#contact" className="nav-button">
          Get in Touch
        </a>
      </nav>

      <section className="about-hero">
        <span className="tag">ABOUT OUR COMPANY</span>

        <h1>
          Helping Businesses Make Better Connections
        </h1>

        <p>
          We aim to make business information easier to discover
          and use through relevant B2B contact database solutions.
        </p>

        <a href="/#contact" className="primary-button">
          Contact Our Team
        </a>
      </section>

      <section className="about-content">
        <h2>Who We Are</h2>

        <p>
          Best B2B Data Provider focuses on helping businesses
          find relevant company and professional contact
          information for their business development activities.
        </p>

        <h2>Our Mission</h2>

        <p>
          Our mission is to help businesses make informed
          connections through useful and responsibly handled
          business information.
        </p>

        <h2>Our Approach</h2>

        <p>
          We aim to understand business requirements and provide
          relevant data solutions that support better business
          decisions.
        </p>

        <a href="/" className="back-button">
          ← Back to Home
        </a>
      </section>

      <footer>
        <p>
          Copyright.
          All rights reserved.
        </p>
      </footer>
    </main>
  );
}
