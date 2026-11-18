
const dataSections = [
  {
    title: "FEATURES",
    content: (
      <>
        Very economical & effective source. <b className="about-highlight">Data update - 2026</b>.
        Easy to use in Microsoft Excel. You pay & instant download data.
        Unlimited usage of our data. <b className="about-highlight">70% to 80% accuracy</b>.
      </>
    ),
  },
  {
    title: "DATA CONTENTS",
    content:
      "Name of Company • Full Address • Name of City • Pin code details • Name of State • Mobile Number • Company's Email ID • Company's Website Details • Products/Services Details.",
  },
  {
    title: "SOURCE OF DATA",
    content:
      "Data from various B2B portals • Various Business Directories • Exhibitions Exhibitors Data • Visitors from various exhibitions • Data from CII, FICCI, PHDC, APIMA, Associations etc.",
  },
  {
    title: "CATEGORIES OF DATA",
    content:
      "B2B Companies • Industry / Trades Wise Companies • Exhibitors • City / State Wise B2B Companies • International Buyers & Sellers • Professional / Services Provider & many more.",
  },
  {
    title: "TYPE OF COMPANIES WE COVER IN OUR DATA",
    content:
      "SME • MSME • FMCG • OEMs • Corporates • Ltd./Pvt. Ltd. • Manufacturers • Exporters • Importers • Dealers • Distributors • Retailers • Traders • Consultants & Service Providers.",
  },
  {
    title: "FORMAT OF DATA",
    content: "Microsoft Excel File.",
  },
  {
    title: "HOW TO USE DATA...?",
    content:
      "You can use our data for promotions • Bulk SMS Marketing • Bulk E-Mail Marketing • Marketing • To increase your branding and publicity • To generate leads for your sales • To get fresh vendor enquiries • To generate new dealers/distributors enquiries in new areas and many more business activities.",
  },
];

type AboutContentProps = {
  compact?: boolean;
};

export default function AboutContent({
  compact = false,
}: AboutContentProps) {
  return (
    <main className={`about-data-page ${compact ? "about-data-compact" : ""}`}>
      <section className="about-data-container">
        <h1 className="about-data-title">About Our Data</h1>

        <div className="about-data-grid">
          {dataSections.map((section) => (
            <article className="about-data-box" key={section.title}>
              <h2>{section.title}</h2>
              <span className="about-data-description">
                {section.content}
              </span>
            </article>
          ))}
        </div>
      </section>

      {!compact && (
        <section className="about-data-bottom">
          <h2>Business 2 Business Companies Data</h2>
          <p>
            Explore business information across industries, company
            categories and locations to support your business research.
          </p>
        </section>
      )}
    </main>
  );
}
