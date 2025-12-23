import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khanmarketinggroup.com"),
  title: "Khan Marketing Group | Digital Marketing Agency in Chicagoland",
  description:
    "Digital marketing agency in Chicagoland offering website design, Google Business Profile setup, social media management, branding, flyers, and business cards for local businesses in Chicago suburbs.",
  keywords: [
    "digital marketing agency",
    "Chicagoland marketing",
    "Chicago suburbs marketing",
    "website design Chicago",
    "Google Business Profile setup",
    "social media management",
    "branding Chicago",
    "business cards",
    "flyers design",
    "local business marketing",
    "Deerfield IL marketing",
  ],
  authors: [{ name: "Khan Marketing Group" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Khan Marketing Group | Digital Marketing Agency in Chicagoland",
    description:
      "Website design, Google Business Profile setup, social media management, branding, and print design for local businesses in Chicago suburbs.",
    url: "https://khanmarketinggroup.com",
    siteName: "Khan Marketing Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khan Marketing Group - Digital Marketing for Local Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khan Marketing Group | Digital Marketing Agency in Chicagoland",
    description:
      "Website design, Google Business Profile setup, social media management, branding for Chicago suburbs.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-28L6YMQPC6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-28L6YMQPC6');
          `}
        </Script>
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              "name": "Khan Marketing Group",
              "description": "Digital marketing agency in Chicagoland offering website design, Google Business Profile setup, social media management, branding, flyers, and business cards for local businesses.",
              "url": "https://khanmarketinggroup.com",
              "logo": "https://khanmarketinggroup.com/logo.png",
              "image": "https://khanmarketinggroup.com/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "655 Deerfield Rd, Suite 100, Unit 404",
                "addressLocality": "Deerfield",
                "addressRegion": "IL",
                "postalCode": "60015",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "42.1711",
                "longitude": "-87.8445"
              },
              "telephone": "+18472208550",
              "email": "Info@KhanMarketingGroup.com",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "42.1711",
                  "longitude": "-87.8445"
                },
                "geoRadius": "50000",
                "description": "Chicagoland area and Chicago suburbs"
              },
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-17:00",
              "sameAs": [
                "https://www.linkedin.com/company/110539080",
                "https://www.facebook.com/profile.php?id=61584909881446",
                "https://www.instagram.com/khanmarketinggroup"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Design",
                      "description": "Custom website design for local businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Google Business Profile Setup",
                      "description": "Complete Google Business Profile setup and optimization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Social Media Management",
                      "description": "Facebook and Instagram content creation and management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Branding",
                      "description": "Logo design and brand identity development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Print Design",
                      "description": "Business cards, flyers, brochures, and banners"
                    }
                  }
                ]
              }
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
