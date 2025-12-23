"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import { ServiceCard } from "@/components/ui/service-card";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { ContactForm } from "@/components/ContactForm";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BusinessStarterHub } from "@/components/ui/business-starter-hub";
import { WebsiteTiers } from "@/components/ui/website-tiers";
import { AnimatedUnderline } from "@/components/ui/animated-underline";
import {
  IconAd,
  IconMapPin,
  IconBrandInstagram,
  IconPrinter,
  IconPalette,
  IconCheck,
  IconPhone,
  IconMail,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMapPinFilled,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen antialiased relative">
      {/* Background Animation */}
      <BackgroundPaths />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-2 flex items-center justify-between">
          {/* Logo - left-aligned on all screens */}
          <div className="flex flex-col">
            <div className="scale-[0.6] md:scale-100 origin-left md:origin-center">
              <Logo variant="white" size="sm" type="short" />
            </div>
            <AnimatedUnderline className="w-[39px] md:w-20 mt-0.5 md:mt-1 self-start md:self-center" />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-[#d4d4d4] hover:text-white transition-colors text-sm tracking-wide">
              Services
            </a>
            <a href="#about" className="text-[#d4d4d4] hover:text-white transition-colors text-sm tracking-wide">
              About
            </a>
            <a href="#portfolio" className="text-[#d4d4d4] hover:text-white transition-colors text-sm tracking-wide">
              Portfolio
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white rounded-full text-sm font-medium hover:opacity-90 transition-all tracking-wide"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu2 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.05] overflow-hidden"
            >
              <div className="px-4 py-5 flex flex-col gap-3">
                <a 
                  href="#services" 
                  onClick={handleNavClick}
                  className="text-[#d4d4d4] hover:text-white transition-colors text-base py-2"
                >
                  Services
                </a>
                <a 
                  href="#about" 
                  onClick={handleNavClick}
                  className="text-[#d4d4d4] hover:text-white transition-colors text-base py-2"
                >
                  About
                </a>
                <a 
                  href="#portfolio" 
                  onClick={handleNavClick}
                  className="text-[#d4d4d4] hover:text-white transition-colors text-base py-2"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white rounded-full text-base font-medium text-center mt-2"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center overflow-hidden pt-20 md:pt-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 w-full text-center">
          {/* Full Logo */}
          <div
            className={`flex justify-center mb-6 md:mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100">
              <Logo variant="white" size="lg" type="full" />
            </div>
          </div>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] mb-4 md:mb-6 tracking-tight transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            <span className="md:whitespace-nowrap">Marketing that actually works</span>
            <br />
            <span className="text-gradient">for local businesses.</span>
          </h1>

          <p
            className={`text-base md:text-lg text-[#d4d4d4] mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Websites, ads, and Google listings that bring in customers — not just clicks.
            Built by someone who&apos;s done it for their own business first.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <MovingBorderButton
              as="a"
              href="#contact"
              borderRadius="9999px"
              containerClassName="h-14 w-44"
              className="text-base px-8 tracking-wide"
              duration={3000}
            >
              Get in Touch
            </MovingBorderButton>

            <a
              href="#services"
              className="px-8 py-4 rounded-full text-[#d4d4d4] hover:text-white border border-white/[0.1] hover:border-white/25 transition-all duration-300 text-base tracking-wide"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <h2 
                className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Our Services
              </h2>
              <div className="w-24 h-[2px] premium-divider mx-auto" />
            </ScrollReveal>
          </div>

          {/* Website Tiers */}
          <WebsiteTiers tiers={websiteTiers} />

          {/* Other Services - First Row (3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {services.slice(0, 3).map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.15}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  price={service.price}
                  bullets={service.bullets}
                  note={service.note}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Other Services - Second Row (2 cards centered) */}
          <div className="flex justify-center gap-5">
            {services.slice(3).map((service, index) => (
              <ScrollReveal key={service.title} delay={(index + 3) * 0.15}>
                <div className="w-full md:w-[320px] lg:w-[380px]">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    subtitle={service.subtitle}
                    price={service.price}
                    bullets={service.bullets}
                    note={service.note}
                    index={index + 3}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Starter Package Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <BusinessStarterHub />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <h2 
                className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                About the Founder
              </h2>
              <div className="w-24 h-[2px] premium-divider mx-auto" />
            </ScrollReveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-3xl font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              I&apos;m Omair Khan.
            </p>
            <div className="space-y-5 text-[#d4d4d4] text-lg leading-relaxed">
              <p>
                I run the complete backend of Clean & Green Property Care — marketing, operations, and business development. My partner handles the services and manages our team. I built the website, set up the Google listing, ran the ads, and figured out what actually works. Today the company has{" "}
                <span className="text-gradient font-semibold">40+ five-star reviews</span> and steady customers.
              </p>
              <p>
                I also helped Shifa Home Care&apos;s Bloomingdale office go from{" "}
                <span className="text-gradient font-semibold">3.9 to 4.8 stars</span> with 20+ reviews.
              </p>
              <p>
                I learned marketing by doing it for a real business first. Now I help other local business owners do the same — without the confusing jargon or overpriced agencies.
              </p>
              <p className="text-white font-semibold text-xl pt-2">
                You work directly with me. No account managers, no runaround.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why KMG Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Why Work With Us
              </h2>
              <div className="w-24 h-[2px] premium-divider mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {whyKmgReasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-[#111111] border border-white/[0.06] hover:border-[#2563eb]/30 transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2563eb]/20 to-[#06b6d4]/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#06b6d4]/30">
                    <IconCheck className="w-3.5 h-3.5 text-[#06b6d4]" />
                  </div>
                  <span className="text-[#d0d0d0]">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <h2 
                className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Our Work
              </h2>
              <p className="text-[#a3a3a3] text-sm mb-6">(Click any project to see it live)</p>
              <div className="w-24 h-[2px] premium-divider mx-auto" />
            </ScrollReveal>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {portfolioItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.15} direction="right">
                <div className="w-full md:w-[380px]">
                  <PortfolioCard
                    title={item.title}
                    url={item.url}
                    details={item.details}
                    result={item.result}
                    image={item.image}
                    index={index}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-center text-[#606060] mt-12 text-sm">More coming soon.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Let's Talk
            </h2>
            <p className="text-[#d4d4d4] text-lg">
              Let&apos;s talk about what you need. No pressure, no sales pitch.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-sm font-medium text-gradient uppercase tracking-widest mb-5">Contact Info</h3>
                <div className="space-y-6">
                  <a
                    href="tel:8472208550"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 border border-[#2563eb]/30 flex items-center justify-center group-hover:border-[#06b6d4]/50 transition-colors flex-shrink-0">
                      <IconPhone className="w-4 h-4 text-[#06b6d4]" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[#06b6d4] text-sm font-medium">Call or Text</span>
                      <span className="text-[#d0d0d0] group-hover:text-white transition-colors">(847) 220-8550</span>
                    </div>
                  </a>
                  <a
                    href="mailto:Info@KhanMarketingGroup.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 border border-[#2563eb]/30 flex items-center justify-center group-hover:border-[#06b6d4]/50 transition-colors flex-shrink-0">
                      <IconMail className="w-4 h-4 text-[#06b6d4]" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[#06b6d4] text-sm font-medium">Email</span>
                      <span className="text-[#d0d0d0] group-hover:text-white transition-colors">Info@KhanMarketingGroup.com</span>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gradient uppercase tracking-widest mb-5">Office</h3>
                <div className="flex items-start gap-4 text-[#d4d4d4]">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 border border-[#2563eb]/30 flex items-center justify-center flex-shrink-0">
                    <IconMapPinFilled className="w-4 h-4 text-[#06b6d4]" />
                  </div>
                  <div className="pt-2.5 leading-relaxed">
                    655 Deerfield Rd
                    <br />
                    Suite 100, Unit 404
                    <br />
                    Deerfield, IL 60015
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-[#111111] rounded-2xl p-8 border border-white/[0.08]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/[0.06] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Left - Contact */}
            <div>
              <h4 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-widest mb-5">Contact</h4>
              <div className="space-y-2 text-[#d4d4d4] text-sm leading-relaxed">
                <p>655 Deerfield Rd</p>
                <p>Suite 100, Unit 404</p>
                <p>Deerfield, IL 60015</p>
                <p className="mt-4">
                  <a href="mailto:Info@KhanMarketingGroup.com" className="hover:text-white transition-colors">
                    Info@KhanMarketingGroup.com
                  </a>
                </p>
                <p>
                  <a href="tel:8472208550" className="hover:text-white transition-colors">
                    (847) 220-8550
                  </a>
                </p>
              </div>
            </div>

            {/* Middle - Follow Us */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-sm font-medium text-[#a3a3a3] uppercase tracking-widest mb-5">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/110539080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111111] border border-white/[0.08] flex items-center justify-center text-[#a3a3a3] hover:text-white hover:border-[#2563eb]/30 transition-all"
                >
                  <IconBrandLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61584909881446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111111] border border-white/[0.08] flex items-center justify-center text-[#a3a3a3] hover:text-white hover:border-[#2563eb]/30 transition-all"
                >
                  <IconBrandFacebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/khanmarketinggroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#111111] border border-white/[0.08] flex items-center justify-center text-[#a3a3a3] hover:text-white hover:border-[#2563eb]/30 transition-all"
                >
                  <IconBrandInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right - Logo + Tagline */}
            <div className="flex flex-col items-end text-right">
              <Logo variant="white" size="md" className="mb-4" />
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                Marketing that works<br />for local businesses.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] text-center">
            <p className="text-[#606060] text-sm">
              © 2025 Khan Marketing Group. All rights reserved.
            </p>
            <p className="text-[#606060] text-sm mt-2 opacity-70">
              Built in-house
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const services = [
  {
    icon: <IconAd className="w-6 h-6" />,
    title: "Google & Meta Ads",
    subtitle: "(Google + Facebook + Instagram)",
    price: "$1,000/mo",
    bullets: [
      "Google Search & Display ads",
      "Facebook & Instagram ads",
      "Ad spend included",
      "Monthly performance reports",
    ],
  },
  {
    icon: <IconMapPin className="w-6 h-6" />,
    title: "Google Business Profile",
    price: "$99",
    bullets: [
      "Full profile setup or optimization",
      "Photo uploads",
      "Service & product listings",
      "Review generation strategy",
    ],
  },
  {
    icon: <IconBrandInstagram className="w-6 h-6" />,
    title: "Social Media Posts",
    price: "$300/mo",
    bullets: [
      "Facebook & Instagram content",
      "3-4 posts per week",
      "Custom graphics",
      "Caption writing",
    ],
  },
  {
    icon: <IconPrinter className="w-6 h-6" />,
    title: "Print Design",
    price: "Starting at $150",
    bullets: [
      "Business cards",
      "Flyers",
      "Brochures",
      "Banners & signage",
    ],
  },
  {
    icon: <IconPalette className="w-6 h-6" />,
    title: "Logo Design",
    price: "Starting at $99",
    bullets: [
      "Simple, clean designs",
      "2 initial concepts",
      "2 revision rounds",
      "Final files (PNG, SVG, PDF)",
    ],
    note: "Need something more comprehensive? Reach out.",
  },
];

const websiteTiers = [
  {
    title: "Basic Landing Page",
    price: "$250",
    bullets: [
      "Single page design",
      "Mobile responsive",
      "SEO-friendly structure",
      "Custom contact form",
    ],
  },
  {
    title: "Standard Website",
    price: "$500",
    bullets: [
      "3-5 pages",
      "Mobile responsive",
      "Custom forms",
      "Basic animations",
    ],
  },
  {
    title: "Custom Builds",
    price: "",
    hasButton: true,
    bullets: [
      "Complex multi-page sites",
      "Advanced features",
      "Custom functionality",
    ],
  },
];

const whyKmgReasons = [
  "One-on-one access to the founder",
  "Fast responses (usually same day)",
  "No long-term contracts — you're never locked in",
  "Ad campaigns managed by Google-certified specialists",
  "We've done this for our own business first — and seen real results. 40+ five-star Google reviews, plus helping other local businesses grow.",
  "Transparent pricing — most agencies charge a retainer plus separate ad spend. We bundle everything into one monthly payment, including your ad budget.",
];

const portfolioItems = [
  {
    title: "Clean & Green Property Care",
    url: "https://cleangreenproperty.com",
    details: "Website, Google Business Profile, Marketing",
    result: "40+ five-star reviews",
    image: "/portfolio/clean-green.jpg",
  },
  {
    title: "Shifa Home Care",
    url: "https://shifahomecareservices.com",
    details: "Website, Print Materials, Review Growth",
    result: "3.9 → 4.8 stars",
    image: "/portfolio/shifa-home-care.jpg",
  },
];
