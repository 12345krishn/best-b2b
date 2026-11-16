
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Best B2B Data Provider India",
  description:
    "Learn about Best B2B Data Provider and our approach to business contact database solutions for companies in India.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="tag">ABOUT OUR COMPANY</span>
        <h1>Helping Businesses Make Better Connections</h1>
        <p>
          We aim to make business information easier to discover
          and use through relevant B2B contact database solutions.
        </p>
        <a href="/contact" className="primary-button">
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
      </section>
    </main>
  );
}
