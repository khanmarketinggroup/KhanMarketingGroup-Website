import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
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
  title: "Khan Marketing Group | Marketing for Local Businesses",
  description:
    "Websites, ads, and Google listings that bring in customers - not just clicks. Marketing that actually works for local businesses.",
  keywords: [
    "marketing agency",
    "local business marketing",
    "website design",
    "Google ads",
    "social media marketing",
    "Deerfield IL",
    "Chicago marketing",
  ],
  authors: [{ name: "Khan Marketing Group" }],
  openGraph: {
    title: "Khan Marketing Group | Marketing for Local Businesses",
    description:
      "Websites, ads, and Google listings that bring in customers - not just clicks.",
    type: "website",
    locale: "en_US",
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
        {children}
      </body>
    </html>
  );
}
