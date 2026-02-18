import type { Metadata } from "next";
import { Poppins, Antonio } from "next/font/google";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import LayoutExtras from "@/components/LayoutExtras";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { SOCIAL_PROFILE_URLS } from "@/lib/socialLinks";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});


const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karvaann Experiences",
  description: "Curated leisure and corporate travel experiences designed around comfort, authenticity, and seamless execution.",
  keywords: [
    "Karvaann Experiences",
    "travel experiences",
    "customised travel",
    "leisure travel",
    "corporate travel",
    "MICE travel",
  ],
  authors: [{ name: "Karvaann Experiences" }],
  creator: "Karvaann Experiences",
  publisher: "Karvaann Experiences",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Karvaann Experiences",
    title: "Karvaann Experiences",
    description: "Curated leisure and corporate travel experiences designed around comfort, authenticity, and seamless execution.",
    locale: "en_IN",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Karvaann Experiences",
  email: "info@karvaannexperiences.com",
  telephone: "+91 95400 01036",
  sameAs: SOCIAL_PROFILE_URLS,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${antonio.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <LeadCaptureModal />
        {children}
        <LayoutExtras />
        <Testimonials />
        <Footer />
      </body>
    </html>
  );
}
