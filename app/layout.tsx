
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best B2B Data Provider | B2B Data Solutions India",
  description:
    "Explore B2B contact database, business data and lead generation solutions for businesses in India.",
  verification: {
    google: "eOHDCv_mzIdglRe0FtmfdauZteCxqqgHequWpKdP2jY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
