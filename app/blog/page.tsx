
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Data & Business Growth Blog | Best B2B Data Provider",
  description:
    "Explore insights on B2B data solutions, lead generation, business contact databases and data enrichment for better business growth.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "B2B Data & Business Growth Blog",
    description:
      "Explore practical insights on business data, lead generation and data enrichment.",
    url: "/blog",
    type: "website",
  },
};

const articles = [
  {
    category: "B2B DATA",
    title: "How a B2B Contact Database Can Support Business Growth",
    description:
      "Understand how organized company and professional contact information can help businesses research prospects and identify relevant opportunities.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    link: "/b2b-contact-database",
    label: "Explore Database Solutions",
  },
  {
    category: "LEAD GENERATION",
    title: "A Practical Approach to B2B Lead Generation",
    description:
      "Learn how identifying target markets, researching prospects and organizing lead information can support your sales process.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
    link: "/lead-generation",
    label: "Explore Lead Generation",
  },
  {
    category: "DATA ENRICHMENT",
    title: "Why Business Data Quality Matters",
    description:
      "Discover why structured, consistent and well-organized business information matters for better research and decision-making.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    link: "/data-enrichment",
    label: "Explore Data Enrichment",
  },
  {
    category: "BUSINESS GROWTH",
    title: "Understanding Your Target Business Audience",
    description:
      "Explore how industry research and a clear understanding of your target audience can improve business development planning.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    link: "/industries",
    label: "Explore Industries",
  },
  {
    category: "BUSINESS DATA",
    title: "How Businesses Can Make Better Use of Data",
    description:
      "Learn about the role of business information in market research, prospect identification and sales planning.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85",
    link: "/services",
    label: "Explore Our Services",
  },
  {
    category: "BUSINESS INSIGHTS",
    title: "Choosing the Right Business Data Solution",
    description:
      "Understand some important factors to consider when evaluating business data solutions for your organization.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
    link: "/about",
    label: "Know About Us",
  },
];

export default function BlogPage() {
  return (
    <main className="blog-page-premium">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <span className="blog-tag">OUR BLOG & INSIGHTS</span>

          <h1>
            Ideas That Help
            <span> Businesses Grow Smarter.</span>
          </h1>

          <p>
            Explore practical insights about B2B data, business intelligence,
            lead generation and data enrichment to make better business
            decisions.
          </p>

          <div className="blog-hero-buttons">
            <a href="#latest-articles" className="blog-primary-btn">
              Explore Insights <span>→</span>
            </a>
            <a href="/services" className="blog-secondary-btn">
              Our Services
            </a>
          </div>
        </div>

        <div className="blog-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85"
            alt="Professional business workspace"
          />

          <div className="blog-hero-floating">
            <span className="blog-floating-icon">✦</span>
            <div>
              <strong>Business Insights</strong>
              <small>Knowledge for better decisions</small>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-intro">
        <div>
          <span className="blog-tag">KNOWLEDGE & IDEAS</span>
          <h2>
            Explore the World of
            <span> Business Data</span>
          </h2>
        </div>

        <p>
          From understanding your target audience to organizing business
          information, explore topics designed to help you think strategically
          about your business growth.
        </p>
      </section>

      <section className="blog-featured">
        <div className="blog-featured-image">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85"
            alt="Business team discussing growth strategy"
          />
        </div>

        <div className="blog-featured-content">
          <span className="blog-tag">FEATURED TOPIC</span>
          <h2>
            Building Better Business Connections Through Data
          </h2>
          <p>
            Business growth starts with understanding the right audience.
            Explore how business data solutions can support market research,
            prospect identification and more informed sales planning.
          </p>
          <a href="/b2b-contact-database" className="blog-read-link">
            Explore the Topic <span>→</span>
          </a>
        </div>
      </section>

      <section className="blog-articles-section" id="latest-articles">
        <div className="blog-section-heading">
          <div>
            <span className="blog-tag">EXPLORE OUR TOPICS</span>
            <h2>Latest Insights & Topics</h2>
          </div>
          <p>
            Useful ideas and resources around B2B data and business growth.
          </p>
        </div>

        <div className="blog-articles-grid">
          {articles.map((article, index) => (
            <article className="blog-article-card" key={article.title}>
              <a href={article.link} className="blog-article-image">
                <img src={article.image} alt={article.title} />
                <span>{article.category}</span>
              </a>

              <div className="blog-article-content">
                <span className="blog-article-number">
                  TOPIC 0{index + 1}
                </span>

                <h3>{article.title}</h3>
                <p>{article.description}</p>

                <a href={article.link} className="blog-read-link">
                  {article.label} <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-bottom-cta">
        <div className="blog-cta-content">
          <span className="blog-tag">LET'S GROW TOGETHER</span>
          <h2>
            Looking for Better
            <span> Business Data Solutions?</span>
          </h2>
          <p>
            Discover how our B2B data solutions can support your business
            research and growth objectives.
          </p>
          <a href="/services" className="blog-primary-btn">
            Explore Our Services <span>→</span>
          </a>
        </div>

        <div className="blog-cta-decoration">
          <div className="blog-cta-circle circle-one"></div>
          <div className="blog-cta-circle circle-two"></div>
          <div className="blog-cta-center">B2B</div>
        </div>
      </section>
    </main>
  );
}
