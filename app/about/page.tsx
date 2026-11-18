
import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | B2B Data Provider India",
  description:
    "Discover our approach to business data solutions, B2B contact databases and business growth.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
